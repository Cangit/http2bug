## Http2 bug

How to reproduce

```bash
npm install
npm run build


# create certs for http2 server
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem

# start serving over http2
node server.js
```

Go to https://localhost:1337 get the error: `Invalid request body`

(Downgrade to: @sveltejs/adapter-node 1.0.0-next.62 and @sveltejs/kit 1.0.0-next.232 and it will work as expected)
