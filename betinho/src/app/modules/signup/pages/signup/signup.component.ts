import { AuthenticationService } from '@core/auth/authentication.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '@core/services/form.service';
import { NotificationService } from '@core/services/notification.service';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm!: FormGroup;
    @ViewChild('formElement') formElement!: ElementRef;
    passwordVisible: boolean = false;
    password?: string;
    cadastroRedeSocial: any;

    constructor(
      private formBuilder: FormBuilder,
      private formService: FormService,
      private authenticationService: AuthenticationService,
      private notificationService: NotificationService,
      private router: Router,
      private socialAuthService: AuthService
    ) { }

    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        displayName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        matchingPassword: ['', Validators.required]
      })
    }

    signInWithFB(): void {
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((response: any) => {
        this.cadastroRedeSocial = {
          userID: response?.id,
          providerUserId: response?.id,
          displayName: response?.name,
          email: response?.email,
          socialProvider: response?.provider,
          password: response?.id,
          matchingPassword: response?.id,
        }

        this.submit()
      });
    }

    submit(): void {
      if(this.cadastroRedeSocial) {
        this.authenticationService.sigup(this.cadastroRedeSocial).subscribe(
          (res) => {
            this.notificationService.success('Sucesso!', 'Seu usuário foi cadastrado com sucesso');
            setTimeout(() => this.router.navigate(['/login']), 1000);
          },
          (error) => {
            const msg = 'Endereço de email já está em uso!'
            this.notificationService.error('Atenção:', msg)
          }
        );
      } else {
        const messages = this.formService.getValidationsMessages(this.signupForm, this.formElement);

        if(!this.validatePassword()) {
          this.notificationService.error('Atenção:', 'As senhas estão diferentes!')
          return;
        }

        if (messages.length) {
          this.notificationService.warn('Os seguintes campos abaixo devem ser preenchidos corretamente:', this.formService.createValidationList(messages));
          return;
        }

        if (this.signupForm.valid) {
          let obj = { ...this.signupForm.getRawValue() };

          this.authenticationService.sigup(obj).subscribe((res) => {
            this.notificationService.success('Sucsesso!', 'Seu usuario foi cadastrado com sucesso');
            setTimeout(() => { this.router.navigate(['/login']); }, 1000)
          })
        }
      }
    }

    login() {
      this.router.navigate(['/login']);
    }

    validatePassword() {
      let password = this.passwordForm.value;
      let passwordConfirm = this.passwordConfirmForm.value;
      return (password === passwordConfirm) ? true : false;
    }

    get passwordForm() {
      return this.signupForm.controls['password'];
    }

    get passwordConfirmForm() {
      return this.signupForm.controls['matchingPassword'];
    }
}
