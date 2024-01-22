// linkedin-auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LinkedinAuthService {
  private clientId = '860w94wzqfcu8';
  private clientSecret = 'avcykBlly9DIyucV';
  private redirectUri = 'http://localhost:4200';
  private responseType = 'code';
  private scope = 'r_liteprofile r_emailaddress';

  constructor(private http: HttpClient) {}

  getAuthorizationUrl(): string {
    const state = Math.random().toString(36).substring(7);
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=${this.responseType}&client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&state=${state}`;
    return authorizationUrl;
  }

  exchangeCodeForToken(code: string): any {
    const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${this.redirectUri}&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.http.post(tokenUrl, body, { headers });
  }
}
