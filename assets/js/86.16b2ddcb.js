(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{612:function(t,s,e){"use strict";e.r(s);var a=e(17),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("假设你有一个Vuepress的项目，分支 "),e("code",[t._v("master")]),t._v(" 存放文章，分支"),e("code",[t._v("gh-pages")]),t._v(" 存放"),e("code",[t._v("VuePress")]),t._v("生成的静态文件。")]),t._v(" "),e("p",[t._v("正常部署"),e("code",[t._v("VuePress")]),t._v("的流程是：")]),t._v(" "),e("ul",[e("li",[t._v("项目打包生成静态文件："),e("code",[t._v("npm run build")])]),t._v(" "),e("li",[t._v("切换打包"),e("code",[t._v("dist")]),t._v("目录下")]),t._v(" "),e("li",[t._v("上传到 "),e("code",[t._v("gh-pages")]),t._v("分支下")])]),t._v(" "),e("h3",{attrs:{id:"脚本部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本部署"}},[t._v("#")]),t._v(" 脚本部署")]),t._v(" "),e("p",[t._v("在项目目录下创建一个 "),e("code",[t._v("deploy.sh")]),t._v("文件，复制下面代码，执行打包及提交静态文件到仓库的"),e("code",[t._v("gh-pages")]),t._v("分支下。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包及切换到dist目录下")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到github gh-pages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:qqlcx5/qqlcx5.github.io.git gh-pages // 修改成自己仓库地址\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),e("p",[t._v("通过"),e("code",[t._v("deploy.sh")]),t._v("命令省去操作部分，但是等待项目打包和上传仓库的时间。")]),t._v(" "),e("p",[t._v("如果我把文章写好，提交代码，就可以部署"),e("code",[t._v("gh-pages")]),t._v("岂不美哉。")]),t._v(" "),e("p",[t._v("接下来就是我要开始介绍部分。")]),t._v(" "),e("h3",{attrs:{id:"github-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" GitHub Actions")]),t._v(" "),e("p",[t._v("GitHub Actions 是 GitHub 的持续集成服务，于2018年10月推出。")]),t._v(" "),e("h4",{attrs:{id:"生成个人访问令牌token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成个人访问令牌token"}},[t._v("#")]),t._v(" 生成个人访问令牌token")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("跳转到个人访问令牌页面"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.0/img/20200710230334.jpg",alt:"-w1139"}})]),t._v(" "),e("p",[t._v("填写 "),e("code",[t._v("Token")]),t._v(" 描述，勾选 repo、write、read然后点击 "),e("code",[t._v("Generate token")]),t._v(" 生成一个 "),e("code",[t._v("Token")])]),t._v(" "),e("p",[e("img",{attrs:{src:"media/15941321303313/15945467642127.jpg",alt:"token"}})]),t._v(" "),e("p",[t._v("因为 Token 只会显示一次，所以先保存笔记本上。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@1.0/img/20200710230337.jpg",alt:"-w1030"}})]),t._v(" "),e("h4",{attrs:{id:"设置-仓库的secrets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-仓库的secrets"}},[t._v("#")]),t._v(" 设置 仓库的Secrets")]),t._v(" "),e("p",[t._v("在存放博客仓库里，添加个人访问令牌。")]),t._v(" "),e("p",[e("img",{attrs:{src:"media/15945439850942/15945470533312.jpg",alt:"-w1415"}})]),t._v(" "),e("p",[t._v("令牌名字取名为：ACCESS_TOKEN，复制个人访问令牌密钥进去，保存。")]),t._v(" "),e("h4",{attrs:{id:"编写workflow流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写workflow流程"}},[t._v("#")]),t._v(" 编写workflow流程")]),t._v(" "),e("p",[t._v("在编辑器中打开Vuepress项目，在项目的根目录下创建一个"),e("code",[t._v(".github/workflows/main.yml文件")]),t._v("，内容如下：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("name: Deploy GitHub Pages\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发条件：在 push 到 master 分支后")]),t._v("\non:\n  push:\n    branches:\n      - master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务")]),t._v("\njobs:\n  build-and-deploy:\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器环境：最新版 Ubuntu")]),t._v("\n    runs-on: ubuntu-latest\n    steps:\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取代码")]),t._v("\n      - name: Checkout\n        uses: actions/checkout@v2\n        with:\n          persist-credentials: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n      - name: Build\n        run: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 GitHub Pages")]),t._v("\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with:\n          ACCESS_TOKEN: "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${{ secrets.ACCESS_TOKEN }")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          BRANCH: gh-pages\n          FOLDER: docs/.vuepress/dist\n")])])]),e("p",[t._v("这里我写了三步：")]),t._v(" "),e("ol",[e("li",[t._v("拉取代码。用到了一个 GitHub 官方 action：actions/checkout 。")]),t._v(" "),e("li",[t._v("生成静态文件。直接运行脚本，如果你不是用的 VuePress 或者脚本不一样，要修改成你自己的。")]),t._v(" "),e("li",[t._v("部署到 GitHub Pages。使用了第三方作者的 action：JamesIves/github-pages-deploy-action@releases/v3。我详细介绍下这个 action：")])]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("with")]),t._v(" 参数向环境中传入了三个环境变量：")]),t._v(" "),e("ol",[e("li",[t._v("ACCESS_TOKEN：读取 GitHub 仓库 secrets 的 ACCESS_TOKEN 变量，也就是我们前面设置的")]),t._v(" "),e("li",[t._v("BRANCH：部署分支 gh-pages（GitHub Pages 读取的分支）")]),t._v(" "),e("li",[t._v("FOLDER：需要部署的文件在 docs/.vuepress/dist 路径，也就是我们使用 npm run docs:build 生成的静态文件的位置")])]),t._v(" "),e("blockquote",[e("p",[t._v("这里有一点需要注意：我使用的是 v3 版本，需要使用 with 参数传入环境变量，且需要自行构建；网上常见的教程使用的是 v2 版本，使用 env 参数传入环境变量，不需要自行构建，可使用 BUILD_SCRIPT 环境变量传入构建脚本。")])]),t._v(" "),e("p",[t._v("至此，配置工作均已完成。提交你的代码，就会开启自动构建。")]),t._v(" "),e("p",[t._v("以后，你每次有代码 push 到 master 分支时，GitHub 都会开始自动构建。")]),t._v(" "),e("h3",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),e("p",[t._v("通过"),e("code",[t._v("Action")]),t._v("可以查看项目的部署流程。")]),t._v(" "),e("p",[e("img",{attrs:{src:"media/15945439850942/15945482529364.jpg",alt:"-w1083"}})]),t._v(" "),e("p",[t._v("部署失败，会接收到GitHub发送的邮件，点击图片的标题进入页面查看日志。")]),t._v(" "),e("p",[e("img",{attrs:{src:"media/15945439850942/15945485535600.jpg",alt:"-w1398"}})]),t._v(" "),e("p",[t._v("正常来说没什么问题。享受 GitHub Actions 带来的愉快体验吧~")]),t._v(" "),e("p",[t._v("参考链接：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html#%E8%AE%BE%E7%BD%AE-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 GitHub Actions 自动部署博客"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);