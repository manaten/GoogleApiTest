アナリティクスAPI叩くまでのメモ

---

1. Google API Managerでアカウントの登録をして、認証情報 → OAuth2 でクライアントID・シークレットIDを取得
2. `secret.json` に↑を記述し、 `node oauth.js` でアクセストークン取得用サーバーを起動し、 `localhost:9090` を叩いてアクセストークンを取得
3. アクセストークンを `secret.json` に追記し、 `node analytics.js` でそれっぽい結果が得られるよ

## メモ

- Analytics API v3 のサンプルクエリは https://ga-dev-tools.appspot.com/query-explorer/ で作るのが圧倒的に楽
- 他のAPIの叩き方は https://github.com/google/google-api-nodejs-client/tree/master/apis 見るとわかりやすい？
