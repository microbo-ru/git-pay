
## Generate server

```
> cd /api-specs/git-pay-api
> npx openapi-generator generate -i openapi.yaml -g nodejs-express-server --package-name gitpay -o generated_server --minimal-update

> cd generated_server
# do your work
```

## Generate client
```
> cd /api-specs/git-pay-api
> npx openapi-generator generate -i openapi.yaml -g javascript --package-name gitpay -o generated_client --minimal-update

> cd generated_client
# do your work
```