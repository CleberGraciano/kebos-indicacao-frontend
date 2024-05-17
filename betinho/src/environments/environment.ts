const BASE_URL = 'http://89.116.214.72:8081';
const URL_LOCAL = 'http://localhost:4200';
const REDIRECT_URL = `?redirect_uri=${URL_LOCAL}/login`;
const OAUTH2_URL = `oauth2/authorization`;

export const environment = {
  production: false,
  version: '1.0',
  // auth:'https://kebos-backend-java.herokuapp.com/api/auth/',
  // api:'https://kebos-backend-java.herokuapp.com/api/',
  auth: 'http://localhost:8080/api/auth/',
  api: 'http://localhost:8080/api/',
  refreshToken: '',
  GOOGLE_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/google/${REDIRECT_URL}`,
  FACEBOOK_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/facebook/${REDIRECT_URL}`,
  GITHUB_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/github/${REDIRECT_URL}`,
  LINKEDIN_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/linkedin/${REDIRECT_URL}`,
};

// admin@kebos.com.br  kebos@Admin
