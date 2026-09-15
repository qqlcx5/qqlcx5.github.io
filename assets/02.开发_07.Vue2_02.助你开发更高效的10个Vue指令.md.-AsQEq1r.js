import{bV as n,aL as a,u as p,G as e}from"./chunks/framework.DvBUyM1S.js";const d=JSON.parse('{"title":"助你开发更高效的10个Vue指令","description":"","frontmatter":{"title":"助你开发更高效的10个Vue指令","date":"2022-01-08T19:41:00.000Z","permalink":"/pages/d765c6/","categories":["前端","Vue2"],"tags":[null]},"headers":[],"relativePath":"02.开发/07.Vue2/02.助你开发更高效的10个Vue指令.md","filePath":"02.开发/07.Vue2/02.助你开发更高效的10个Vue指令.md","lastUpdated":1652078909000}'),l={name:"02.开发/07.Vue2/02.助你开发更高效的10个Vue指令.md"};function i(t,s,r,c,b,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="助你开发更高效的-10-个-vue-指令" tabindex="-1">助你开发更高效的 10 个 Vue 指令 <a class="header-anchor" href="#助你开发更高效的-10-个-vue-指令" aria-label="Permalink to &quot;助你开发更高效的 10 个 Vue 指令&quot;">​</a></h1><blockquote><p>说明：本章内容来源<a href="https://dev.to/simonholdorf/10-vue-directives-that-make-your-dev-lives-easier-5dm7/" target="_blank" rel="noreferrer">https://dev.to/simonholdorf/10-vue-directives-that-make-your-dev-lives-easier-5dm7/</a></p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>Vue.js 最大的特点之一就是它有内置的指令，就像最初的 AngularJS 一样(这是人们认为 Vue 像 Angular 的原因之一)。 这些指令使开发更加容易，但更好的是，您可以编写自己的自定义指令。在本文中，我将向您展示由 Vue 社区制作 10 个很酷的指令，您可以立即在项目中使用它们，以节省您的时间和精力，并将您的 Vue 项目提升到一个新的水平。</p><h3 id="_1-vue-lazyload" tabindex="-1">1.Vue-Lazyload <a class="header-anchor" href="#_1-vue-lazyload" aria-label="Permalink to &quot;1.Vue-Lazyload&quot;">​</a></h3><p>这个项目在 Github 上有超过 5800 个 Star，Hilongjw 的 Vue-Lazyload 可让你无延迟地懒加载图片！</p><p>项目地址：<code>https://github.com/hilongjw/vue-lazyload</code></p><p>安装方式：<code>npm i vue-lazyload -S</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;img v-lazy=&quot;https://www.example.com/example-image.jpg&quot;&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>效果演示：</p><p><img src="https://user-gold-cdn.xitu.io/2019/12/21/16f2805de61662a4?w=412&amp;h=482&amp;f=gif&amp;s=2234087" alt="" loading="lazy"></p><h3 id="_2-vue-infinite-scroll" tabindex="-1">2.Vue-Infinite-Scroll <a class="header-anchor" href="#_2-vue-infinite-scroll" aria-label="Permalink to &quot;2.Vue-Infinite-Scroll&quot;">​</a></h3><p>如果您想在访问者到达底部时在网页上加载新元素，这会是一个很好且易于实现的指令。当滚动到页面底部时，将执行绑定到 v-infinite-scroll 的方法。</p><p>项目地址：<code>https://github.com/ElemeFE/vue-infinite-scroll</code></p><p>安装方式：<code>npm install vue-infinite-scroll --save</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  /* your website code   */</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    v-infinite-scroll=&quot;onLoadMore&quot;</span></span>
<span class="line"><span>    infinite-scroll-disabled=&quot;busy&quot;</span></span>
<span class="line"><span>    infinite-scroll-distance=&quot;10&quot;</span></span>
<span class="line"><span>  &gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      data [],</span></span>
<span class="line"><span>      busy: false,</span></span>
<span class="line"><span>      count: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    onLoadMore() {</span></span>
<span class="line"><span>      this.busy = true;</span></span>
<span class="line"><span>      setTimeout(() =&gt; {</span></span>
<span class="line"><span>        for (var i = 0, j = 10; i &lt; j; i++) {</span></span>
<span class="line"><span>          this.data.push({ name: this.count++ });</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this.busy = false;</span></span>
<span class="line"><span>      }, 1000);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="_3-vue-focus" tabindex="-1">3.Vue-Focus <a class="header-anchor" href="#_3-vue-focus" aria-label="Permalink to &quot;3.Vue-Focus&quot;">​</a></h3><p>有时在 Web 开发中，管理输入焦点可能很棘手。Vue-Focus 可以帮助您直接从视图模型管理焦点。</p><p>项目地址：<code>https://github.com/simplesmiler/vue-focus</code></p><p>安装方式：<code>npm install vue-focus --save</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;focusedElement = true&quot;&gt;Input gets Focus&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-focus=&quot;focusedElement&quot;&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data: function() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      focusedElement: false,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>效果演示：</p><h3 id="_4-vue-blur" tabindex="-1">4.Vue-Blur <a class="header-anchor" href="#_4-vue-blur" aria-label="Permalink to &quot;4.Vue-Blur&quot;">​</a></h3><p>如果你的页面在访客尚未注册的时候，有些部分需要加上半透明遮罩，那么 Vue-Blur 是一个不错的选择。它还带有用于自定义参数的选项，例如不透明度，过滤器和状态之间的转换。</p><p>项目地址：<code>https://github.com/ndelvalle/v-blur</code></p><p>安装方式：<code>npm install --save v-blur</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  /* Use this with a boolean value (true/false) */</span></span>
<span class="line"><span>  &lt;div v-blur=&quot;isBlurred&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* Use this with an object that uses values from the config */</span></span>
<span class="line"><span>  &lt;div v-blur=&quot;blurConfig&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  export default {</span></span>
<span class="line"><span>      data () {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          isBlurred: true, // activate and deactivate based on a boolean value</span></span>
<span class="line"><span>          blurConfig: {</span></span>
<span class="line"><span>            isBlurred: false, // activate and deactivate based on a boolean value and also provide a config</span></span>
<span class="line"><span>            opacity: 0.3,</span></span>
<span class="line"><span>            filter: &#39;blur(1.2px)&#39;,</span></span>
<span class="line"><span>            transition: &#39;all .3s linear&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>效果演示：</p><p><img src="https://user-gold-cdn.xitu.io/2019/12/21/16f285da75153b0a?w=568&amp;h=374&amp;f=gif&amp;s=134782" alt="" loading="lazy"></p><h3 id="_5-v-clipboard" tabindex="-1">5.V-Clipboard <a class="header-anchor" href="#_5-v-clipboard" aria-label="Permalink to &quot;5.V-Clipboard&quot;">​</a></h3><p>这是一个小巧而实用的包，您可以使用它将值从元素复制到用户的剪贴板，而不必实现大量的逻辑。它可以复制静态或动态值，当元素被点击时，指令的值会被复制到剪贴板上。用户需要复制代码片段的时候，这个就排上用场。</p><p>项目地址：<code>https://github.com/euvl/v-clipboard</code></p><p>安装方式：<code>npm install --save v-clipboard</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button v-clipboard=&#39;valueToCopy&#39;&gt;Copy to clipboard&lt;/button&gt;</span></span>
<span class="line"><span>  // 当单击包含v-clipboard指令的元素时，valueToCopy的值将被复制到剪贴板中</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      valueToCopy: &quot;Some Text&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_6-vue-scrollto" tabindex="-1">6.Vue-ScrollTo <a class="header-anchor" href="#_6-vue-scrollto" aria-label="Permalink to &quot;6.Vue-ScrollTo&quot;">​</a></h3><p>滚动元素从未如此简单！ 你可以监听元素上的点击事件，让浏览器滚动到给定的标签，这对于处理文章目录跳转和导航跳转非常有用！</p><p>项目地址：<code>https://github.com/rigor789/vue-scrollTo</code></p><p>安装方式：<code>npm install --save vue-scrollto</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button v-scroll-to=&quot;&#39;#element&#39;&quot;&gt;Scroll to #element as the target&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;h1 id=&#39;element&#39;&gt;Hi. I&#39;m element&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果演示： <img src="https://user-gold-cdn.xitu.io/2019/12/21/16f28ba3b7e45fc3?w=467&amp;h=132&amp;f=gif&amp;s=29774" alt="" loading="lazy"></p><h3 id="_7-v-hotkey" tabindex="-1">7.V-Hotkey <a class="header-anchor" href="#_7-v-hotkey" aria-label="Permalink to &quot;7.V-Hotkey&quot;">​</a></h3><p>这个自定义指令可以使您可以轻松地将快捷键绑定到组件,而且可以给组件绑定一个或多个快捷键。比如你想要通过按下 <code>esc</code>键后隐藏某个组件，按住<code>ctrl+enter</code> 再显示它,下面代码便可轻松实现：</p><p>项目地址：<code>https://github.com/Dafrok/v-hotkey</code></p><p>安装方式：<code>npm i --save v-hotkey</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-show=&quot;show&quot;</span></span>
<span class="line"><span>       v-hotkey=&quot;{</span></span>
<span class="line"><span>      &#39;esc&#39;: onClose,</span></span>
<span class="line"><span>      &#39;ctrl+enter&#39;: onShow</span></span>
<span class="line"><span>    }&quot;&gt;</span></span>
<span class="line"><span>    Hold \`esc\` to close me! Press \`ctrl+enter\` to open me!</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      show: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    onClose () {</span></span>
<span class="line"><span>      this.show = false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    onShow () {</span></span>
<span class="line"><span>      this.show = true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_8-v-click-outside" tabindex="-1">8.V-Click-Outside <a class="header-anchor" href="#_8-v-click-outside" aria-label="Permalink to &quot;8.V-Click-Outside&quot;">​</a></h3><p>这是一个很棒的指令，可以在不停止事件传播的情况下对单击元素上的事件做出反应。这对于关闭对话框、菜单等非常有用。</p><p>项目地址：<code>https://github.com/ndelvalle/v-click-outside</code></p><p>安装方式：<code>npm install --save v-click-outside</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-show=&quot;show&quot; v-click-outside=&quot;onClickOutside&quot;&gt;</span></span>
<span class="line"><span>    Hide the element if a click event outside is triggered</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      show: true</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    onClickOutside() {</span></span>
<span class="line"><span>      console.log(11111);</span></span>
<span class="line"><span>      this.show = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>效果演示：</p><p><img src="https://user-gold-cdn.xitu.io/2019/12/21/16f28fbfa370c816?w=590&amp;h=235&amp;f=gif&amp;s=33892" alt="" loading="lazy"></p><h3 id="_9-v-scroll-lock" tabindex="-1">9.V-Scroll-Lock <a class="header-anchor" href="#_9-v-scroll-lock" aria-label="Permalink to &quot;9.V-Scroll-Lock&quot;">​</a></h3><p>这个指令的作用是在打开模态浮层的时候防止下层的元素滚动。在处理多个设备时，这尤其有用！</p><p>项目地址：<code>https://github.com/phegman/v-scroll-lock</code></p><p>安装方式：<code>npm install v-scroll-lock --save</code></p><p>使用场景：<code>https://v-scroll-lock.peterhegman.com/</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;modal&quot; v-if=&quot;open&quot;&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;closeModal&quot;&gt;X&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;modal-content&quot; v-scroll-lock=&quot;open&quot;&gt;</span></span>
<span class="line"><span>      &lt;p&gt;A bunch of scrollable modal content&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Modal&#39;,</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      open: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    openModal () {</span></span>
<span class="line"><span>      this.open = true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    closeModal () {</span></span>
<span class="line"><span>      this.open = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_10-v-tooltip" tabindex="-1">10.V-Tooltip <a class="header-anchor" href="#_10-v-tooltip" aria-label="Permalink to &quot;10.V-Tooltip&quot;">​</a></h3><p>Akryum 的这个很酷的软件包为您提供了一个很棒的工具提示指令。只需将一些文本绑定到 v-tooltip，就可以了。</p><p>项目地址：<code>https://github.com/Akryum/v-tooltip</code></p><p>安装方式：<code>npm install --save v-tooltip</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;</span></span>
<span class="line"><span>      &lt;input v-model=&quot;message&quot; placeholder=&quot;Message&quot;&gt;</span></span>
<span class="line"><span>    &lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;</span></span>
<span class="line"><span>      &lt;span v-tooltip=&quot;message&quot;&gt;{{ message }}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>在本文中，我收集了 10 个很棒的自定义 Vue 指令，您可以在未来的项目中使用这些指令，而不必每次都自己重新造轮子。</p>`,65)])])}const m=n(l,[["render",i]]);export{d as __pageData,m as default};
