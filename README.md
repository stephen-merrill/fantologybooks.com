# fantologybooks.com

## Project setup
- [install yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)
- [install aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- run `aws configure` to set up your access for deploys
- [install vue-cli](https://cli.vuejs.org/guide/installation.html) `yarn gobal
  add @vue/cli`
  
## Local Development

### Run Server with Hot Reloading
- local server will run at localhost:8080

```
yarn serve
```

### Build (Checks syntax and linting before deploying)
- Make sure to check for any warnings on image file sizes

```
yarn build
```

## Deploys

### Staging Deploys
- will run yarn build
- will push the files to the s3 bucket
- will create a cache invalidation in the cloudfront cdn (without this step the
page could be cached for 24 hours)
```
yarn stage
```

### Production Deploys
- same as staging just pushes to the production bucket

```
yarn deploy
```

## Linting
```
yarn lint
```
