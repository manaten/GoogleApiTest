const google = require('googleapis');
const express = require('express');
const OAuth2 = google.auth.OAuth2;

const secret = require('./secret.json');

const PORT = process.env.PORT || 9090;

const app = express();

const oauth2Client = new OAuth2(secret.CLIENT_ID, secret.CLIENT_SECRET, `http://localhost:${PORT}`);

app.get('/', (req, res) => {
  if (req.query.code) {
    oauth2Client.getToken(req.query.code, (err, tokens) => {
      if (err) {
        res.status(500).json({error: err.message});
        return;
      }
      res.json(tokens);
    });
    return;
  }

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope      : [
      'https://www.googleapis.com/auth/analytics.readonly'
    ]
  });
  res.redirect(url);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
