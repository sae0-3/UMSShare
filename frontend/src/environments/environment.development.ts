export const environment = {
  production: false,
  api: {
    baseUrl: 'http://localhost:8000/api',
  },
  oauth: {
    clientId: '1041310847808-iku228gi92vpmdultl3h74molobk0lqk.apps.googleusercontent.com',
    redirectUri: 'http://localhost:4200/auth/google/callback',
    scopes: [
      'openid',
      'email',
      'profile',
      'https://www.googleapis.com/auth/drive.metadata.readonly',
      'https://www.googleapis.com/auth/drive.file',
    ],
  },
};
