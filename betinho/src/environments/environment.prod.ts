const BASE_URL = 'http://89.116.214.72:8081';
const URL_ATUAL = 'http://localhost:4200';
const REDIRECT_URL = `?redirect_uri=${URL_ATUAL}/login`;
const OAUTH2_URL = `oauth2/authorization`;

export const environment = {
  production: true,
  version:'1.0',
  // auth:'https://kebos-backend-java.herokuapp.com/api/auth/',
  // api:'https://kebos-backend-java.herokuapp.com/api/',
  auth:'http://89.116.214.72:8081/api/auth/',
  api:'http://89.116.214.72:8081/api/',
  refreshToken: '',
  GOOGLE_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/google/${REDIRECT_URL}`,
  FACEBOOK_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/facebook/${REDIRECT_URL}`,
  GITHUB_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/github/${REDIRECT_URL}`,
  LINKEDIN_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/linkedin/${REDIRECT_URL}`
};
