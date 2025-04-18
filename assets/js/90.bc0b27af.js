(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{472:function(t,e,_){"use strict";_.r(e);var a=_(6),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("来源：http://marklodato.github.io/visual-git-guide/index-zh-cn.html")])]),t._v(" "),e("h2",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/basic-usage.svg",alt:""}})]),t._v(" "),e("p",[t._v("上面的四条命令在工作目录、暂存目录(也叫做索引)和仓库之间复制文件。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git add _files_")]),t._v(" 把当前文件放入暂存区域。")]),t._v(" "),e("li",[e("code",[t._v("git commit")]),t._v(" 给暂存区域生成快照并提交。")]),t._v(" "),e("li",[e("code",[t._v("git reset -- _files_")]),t._v(" 用来撤销最后一次"),e("code",[t._v("git add _files_")]),t._v("，你也可以用"),e("code",[t._v("git reset")]),t._v(" 撤销所有暂存区域文件。")]),t._v(" "),e("li",[e("code",[t._v("git checkout -- _files_")]),t._v(" 把文件从暂存区域复制到工作目录，用来丢弃本地修改。")])]),t._v(" "),e("p",[t._v("你可以用 "),e("code",[t._v("git reset -p")]),t._v(", "),e("code",[t._v("git checkout -p")]),t._v(", or "),e("code",[t._v("git add -p")]),t._v("进入交互模式。")]),t._v(" "),e("p",[t._v("也可以跳过暂存区域直接从仓库取出文件或者直接提交代码。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/basic-usage-2.svg",alt:""}})]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git commit -a")]),t._v(" 相当于运行 git add 把所有当前目录下的文件加入暂存区域再运行。git commit.")]),t._v(" "),e("li",[e("code",[t._v("git commit _files_")]),t._v(" 进行一次包含最后一次提交加上工作目录中文件快照的提交。并且文件被添加到暂存区域。")]),t._v(" "),e("li",[e("code",[t._v("git checkout HEAD -- _files_")]),t._v(" 回滚到复制最后一次提交。")])]),t._v(" "),e("h2",{attrs:{id:"约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约定"}},[t._v("#")]),t._v(" 约定")]),t._v(" "),e("p",[t._v("后文中以下面的形式使用图片。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/conventions.svg",alt:""}})]),t._v(" "),e("p",[t._v("绿色的5位字符表示提交的ID，分别指向父节点。分支用橘色显示，分别指向特定的提交。当前分支由附在其上的_HEAD_标识。 这张图片里显示最后5次提交，_ed489_是最新提交。 _main_分支指向此次提交，另一个_stable_分支指向祖父提交节点。")]),t._v(" "),e("h2",{attrs:{id:"命令详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令详解"}},[t._v("#")]),t._v(" 命令详解")]),t._v(" "),e("h3",{attrs:{id:"diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" Diff")]),t._v(" "),e("p",[t._v("有许多种方法查看两次提交之间的变动。下面是一些示例。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/diff.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[t._v("#")]),t._v(" Commit")]),t._v(" "),e("p",[t._v("提交时，git用暂存区域的文件创建一个新的提交，并把此时的节点设为父节点。然后把当前分支指向新的提交节点。下图中，当前分支是_main_。 在运行命令之前，"),e("em",[t._v("main_指向_ed489")]),t._v("，提交后，_main_指向新的节点_f0cec_并以_ed489_作为父节点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/commit-main.svg",alt:""}})]),t._v(" "),e("p",[t._v("即便当前分支是某次提交的祖父节点，git会同样操作。下图中，在_main_分支的祖父节点_stable_分支进行一次提交，生成了_1800b_。 这样，_stable_分支就不再是_main_分支的祖父节点。此时，"),e("a",{attrs:{href:"about:blank#merge"}},[t._v("合并")]),t._v(" (或者 "),e("a",{attrs:{href:"about:blank#rebase"}},[t._v("衍合")]),t._v(") 是必须的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/commit-stable.svg",alt:""}})]),t._v(" "),e("p",[t._v("如果想更改一次提交，使用 "),e("code",[t._v("git commit --amend")]),t._v("。git会使用与当前提交相同的父节点进行一次新提交，旧的提交会被取消。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/commit-amend.svg",alt:""}})]),t._v(" "),e("p",[t._v("另一个例子是"),e("a",{attrs:{href:"about:blank#detached"}},[t._v("分离HEAD提交")]),t._v(",后文讲。")]),t._v(" "),e("h3",{attrs:{id:"checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[t._v("#")]),t._v(" Checkout")]),t._v(" "),e("p",[t._v("checkout命令用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支。")]),t._v(" "),e("p",[t._v("当给定某个文件名（或者打开-p选项，或者文件名和-p选项同时打开）时，git会从指定的提交中拷贝文件到暂存区域和工作目录。比如，"),e("code",[t._v("git checkout HEAD~ foo.c")]),t._v("会将提交节点_HEAD~_(即当前提交节点的父节点)中的"),e("code",[t._v("foo.c")]),t._v("复制到工作目录并且加到暂存区域中。（如果命令中没有指定提交节点，则会从暂存区域中拷贝内容。）注意当前分支不会发生变化。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/checkout-files.svg",alt:""}})]),t._v(" "),e("p",[t._v("当不指定文件名，而是给出一个（本地）分支时，那么_HEAD_标识会移动到那个分支（也就是说，我们“切换”到那个分支了），然后暂存区域和工作目录中的内容会和_HEAD_对应的提交节点一致。新提交节点（下图中的a47c3）中的所有文件都会被复制（到暂存区域和工作目录中）；只存在于老的提交节点（ed489）中的文件会被删除；不属于上述两者的文件会被忽略，不受影响。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/checkout-branch.svg",alt:""}})]),t._v(" "),e("p",[t._v("如果既没有指定文件名，也没有指定分支名，而是一个标签、远程分支、SHA-1值或者是像_main~3_类似的东西，就得到一个匿名分支，称作_detached HEAD_（被分离的_HEAD_标识）。这样可以很方便地在历史版本之间互相切换。比如说你想要编译1.6.6.1版本的git，你可以运行"),e("code",[t._v("git checkout v1.6.6.1")]),t._v("（这是一个标签，而非分支名），编译，安装，然后切换回另一个分支，比如说"),e("code",[t._v("git checkout main")]),t._v("。然而，当提交操作涉及到“分离的HEAD”时，其行为会略有不同，详情见在"),e("a",{attrs:{href:"about:blank#detached"}},[t._v("下面")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/checkout-detached.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"head标识处于分离状态时的提交操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head标识处于分离状态时的提交操作"}},[t._v("#")]),t._v(" HEAD标识处于分离状态时的提交操作")]),t._v(" "),e("p",[t._v("当_HEAD_处于分离状态（不依附于任一分支）时，提交操作可以正常进行，但是不会更新任何已命名的分支。(你可以认为这是在更新一个匿名分支。)")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/commit-detached.svg",alt:""}})]),t._v(" "),e("p",[t._v("一旦此后你切换到别的分支，比如说_main_，那么这个提交节点（可能）再也不会被引用到，然后就会被丢弃掉了。注意这个命令之后就不会有东西引用_2eecb_。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/checkout-after-detached.svg",alt:""}})]),t._v(" "),e("p",[t._v("但是，如果你想保存这个状态，可以用命令"),e("code",[t._v("git checkout -b _name_")]),t._v("来创建一个新的分支。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/checkout-b-detached.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" Reset")]),t._v(" "),e("p",[t._v("reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。")]),t._v(" "),e("p",[t._v("如果不给选项，那么当前分支指向到那个提交。如果用"),e("code",[t._v("--hard")]),t._v("选项，那么工作目录也更新，如果用"),e("code",[t._v("--soft")]),t._v("选项，那么都不变。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/reset-commit.svg",alt:""}})]),t._v(" "),e("p",[t._v("如果没有给出提交点的版本号，那么默认用_HEAD_。这样，分支指向不变，但是索引会回滚到最后一次提交，如果用"),e("code",[t._v("--hard")]),t._v("选项，工作目录也同样。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/reset.svg",alt:""}})]),t._v(" "),e("p",[t._v("如果给了文件名(或者 "),e("code",[t._v("-p")]),t._v("选项), 那么工作效果和带文件名的"),e("a",{attrs:{href:"about:blank#checkout"}},[t._v("checkout")]),t._v("差不多，除了索引被更新。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/reset-files.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),e("p",[t._v("merge 命令把不同分支合并起来。合并前，索引必须和当前提交相同。如果另一个分支是当前提交的祖父节点，那么合并命令将什么也不做。 另一种情况是如果当前提交是另一个分支的祖父节点，就导致_fast-forward_合并。指向只是简单的移动，并生成一个新的提交。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/merge-ff.svg",alt:""}})]),t._v(" "),e("p",[t._v("否则就是一次真正的合并。默认把当前提交("),e("em",[t._v("ed489")]),t._v(" 如下所示)和另一个提交("),e("em",[t._v("33104")]),t._v(")以及他们的共同祖父节点("),e("em",[t._v("b325c")]),t._v(")进行一次"),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Three-way_merge",target:"_blank",rel:"noopener noreferrer"}},[t._v("三方合并"),e("OutboundLink")],1),t._v("。结果是先保存当前目录和索引，然后和父节点_33104_一起做一次新提交。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/merge.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[t._v("#")]),t._v(" Cherry Pick")]),t._v(" "),e("p",[t._v('cherry-pick命令"复制"一个提交节点并在当前分支做一次完全一样的新提交。')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/cherry-pick.svg",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[t._v("#")]),t._v(" Rebase")]),t._v(" "),e("p",[t._v("衍合是合并命令的另一种选择。合并把两个父分支合并进行一次提交，提交历史不是线性的。衍合在当前分支上重演另一个分支的历史，提交历史是线性的。 本质上，这是线性化的自动的 "),e("a",{attrs:{href:"about:blank#cherry-pick"}},[t._v("cherry-pick")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/rebase.svg",alt:""}})]),t._v(" "),e("p",[t._v("上面的命令都在_topic_分支中进行，而不是_main_分支，在_main_分支上重演，并且把分支指向新的节点。注意旧提交没有被引用，将被回收。")]),t._v(" "),e("p",[t._v("要限制回滚范围，使用"),e("code",[t._v("--onto")]),t._v("选项。下面的命令在_main_分支上重演当前分支从_169a6_以来的最近几个提交，即_2c33a_。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/rebase-onto.svg",alt:""}})]),t._v(" "),e("p",[t._v("同样有"),e("code",[t._v("git rebase --interactive")]),t._v("让你更方便的完成一些复杂操作，比如丢弃、重排、修改、合并提交。没有图片体现这些，细节看这里:"),e("a",{attrs:{href:"http://www.kernel.org/pub/software/scm/git/docs/git-rebase.html#_interactive_mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-rebase(1)"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"技术说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术说明"}},[t._v("#")]),t._v(" 技术说明")]),t._v(" "),e("p",[t._v("文件内容并没有真正存储在索引("),e("em",[t._v(".git/index")]),t._v(")或者提交对象中，而是以blob的形式分别存储在数据库中("),e("em",[t._v(".git/objects")]),t._v(")，并用SHA-1值来校验。 索引文件用识别码列出相关的blob文件以及别的数据。对于提交来说，以树("),e("em",[t._v("tree")]),t._v(")的形式存储，同样用对于的哈希值识别。树对应着工作目录中的文件夹，树中包含的 树或者blob对象对应着相应的子目录和文件。每次提交都存储下它的上一级树的识别码。")]),t._v(" "),e("p",[t._v("如果用detached HEAD提交，那么最后一次提交会被the reflog for HEAD引用。但是过一段时间就失效，最终被回收，与"),e("code",[t._v("git commit --amend")]),t._v("或者"),e("code",[t._v("git rebase")]),t._v("很像。")])])}),[],!1,null,null,null);e.default=s.exports}}]);