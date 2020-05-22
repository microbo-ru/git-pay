# OpenAPI (swagger) Generator
To generate API Proxies, it's neccessary to perform following steps:
1. Install the generator
```
> npm install @openapitools/openapi-generator-cli -g
```
2. Once you need to re-generate (the client) do the following operations:
```
> cd api-specs

# to validate
> npx openapi-generator validate -i w1-p2p.yaml

# to dry-run
> npx openapi-generator generate --dry-run -i w1-p2p.yaml -g javascript --model-name-prefix W1 --package-name W1 -o generated

# and to generate
> npx openapi-generator generate -i w1-p2p.yaml -g javascript --model-name-prefix W1 --package-name W1 -o generated

# or use any generator you like
```