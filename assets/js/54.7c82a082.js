(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{580:function(v,_,e){"use strict";e.r(_);var o=e(17),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://feyoudao.oss-cn-hongkong.aliyuncs.com/mweb/20220510-16501064376344.webp",alt:"Git分支开发模型"}})]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("最稳定的代码放在 "),e("code",[v._v("master")]),v._v(" 分支上（相当于 SVN 的 trunk 分支）")]),v._v("，我们不要直接在 "),e("code",[v._v("master")]),v._v(" 分支上提交代码，"),e("strong",[v._v("只能在该分支上进行代码合并操作")]),v._v("，例如将其它分支的代码合并到 "),e("code",[v._v("master")]),v._v(" 分支上。")]),v._v(" "),e("li",[v._v("我们日常开发中的 "),e("strong",[v._v("代码需要从 "),e("code",[v._v("master")]),v._v(" 分支拉一条 "),e("code",[v._v("develop")]),v._v(" 分支出来，该分支所有人都能访问")]),v._v("，但一般情况下，我们也不会直接在该分支上提交代码，代码同样是从其它分支合并到 "),e("code",[v._v("develop")]),v._v(" 分支上去。")]),v._v(" "),e("li",[v._v("当我们需要开发某个特性时，需要 "),e("strong",[v._v("从 "),e("code",[v._v("develop")]),v._v(" 分支拉出一条 "),e("code",[v._v("feature")]),v._v(" 分支")]),v._v("，例如 "),e("code",[v._v("feature-name1")]),v._v(" 与 "),e("code",[v._v("feature-name2")]),v._v("，在这些分支上并行地开发具体特性。")]),v._v(" "),e("li",[v._v("当特性开发完毕后，"),e("strong",[v._v("我们决定需要发布某个版本了，此时需要从 "),e("code",[v._v("develop")]),v._v(" 分支上拉出一条 "),e("code",[v._v("qa")]),v._v(" 分支")]),v._v("，例如 "),e("code",[v._v("qa-name1-name2")]),v._v("，并将需要发布的特性从相关 "),e("code",[v._v("feature")]),v._v(" 分支一同合并到 "),e("code",[v._v("qa")]),v._v(" 分支上，随后将针对 "),e("code",[v._v("qa")]),v._v(" 分支部署测试环境，"),e("strong",[e("code",[v._v("测试工程师在该分支上做功能测试，开发工程师在该分支上修改 bug")])]),v._v("。")]),v._v(" "),e("li",[e("strong",[v._v("待测试工程师无法找到任何 bug 时")]),v._v("，我们可继续从 "),e("code",[v._v("master")]),v._v(" 分支拉出一条 "),e("code",[v._v("release")]),v._v(" 分支，"),e("strong",[e("code",[v._v("此时release的版本号必须根据master的tag版本号来递增，递增规则参见下面版本号规范")])]),v._v("，例如 "),e("code",[v._v("release1.0.0")]),v._v("，并将"),e("code",[v._v("qa-name1-name2")]),v._v("分支合并到"),e("code",[v._v("release1.0.0")]),v._v("，并部署到预发环境，再次验证以后，均无任何 bug，"),e("strong",[v._v("此时可将 "),e("code",[v._v("release")]),v._v(" 分支部署到生产环境")]),v._v("。")]),v._v(" "),e("li",[v._v("待上线完成后，"),e("strong",[v._v("将 "),e("code",[v._v("release")]),v._v(" 分支上的代码同时合并到 "),e("code",[v._v("develop")]),v._v(" 分支与 "),e("code",[v._v("master")]),v._v(" 分支，并在 "),e("code",[v._v("master")]),v._v(" 分支上打一个 "),e("code",[v._v("tag")])]),v._v("，例如 "),e("code",[v._v("v1.0.0")]),v._v("。")]),v._v(" "),e("li",[v._v("当生产环境发现 bug 时，我们需要"),e("strong",[v._v("从对应的 "),e("code",[v._v("tag")]),v._v(" 上（例如 "),e("code",[v._v("v1.0.0")]),v._v("）拉出一条 "),e("code",[v._v("hotfix")]),v._v(" 分支（例如 "),e("code",[v._v("hotfix1.0.1")]),v._v("），并在该分支上做 bug 修复")]),v._v("。待 bug 完全修复后，需将 "),e("code",[v._v("hotfix")]),v._v(" 分支上的代码同时合并到 "),e("code",[v._v("develop")]),v._v(" 分支与 "),e("code",[v._v("master")]),v._v(" 分支。最后，在 "),e("code",[v._v("master")]),v._v(" 分支打"),e("code",[v._v("tag")]),v._v("（例如 "),e("code",[v._v("v1.0.1")]),v._v("）。")])]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("对于版本号规范：")]),e("br"),v._v("\n格式为：x.y.z，其中，x 用于有重大重构时才会升级，y 用于有新的特性发布时才会升级，z 用于修改了某个 bug 后才会升级。")])]),v._v(" "),e("p",[e("strong",[v._v("使用 GIT 管理代码应该遵循以下规范：")])]),v._v(" "),e("ol",[e("li",[e("p",[v._v("上传内容："),e("strong",[e("code",[v._v("保证GIT上保存的是“干净”的代码，不得有编译后再次生成的代码")])]),v._v("，如 Java 字节码文件和 JSP 生成文件，也不能有 IDE 生成文件；")])]),v._v(" "),e("li",[e("p",[v._v("上传注释："),e("strong",[e("code",[v._v("必须加简要的注释，注释的内容应包含开发的模块名称以及功能描述")])]),v._v("；")]),v._v(" "),e("blockquote",[e("p",[v._v("功能提交："),e("strong",[v._v("[模块名称]功能描述")]),v._v("，如：[用户模块]用户列表增加手机号字段显示；"),e("br"),v._v("\nBug Fix："),e("strong",[v._v("[模块名称]Bug-编号：Bug 描述")]),v._v("，如：[用户模块]Bug-1203：用户创建保存失败已修复；")])])]),v._v(" "),e("li",[e("p",[v._v("上传质量："),e("strong",[e("code",[v._v("提交和合并到分支上的代码尽量保证是自己测试通过的代码")])]),v._v("，以免影响别的项目/同事；")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);