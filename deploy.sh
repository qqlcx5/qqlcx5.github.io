# 确保脚本抛出遇到的错误
set -e
# git add -A
# git commit -m'blogCode'
# git push git@gitee.com:qqlcx5/vuePressCode.git master

npm run docs:build && cd docs/.vuepress/dist

# github
# git init
# git add -A
# git commit -m 'deploy'
# git push -f git@github.com:qqlcx5/qqlcx5.github.io.git master

# 码云
# rm -rf .git
git init
git add -A
git commit -m 'deploy'
git push -f git@gitee.com:qqlcx5/qqlcx5.git master
cd -
