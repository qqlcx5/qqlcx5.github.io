# 确保脚本抛出遇到的错误
set -e
npm run docs:build && cd docs/.vuepress/dist
# github && 码云
git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:qqlcx5/qqlcx5.github.io.git
git remote set-url --add origin git@gitee.com:qqlcx5/vuepress.git
git remote set-url --add origin git@e.coding.net:qqlcx5/qqlcx5/vuepress.git
git push -f --all
rm -rf docs/.vuepress/dist
cd -


