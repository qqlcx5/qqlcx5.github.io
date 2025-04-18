(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{476:function(s,a,t){"use strict";t.r(a);var r=t(6),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"permissions-0755-问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions-0755-问题解决"}},[s._v("#")]),s._v(" permissions 0755 问题解决")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("我最近京东买了电脑配置搞了一台黑苹果，成本4k左右配置，可以媲美满配置的苹果笔记本，苹果的硬件利润真的多。")]),s._v(" "),a("h3",{attrs:{id:"报错分析🔍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错分析🔍"}},[s._v("#")]),s._v(" 报错分析🔍")]),s._v(" "),a("p",[s._v("我在这台黑电脑上安装"),a("code",[s._v("git")]),s._v("后，发现克隆不了仓库，如图下问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/20220218-15963818782107.jpg",alt:""}})]),s._v(" "),a("p",[s._v("简单翻译一下这句报错信息：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("“/Users/another/.ssh/id_rsa”的权限0755太开放。\n要求您的私钥文件不能被其他人访问。\n此私钥将被忽略。\nLoad key“/Users/another/.ssh/id_rsa”：权限错误\ngit@github.com：权限被拒绝（公钥）。\n致命：无法从远程存储库读取。\n请确保您具有正确的访问权限\n存储库存在。\n")])])]),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),a("p",[s._v("出现该问题主要是因为你的ssh中的私钥权限导致的。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh/*\n")])])]),a("p",[a("strong",[s._v("参数")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("700")]),s._v(" 只有拥有者有读、写、执行权限。")]),s._v(" "),a("li",[a("code",[s._v("-R")]),s._v(" 递归改文件内的权限。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);