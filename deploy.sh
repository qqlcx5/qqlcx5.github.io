# 确保脚本抛出遇到的错误
set -e
npm run docs:build && cd docs/.vuepress/dist
# github && 码云
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:qqlcx5/qqlcx5.github.io.git
git remote set-url --add origin git@gitee.com:qqlcx5/qqlcx5.git
git push -f --all
cd -

# 码云(土方法 一个个仓库慢慢传)
# rm -rf .git
# git init
# git add -A
# git commit -m 'deploy'
# git push -f git@gitee.com:qqlcx5/qqlcx5.git master

