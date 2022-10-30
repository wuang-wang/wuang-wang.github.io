import{_ as n,o as s,c as a,a as t}from"./app.0a34f0c8.js";const e={},o=t(`<ul><li><code>BOM\uFF08Browser Object Model\uFF09</code>\uFF1A \u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B</li><li>\u5176\u5B9E\u5C31\u662F\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u4E00\u4E9B\u80FD\u529B</li><li>\u6211\u4EEC\u53EF\u4EE5\u64CD\u4F5C\u54EA\u4E9B\u5185\u5BB9 <ul><li>\u83B7\u53D6\u4E00\u4E9B\u6D4F\u89C8\u5668\u7684\u76F8\u5173\u4FE1\u606F\uFF08\u7A97\u53E3\u7684\u5927\u5C0F\uFF09</li><li>\u64CD\u4F5C\u6D4F\u89C8\u5668\u8FDB\u884C\u9875\u9762\u8DF3\u8F6C</li><li>\u83B7\u53D6\u5F53\u524D\u6D4F\u89C8\u5668\u5730\u5740\u680F\u7684\u4FE1\u606F</li><li>\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u6761</li><li>\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF08\u6D4F\u89C8\u5668\u7684\u7248\u672C\uFF09</li><li>\u8BA9\u6D4F\u89C8\u5668\u51FA\u73B0\u4E00\u4E2A\u5F39\u51FA\u6846\uFF08<code>alert</code> / <code>confirm</code> / <code>prompt</code>\uFF09</li><li>...</li></ul></li><li><code>BOM</code> \u7684\u6838\u5FC3\u5C31\u662F <code>window</code> \u5BF9\u8C61</li><li><code>window</code> \u662F\u6D4F\u89C8\u5668\u5185\u7F6E\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u7740\u64CD\u4F5C\u6D4F\u89C8\u5668\u7684\u65B9\u6CD5</li></ul><h2 id="\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5C3A\u5BF8" aria-hidden="true">#</a> \u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5C3A\u5BF8</h2><ul><li><p><code> innerHeight</code> \u548C <code>innerWidth</code></p></li><li><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5206\u522B\u662F\u7528\u6765\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF08\u5305\u542B\u6EDA\u52A8\u6761\u7684\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> windowHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>windowHeight<span class="token punctuation">)</span>

<span class="token keyword">var</span> windowWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>windowWidth<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u6D4F\u89C8\u5668\u7684\u5F39\u51FA\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u5F39\u51FA\u5C42" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u5F39\u51FA\u5C42</h2><ul><li><p><code>alert</code> \u662F\u5728\u6D4F\u89C8\u5668\u5F39\u51FA\u4E00\u4E2A\u63D0\u793A\u6846</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u4E00\u4E2A\u63D0\u793A\u6846&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8FD9\u4E2A\u5F39\u51FA\u5C42\u77E5\u8BC6\u4E00\u4E2A\u63D0\u793A\u5185\u5BB9\uFF0C\u53EA\u6709\u4E00\u4E2A\u786E\u5B9A\u6309\u94AE</li><li>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u4EE5\u540E\uFF0C\u8FD9\u4E2A\u63D0\u793A\u6846\u5C31\u6D88\u5931\u4E86</li></ul></li><li><p><code>confirm</code> \u662F\u5728\u6D4F\u89C8\u5668\u5F39\u51FA\u4E00\u4E2A\u8BE2\u95EE\u6846</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> boo <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u4E00\u4E2A\u8BE2\u95EE\u6846&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>boo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD9\u4E2A\u5F39\u51FA\u5C42\u6709\u4E00\u4E2A\u8BE2\u95EE\u4FE1\u606F\u548C\u4E24\u4E2A\u6309\u94AE</li><li>\u5F53\u4F60\u70B9\u51FB\u786E\u5B9A\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5F97\u5230 <code>true</code></li><li>\u5F53\u4F60\u70B9\u51FB\u53D6\u6D88\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5F97\u5230 <code>false</code></li></ul></li><li><p><code>prompt</code> \u662F\u5728\u6D4F\u89C8\u5668\u5F39\u51FA\u4E00\u4E2A\u8F93\u5165\u6846</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5185\u5BB9&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD9\u4E2A\u5F39\u51FA\u5C42\u6709\u4E00\u4E2A\u8F93\u5165\u6846\u548C\u4E24\u4E2A\u6309\u94AE</li><li>\u5F53\u4F60\u70B9\u51FB\u53D6\u6D88\u7684\u65F6\u5019\uFF0C\u5F97\u5230\u7684\u662F <code>null</code></li><li>\u5F53\u4F60\u70B9\u51FB\u786E\u5B9A\u7684\u65F6\u5019\u5F97\u5230\u7684\u5C31\u662F\u4F60\u8F93\u5165\u7684\u5185\u5BB9</li></ul></li></ul><h2 id="\u6D4F\u89C8\u5668\u7684\u5730\u5740\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u5730\u5740\u4FE1\u606F" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u5730\u5740\u4FE1\u606F</h2><ul><li>\u5728 <code>window</code> \u4E2D\u6709\u4E00\u4E2A\u5BF9\u8C61\u53EB\u505A <code>location</code></li><li>\u5C31\u662F\u4E13\u95E8\u7528\u6765\u5B58\u50A8\u6D4F\u89C8\u5668\u7684\u5730\u5740\u680F\u5185\u7684\u4FE1\u606F\u7684</li></ul><h3 id="location-href" tabindex="-1"><a class="header-anchor" href="#location-href" aria-hidden="true">#</a> location.href</h3><ul><li><p><code>location.href</code> \u8FD9\u4E2A\u5C5E\u6027\u5B58\u50A8\u7684\u662F\u6D4F\u89C8\u5668\u5730\u5740\u680F\u5185 <code>url</code> \u5730\u5740\u7684\u4FE1\u606F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F1A\u628A\u4E2D\u6587\u53D8\u6210 <code>url</code> \u7F16\u7801\u7684\u683C\u5F0F</li></ul></li><li><p><code>location.href</code> \u8FD9\u4E2A\u5C5E\u6027\u4E5F\u53EF\u4EE5\u7ED9\u4ED6\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;./index.html&#39;</span>
<span class="token comment">// \u8FD9\u4E2A\u5C31\u4F1A\u8DF3\u8F6C\u9875\u9762\u5230\u540E\u9762\u4F60\u7ED9\u7684\u90A3\u4E2A\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="location-reload" tabindex="-1"><a class="header-anchor" href="#location-reload" aria-hidden="true">#</a> location.reload</h3><ul><li><p><code>location.reload()</code> \u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u91CD\u65B0\u52A0\u8F7D\u4E00\u904D\u9875\u9762\uFF0C\u5C31\u76F8\u5F53\u4E8E\u5237\u65B0\u662F\u4E00\u4E2A\u9053\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6CE8\u610F\uFF1A <strong>\u4E0D\u8981\u5199\u5728\u5168\u5C40\uFF0C\u4E0D\u7136\u6D4F\u89C8\u5668\u5C31\u4F1A\u4E00\u76F4\u5904\u5728\u5237\u65B0\u72B6\u6001</strong></li></ul></li></ul><h2 id="\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55</h2><ul><li><code>window</code> \u4E2D\u6709\u4E00\u4E2A\u5BF9\u8C61\u53EB\u505A <code>history</code></li><li>\u662F\u4E13\u95E8\u7528\u6765\u5B58\u50A8\u5386\u53F2\u8BB0\u5F55\u4FE1\u606F\u7684</li></ul><h3 id="history-back" tabindex="-1"><a class="header-anchor" href="#history-back" aria-hidden="true">#</a> history.back</h3><ul><li><p><code>history.back</code> \u662F\u7528\u6765\u4F1A\u9000\u5386\u53F2\u8BB0\u5F55\u7684\uFF0C\u5C31\u662F\u56DE\u5230\u524D\u4E00\u4E2A\u9875\u9762\uFF0C\u5C31\u76F8\u5F53\u4E8E\u6D4F\u89C8\u5668\u4E0A\u7684 \u2B05\uFE0F \u6309\u94AE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u524D\u63D0\u662F\u4F60\u8981\u6709\u4E0A\u4E00\u6761\u8BB0\u5F55\uFF0C\u4E0D\u7136\u5C31\u662F\u4E00\u76F4\u5728\u8FD9\u4E2A\u9875\u9762\uFF0C\u4E5F\u4E0D\u4F1A\u56DE\u9000</li></ul></li></ul><h3 id="history-forword" tabindex="-1"><a class="header-anchor" href="#history-forword" aria-hidden="true">#</a> history.forword</h3><ul><li><p><code>history.forword</code> \u662F\u53BB\u5230\u4E0B\u4E00\u4E2A\u5386\u53F2\u8BB0\u5F55\u91CC\u9762\uFF0C\u4E5F\u5C31\u662F\u53BB\u5230\u4E0B\u4E00\u4E2A\u9875\u9762\uFF0C\u5C31\u76F8\u5F53\u4E8E\u6D4F\u89C8\u5668\u4E0A\u7684 \u27A1\uFE0F \u6309\u94AE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u524D\u63D0\u662F\u4F60\u8981\u4E4B\u524D\u6709\u8FC7\u56DE\u9000\u64CD\u4F5C\uFF0C\u4E0D\u7136\u7684\u8BDD\u4F60\u73B0\u5728\u5C31\u662F\u6700\u540E\u4E00\u4E2A\u9875\u9762\uFF0C\u6CA1\u6709\u4E0B\u4E00\u4E2A</li></ul></li></ul><h2 id="\u6D4F\u89C8\u5668\u7684-onload-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684-onload-\u4E8B\u4EF6" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684 onload \u4E8B\u4EF6</h2><ul><li><p>\u8FD9\u4E2A\u4E0D\u5728\u662F\u5BF9\u8C61\u4E86\uFF0C\u800C\u662F\u4E00\u4E2A\u4E8B\u4EF6</p></li><li><p>\u662F\u5728\u9875\u9762\u6240\u6709\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6BD5\u540E\u6267\u884C\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u9875\u9762\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u5728-html-\u9875\u9762\u4E2D\u628A-js-\u5199\u5728-head-\u91CC\u9762" tabindex="-1"><a class="header-anchor" href="#\u5728-html-\u9875\u9762\u4E2D\u628A-js-\u5199\u5728-head-\u91CC\u9762" aria-hidden="true">#</a> \u5728 html \u9875\u9762\u4E2D\u628A js \u5199\u5728 head \u91CC\u9762</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    	<span class="token comment">// \u8FD9\u4E2A\u4EE3\u7801\u6267\u884C\u7684\u65F6\u5019\uFF0Cbody \u8FD8\u6CA1\u6709\u52A0\u8F7D</span>
      <span class="token comment">// \u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u83B7\u53D6\u4E0D\u5230 body \u4E2D\u7684\u90A3\u4E2A div</span>

      <span class="token comment">// \u5C31\u9700\u8981\u4F7F\u7528 window.onload \u4E8B\u4EF6</span>
      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u4E2A\u51FD\u6570\u4F1A\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u4EE5\u540E\u5728\u6267\u884C</span>
        <span class="token comment">// \u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u9875\u9762\u7684 DOM \u5143\u7D20\u90FD\u5DF2\u7ECF\u52A0\u8F7D\u4E86\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u83B7\u53D6 div \u4E86</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728-html-\u9875\u9762\u4E2D\u628A-js-\u5199\u5728-body-\u6700\u540E\u9762" tabindex="-1"><a class="header-anchor" href="#\u5728-html-\u9875\u9762\u4E2D\u628A-js-\u5199\u5728-body-\u6700\u540E\u9762" aria-hidden="true">#</a> \u5728 html \u9875\u9762\u4E2D\u628A js \u5199\u5728 body \u6700\u540E\u9762</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    	<span class="token comment">// \u8FD9\u4E2A\u4EE3\u7801\u6267\u884C\u7684\u65F6\u5019\uFF0Cbody \u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5\u4E86</span>
      <span class="token comment">// \u5728\u8FD9\u91CC\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230 div\uFF0C\u5199\u4E0D\u5199 window.onload \u5C31\u65E0\u6240\u8C13\u4E86</span>

      window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u4E2A\u51FD\u6570\u4F1A\u5728\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u4EE5\u540E\u5728\u6267\u884C</span>
        <span class="token comment">// \u90A3\u4E48\u8FD9\u4E2A\u65F6\u5019\u9875\u9762\u7684 DOM \u5143\u7D20\u90FD\u5DF2\u7ECF\u52A0\u8F7D\u4E86\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u83B7\u53D6 div \u4E86</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4F\u89C8\u5668\u7684-onscroll-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684-onscroll-\u4E8B\u4EF6" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684 onscroll \u4E8B\u4EF6</h2><ul><li><p>\u8FD9\u4E2A <code>onscroll</code> \u4E8B\u4EF6\u662F\u5F53\u6D4F\u89C8\u5668\u7684\u6EDA\u52A8\u6761\u6EDA\u52A8\u7684\u65F6\u5019\u89E6\u53D1</p></li><li><p>\u6216\u8005\u9F20\u6807\u6EDA\u8F6E\u6EDA\u52A8\u7684\u65F6\u5019\u51FA\u53D1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6D4F\u89C8\u5668\u6EDA\u52A8\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CE8\u610F\uFF1A<strong>\u524D\u63D0\u662F\u9875\u9762\u7684\u9AD8\u5EA6\u8981\u8D85\u8FC7\u6D4F\u89C8\u5668\u7684\u53EF\u662F\u7A97\u53E3\u624D\u53EF\u4EE5</strong></li></ul></li></ul><h2 id="\u6D4F\u89C8\u5668\u6EDA\u52A8\u7684\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u6EDA\u52A8\u7684\u8DDD\u79BB" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u6EDA\u52A8\u7684\u8DDD\u79BB</h2><ul><li>\u6D4F\u89C8\u5668\u5185\u7684\u5185\u5BB9\u5373\u7136\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u6D4F\u89C8\u5668\u6EDA\u52A8\u7684\u8DDD\u79BB</li><li>\u601D\u8003\u4E00\u4E2A\u95EE\u9898\uFF1F <ul><li>\u6D4F\u89C8\u5668\u771F\u7684\u6EDA\u52A8\u4E86\u5417\uFF1F</li><li>\u5176\u5B9E\u6211\u4EEC\u7684\u6D4F\u89C8\u5668\u662F\u6CA1\u6709\u6EDA\u52A8\u7684\uFF0C\u662F\u4E00\u76F4\u5728\u90A3\u91CC</li><li>\u6EDA\u52A8\u7684\u662F\u4EC0\u4E48\uFF1F\u662F\u6211\u4EEC\u7684\u9875\u9762</li><li>\u6240\u4EE5\u8BF4\uFF0C<strong>\u5176\u5B9E\u6D4F\u89C8\u5668\u6CA1\u6709\u52A8\uFF0C\u53EA\u4E0D\u8FC7\u662F\u9875\u9762\u5411\u4E0A\u8D70\u4E86</strong></li></ul></li><li>\u6240\u4EE5\uFF0C\u8FD9\u4E2A\u5DF2\u7ECF\u4E0D\u80FD\u5355\u7EAF\u7684\u7B97\u662F\u6D4F\u89C8\u5668\u7684\u5185\u5BB9\u4E86\uFF0C\u800C\u662F\u6211\u4EEC\u9875\u9762\u7684\u5185\u5BB9</li><li>\u6240\u4EE5\u4E0D\u662F\u5728\u7528 <code>window</code> \u5BF9\u8C61\u4E86\uFF0C\u800C\u662F\u4F7F\u7528 <code>document</code> \u5BF9\u8C61</li></ul><h3 id="scrolltop" tabindex="-1"><a class="header-anchor" href="#scrolltop" aria-hidden="true">#</a> scrollTop</h3><ul><li><p>\u83B7\u53D6\u7684\u662F\u9875\u9762\u5411\u4E0A\u6EDA\u52A8\u7684\u8DDD\u79BB</p></li><li><p>\u4E00\u5171\u6709\u4E24\u4E2A\u83B7\u53D6\u65B9\u5F0F</p><ul><li><code>document.body.scrollTop</code></li><li><code>document.documentElement.scrollTop</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E24\u4E2A\u90FD\u662F\u83B7\u53D6\u9875\u9762\u5411\u4E0A\u6EDA\u52A8\u7684\u8DDD\u79BB</li><li>\u533A\u522B\uFF1A <ul><li>IE \u6D4F\u89C8\u5668 <ul><li>\u6CA1\u6709 <code>DOCTYPE</code> \u58F0\u660E\u7684\u65F6\u5019\uFF0C\u7528\u8FD9\u4E24\u4E2A\u90FD\u884C</li><li>\u6709 <code>DOCTYPE</code> \u58F0\u660E\u7684\u65F6\u5019\uFF0C\u53EA\u80FD\u7528 <code>document.documentElement.scrollTop</code></li></ul></li><li>Chrome \u548C FireFox <ul><li>\u6CA1\u6709 <code>DOCTYPE</code> \u58F0\u660E\u7684\u65F6\u5019\uFF0C\u7528 <code>document.body.scrollTop</code></li><li>\u6709 <code>DOCTYPE</code> \u58F0\u660E\u7684\u65F6\u5019\uFF0C\u7528 <code>document.documentElement.scrollTop</code></li></ul></li><li>Safari <ul><li>\u4E24\u4E2A\u90FD\u4E0D\u7528\uFF0C\u4F7F\u7528\u4E00\u4E2A\u5355\u72EC\u7684\u65B9\u6CD5 <code>window.pageYOffset </code></li></ul></li></ul></li></ul></li></ul><h3 id="scrollleft" tabindex="-1"><a class="header-anchor" href="#scrollleft" aria-hidden="true">#</a> scrollLeft</h3><ul><li><p>\u83B7\u53D6\u9875\u9762\u5411\u5DE6\u6EDA\u52A8\u7684\u8DDD\u79BB</p></li><li><p>\u4E5F\u662F\u4E24\u4E2A\u65B9\u6CD5</p><ul><li><p><code>document.body.scrollLeft</code></p></li><li><p><code>document.documentElementLeft</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E24\u4E2A\u4E4B\u95F4\u7684\u533A\u522B\u548C\u4E4B\u524D\u7684 <code>scrollTop</code> \u4E00\u6837</p></li></ul></li></ul><h2 id="\u672C\u5730\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a> \u672C\u5730\u5B58\u50A8</h2><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u589E</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;kerwin&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u53D6</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u5220</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u6E05\u7A7A</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u589E</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;kerwin&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u53D6</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u5220</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//\u6E05\u7A7A</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),l=[o];function c(i,p){return s(),a("div",null,l)}var d=n(e,[["render",c],["__file","JavaScript_BOM.html.vue"]]);export{d as default};
