(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{582:function(t,s,e){"use strict";e.r(s);var a=e(17),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-在-macos-中忽略所有-ds-store-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-在-macos-中忽略所有-ds-store-文件"}},[t._v("#")]),t._v(" Git 在 macOS 中忽略所有 .DS_Store 文件")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("ul",[e("li",[t._v("macOS 每个文件夹都存放着一个 "),e("code",[t._v(".DS_Store")]),t._v(" 文件，是用于存放目录自定义属性（如图表、位置属性）等元数据信息的系统文件，由 "),e("code",[t._v("Finder")]),t._v(" 自动创建。")])]),t._v(" "),e("p",[t._v("虽然所有 "),e("code",[t._v(".")]),t._v(" 开头的文件/文件夹默认隐藏（可以使用 "),e("code",[t._v("Command + Shift+。")]),t._v(" 显示所有隐藏文件），"),e("code",[t._v(".DS_Store")]),t._v("却并不展示，需要通过终端"),e("code",[t._v("ls -la")]),t._v("命令列出，但是 Git 仍会将其记录下来，即便我只是在同目录下移动文件。为了避免\n"),e("code",[t._v(".DS_Store")]),t._v("等文件提交到仓库中，通常选择忽略 "),e("code",[t._v(".DS_Store")]),t._v(" 文件。")]),t._v(" "),e("h3",{attrs:{id:"项目中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目中"}},[t._v("#")]),t._v(" 项目中")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v(".gitignore")]),e("OutboundLink")],1),t._v(" 是 Git 提供的一个让用户控制 Git 忽略某些文件的文件。所有被 "),e("code",[t._v(".gitignore")]),t._v(" 匹配的文件都不会被 Git 记录。")]),t._v(" "),e("p",[t._v("在仓库的根目录下创建一个 "),e("code",[t._v(".gitignore")]),t._v(" 文件，添加以下内容")]),t._v(" "),e("p",[t._v("这样依赖这个仓库就不会再记录 "),e("code",[t._v(".DS_Store")]),t._v(" 文件了。")]),t._v(" "),e("p",[t._v("如果远程仓库已经存在"),e("code",[t._v(".DS_Store")]),t._v("话，可以通过以下命令删除。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached  */.DS_Store\n\n// 或者\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name .DS_Store -print0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" -0 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f --ignore-unmatch\n")])])]),e("p",[t._v("这样就删除了所有该仓库的 "),e("code",[t._v(".DS_Store")]),t._v(" 。重新提交推送即可。")]),t._v(" "),e("h3",{attrs:{id:"全局忽略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局忽略"}},[t._v("#")]),t._v(" 全局忽略")]),t._v(" "),e("p",[t._v("虽说可以使用上面的方法来忽略 "),e("code",[t._v(".DS_Store")]),t._v(" ，但是每个仓库都要配置一遍，不如全局忽略来得方便。")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("Finder")]),t._v("根目录下打开终端，运行以下命令创建"),e("code",[t._v(".gitignore_global")]),t._v("文件")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.gitignore_global\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("通过编辑器修改该文件，添加以下内容。")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("*~\n*.DS_Store\n.DS_Store\n.DS_Store?\n**/.DS_Store\nnode_modules\n**/node_modules\nehthumbs.db\nThumbs.db\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# local env files")]),t._v("\npackage-lock.json\npackage-lock.json?\n.env.local\n.env.*.local\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log files")]),t._v("\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Editor directories and files")]),t._v("\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw?\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("使"),e("code",[t._v(".gitignore_global")]),t._v("生效")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.excludesfile ~/.gitignore_global\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("验证配置是否生效")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n")])])]),e("p",[t._v("或者查看根目录下"),e("code",[t._v(".gitignore")]),t._v("文件")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\texcludesfile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /Users/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/.gitignore_global\n")])])]),e("p",[t._v("就说明已经添加成功了，以后 Git 就不会再记录 "),e("code",[t._v(".DS_Store")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"针对网络磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对网络磁盘"}},[t._v("#")]),t._v(" 针对网络磁盘")]),t._v(" "),e("p",[e("strong",[t._v("禁止生成 "),e("code",[t._v(".DS_store")])])]),t._v(" "),e("p",[t._v("打开 “终端” ，复制黏贴下面的命令，回车执行，然后退出登录 macOS 账户并重新登录。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("defaults "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE\n")])])]),e("p",[e("strong",[t._v("恢复生成"),e("code",[t._v(".DS_store")])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("defaults delete com.apple.desktopservices DSDontWriteNetworkStores\n")])])]),e("p",[t._v("以上命令只是针对网络磁盘，想要阻止本地磁盘中 DS_Store 文件的自动生成，唯一的方式就是停止使用「访达」，我觉得没必要有点以小失大。")]),t._v(" "),e("p",[e("strong",[t._v("参考链接")]),t._v("：")]),t._v(" "),e("ul",[e("li",[t._v("https://stackoverflow.com/questions/18393498/gitignore-all-the-ds-store-files-in-every-folder-and-subfolder")]),t._v(" "),e("li",[t._v("https://blog.ichr.me/post/git-ignore-all-ds-store-on-mac/")])])])}),[],!1,null,null,null);s.default=n.exports}}]);