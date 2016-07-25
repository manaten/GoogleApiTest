const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const secret = require('./secret.json');

const oauth2Client = new OAuth2(secret.CLIENT_ID, secret.CLIENT_SECRET);

oauth2Client.setCredentials({
  access_token : secret.ACCESS_TOKEN,
  refresh_token: secret.REFRESH_TOKEN
});
const analytics = google.analytics({version: 'v3', auth: oauth2Client});

analytics.data.ga.get({
  'ids'        : 'ga:74507830',
  'start-date' : '2016-07-24',
  'end-date'   : '2016-07-24',
  'metrics'    : 'ga:users,ga:pageviews',
  'dimensions' : 'ga:fullReferrer',
  'sort'       : 'ga:pageviews',
  'max-results': '20'
}, (err, response) => {
  console.log(response);
});
