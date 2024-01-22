import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@core/auth/authentication.service';
import { NotificationService } from '@core/services/notification.service';
import { environment } from '@env/environment';
import { LinkedinAuthService } from '@core/services/linkedin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  forgotPasswordForm!: FormGroup;

  passwordVisible: boolean = false;
  password?: string;

  isLogin: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,
    private socialAuthService: AuthService,
    private linkedinAuthService: LinkedinAuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe((res) => this.router.navigate(['/home']), (error) => this.notificationService.error('Ops...', 'Usuário e/ou senha estão incorretos.'))
    }
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((response: any) => {
      this.authenticationService.login(response?.email, response?.id).subscribe((res) => this.router.navigate(['/home']), (error) => this.notificationService.error('Ops...', 'Usuário e/ou senha estão incorretos.'))
    });
  }

  signInWithLinkedin(): void {
    const authorizationUrl = this.linkedinAuthService.getAuthorizationUrl();
    window.location.href = authorizationUrl;
  }

  forgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.authenticationService.forgotPassword(this.forgotPasswordForm.controls['email'].value).subscribe((res) => {
        this.isLogin = true;
        this.notificationService.success('Sucesso!', 'Acesse sua caixa de e-mail!');
      })
    } else {
      this.notificationService.error('Atenção!', 'Insira um e-mail valido!');
    }
  }

}
