# git-pay


#deploy front

try first 
```shell
git subtree push --prefix frontend heroku master
```

```shell
git push heroku `git subtree split --prefix frontend master`:master --forces
```