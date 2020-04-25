# git-pay

Put here scenario and description

## Deploy

### Deploy api

git remote add heroku_api https://git.heroku.com/microbo-api.git
```shell
git subtree push --prefix api heroku_api master
```


#### Deploy front

git remote add heroku https://git.heroku.com/microbo.git

```shell
git subtree push --prefix front heroku master
```

#### Deploy forced
```shell
git push heroku `git subtree split --prefix front master`:master --force
```