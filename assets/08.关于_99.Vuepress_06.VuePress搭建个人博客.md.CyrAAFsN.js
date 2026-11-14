import{bV as n,aL as a,u as p,G as e}from"./chunks/framework.DvBUyM1S.js";const o=JSON.parse('{"title":"VuePress 搭建个人博客","description":"","frontmatter":{"title":"VuePress 搭建个人博客","date":"2018-12-28T00:00:00.000Z","tags":["VuePress"],"permalink":"/pages/f5def0/","categories":["Vuepress"]},"headers":[],"relativePath":"08.关于/99.Vuepress/06.VuePress搭建个人博客.md","filePath":"08.关于/99.Vuepress/06.VuePress搭建个人博客.md","lastUpdated":1652867469000}'),l={name:"08.关于/99.Vuepress/06.VuePress搭建个人博客.md"};function i(r,s,c,b,t,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="vuepress-搭建个人博客" tabindex="-1">VuePress 搭建个人博客 <a class="header-anchor" href="#vuepress-搭建个人博客" aria-label="Permalink to &quot;VuePress 搭建个人博客&quot;">​</a></h1><h2 id="项目的亮点" tabindex="-1">项目的亮点 <a class="header-anchor" href="#项目的亮点" aria-label="Permalink to &quot;项目的亮点&quot;">​</a></h2><p>Vuepress诞生时候我就入手体验了，也有很多大神写过这方面的文章写的也很不错。起初并不打算想写的，想到或许可以帮助一些人更快更轻松的搭建博客。我搭建的VuePress作为模版，介绍其中一些必要的配置项，更快的了解VuePress，顺便在上面爽爽写文章文档就行。</p><p><strong>本项目一些优点</strong></p><ol><li>自动生成侧边栏和分组</li><li>GitHub Actions 自动部署</li><li>集合一些有趣的插件库</li></ol><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><h3 id="全局安装" tabindex="-1">全局安装 <a class="header-anchor" href="#全局安装" aria-label="Permalink to &quot;全局安装&quot;">​</a></h3><p>在命令行或者控制台、终端执行以下操作。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建项目目录</span></span>
<span class="line"><span>mkdir vuepress &amp;&amp; cd vuepress   // 生成一个vuepress文件夹，然后进入该文件夹</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 初始化项目</span></span>
<span class="line"><span>npm init</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将 VuePress 作为一个本地依赖安装</span></span>
<span class="line"><span>yarn add -D vuepress # 或者：npm install -D vuepress</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个 docs 文件夹</span></span>
<span class="line"><span>mkdir docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个 markdown 文件</span></span>
<span class="line"><span>echo &#39;# Hello VuePress!&#39; &gt; docs/README.md</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>接着，在 <code>package.json</code> 里加一些脚本:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>然后就可以运行本项目</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或者：npm run docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包部署到GitHub服务器上</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或者：npm run docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="目录的结构" tabindex="-1">目录的结构 <a class="header-anchor" href="#目录的结构" aria-label="Permalink to &quot;目录的结构&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vuepress</span></span>
<span class="line"><span>├── docs</span></span>
<span class="line"><span>│   ├── .vuepress</span></span>
<span class="line"><span>│   │   ├── components (Vue 组件将会被自动注册为全局组件)</span></span>
<span class="line"><span>│   │   ├── public (静态资源目录)</span></span>
<span class="line"><span>│   │   ├── config.js (配置文件的入口文件)</span></span>
<span class="line"><span>│   ├── README.md</span></span>
<span class="line"><span>│   ├── guide</span></span>
<span class="line"><span>│      └── README.md</span></span>
<span class="line"><span>└── package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="主题基本配置" tabindex="-1">主题基本配置 <a class="header-anchor" href="#主题基本配置" aria-label="Permalink to &quot;主题基本配置&quot;">​</a></h2><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>首先在你的文档目录下创建一个 <code>.vuepress</code> 目录，所有 <code>VuePress</code> 相关的文件都将会被放在这里。</p><p>一个 VuePress 网站必要的配置文件是 <code>.vuepress/config.js</code>，它应该导出一个 JavaScript 对象：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  title: &#39;Hello VuePress&#39;, //网站的标题</span></span>
<span class="line"><span>  description: &#39;Just playing around&#39; //网站的描述</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="导航栏" tabindex="-1">导航栏 <a class="header-anchor" href="#导航栏" aria-label="Permalink to &quot;导航栏&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// .vuepress/config.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    nav: [</span></span>
<span class="line"><span>      { text: &#39;首页&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span>      { text: &#39;指南&#39;, link: &#39;/guide/&#39; },</span></span>
<span class="line"><span>      { text: &#39;Google&#39;, link: &#39;https://google.com&#39; },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    nav: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &#39;语言&#39;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &#39;中文&#39;, link: &#39;/cn/&#39; },</span></span>
<span class="line"><span>          { text: &#39;英语&#39;, link: &#39;/en/&#39; }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="侧边栏分组" tabindex="-1">侧边栏分组 <a class="header-anchor" href="#侧边栏分组" aria-label="Permalink to &quot;侧边栏分组&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// .vuepress/config.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    sidebar: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        title: &#39;Group 1&#39;,   // 必要的</span></span>
<span class="line"><span>        path: &#39;/foo/&#39;,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在</span></span>
<span class="line"><span>        collapsable: false, // 可选的, 默认值是 true,</span></span>
<span class="line"><span>        sidebarDepth: 1,    // 可选的, 默认值是 1</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          &#39;/&#39;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        title: &#39;Group 2&#39;,</span></span>
<span class="line"><span>        children: [ /* ... */ ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote><p>看到这里，有没有发现一件事，你写的文章可能存在<code>guide</code>目录或者其它目录下，可能几篇文章还好，但是考虑到后续有几百篇的文章，存放在侧边栏上，需要手动去配置路径，后续文章修改文件名和路径的情况下，一不下心操作失误可能博客就废的差不多的。难维护。</p></blockquote><p>接下来就介绍一下，如何把文章存在目录下文章就自动生成侧边栏有没有觉得非常棒！！！</p><h3 id="自动生成侧边栏" tabindex="-1">自动生成侧边栏 <a class="header-anchor" href="#自动生成侧边栏" aria-label="Permalink to &quot;自动生成侧边栏&quot;">​</a></h3><p>在<code>.vuepress</code> 目录下创建一个<code>utils</code>目录，然后创建<code>initPage.js</code>和<code>index.js</code> 文件</p><p><strong>initPage.js文件</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>// 排除检查的文件</span></span>
<span class="line"><span>let excludes = [&#39;.DS_Store&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let filehelper = {</span></span>
<span class="line"><span>  getFileName: function(rpath,otherPath) {</span></span>
<span class="line"><span>    let filenames = [];</span></span>
<span class="line"><span>    let fileTypes = /\\.md$/; //只匹配以md结尾的文件</span></span>
<span class="line"><span>    fs.readdirSync(rpath).forEach((file) =&gt; {</span></span>
<span class="line"><span>      if (excludes.indexOf(file) &lt; 0) {</span></span>
<span class="line"><span>        fullpath = rpath + &#39;/&#39; + file;</span></span>
<span class="line"><span>        let fileinfo = fs.statSync(fullpath);</span></span>
<span class="line"><span>        if (fileinfo.isFile()) {</span></span>
<span class="line"><span>          if (fileTypes.test(file) &gt; 0) {</span></span>
<span class="line"><span>            if (file === &#39;README.md&#39;) {</span></span>
<span class="line"><span>              file = &#39;&#39;;</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>              file = file.replace(&#39;.md&#39;, &#39;&#39;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            file = otherPath ? otherPath + file : file</span></span>
<span class="line"><span>            filenames.push(file);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    filenames.sort(); // 排序</span></span>
<span class="line"><span>    return filenames;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>module.exports = filehelper;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>index.js 文件</strong></p><p>index.js 主要是接收参数，将参数转换成对象格式，方便在 config.js 里使用。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const utils = {</span></span>
<span class="line"><span>  genSidebar: function (title, children = [&#39;&#39;], collapsable = true, sidebarDepth = 2) {</span></span>
<span class="line"><span>    let arr = new Array();</span></span>
<span class="line"><span>    arr.push({</span></span>
<span class="line"><span>      title,</span></span>
<span class="line"><span>      children,</span></span>
<span class="line"><span>      collapsable,</span></span>
<span class="line"><span>      sidebarDepth</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    return arr;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = utils;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在<code>.vuepress</code> 目录下创建一个<code>themeConfig.js</code>文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const path = require(&#39;path&#39;);</span></span>
<span class="line"><span>const rootpath = path.dirname(__dirname);</span></span>
<span class="line"><span>const utils = require(&#39;./utils/index&#39;);</span></span>
<span class="line"><span>const filehelper = require(&#39;./utils/initPage.js&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const themeConfig = {</span></span>
<span class="line"><span>  nav: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;面试&#39;,</span></span>
<span class="line"><span>      link: &#39;/Interview/&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;JavaScript&#39;,</span></span>
<span class="line"><span>      link: &#39;/JavaScript/&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;Vuejs&#39;,</span></span>
<span class="line"><span>      link: &#39;/vue/&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;CSS&#39;,</span></span>
<span class="line"><span>      link: &#39;/css/&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;其它&#39;,</span></span>
<span class="line"><span>      ariaLabel: &#39;Menu&#39;,</span></span>
<span class="line"><span>      items: [</span></span>
<span class="line"><span>        { text: &#39;VuePress&#39;, link: &#39;/other/vuepress/&#39; },</span></span>
<span class="line"><span>        { text: &#39;开发工具&#39;, link: &#39;/other/ide/&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      text: &#39;主页&#39;,</span></span>
<span class="line"><span>      ariaLabel: &#39;Menu&#39;,</span></span>
<span class="line"><span>      items: [</span></span>
<span class="line"><span>        { text: &#39;主页一&#39;, link: &#39;/404/&#39; },</span></span>
<span class="line"><span>        { text: &#39;主页二&#39;, link: &#39;/404/Personal&#39; }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  sidebar: {</span></span>
<span class="line"><span>    &#39;/JavaScript/&#39;: concatJs(),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// JavaScript</span></span>
<span class="line"><span>function concatJs() {</span></span>
<span class="line"><span>  const arr = utils.genSidebar( &#39;JStst&#39;, filehelper.getFileName(rootpath + &#39;/JavaScript/&#39;), false);</span></span>
<span class="line"><span>  arr.push(...utils.genSidebar(&#39;Js-Vue&#39;,filehelper.getFileName(rootpath + &#39;/JavaScript/vue/&#39;, &#39;vue/&#39;),false));</span></span>
<span class="line"><span>  return arr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = themeConfig;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>通过<code>themeConfig.js</code> 把一些配置项调整放在这里，这样<code>.vuepress/config.js</code> 就可以如下代码这样写。避免文件过于太长而且代码更加优雅一些，今后一些目录调整在<code>themeConfig.js</code>稍作调整就行。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const themeConfig = require(&#39;./themeConfig&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  title: &#39;廖纯鑫博客&#39;,</span></span>
<span class="line"><span>  description: &#39;前端、前端教程、小程序、个人博客、廖纯鑫博客&#39;,</span></span>
<span class="line"><span>  themeConfig</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>参考文献：</p><ol><li><a href="https://www.jianshu.com/p/7b78f570fc4e" target="_blank" rel="noreferrer">vuepress自动生成侧边栏</a></li><li><a href="https://www.vuepress.cn/plugin/#%E6%A0%B7%E4%BE%8B" target="_blank" rel="noreferrer">VuePress 中文文档</a></li></ol><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>在项目目录下创建一个 <code>deploy.sh</code>文件，复制以下代码。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span># 上传vuepress源码及文章到码云备份</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &#39;blogCode&#39;</span></span>
<span class="line"><span>git push git@gitee.com:qqlcx5/vuePressCode.git master</span></span>
<span class="line"><span># 打包及切换到打包后文件夹</span></span>
<span class="line"><span>npm run docs:build &amp;&amp; cd docs/.vuepress/dist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 部署到码云</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span>git push -f git@gitee.com:qqlcx5/qqlcx5.git master</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 部署到github Page</span></span>
<span class="line"><span># 删除 .git目录重新上传，目前只有想的这种方法</span></span>
<span class="line"><span>rm -rf .git</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span>git push -f git@github.com:qqlcx5/qqlcx5.github.io.git master</span></span>
<span class="line"><span>cd -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>仓库地址自行更换。</p><p>window用户双击<code>deploy.sh</code> 文件便会将上传文章到码云备份，及部署到GitHub Page。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在终端且进入vuepress项目中输入：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./deploy.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果出现permission denied，就重新设置一下权限再运行，</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./deploy.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,49)])])}const m=n(l,[["render",i]]);export{o as __pageData,m as default};
