const BASE_URL = 'http://www.indicakebosapi.com:8081';
const URL_LOCAL = 'http://localhost:4200';
const REDIRECT_URL = `?redirect_uri=${URL_LOCAL}/login`;
const OAUTH2_URL = `oauth2/authorization`;

export const environment = {
  production: false,
  version: '1.0',

  auth: 'http://www.indicakebosapi.com:8081/api/auth/',
  api: 'http://www.indicakebosapi.com:8081/api/',
  refreshToken: '',
  GOOGLE_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/google/${REDIRECT_URL}`,
  FACEBOOK_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/facebook/${REDIRECT_URL}`,
  GITHUB_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/github/${REDIRECT_URL}`,
  LINKEDIN_AUTH_URL: `${BASE_URL}/${OAUTH2_URL}/linkedin/${REDIRECT_URL}`,
};

// admin@kebos.com.br  kebos@Admin