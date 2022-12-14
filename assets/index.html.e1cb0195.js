import{_ as n,o as s,c as a,a as t}from"./app.e5164416.js";const e={},p=t(`<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a></p><h2 id="\u4E09\u5927\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5927\u7279\u6027" aria-hidden="true">#</a> \u4E09\u5927\u7279\u6027</h2><ul><li>\u5C42\u53E0\u6027\uFF1Acss\u6837\u5F0F\u51B2\u7A81\u91C7\u53D6\u7684\u539F\u5219\uFF08\u540E\u8005\u8986\u76D6\u524D\u8005)</li><li>\u7EE7\u627F\u6027\uFF1A\u5BF9\u4E8E\u90E8\u5206\u5C5E\u6027\u6837\u5F0F\u4F1A\u6709\u5929\u751F\u7684\u7EE7\u627F</li><li>\u4F18\u5148\u7EA7\uFF1A\u9009\u62E9\u5668\u4F18\u5148\u7EA7\u7B97\u6CD5</li></ul><h2 id="\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a> \u9009\u62E9\u5668</h2><h3 id="\u57FA\u672C\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u9009\u62E9\u5668" aria-hidden="true">#</a> \u57FA\u672C\u9009\u62E9\u5668</h3><ul><li>\u7C7B\u540D\uFF1A<code>.box</code></li><li>\u6807\u7B7E: <code>div</code></li><li>\u5C5E\u6027: <code>input[type=&quot;eamil&quot;] | a[href*=&quot;http://www.beige.world&quot;]</code></li><li>ID: <code>#box</code></li></ul><h3 id="\u4F2A\u7C7B\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u7C7B\u9009\u62E9\u5668" aria-hidden="true">#</a> \u4F2A\u7C7B\u9009\u62E9\u5668</h3><ul><li>\u7ED3\u6784\u4F2A\u7C7B: <code>:nth-child(n) | :nth-of-type(n) | :hover </code></li><li>\u4F2A\u5143\u7D20: <code>::before | ::after </code></li></ul><h3 id="\u7EC4\u5408\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u9009\u62E9\u5668" aria-hidden="true">#</a> \u7EC4\u5408\u9009\u62E9\u5668</h3><ul><li>\u76F8\u90BB\u5144\u5F1F <code>A + B</code></li><li>\u666E\u901A\u5144\u5F1F <code>A ~ B</code></li><li>\u5B50\u9009\u62E9\u5668 <code>A &gt; B</code></li><li>\u540E\u4EE3\u9009\u62E9\u5668 <code>A B</code></li></ul><h2 id="\u5E38\u7528\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5C5E\u6027" aria-hidden="true">#</a> \u5E38\u7528\u5C5E\u6027</h2><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><h4 id="\u7236\u9879\u5E38\u7528\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7236\u9879\u5E38\u7528\u5C5E\u6027" aria-hidden="true">#</a> \u7236\u9879\u5E38\u7528\u5C5E\u6027</h4><ul><li><code>flex-direction</code>\uFF1A\u8BBE\u7F6E\u4E3B\u8F74\u7684\u65B9\u5411</li><li><code>justify-content</code>\uFF1A\u8BBE\u7F6E\u4E3B\u8F74\u4E0A\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F</li><li><code>flex-wrap</code>\uFF1A\u8BBE\u7F6E\u5B50\u5143\u7D20\u662F\u5426\u6362\u884C</li><li><code>align-content</code>\uFF1A\u8BBE\u7F6E\u4FA7\u8F74\u4E0A\u7684\u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5F0F\uFF08\u591A\u884C\uFF09</li><li><code>align-items</code>\uFF1A\u8BBE\u7F6E\u4FA7\u8F74\u4E0A\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F\uFF08\u5355\u884C\uFF09</li><li><code>flex-flow</code>\uFF1A\u590D\u5408\u5C5E\u6027\uFF0C\u76F8\u5F53\u4E8E\u540C\u65F6\u8BBE\u7F6E\u4E86 flex-direction \u548C flex-wrap</li></ul><p><strong>flex-direction</strong></p><p>\u5728 flex \u5E03\u5C40\u4E2D\uFF0C\u662F\u5206\u4E3A\u4E3B\u8F74\u548C\u4FA7\u8F74\u4E24\u4E2A\u65B9\u5411\uFF0C\u540C\u6837\u7684\u53EB\u6CD5\u6709 \uFF1A \u884C\u548C\u5217\u3001x \u8F74\u548Cy \u8F74</p><ul><li>\u9ED8\u8BA4\u4E3B\u8F74\u65B9\u5411\u5C31\u662F x \u8F74\u65B9\u5411\uFF0C\u6C34\u5E73\u5411\u53F3</li><li>\u9ED8\u8BA4\u4FA7\u8F74\u65B9\u5411\u5C31\u662F y \u8F74\u65B9\u5411\uFF0C\u6C34\u5E73\u5411\u4E0B</li></ul><blockquote><p>\u4E3B\u8F74\u548C\u4FA7\u8F74\u662F\u4F1A\u53D8\u5316\u7684\uFF0C\u5C31\u770B flex-direction \u8BBE\u7F6E\u8C01\u4E3A\u4E3B\u8F74\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u4FA7\u8F74\u3002\u800C\u6211\u4EEC\u7684\u5B50\u5143\u7D20\u662F\u8DDF\u7740\u4E3B\u8F74\u6765\u6392\u5217\u7684</p></blockquote><p><strong>flex-wrap\u8BBE\u7F6E\u662F\u5426\u6362\u884C</strong></p><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9879\u76EE\u90FD\u6392\u5728\u4E00\u6761\u7EBF\uFF08\u53C8\u79F0\u201D\u8F74\u7EBF\u201D\uFF09\u4E0A\u3002flex-wrap\u5C5E\u6027\u5B9A\u4E49\uFF0Cflex\u5E03\u5C40\u4E2D\u9ED8\u8BA4\u662F\u4E0D\u6362\u884C\u7684\u3002</li><li>nowrap \u4E0D\u6362\u884C</li><li>wrap \u6362\u884C</li></ul><p><strong>justify-content \u8BBE\u7F6E\u4E3B\u8F74\u4E0A\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F</strong></p><blockquote><p>\u8FD9\u91CC\u8BB2\u4E0B<code>space-around</code>\u548C<code>space-evenly</code></p></blockquote><ul><li><p>space-around\uFF1A\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u8DDD\u4E3A\u5DE6\u53F3\u4E24\u4FA7\u9879\u76EE\u5230\u5BB9\u5668\u95F4\u8DDD\u76842\u500D\u3002</p></li><li><p>space-evenly\uFF1A\u9879\u76EE\u4E24\u4FA7\u4E4B\u95F4\u7684\u95F4\u8DDD\u4E0E\u9879\u76EE\u4E0E\u5BB9\u5668\u4E24\u4FA7\u7684\u95F4\u8DDD\u76F8\u7B49\uFF0C\u76F8\u5F53\u4E8E\u9664\u53BB\u9879\u76EE\u5BBD\u5EA6\u548C\u5BB9\u5668\u548C\u9879\u76EE\u7684\u4E24\u4FA7\u95F4\u8DDD\uFF0C\u5269\u4E0B\u7684\u5E73\u5747\u5206\u914D\u4E86\u5269\u4F59\u5BBD\u5EA6\u4F5C\u4E3A\u9879\u76EE\u5DE6\u53F3margin\u3002</p></li></ul><p>**\u8BBE\u7F6E\u4FA7\u8F74\u4E0A\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F\uFF1Aalign-items(\u5355\u884C)/align-content(\u591A\u884C) **</p><blockquote><p>\u4E0A\u56FE\u5199\u80FD<code>\u8BBE\u7F6E\u591A\u884C</code>\u53EA\u80FD\u7528\u4E8E\u5B50\u9879\u51FA\u73B0 \u6362\u884C \u7684\u60C5\u51B5\uFF08\u591A\u884C\uFF09\uFF0C\u5728\u5355\u884C\u4E0B\u662F\u6CA1\u6709\u6548\u679C\u7684\u3002</p></blockquote><p>\u6548\u679C\u8DDF\u4E0A\u9762\u662F\u4E00\u6837\u7684\u53EA\u4E0D\u8FC7\u662F\u65B9\u5411\u6362\u4E86\uFF0C\u4E0A\u9762\u662F\u5143\u7D20\u5728\u4E3B\u8F74\u4E0A\u6392\u5217\uFF0C\u8FD9\u4E2A\u662F\u5728\u4FA7\u62BD\u4E0A\uFF0C\u81F3\u4E8E\u4FA7\u8F74\u662F\u4E0D\u662FY\u8F74\u5C31\u770B\u4F60\u7684<code>flex-direciton</code>\u600E\u4E48\u8BBE\u7F6E\u7684\u4E86</p><h4 id="\u5B50\u9879\u5E38\u89C1\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9879\u5E38\u89C1\u5C5E\u6027" aria-hidden="true">#</a> \u5B50\u9879\u5E38\u89C1\u5C5E\u6027</h4><ul><li>flex(\u590D\u5408\u5C5E\u6027): \u9ED8\u8BA4: flex: 0 1 auto; <ul><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li></ul></li><li>align-self\uFF1A\u63A7\u5236\u5B50\u9879\u81EA\u5DF1\u5728\u4FA7\u8F74\u7684\u6392\u5217\u65B9\u5F0F</li><li>order\uFF1A\u5B9A\u4E49\u5B50\u9879\u7684\u6392\u5217\u987A\u5E8F(\u524D\u540E\u987A\u5E8F), 0\u662F\u7B2C\u4E00\u4E2A</li></ul><p><strong>flex-grow</strong></p><blockquote><p>\u9ED8\u8BA40\uFF0C\u7528\u4E8E\u51B3\u5B9A\u9879\u76EE\u5728\u6709\u5269\u4F59\u7A7A\u95F4\u7684\u60C5\u51B5\u4E0B\u662F\u5426\u653E\u5927\uFF0C\u9ED8\u8BA4\u4E0D\u653E\u5927\uFF1B\u6CE8\u610F\uFF0C\u5373\u4FBF\u8BBE\u7F6E\u4E86\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u4E5F\u4F1A\u653E\u5927\u3002</p></blockquote><p>\u5047\u8BBE\u7B2C\u4E00\u4E2A\u9879\u76EE\u9ED8\u8BA4\u4E3A0\uFF0C\u7B2C\u4E8C\u4E2A\u9879\u76EE\u4E3Aflex-grow:2\uFF0C\u6700\u540E\u4E00\u4E2A\u9879\u76EE\u4E3A1\uFF0C\u5219\u7B2C\u4E8C\u4E2A\u9879\u76EE\u5728\u653E\u5927\u65F6\u6240\u5360\u7A7A\u95F4\u662F\u6700\u540E\u9879\u76EE\u7684\u4E24\u500D\u3002</p><p>\u53EF\u4EE5\u8FD9\u4E48\u7406\u89E3:</p><ul><li>flex: 1 =&gt; \u5728\u5269\u4F59\u7684\u7A7A\u95F4\u91CC\u6211\u5C31\u5360\u4E00\u4EFD</li><li>flex: 2 =&gt; \u5728\u5269\u4F59\u7684\u7A7A\u95F4\u91CC\u6211\u5C31\u5360\u4E24\u4EFD</li><li>flex: 3 =&gt; \u5728\u5269\u4F59\u7684\u7A7A\u95F4\u91CC\u6211\u5C31\u5360\u4E09\u4EFD</li></ul><p><strong>flex-shrink</strong></p><blockquote><p>\u9ED8\u8BA41\uFF0C\u7528\u4E8E\u51B3\u5B9A\u9879\u76EE\u5728\u7A7A\u95F4\u4E0D\u8DB3\u65F6\u662F\u5426\u7F29\u5C0F\uFF0C\u9ED8\u8BA4\u9879\u76EE\u90FD\u662F1\uFF0C\u5373\u7A7A\u95F4\u4E0D\u8DB3\u65F6\u5927\u5BB6\u4E00\u8D77\u7B49\u6BD4\u7F29\u5C0F\uFF1B\u6CE8\u610F\uFF0C\u5373\u4FBF\u8BBE\u7F6E\u4E86\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u4E5F\u4F1A\u7F29\u5C0F\u3002\u4F46\u5982\u679C\u67D0\u4E2A\u9879\u76EEflex-shrink\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u5373\u4FBF\u7A7A\u95F4\u4E0D\u591F\uFF0C\u81EA\u8EAB\u4E5F\u4E0D\u7F29\u5C0F\u3002</p></blockquote><p><strong>flex-basis</strong></p><blockquote><p>\u9ED8\u8BA4auto\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u9879\u76EE\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4auto\u65F6\uFF0C\u9879\u76EE\u4F1A\u4FDD\u6301\u9ED8\u8BA4\u5BBD\u5EA6\uFF0C\u6216\u8005\u4EE5width\u4E3A\u81EA\u8EAB\u7684\u5BBD\u5EA6\uFF0C\u4F46\u5982\u679C\u8BBE\u7F6E\u4E86flex-basis\uFF0C\u6743\u91CD\u4F1Awidth\u5C5E\u6027\u9AD8\uFF0C\u56E0\u6B64\u4F1A\u8986\u76D6widtn\u5C5E\u6027\u3002</p></blockquote><p>\u4E0A\u56FE\u4E2D\u5148\u8BBE\u7F6E\u4E86flex-basis\u5C5E\u6027\uFF0C\u540E\u8BBE\u7F6E\u4E86width\u5C5E\u6027\uFF0C\u4F46\u5BBD\u5EA6\u4F9D\u65E7\u4EE5flex-basis\u5C5E\u6027\u4E3A\u51C6\u3002</p><blockquote><p>\u6CE8\u610F\u26A0: \u5982\u679C\u5F53\u5BB9\u5668\u4E2D\u6709\u591A\u4E2A\u76D2\u5B50\u5E76\u4E14\u8FD8\u5BBD\u5EA6100%, flex-basis\u4F1A\u88AB\u5F71\u54CD, \u5982\u4E0B\u56FE</p></blockquote><p>\u89E3\u51B3\u529E\u6CD5\u5C31\u662F\u5728\u6211\u4EEC\u8BBE\u7F6E<code>flex-basis</code>\u5BBD\u5EA6\u65F6, \u6700\u597D\u7ED9\u4ED6\u8BBE\u7F6E<code>flex-shrink</code>\u4E3A0\u4E0D\u7F29\u653E</p><h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h3><blockquote><p>**<code>transform</code>**\u5C5E\u6027\u5141\u8BB8\u4F60\u65CB\u8F6C\uFF0C\u7F29\u653E\uFF0C\u503E\u659C\u6216\u5E73\u79FB\u7ED9\u5B9A\u5143\u7D20\u3002\u8FD9\u662F\u901A\u8FC7\u4FEE\u6539 CSS \u89C6\u89C9\u683C\u5F0F\u5316\u6A21\u578B\u7684\u5750\u6807\u7A7A\u95F4\u6765\u5B9E\u73B0\u7684</p></blockquote><ul><li><p>\u793A\u4F8B</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* Keyword values */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

<span class="token comment">/* Function values */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">matrix</span><span class="token punctuation">(</span>1.0<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 4.0<span class="token punctuation">,</span> 5.0<span class="token punctuation">,</span> 6.0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>12px<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>2em<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>3in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0.5turn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>30deg<span class="token punctuation">,</span> 20deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>30deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewY</span><span class="token punctuation">(</span>1.07rad<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">matrix3d</span><span class="token punctuation">(</span>1.0<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 4.0<span class="token punctuation">,</span> 5.0<span class="token punctuation">,</span> 6.0<span class="token punctuation">,</span> 7.0<span class="token punctuation">,</span> 8.0<span class="token punctuation">,</span> 9.0<span class="token punctuation">,</span> 10.0<span class="token punctuation">,</span> 11.0<span class="token punctuation">,</span> 12.0<span class="token punctuation">,</span> 13.0<span class="token punctuation">,</span> 14.0<span class="token punctuation">,</span> 15.0<span class="token punctuation">,</span> 16.0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>12px<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 3em<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>2.5<span class="token punctuation">,</span> 1.2<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> 2.0<span class="token punctuation">,</span> 3.0<span class="token punctuation">,</span> 10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">perspective</span><span class="token punctuation">(</span>17px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Multiple function values */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>10deg<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Global values */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> animation</h3><blockquote><p>\u52A8\u753B(animation)\u662F <code>CSS3</code> \u4E2D\u6700\u5177\u98A0\u8986\u6027\u7684\u7279\u5F81\u4E4B\u4E00\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E\u591A\u4E2A\u8282\u70B9\u6765\u7CBE\u786E\u7684\u63A7\u5236\u4E00\u4E2A\u6216\u8005\u4E00\u7EC4\u52A8\u753B\uFF0C\u4ECE\u800C\u5B9E\u73B0\u590D\u6742\u7684\u52A8\u753B\u6548\u679C, \u5148\u5B9A\u4E49\u52A8\u753B\u5728\u8C03\u7528\u5B9A\u4E49\u597D\u7684\u52A8\u753B</p></blockquote><h4 id="\u52A8\u753B\u5E8F\u5217" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u5E8F\u5217" aria-hidden="true">#</a> \u52A8\u753B\u5E8F\u5217</h4><blockquote><p>0% \u662F\u52A8\u753B\u7684\u5F00\u59CB\uFF0C100 % \u662F\u52A8\u753B\u7684\u5B8C\u6210\uFF0C\u8FD9\u6837\u7684\u89C4\u5219\u5C31\u662F\u52A8\u753B\u5E8F\u5217</p></blockquote><ul><li>\u5728 @keyframs \u4E2D\u89C4\u5B9A\u67D0\u9879 CSS \u6837\u5F0F\uFF0C\u5C31\u7531\u521B\u5EFA\u5F53\u524D\u6837\u5F0F\u9010\u6E10\u6539\u4E3A\u65B0\u6837\u5F0F\u7684\u52A8\u753B\u6548\u679C</li><li>\u52A8\u753B\u662F\u4F7F\u5143\u7D20\u4ECE\u4E00\u4E2A\u6837\u5F0F\u9010\u6E10\u53D8\u5316\u4E3A\u53E6\u4E00\u4E2A\u6837\u5F0F\u7684\u6548\u679C\uFF0C\u53EF\u4EE5\u6539\u53D8\u4EFB\u610F\u591A\u7684\u6837\u5F0F\u4EFB\u610F\u591A\u7684\u6B21\u6570</li><li>\u7528\u767E\u5206\u6BD4\u6765\u89C4\u5B9A\u53D8\u5316\u53D1\u751F\u7684\u65F6\u95F4\uFF0C\u6216\u7528 <code>from</code> \u548C <code>to</code>\uFF0C\u7B49\u540C\u4E8E 0% \u548C 100%</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> move</span><span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token selector">form</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token selector">100%</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>500px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token selector">to</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>500px<span class="token punctuation">,</span> 0<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u52A8\u753B\u7B80\u5199" tabindex="-1"><a class="header-anchor" href="#\u52A8\u753B\u7B80\u5199" aria-hidden="true">#</a> \u52A8\u753B\u7B80\u5199</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* animation: \u52A8\u753B\u540D\u79F0 \u6301\u7EED\u65F6\u95F4 \u8FD0\u52A8\u66F2\u7EBF \u4F55\u65F6\u5F00\u59CB \u64AD\u653E\u6B21\u6570 \u662F\u5426\u53CD\u65B9\u5411 \u8D77\u59CB\u4E0E\u7ED3\u675F\u72B6\u6001 */</span>
<span class="token property">animation</span><span class="token punctuation">:</span> name duration timing-function delay iteration-count direction fill-mode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h2><h3 id="\u5355\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5355\u5217\u5E03\u5C40" aria-hidden="true">#</a> \u5355\u5217\u5E03\u5C40</h3><h4 id="\u4E00\u680F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u4E00\u680F\u5E03\u5C40" aria-hidden="true">#</a> \u4E00\u680F\u5E03\u5C40</h4><ul><li>\u4E00\u680F\u5E03\u5C40\u5934\u90E8\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u5BBD\u5EA6\u4E00\u81F4</li></ul><h5 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h5><ul><li>html</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;header&gt;&lt;/header&gt;
&lt;main&gt;&lt;/main&gt;
&lt;footer&gt;&lt;/footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">header,footer</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E00\u680F\u5E03\u5C40-\u901A\u680F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u680F\u5E03\u5C40-\u901A\u680F" aria-hidden="true">#</a> \u4E00\u680F\u5E03\u5C40\uFF08\u901A\u680F\uFF09</h4><ul><li>\u4E00\u680F\u5E03\u5C40\uFF08\u901A\u680F\uFF09\u5934\u90E8\u548C\u5E95\u90E8\u5BBD\u5EA6\u4E00\u81F4\uFF0C\u5360\u6EE1\u6574\u4E2A\u9875\u9762\uFF0C\u4E2D\u95F4\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6\u8F83\u5C0F\u4E0D\u5360\u6EE1\u5C4F\u5E55\u3002</li></ul><h5 id="\u4EE3\u7801\u5B9E\u73B0-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-1" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h5><ul><li>html</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;header&gt;&lt;/header&gt;
&lt;main&gt;&lt;/main&gt;
&lt;footer&gt;&lt;/footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">header,footer</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5355\u5217\u5E03\u5C40\u662F\u6700\u4E3A\u57FA\u7840\u548C\u7B80\u5355\u7684\u4E00\u79CD\uFF0C\u5B9E\u73B0\u65B9\u6CD5\u5E76\u4E0D\u5C40\u9650\u4E8E\u4EE5\u4E0A\u4E24\u79CD\uFF0C\u5927\u5BB6\u53EF\u81EA\u7531\u53D1\u6325\uFF0C\u627E\u5230\u66F4\u591A\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u3002</p></blockquote><h3 id="\u53CC\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5217\u5E03\u5C40" aria-hidden="true">#</a> \u53CC\u5217\u5E03\u5C40</h3><ul><li>\u53CC\u5217\u5E03\u5C40\u7684\u4F7F\u7528\u9891\u7387\u4E5F\u975E\u5E38\u9AD8\uFF0C\u5176\u5B9E\u73B0\u6548\u679C\u4E3B\u8981\u5C31\u662F\u5C06\u9875\u9762\u5206\u5272\u6210\u5DE6\u53F3\u5BBD\u5EA6\u4E0D\u7B49\u7684\u4E24\u5217\u3002\u4E00\u822C\u5BBD\u5EA6\u8F83\u5C0F\u7684\u4E00\u5217\u4F1A\u8BBE\u7F6E\u4E3A\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u4F5C\u4E3A\u4FA7\u8FB9\u680F\u4E4B\u7C7B\u7684\uFF0C\u800C\u53E6\u4E00\u5217\u5219\u5145\u6EE1\u5269\u4F59\u5BBD\u5EA6\uFF0C\u4F5C\u4E3A\u5185\u5BB9\u533A\u3002</li></ul><h5 id="\u4EE3\u7801\u5B9E\u73B0-2" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-2" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h5><ul><li><p>calc\u51FD\u6570</p><ul><li>calc() \u51FD\u6570\u7528\u4E8E\u52A8\u6001\u8BA1\u7B97\u957F\u5EA6\u503C\u3002\u5B9E\u73B0\u601D\u8DEF\u5F88\u7B80\u5355\uFF0C\u4FA7\u8FB9\u680F\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4F7F\u5176\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5185\u5BB9\u533A\u57DF\u901A\u8FC7calc()\u51FD\u6570\u8BA1\u7B97\u5269\u4F59\u5BBD\u5EA6\u5E76\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u518D\u52A0\u4E00\u4E2Amargin-left\uFF0C\u503C\u4E3A\u4FA7\u8FB9\u680F\u7684\u5BBD\u5EA6\u3002</li></ul></li><li><p>html</p></li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;slider&quot;&gt;&lt;/div&gt;</span>
<span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;main&quot;&gt;&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body,html</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider,.main</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>flex\u5C5E\u6027</p><ul><li>\u901A\u8FC7flex\u5C5E\u6027\u5B9E\u73B0\u601D\u8DEF\u4E5F\u5F88\u7B80\u5355\uFF0C\u5C06\u7236\u5143\u7D20\u8BBE\u7F6E\u4E3Aflex\uFF0C\u4FA7\u8FB9\u680F\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u5185\u5BB9\u533A\u57DF\u8BBE\u7F6E<code>flex:1</code>\u5373\u53EF\u5145\u6EE1\u5269\u4F59\u533A\u57DF\u3002</li></ul></li><li><p>html</p></li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;slider&quot;&gt;&lt;/div&gt;</span>
<span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;main&quot;&gt;&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body,html</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider,.main</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.slider</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>   
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u5217\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_3\u5217\u5E03\u5C40" aria-hidden="true">#</a> 3\u5217\u5E03\u5C40</h3><ul><li><p>\u4E09\u5217\u5E03\u5C40\u7684\u5B9E\u73B0\u65B9\u6CD5\u4E5F\u5F88\u591A\uFF0C\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECD\u4E24\u79CD\uFF08\u53CC\u98DE\u7FFC\u5E03\u5C40\u3001\u5723\u676F\u5E03\u5C40\u3001flex\u5E03\u5C40\uFF09</p></li><li><p>\u5728\u4ECB\u7ECD\u53CC\u98DE\u7FFC\u5E03\u5C40\u548C\u5723\u676F\u5E03\u5C40\u4E4B\u524D\u8981\u5148\u8BF4\u4E00\u4E0Bmargin\u8BBE\u7F6E\u8D1F\u503C\u7684\u4F5C\u7528\uFF1A</p></li></ul><blockquote><p>\u5F53margin\u7684\u503C\u8BBE\u4E3A\u8D1F\u503C\u7684\u65F6\u5019\uFF0C\u5143\u7D20\u4F1A\u5BF9\u5E94\u7684\u50CF\u90A3\u4E2A\u653E\u5411\u79FB\u52A8\uFF0C\u6BD4\u5982margin-left\u4E3A\u8D1F\u503C\uFF0C\u5143\u7D20\u5219\u4F1A\u5DE6\u79FB</p></blockquote><h4 id="\u53CC\u98DE\u7FFC\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u53CC\u98DE\u7FFC\u5E03\u5C40" aria-hidden="true">#</a> \u53CC\u98DE\u7FFC\u5E03\u5C40</h4><ul><li>html</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;main&quot;&gt;</span>
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;middle&quot;&gt;</span>
        <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;content&quot;&gt;</span>
            \u4E2D\u95F4
        &lt;/div&gt;
    &lt;/div&gt;
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;left&quot;&gt;</span>
        \u5DE6\u8FB9
    &lt;/div&gt;
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;right&quot;&gt;</span>
        \u53F3\u8FB9
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body,
html</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main&gt;div</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.middle</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5723\u676F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5723\u676F\u5E03\u5C40" aria-hidden="true">#</a> \u5723\u676F\u5E03\u5C40</h4><ul><li>html</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;main&quot;&gt;</span>
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;center&quot;&gt;\u4E2D\u95F4\u4E2D\u95F4\u4E2D\u95F4\u4E2D\u95F4\u4E2D\u95F4\u4E2D\u95F4\u4E2D\u95F4\u540E&lt;/div&gt;</span>
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;left&quot;&gt;\u5DE6\u8FB9&lt;/div&gt;</span>
    <span class="token key attr-name">&lt;div class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;right&quot;&gt;\u53F3\u8FB9&lt;/div&gt;</span>
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 150px 0 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> greenyellow<span class="token punctuation">;</span>
    *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left,
.center,
.right</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> gainsboro<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u53CC\u98DE\u7FFC\u5E03\u5C40\u5176\u5B9E\u548C\u5723\u676F\u5E03\u5C40\u7684\u7CBE\u9AD3\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u901A\u8FC7\u8BBE\u7F6E\u8D1Fmargin\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u6392\u5E03\uFF0C\u4E0D\u540C\u7684\u5C31\u662Fhtml\u7ED3\u6784\uFF0C\u53CC\u98DE\u7FFC\u662F\u5728center\u5143\u7D20\u5185\u90E8\u53C8\u8BBE\u7F6E\u4E86\u4E00\u5C42inner-center\u7684\u5143\u7D20\u5E76\u8BBE\u7F6E\u5B83\u7684\u5DE6\u53F3margin\uFF0C\u800C\u975E\u5723\u676F\u5E03\u5C40\u7684padding\uFF0C\u6765\u6392\u9664\u4E24\u8FB9\u5143\u7D20\u7684\u8986\u76D6\u3002\u6240\u4EE5\u8FD9\u4E24\u79CD\u5E03\u5C40\u539F\u7406\u57FA\u672C\u4E00\u6837\uFF0C\u5173\u952E\u5C31\u662F\u5728\u4E8E\u8BBE\u7F6E\u8D1Fmargin\u7684\u6280\u5DE7\uFF0C\u548C\u5143\u7D20\u6D6E\u52A8\u7684\u76F8\u5BF9\u5B9A\u4F4D\u6280\u5DE7\u6765\u5B9E\u73B0\u3002</p></blockquote><h4 id="flex\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#flex\u5E03\u5C40" aria-hidden="true">#</a> flex\u5E03\u5C40</h4><ul><li>html</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;div class=<span class="token string">&quot;main&quot;</span>&gt;
    &lt;div id=<span class="token string">&quot;left&quot;</span>&gt;\u5DE6\u8FB9\u5B9A\u5BBD&lt;/div&gt;
    &lt;div id=<span class="token string">&quot;main&quot;</span>&gt;\u4E2D\u95F4\u81EA\u9002\u5E94&lt;/div&gt;
    &lt;div id=<span class="token string">&quot;right&quot;</span>&gt;\u53F3\u8FB9\u5B9A\u5BBD&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body,html</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#left,
#right</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #0FC<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u4E0D\u8003\u8651\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\u7684\u8BDD\uFF0C\u8FD0\u7528flex\u5E03\u5C40\u662F\u6700\u7B80\u5355\u7684\u65B9\u5F0F\u3002</p></blockquote><h3 id="\u5782\u76F4\u5E03\u5C40-sticky-footer" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u5E03\u5C40-sticky-footer" aria-hidden="true">#</a> \u5782\u76F4\u5E03\u5C40\uFF08sticky footer\uFF09</h3><ul><li><p>\u8FD9\u79CD\u5E03\u5C40\u5C06\u9875\u9762\u5206\u6210\u4E0A\u3001\u4E2D\u3001\u4E0B\u4E09\u4E2A\u90E8\u5206\uFF0C\u4E0A\u3001\u4E0B\u90E8\u5206\u90FD\u4E3A\u56FA\u5B9A\u9AD8\u5EA6\uFF0C\u4E2D\u95F4\u90E8\u5206\u9AD8\u5EA6\u4E0D\u5B9A\u3002\u5F53\u9875\u9762\u9AD8\u5EA6\u5C0F\u4E8E\u6D4F\u89C8\u5668\u9AD8\u5EA6\u65F6\uFF0C\u4E0B\u90E8\u5206\u5E94\u56FA\u5B9A\u5728\u5C4F\u5E55\u5E95\u90E8\uFF1B\u5F53\u9875\u9762\u9AD8\u5EA6\u8D85\u51FA\u6D4F\u89C8\u5668\u9AD8\u5EA6\u65F6\uFF0C\u4E0B\u90E8\u5206\u5E94\u8BE5\u968F\u4E2D\u95F4\u90E8\u5206\u88AB\u6491\u5F00\uFF0C\u663E\u793A\u5728\u9875\u9762\u6700\u5E95\u90E8\u3002</p></li><li><p>\u8FD9\u79CD\u5E03\u5C40\u4E5F\u79F0\u4E4B\u4E3A<code>sticky footer</code>\uFF0C\u610F\u601D\u662F\u4E0B\u90E8\u5206\u7C98\u9ECF\u5728\u5C4F\u5E55\u5E95\u90E8\u3002</p></li></ul><h4 id="\u4EE3\u7801\u5B9E\u73B0-3" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-3" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;body&gt;
\u3000\u3000&lt;div class=<span class="token string">&quot;content&quot;</span>&gt;&lt;/div&gt;
\u3000\u3000&lt;div class=<span class="token string">&quot;footer&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h4><ul><li><p>\u4E3A\u5185\u5BB9\u533A\u57DF\u6DFB\u52A0\u6700\u5C0F\u7684\u9AD8\u5EA6</p><ul><li><p>\u8FD9\u79CD\u65B9\u6CD5\u91CD\u8981\u7528vh(viewpoint height)\u6765\u8BA1\u7B97\u6574\u4F53\u89C6\u7A97\u7684\u9AD8\u5EA6(1vh\u7B49\u4E8E\u89C6\u7A97\u9AD8\u5EA6\u76841%),\u7136\u540E\u51CF\u53BB\u5E95\u90E8footer\u7684\u9AD8\u5EA6\uFF0C\u4ECE\u800C\u6C42\u5F97\u5185\u5BB9\u533A\u57DF\u7684\u6700\u5C0F\u9AD8\u5EA6\u3002\u4F8B\u5982\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0\u5982\u4E0B\u6837\u5F0F\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    <span class="token selector">.content</span><span class="token punctuation">{</span>
        <span class="token property">min-height</span><span class="token punctuation">:</span><span class="token function">calc</span><span class="token punctuation">(</span>100vh-footer\u7684\u9AD8\u5EA6<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">box-sizing</span><span class="token punctuation">:</span>border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4ECE\u800C\u8FD9\u4E2A\u95EE\u9898\u5C31\u89E3\u51B3\u4E86\uFF0C\u4F46\u662F\u5982\u679C\u9875\u9762\u7684footer\u9AD8\u5EA6\u4E0D\u540C\u600E\u4E48\u529E?\u6BCF\u4E00\u4E2A\u9875\u9762\u90FD\u8981\u91CD\u65B0\u8BA1\u7B97\u4E00\u6B21\uFF0C\u8FD9\u662F\u5F88\u9EBB\u70E6\u7684\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u6CD5\u867D\u7136\u7B80\u5355\u4F46\u5374\u662F\u4E0D\u63A8\u8350\u7684\u3002</p></li></ul></li><li><p>\u4F7F\u7528flex\u5E03\u5C40</p><ul><li><p>\u8FD9\u79CD\u65B9\u6CD5\u5C31\u662F\u5229\u7528flex\u5E03\u5C40\u5BF9\u89C6\u7A97\u9AD8\u5EA6\u8FDB\u884C\u5206\u5272\u3002footer\u7684flex\u8BBE\u4E3A0\uFF0C\u8FD9\u6837footer\u83B7\u5F97\u5176\u56FA\u6709\u7684\u9AD8\u5EA6;content\u7684flex\u8BBE\u4E3A1\uFF0C\u8FD9\u6837\u5B83\u4F1A\u5145\u6EE1\u9664\u53BBfooter\u7684\u5176\u4ED6\u90E8\u5206\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>    <span class="token selector">body</span> <span class="token punctuation">{</span> 
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> 
        <span class="token property">flex-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span> 
        <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token selector">.footer</span><span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>      
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u5728content\u7684\u5916\u9762\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2Awrapper</p><ul><li><p>html</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\u3000
    \u3000\u3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>css</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html, body, .wrapper</span> <span class="token punctuation">{</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body &gt; .wrapper</span> <span class="token punctuation">{</span>
     <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span> 
     <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span> <span class="token comment">/* \u5FC5\u987B\u4F7F\u7528\u548Cfooter\u76F8\u540C\u7684\u9AD8\u5EA6 */</span>
<span class="token punctuation">}</span>  
<span class="token selector">.footer</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -150px<span class="token punctuation">;</span> <span class="token comment">/* footer\u9AD8\u5EA6\u7684\u8D1F\u503C */</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53E6\u5916\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u517C\u5BB9\u6027\uFF0C\u9700\u8981\u5728wrapper\u4E0A\u6DFB\u52A0clearfix\u7C7B\u3002\u5176\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;body&gt;
    &lt;div class=&quot;wrapper clearfix&quot;&gt;
        &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;\u3000
\u3000\u3000&lt;div class=&quot;footer&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
\u590D\u5236\u4EE3\u7801
.clearfix</span><span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
     <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">;</span>
     <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
     <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
     <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="\u7C98\u6027\u5E03\u5C40-sticky" tabindex="-1"><a class="header-anchor" href="#\u7C98\u6027\u5E03\u5C40-sticky" aria-hidden="true">#</a> \u7C98\u6027\u5E03\u5C40\uFF08sticky\uFF09</h3><ul><li><p>\u5C31\u662F\u5728\u9875\u9762\u6EDA\u52A8\u7684\u65F6\u5019\u4FDD\u6301\u5143\u7D20\u5728\u9875\u9762\u89C6\u56FE\u4E0A\u65B9\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u5E38\u5E38\u770B\u5230\u7684 \u5438\u9644\u6548\u679C\u3002</p></li><li><p>sticky\u5B9A\u4F4D\u7684\u5143\u7D20\u4F1A\u906E\u4F4F\u6EDA\u52A8\u800C\u6765\u7684\u201C\u6B63\u5E38\u201D\u7684\u6587\u6863\u6D41\uFF1B\u540E\u9762\u7684sticky\u5143\u7D20\u4F1A\u8986\u76D6\u524D\u9762\u7684sticky\u5143\u7D20\uFF0C\u5C31\u597D\u50CF\u4E00\u5C42\u5C42\u7684\u4FBF\u5229\u8D34\uFF0C\u662F\u4E0D\u662F\u5F88\u9177~~\u3002</p></li></ul><h4 id="\u4EE3\u7801\u5B9E\u73B0-4" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0-4" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h4><ul><li><p>\u5B9E\u73B0\u7C98\u6027\u5E03\u5C40\u4E3B\u8981\u4F9D\u9760<code>position</code>\u7684<code>sticky</code>\u5C5E\u6027\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u793A\u4F8B\uFF1A</p><ul><li><p>html:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u4E00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u4E8C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u4E09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>\u6807\u9898\u56DB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>js:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    html <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    item<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>css:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 200px auto<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blanchedalmond<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u5E38\u89C1\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9700\u6C42" aria-hidden="true">#</a> \u5E38\u89C1\u9700\u6C42</h2><h3 id="\u81EA\u5B9A\u4E49\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5C5E\u6027" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5C5E\u6027</h3><ul><li><p>\u4E4B\u524D\u6211\u4EEC\u901A\u5E38\u662F\u5728\u9884\u5904\u7406\u5668\u91CC\u624D\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\uFF0C\u800C\u73B0\u5728 CSS \u91CC\u4E5F\u652F\u6301\u4E86\u53D8\u91CF\u7684\u7528\u6CD5\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u5C31\u53EF\u4EE5\u5728\u60F3\u8981\u4F7F\u7528\u7684\u5730\u65B9\u5F15\u7528\u5B83\u3002</p></li><li><p>\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E5F\u548C\u666E\u901A\u5C5E\u6027\u4E00\u6837\u5177\u6709\u7EA7\u8054\u6027\uFF0C\u7533\u660E\u5728 :root \u4E0B\u7684\u65F6\u5019\uFF0C\u5728\u5168\u6587\u6863\u8303\u56F4\u5185\u53EF\u7528\uFF0C\u800C\u5982\u679C\u662F\u5728\u67D0\u4E2A\u5143\u7D20\u4E0B\u7533\u660E\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5219\u53EA\u80FD\u5728\u5B83\u53CA\u5B83\u7684\u5B50\u5143\u7D20\u4E0B\u624D\u53EF\u4EE5\u4F7F\u7528\u3002</p></li><li><p>\u81EA\u5B9A\u4E49\u5C5E\u6027\u5FC5\u987B\u901A\u8FC7 <code>--x</code> \u7684\u683C\u5F0F\u7533\u660E\uFF0C\u6BD4\u5982\uFF1A<code>--theme-color: red</code>; \u4F7F\u7528\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u9700\u8981\u7528 <code>var</code> \u51FD\u6570\u3002\u6BD4\u5982\uFF1A</p></li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;!-- \u5B9A\u4E49\u81EA\u5B9A\u4E49\u5C5E\u6027 --&gt;
:root</span> <span class="token punctuation">{</span>
    <span class="token property">--theme-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">&lt;!-- \u4F7F\u7528\u53D8\u91CF --&gt;
h1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1px-\u8FB9\u6846\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1px-\u8FB9\u6846\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 1px \u8FB9\u6846\u89E3\u51B3\u65B9\u6848</h3><ul><li><p>Retina \u663E\u793A\u5C4F\u6BD4\u666E\u901A\u7684\u5C4F\u5E55\u6709\u7740\u66F4\u9AD8\u7684\u5206\u8FA8\u7387\uFF0C\u6240\u4EE5\u5728\u79FB\u52A8\u7AEF\u7684 1px \u8FB9\u6846\u5C31\u4F1A\u770B\u8D77\u6765\u6BD4\u8F83\u7C97\uFF0C\u4E3A\u4E86\u7F8E\u89C2\u901A\u5E38\u9700\u8981\u628A\u8FD9\u4E2A\u7EBF\u6761\u7EC6\u5316\u5904\u7406</p><ul><li>\u53EA\u8BBE\u7F6E\u5355\u6761\u5E95\u90E8\u8FB9\u6846\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.scale-1px-bottom</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scale-1px-bottom::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u540C\u65F6\u8BBE\u7F6E 4 \u6761\u8FB9\u6846\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.scale-1px</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.scale-1px::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8</h3><ul><li><p>\u6D6E\u52A8\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\u5E76\u5411\u5DE6/\u5411\u53F3\u6D6E\u52A8\uFF0C\u76F4\u5230\u78B0\u5230\u7236\u5143\u7D20\u6216\u8005\u53E6\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u3002</p></li><li><p>\u4E3A\u4EC0\u4E48\u8981\u6E05\u695A\u6D6E\u52A8\uFF0C\u5B83\u9020\u6210\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</p><ul><li><p>\u56E0\u4E3A\u6D6E\u52A8\u5143\u7D20\u4F1A\u8131\u79BB\u6B63\u5E38\u7684\u6587\u6863\u6D41\uFF0C\u5E76\u4E0D\u4F1A\u5360\u636E\u6587\u6863\u6D41\u7684\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u5982\u679C\u4E00\u4E2A\u7236\u5143\u7D20\u4E0B\u9762\u90FD\u662F\u6D6E\u52A8\u5143\u7D20\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7236\u5143\u7D20\u5C31\u65E0\u6CD5\u88AB\u6D6E\u52A8\u5143\u7D20\u6240\u6491\u5F00\uFF0C\u8FD9\u6837\u4E00\u6765\u7236\u5143\u7D20\u5C31\u4E22\u5931\u4E86\u9AD8\u5EA6\uFF0C\u8FD9\u5C31\u662F\u6240\u8C13\u7684\u6D6E\u52A8\u9020\u6210\u7684\u7236\u5143\u7D20\u9AD8\u5EA6\u574D\u584C\u95EE\u9898\u3002</p></li><li><p>\u7236\u5143\u7D20\u9AD8\u5EA6\u4E00\u65E6\u574D\u584C\u5C06\u5BF9\u540E\u9762\u7684\u5143\u7D20\u5E03\u5C40\u9020\u6210\u5F71\u54CD\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF0C\u8BA9\u7236\u5143\u7D20\u6062\u590D\u9AD8\u5EA6\uFF0C\u90A3\u8BE5\u5982\u4F55\u505A\u5462\uFF1F</p></li></ul></li><li><p>\u8FD9\u91CC\u4ECB\u7ECD\u4E24\u79CD\u65B9\u6CD5\uFF1A\u901A\u8FC7 BFC \u6765\u6E05\u9664\u3001\u901A\u8FC7 clear \u6765\u6E05\u9664\u3002</p></li></ul><h4 id="bfc-\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#bfc-\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> BFC \u6E05\u9664\u6D6E\u52A8</h4><ul><li><p>\u5047\u8BBE\u4E00\u4E2A\u7236\u5143\u7D20 <code>parent</code> \u5185\u90E8\u53EA\u6709 2 \u4E2A\u5B50\u5143\u7D20 <code>child</code>\uFF0C\u4E14\u5B83\u4EEC\u90FD\u662F\u5DE6\u6D6E\u52A8\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019 <code>parent</code> \u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u9AD8\u5EA6\u7684\u8BDD\uFF0C\u56E0\u4E3A\u6D6E\u52A8\u9020\u6210\u4E86\u9AD8\u5EA6\u574D\u584C\uFF0C\u6240\u4EE5 <code>parent</code> \u7684\u9AD8\u5EA6\u4F1A\u662F 0\uFF0C\u6B64\u65F6\u53EA\u8981\u7ED9 <code>parent</code> \u521B\u9020\u4E00\u4E2A <code>BFC</code>\uFF0C\u90A3\u5B83\u7684\u9AD8\u5EA6\u5C31\u80FD\u6062\u590D\u4E86\u3002</p></li><li><p>\u800C\u4EA7\u751F <code>BFC</code> \u7684\u65B9\u5F0F\u5F88\u591A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6E<code>overflow: auto</code> \u6765\u7B80\u5355\u7684\u5B9E\u73B0 <code>BFC</code> \u6E05\u9664\u6D6E\u52A8\uFF0C\u4F46\u662F\u4E3A\u4E86\u517C\u5BB9 IE \u6700\u597D\u7528 <code>overflow: hidden</code>\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u901A\u8FC7 overflow: hidden \u6765\u6E05\u9664\u6D6E\u52A8\u5E76\u4E0D\u5B8C\u7F8E\uFF0C\u5F53\u5143\u7D20\u6709\u9634\u5F71\u6216\u5B58\u5728\u4E0B\u62C9\u83DC\u5355\u7684\u65F6\u5019\u4F1A\u88AB\u622A\u65AD\uFF0C\u6240\u4EE5\u8BE5\u65B9\u6CD5\u4F7F\u7528\u6BD4\u8F83\u5C40\u9650\u3002</p></li></ul><h4 id="\u901A\u8FC7-clear-\u6E05\u9664\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-clear-\u6E05\u9664\u6D6E\u52A8" aria-hidden="true">#</a> \u901A\u8FC7 clear \u6E05\u9664\u6D6E\u52A8</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD9\u79CD\u5199\u6CD5\u7684\u6838\u5FC3\u539F\u7406\u5C31\u662F\u901A\u8FC7<code>::after</code> \u4F2A\u5143\u7D20\u4E3A\u5728\u7236\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u540E\u9762\u751F\u6210\u4E00\u4E2A\u5185\u5BB9\u4E3A\u7A7A\u7684\u5757\u7EA7\u5143\u7D20\uFF0C\u7136\u540E\u901A\u8FC7 <code>clear</code> \u5C06\u8FD9\u4E2A\u4F2A\u5143\u7D20\u79FB\u52A8\u5230\u6240\u6709\u5B83\u4E4B\u524D\u7684\u6D6E\u52A8\u5143\u7D20\u7684\u540E\u9762</li></ul><p>\u53C2\u8003\uFF1A<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F09bd5873bed4" target="_blank" rel="noopener noreferrer">CSS\u4E2D\u7684\u6D6E\u52A8\u548C\u6E05\u9664\u6D6E\u52A8\uFF0C\u68B3\u7406\u4E00\u4E0B</a></p><h3 id="\u6D88\u9664\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6D88\u9664\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F" aria-hidden="true">#</a> \u6D88\u9664\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F</h3><ul><li><p>\u9488\u5BF9\u540C\u4E00\u4E2A\u7C7B\u578B\u7684 HTML \u6807\u7B7E\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u5F80\u5F80\u6709\u4E0D\u540C\u7684\u8868\u73B0\uFF0C\u6240\u4EE5\u5728\u7F51\u7AD9\u5236\u4F5C\u7684\u65F6\u5019\uFF0C\u5F00\u53D1\u8005\u901A\u5E38\u90FD\u662F\u9700\u8981\u5C06\u8FD9\u4E9B\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F\u6E05\u9664\uFF0C\u8BA9\u7F51\u9875\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u4E0A\u80FD\u591F\u4FDD\u6301\u4E00\u81F4\u3002</p></li><li><p>\u9488\u5BF9\u6E05\u9664\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\u8FD9\u4EF6\u4E8B\uFF0C\u5728\u5F88\u65E9\u4E4B\u524D CSS \u5927\u5E08 Eric A. Meyer \u5C31\u5E72\u8FC7\u3002\u5B83\u5C31\u662F\u5199\u4E00\u5806\u901A\u7528\u7684\u6837\u5F0F\u7528\u6765\u91CD\u7F6E\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u8FD9\u4E9B\u6837\u5F0F\u901A\u5E38\u4F1A\u653E\u5230\u4E00\u4E2A\u547D\u540D\u4E3A reset.css \u6587\u4EF6\u4E2D\u3002\u6BD4\u5982\u5927\u5E08\u7684 <a href="https://link.juejin.cn?target=https%3A%2F%2Fmeyerweb.com%2Feric%2Ftools%2Fcss%2Freset%2F" target="_blank" rel="noopener noreferrer">reset.css</a> \u662F\u8FD9\u4E48\u5199\u7684\uFF1A</p></li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
<span class="token selector">article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ol, ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote, q</span> <span class="token punctuation">{</span>
    <span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote:before, blockquote:after,
q:before, q:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
    <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u9664\u4E86 <code>reset.css</code> \u5916\uFF0C\u540E\u6765\u53C8\u51FA\u73B0\u4E86 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fnecolas%2Fnormalize.css" target="_blank" rel="noopener noreferrer">Normalize.css</a> \u3002\u5173\u4E8E <code>Normalize.css</code>, \u5176\u4F5C\u8005 <code>necolas</code> \u4E13\u95E8\u5199\u4E86\u4E00\u7BC7\u6587\u7AE0\u4ECB\u7ECD\u4E86\u5B83\uFF0C\u5E76\u8C08\u5230\u4E86\u5B83\u548C <code>reset.css</code> \u7684\u533A\u522B\u3002\u8FD9\u4E2A\u662F\u4ED6\u5199\u90A3\u7BC7\u6587\u7AE0\u7684\u7FFB\u8BD1\u7248\uFF1A<a href="https://link.juejin.cn?target=https%3A%2F%2Fjerryzou.com%2Fposts%2FaboutNormalizeCss%2F" target="_blank" rel="noopener noreferrer">\u8BA9\u6211\u4EEC\u8C08\u4E00\u8C08 Normalize.css</a>\u3002</p></li><li><p>\u6587\u7AE0\u4ECB\u7ECD\u5230\uFF1A<code>Normalize.css</code> \u53EA\u662F\u4E00\u4E2A\u5F88\u5C0F\u7684CSS\u6587\u4EF6\uFF0C\u4F46\u5B83\u5728\u9ED8\u8BA4\u7684 HTML \u5143\u7D20\u6837\u5F0F\u4E0A\u63D0\u4F9B\u4E86\u8DE8\u6D4F\u89C8\u5668\u7684\u9AD8\u5EA6\u4E00\u81F4\u6027\u3002\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u7684 <code>CSS reset</code>\uFF0C<code>Normalize.css</code> \u662F\u4E00\u79CD\u73B0\u4EE3\u7684\u3001\u4E3A HTML5 \u51C6\u5907\u7684\u4F18\u8D28\u66FF\u4EE3\u65B9\u6848\uFF0C\u73B0\u5728\u5DF2\u7ECF\u6709\u5F88\u591A\u77E5\u540D\u7684\u6846\u67B6\u548C\u7F51\u7AD9\u5728\u4F7F\u7528\u5B83\u4E86\u3002</p></li><li><p><code>Normalize.css</code> \u7684\u5177\u4F53\u6837\u5F0F\u53EF\u4EE5\u770B\u8FD9\u91CC <a href="https://link.juejin.cn?target=https%3A%2F%2Fnecolas.github.io%2Fnormalize.css%2Flatest%2Fnormalize.css" target="_blank" rel="noopener noreferrer">Normalize.css</a></p></li><li><p>\u533A\u522B\u4E8E <code>reset.css</code>\uFF0C<code>Normalize.css</code> \u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ul><li><p><code>reset.css</code> \u51E0\u4E4E\u4E3A\u6240\u6709\u6807\u7B7E\u90FD\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u800C <code>Normalize.css</code> \u5219\u662F\u6709\u9009\u62E9\u6027\u7684\u4FDD\u62A4\u4E86\u90E8\u5206\u6709\u4EF7\u503C\u7684\u9ED8\u8BA4\u503C\uFF1B</p></li><li><p>\u4FEE\u590D\u4E86\u5F88\u591A\u6D4F\u89C8\u5668\u7684 bug\uFF0C\u800C\u8FD9\u662F <code>reset.css</code> \u6CA1\u505A\u5230\u7684\uFF1B</p></li><li><p>\u4E0D\u4F1A\u8BA9\u4F60\u7684\u8C03\u8BD5\u5DE5\u5177\u53D8\u7684\u6742\u4E71\uFF0C\u76F8\u53CD <code>reset.css</code> \u7531\u4E8E\u8BBE\u7F6E\u4E86\u5F88\u591A\u9ED8\u8BA4\u503C\uFF0C\u6240\u4EE5\u5728\u6D4F\u89C8\u5668\u8C03\u8BD5\u5DE5\u5177\u4E2D\u5F80\u5F80\u4F1A\u770B\u5230\u4E00\u5927\u5806\u7684\u7EE7\u627F\u6837\u5F0F\uFF0C\u663E\u5F97\u5F88\u6742\u4E71\uFF1B</p></li><li><p><code>Normalize.css</code> \u662F\u6A21\u5757\u5316\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u9009\u62E9\u6027\u7684\u53BB\u6389\u6C38\u8FDC\u4E0D\u4F1A\u7528\u5230\u7684\u90E8\u5206\uFF0C\u6BD4\u5982\u8868\u5355\u7684\u4E00\u822C\u5316\uFF1B</p></li><li><p><code>Normalize.css</code> \u6709\u8BE6\u7EC6\u7684\u8BF4\u660E\u6587\u6863\uFF1B</p></li></ul></li></ul><h3 id="\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D" aria-hidden="true">#</a> \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D</h3><ul><li><p>\u8BA9\u5143\u7D20\u5728\u7236\u5143\u7D20\u4E2D\u5448\u73B0\u51FA\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u5F62\u6001\uFF0C\u65E0\u975E\u5C31 2 \u79CD\u60C5\u51B5\uFF1A</p><ul><li><p>\u5355\u884C\u7684\u6587\u672C\u3001inline \u6216\u8005 inline-block \u5143\u7D20\uFF1B</p></li><li><p>\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50\uFF1B</p></li><li><p>\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50\uFF1B</p></li></ul></li></ul><h4 id="\u5355\u884C\u7684\u6587\u672C\u3001inline-\u6216-inline-block-\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u7684\u6587\u672C\u3001inline-\u6216-inline-block-\u5143\u7D20" aria-hidden="true">#</a> \u5355\u884C\u7684\u6587\u672C\u3001inline \u6216 inline-block \u5143\u7D20</h4><p><strong>\u6C34\u5E73\u5C45\u4E2D</strong></p><p>\u6B64\u7C7B\u5143\u7D20\u9700\u8981\u6C34\u5E73\u5C45\u4E2D\uFF0C\u5219\u7236\u7EA7\u5143\u7D20\u5FC5\u987B\u662F\u5757\u7EA7\u5143\u7D20(<code>block level</code>)\uFF0C\u4E14\u7236\u7EA7\u5143\u7D20\u4E0A\u9700\u8981\u8FD9\u6837\u8BBE\u7F6E\u6837\u5F0F\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5782\u76F4\u5C45\u4E2D</strong></p><ul><li>\u65B9\u6CD5\u4E00\uFF1A\u901A\u8FC7\u8BBE\u7F6E\u4E0A\u4E0B\u5185\u95F4\u8DDD\u4E00\u81F4\u8FBE\u5230\u5782\u76F4\u5C45\u4E2D\u7684\u6548\u679C\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.single-line</span> <span class="token punctuation">{</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u6CD5\u4E8C\uFF1A\u901A\u8FC7\u8BBE\u7F6E <code>height</code> \u548C <code>line-height</code> \u4E00\u81F4\u8FBE\u5230\u5782\u76F4\u5C45\u4E2D\uFF1A</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.single-line</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50" tabindex="-1"><a class="header-anchor" href="#\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50" aria-hidden="true">#</a> \u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50</h4><p><strong>\u65B9\u6CD5\u4E00\uFF1Aabsolute + \u8D1F margin</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> -50px 0 0 -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1Aabsolute + margin auto</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u4E09\uFF1Aabsolute + calc</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50" aria-hidden="true">#</a> \u4E0D\u56FA\u5B9A\u5BBD\u9AD8\u7684\u5757\u7EA7\u76D2\u5B50</h4><p><strong>\u65B9\u6CD5\u4E00\uFF1Aabsolute + transform</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u4E8C\uFF1Aline-height + vertical-align</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u4E09\uFF1Awriting-mode</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> vertical-lr<span class="token punctuation">;</span>
  	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.middle</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">writing-mode</span><span class="token punctuation">:</span> horizontal-tb<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u56DB\uFF1Atable-cell</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u4E94\uFF1Aflex</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B9\u6CD5\u516D\uFF1Agrid</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6Einput-\u7684placeholder\u7684\u5B57\u4F53\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Einput-\u7684placeholder\u7684\u5B57\u4F53\u6837\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6Einput \u7684placeholder\u7684\u5B57\u4F53\u6837\u5F0F</h3><p>\u8BBE\u7F6Einput\u5360\u4F4D\u7B26\u7684\u6837\u5F0F</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span>    <span class="token comment">/* Chrome/Opera/Safari */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 19+ */</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* IE 10+ */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 18- */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;input type=<span class="token string">&quot;text&quot;</span> placeholder=<span class="token string">&quot;\u8BF7\u8BBE\u7F6E\u7528\u6237\u540D&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u7F6Einput\u805A\u7126\u65F6\u7684\u6837\u5F0F</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>   
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D6\u6D88input\u7684\u8FB9\u6846</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

<span class="token selector">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;CSS\u9AD8\u7EA7\u5E38\u89C1\u6280\u5DE7\u6C47\u603B&lt;/title&gt;
  &lt;style type=&quot;text/css&quot;&gt;
    input::-webkit-input-placeholder</span> <span class="token punctuation">{</span>    <span class="token comment">/* Chrome/Opera/Safari */</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input::-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 19+ */</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input:-ms-input-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* IE 10+ */</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input:-moz-placeholder</span> <span class="token punctuation">{</span> <span class="token comment">/* Firefox 18- */</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input:focus</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">input</span><span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input type=<span class="token string">&quot;text&quot;</span> placeholder=<span class="token string">&quot;\u8BF7\u8BBE\u7F6E\u7528\u6237\u540D&quot;</span>&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5355\u884C\u548C\u591A\u884C\u6587\u672C\u8D85\u51FA\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u548C\u591A\u884C\u6587\u672C\u8D85\u51FA\u7701\u7565\u53F7" aria-hidden="true">#</a> \u5355\u884C\u548C\u591A\u884C\u6587\u672C\u8D85\u51FA\u7701\u7565\u53F7</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>// \u5355\u884C\u6587\u672C\u51FA\u73B0\u7701\u7565\u53F7
<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>

// \u591A\u884C\u6587\u672C\u51FA\u73B0\u7701\u7565\u53F7
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> <span class="token comment">/*\u91CD\u70B9\uFF0C\u4E0D\u80FD\u7528block\u7B49\u5176\u4ED6\uFF0C\u5C06\u5BF9\u8C61\u4F5C\u4E3A\u5F39\u6027\u4F38\u7F29\u76D2\u5B50\u6A21\u578B\u663E\u793A*/</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> <span class="token comment">/*\u4ECE\u4E0A\u5230\u4E0B\u5782\u76F4\u6392\u5217\u5B50\u5143\u7D20\uFF08\u8BBE\u7F6E\u4F38\u7F29\u76D2\u5B50\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F\uFF09*/</span>
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> <span class="token comment">/*\u884C\u6570\uFF0C\u8D85\u51FA\u4E09\u884C\u9690\u85CF\u4E14\u591A\u4F59\u7684\u7528\u7701\u7565\u53F7\u8868\u793A...*/</span>
<span class="token property">line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>

&lt;div class=<span class="token string">&quot;container&quot;</span>&gt;
  &lt;p class=<span class="token string">&quot;single&quot;</span>&gt;
    &lt;span class=<span class="token string">&quot;c-red&quot;</span>&gt;\u5355\u884C\u6EA2\u51FA\uFF1A&lt;/span&gt;\u300AECMAScript 6 \u5165\u95E8\u6559\u7A0B\u300B\u662F\u4E00\u672C\u5F00\u6E90\u7684 JavaScript \u8BED\u8A00\u6559\u7A0B\uFF0C
    \u5168\u9762\u4ECB\u7ECD ECMAScript 6 \u65B0\u5F15\u5165\u7684\u8BED\u6CD5\u7279\u6027\u3002
  &lt;/p&gt;
  &lt;p class=<span class="token string">&quot;mutiple&quot;</span>&gt;
    &lt;span class=<span class="token string">&quot;c-red&quot;</span>&gt;\u591A\u884C\u6EA2\u51FA\uFF1A&lt;/span&gt;\u300AECMAScript 6 \u5165\u95E8\u6559\u7A0B\u300B\u662F\u4E00\u672C\u5F00\u6E90\u7684 JavaScript \u8BED\u8A00\u6559\u7A0B\uFF0C
    \u5168\u9762\u4ECB\u7ECD ECMAScript 6 \u65B0\u5F15\u5165\u7684\u8BED\u6CD5\u7279\u6027\u3002\u672C\u4E66\u8986\u76D6 ES6 \u4E0E\u4E0A\u4E00\u4E2A\u7248\u672C ES5 \u7684\u6240\u6709\u4E0D\u540C\u4E4B\u5904\uFF0C
    \u5BF9\u6D89\u53CA\u7684\u8BED\u6CD5\u77E5\u8BC6\u7ED9\u4E88\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u5E76\u7ED9\u51FA\u5927\u91CF\u7B80\u6D01\u6613\u61C2\u7684\u793A\u4F8B\u4EE3\u7801\u3002
  &lt;/p&gt;
&lt;/div&gt;

<span class="token comment">/*\u5BB9\u5668*/</span>
    <span class="token selector">.container</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.c-red</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>189<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.28<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 2px 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*\u5355\u884C*/</span>
    <span class="token selector">.single</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
      <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
      <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*\u591A\u884C*/</span>
    <span class="token selector">.mutiple</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> <span class="token comment">/*\u91CD\u70B9\uFF0C\u4E0D\u80FD\u7528block\u7B49\u5176\u4ED6\uFF0C\u5C06\u5BF9\u8C61\u4F5C\u4E3A\u5F39\u6027\u4F38\u7F29\u76D2\u5B50\u6A21\u578B\u663E\u793A*/</span>
      <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> <span class="token comment">/*\u4ECE\u4E0A\u5230\u4E0B\u5782\u76F4\u6392\u5217\u5B50\u5143\u7D20\uFF08\u8BBE\u7F6E\u4F38\u7F29\u76D2\u5B50\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F\uFF09*/</span>
      <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> <span class="token comment">/*\u884C\u6570\uFF0C\u8D85\u51FA\u4E09\u884C\u9690\u85CF\u4E14\u591A\u4F59\u7684\u7528\u7701\u7565\u53F7\u8868\u793A...*/</span>
      <span class="token property">line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
      <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8D1F\u8FB9\u8DDD\u4F7F\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u8D1F\u8FB9\u8DDD\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a> \u8D1F\u8FB9\u8DDD\u4F7F\u7528\u6280\u5DE7</h3><blockquote><p>\u89C4\u5F8B: \u5DE6\u4E3A\u8D1F\u65F6\uFF0C\u662F\u5DE6\u79FB\uFF0C\u53F3\u4E3A\u8D1F\u65F6\uFF0C\u662F\u5DE6\u62C9\u3002\u4E0A\u4E0B\u4E0E\u5DE6\u53F3\u7C7B\u4F3C</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token comment">/* \u5229\u7528\u8D1F\u503C\u6280\u5DE7\u8FDB\u884C\u6574\u4F53\u79FB\u52A8 */</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span>-6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span>6px solid #fff<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;wrap&quot;</span>&gt;
    &lt;div class=<span class="token string">&quot;item&quot;</span> style=<span class="token string">&quot;background-color: red;&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;item&quot;</span> style=<span class="token string">&quot;background-color: green;&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;item&quot;</span> style=<span class="token string">&quot;background-color: yellow;&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;item&quot;</span> style=<span class="token string">&quot;background-color: pink;&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;item&quot;</span> style=<span class="token string">&quot;background-color: green;&quot;</span>&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9A\u4F4D\u540C\u65F6\u8BBE\u7F6E\u65B9\u4F4D\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4F4D\u540C\u65F6\u8BBE\u7F6E\u65B9\u4F4D\u60C5\u51B5" aria-hidden="true">#</a> \u5B9A\u4F4D\u540C\u65F6\u8BBE\u7F6E\u65B9\u4F4D\u60C5\u51B5</h3><blockquote><p>\u89C4\u5F8B: \u7EDD\u5BF9\u5B9A\u4F4D\u548C\u56FA\u5B9A\u5B9A\u4F4D\u65F6\uFF0C\u540C\u65F6\u8BBE\u7F6E left \u548C right \u7B49\u540C\u4E8E\u9690\u5F0F\u5730\u8BBE\u7F6E\u5BBD\u5EA6</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">span</span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  
   <span class="token comment">/* \u7B49\u540C\u4E8E\u8BBE\u7F6E  width:100%;display:block */</span>
<span class="token punctuation">}</span>
&lt;span&gt;1&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\u4E4B\u5E38\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\u4E4B\u5E38\u7528\u573A\u666F" aria-hidden="true">#</a> \u76F8\u90BB\u5144\u5F1F\u9009\u62E9\u5668\u4E4B\u5E38\u7528\u573A\u666F</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">ul</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
   <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
   <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
   <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
   <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token selector">li+li</span><span class="token punctuation">{</span>
   <span class="token property">border-top</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

&lt;ul&gt;
 &lt;li&gt;1&lt;/li&gt;
  &lt;li&gt;2&lt;/li&gt;
  &lt;li&gt;3&lt;/li&gt;
  &lt;li&gt;4&lt;/li&gt;
  &lt;li&gt;5&lt;/li&gt;
  &lt;li&gt;6&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="outline\u5C5E\u6027\u7684\u5999\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#outline\u5C5E\u6027\u7684\u5999\u7528\u6280\u5DE7" aria-hidden="true">#</a> outline\u5C5E\u6027\u7684\u5999\u7528\u6280\u5DE7</h3><blockquote><p>\u533A\u522B: outline\u4E0D\u8BA1\u7B97\u5927\u5C0F border\u8BA1\u7B97\u5927\u5C0F</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">ul</span> <span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">li</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid pink<span class="token punctuation">;</span>
    <span class="token property">outline-offset</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">li+li</span><span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span>-10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">li:hover</span><span class="token punctuation">{</span>
    <span class="token comment">/* border:10px solid gold; */</span>
    <span class="token property">outline</span><span class="token punctuation">:</span>10px solid gold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
&lt;ul&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
    &lt;li&gt;4&lt;/li&gt;
    &lt;li&gt;5&lt;/li&gt;
    &lt;li&gt;6&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9690\u85CF\u6EDA\u52A8\u6761\u6216\u66F4\u6539\u6EDA\u52A8\u6761\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u6EDA\u52A8\u6761\u6216\u66F4\u6539\u6EDA\u52A8\u6761\u6837\u5F0F" aria-hidden="true">#</a> \u9690\u85CF\u6EDA\u52A8\u6761\u6216\u66F4\u6539\u6EDA\u52A8\u6761\u6837\u5F0F</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.scroll-container</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
   <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
   <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>     <span class="token comment">/*\u5FC5\u987B*/</span>
 <span class="token punctuation">}</span>

 <span class="token selector">.scroll-container::-webkit-scrollbar</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
   <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 .<span class="token property">scroll-container</span><span class="token punctuation">:</span><span class="token punctuation">:</span>-webkit-scrollbar-corner<span class="token punctuation">,</span>
   <span class="token comment">/* \u6EDA\u52A8\u6761\u89D2\u843D */</span>
 <span class="token selector">.scroll-container::-webkit-scrollbar-thumb,
 .scroll-container::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>      <span class="token comment">/*\u6EDA\u52A8\u6761\u7684\u8F68\u9053*/</span>
   <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token selector">.scroll-container::-webkit-scrollbar-corner,
 .scroll-container::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u6EDA\u52A8\u6761\u8F68\u9053 */</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>180<span class="token punctuation">,</span> 160<span class="token punctuation">,</span> 120<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>180<span class="token punctuation">,</span> 160<span class="token punctuation">,</span> 120<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token selector">.scroll-container::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u6EDA\u52A8\u6761\u624B\u67C4 */</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span> #00adb5<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
\u590D\u5236\u4EE3\u7801
&lt;p class=<span class="token string">&quot;scroll-container&quot;</span>&gt;
        \u5EAD\u9662\u6DF1\u6DF1\uFF0C\u4E0D\u77E5\u6709\u591A\u6DF1\uFF1F\u6768\u67F3\u4F9D\u4F9D\uFF0C\u98DE\u626C\u8D77\u7247\u7247\u70DF\u96FE\uFF0C\u4E00\u91CD\u91CD\u5E18\u5E55\u4E0D\u77E5\u6709\u591A\u5C11\u5C42\u3002\u8C6A\u534E\u7684\u8F66\u9A6C\u505C\u5728\u8D35\u65CF\u516C\u5B50\u5BFB\u6B22\u4F5C\u4E50\u7684\u5730\u65B9\uFF0C\u5979\u767B\u697C\u5411\u8FDC\u5904\u671B\u53BB\uFF0C\u5374\u770B\u4E0D\u89C1\u90A3\u901A\u5411\u7AE0\u53F0\u7684\u5927\u8DEF\u3002\u6625\u5DF2\u81F3\u66AE\uFF0C\u4E09\u6708\u7684\u96E8\u4F34\u968F\u7740\u72C2\u98CE\u5927\u4F5C\uFF0C\u518D\u662F\u91CD\u95E8\u5C06\u9EC4\u660F\u666F\u8272\u63A9\u95ED\uFF0C\u4E5F\u65E0\u6CD5\u7559\u4F4F\u6625\u610F\u3002\u6CEA\u773C\u6C6A\u6C6A\u95EE\u843D\u82B1\u53EF\u77E5\u9053\u6211\u7684\u5FC3\u610F\uFF0C\u843D\u82B1\u9ED8\u9ED8\u4E0D\u8BED\uFF0C\u7EB7\u4E71\u7684\uFF0C\u96F6\u96F6\u843D\u843D\u4E00\u70B9\u4E00\u70B9\u98DE\u5230\u79CB\u5343\u5916\u3002\u5EAD\u9662\u6DF1\u6DF1\uFF0C\u4E0D\u77E5\u6709\u591A\u6DF1\uFF1F\u6768\u67F3\u4F9D\u4F9D\uFF0C\u98DE\u626C\u8D77\u7247\u7247\u70DF\u96FE\uFF0C\u4E00\u91CD\u91CD\u5E18\u5E55\u4E0D\u77E5\u6709\u591A\u5C11\u5C42\u3002\u8C6A\u534E\u7684\u8F66\u9A6C\u505C\u5728\u8D35\u65CF\u516C\u5B50\u5BFB\u6B22\u4F5C\u4E50\u7684\u5730\u65B9\uFF0C\u5979\u767B\u697C\u5411\u8FDC\u5904\u671B\u53BB\uFF0C\u5374\u770B\u4E0D\u89C1\u90A3\u901A\u5411\u7AE0\u53F0\u7684\u5927\u8DEF\u3002\u6625\u5DF2\u81F3\u66AE\uFF0C\u4E09\u6708\u7684\u96E8\u4F34\u968F\u7740\u72C2\u98CE\u5927\u4F5C\uFF0C\u518D\u662F\u91CD\u95E8\u5C06\u9EC4\u660F\u666F\u8272\u63A9\u95ED\uFF0C\u4E5F\u65E0\u6CD5\u7559\u4F4F\u6625\u610F\u3002\u6CEA\u773C\u6C6A\u6C6A\u95EE\u843D\u82B1\u53EF\u77E5\u9053\u6211\u7684\u5FC3\u610F\uFF0C\u843D\u82B1\u9ED8\u9ED8\u4E0D\u8BED\uFF0C\u7EB7\u4E71\u7684\uFF0C\u96F6\u96F6\u843D\u843D\u4E00\u70B9\u4E00\u70B9\u98DE\u5230\u79CB\u5343\u5916\u3002\u5EAD\u9662\u6DF1\u6DF1\uFF0C\u4E0D\u77E5\u6709\u591A\u6DF1\uFF1F\u6768\u67F3\u4F9D\u4F9D\uFF0C\u98DE\u626C\u8D77\u7247\u7247\u70DF\u96FE\uFF0C\u4E00\u91CD\u91CD\u5E18\u5E55\u4E0D\u77E5\u6709\u591A\u5C11\u5C42\u3002\u8C6A\u534E\u7684\u8F66\u9A6C\u505C\u5728\u8D35\u65CF\u516C\u5B50\u5BFB\u6B22\u4F5C\u4E50\u7684\u5730\u65B9\uFF0C\u5979\u767B\u697C\u5411\u8FDC\u5904\u671B\u53BB\uFF0C\u5374\u770B\u4E0D\u89C1\u90A3\u901A\u5411\u7AE0\u53F0\u7684\u5927\u8DEF\u3002\u6625\u5DF2\u81F3\u66AE\uFF0C\u4E09\u6708\u7684\u96E8\u4F34\u968F\u7740\u72C2\u98CE\u5927\u4F5C\uFF0C\u518D\u662F\u91CD\u95E8\u5C06\u9EC4\u660F\u666F\u8272\u63A9\u95ED\uFF0C\u4E5F\u65E0\u6CD5\u7559\u4F4F\u6625\u610F\u3002\u6CEA\u773C\u6C6A\u6C6A\u95EE\u843D\u82B1\u53EF\u77E5\u9053\u6211\u7684\u5FC3\u610F\uFF0C\u843D\u82B1\u9ED8\u9ED8\u4E0D\u8BED\uFF0C\u7EB7\u4E71\u7684\uFF0C\u96F6\u96F6\u843D\u843D\u4E00\u70B9\u4E00\u70B9\u98DE\u5230\u79CB\u5343\u5916\u3002\u5EAD\u9662\u6DF1\u6DF1\uFF0C\u4E0D\u77E5\u6709\u591A\u6DF1\uFF1F\u6768\u67F3\u4F9D\u4F9D\uFF0C\u98DE\u626C\u8D77\u7247\u7247\u70DF\u96FE\uFF0C\u4E00\u91CD\u91CD\u5E18\u5E55\u4E0D\u77E5\u6709\u591A\u5C11\u5C42\u3002\u8C6A\u534E\u7684\u8F66\u9A6C\u505C\u5728\u8D35\u65CF\u516C\u5B50\u5BFB\u6B22\u4F5C\u4E50\u7684\u5730\u65B9\uFF0C\u5979\u767B\u697C\u5411\u8FDC\u5904\u671B\u53BB\uFF0C\u5374\u770B\u4E0D\u89C1\u90A3\u901A\u5411\u7AE0\u53F0\u7684\u5927\u8DEF\u3002\u6625\u5DF2\u81F3\u66AE\uFF0C\u4E09\u6708\u7684\u96E8\u4F34\u968F\u7740\u72C2\u98CE\u5927\u4F5C\uFF0C\u518D\u662F\u91CD\u95E8\u5C06\u9EC4\u660F\u666F\u8272\u63A9\u95ED\uFF0C\u4E5F\u65E0\u6CD5\u7559\u4F4F\u6625\u610F\u3002\u6CEA\u773C\u6C6A\u6C6A\u95EE\u843D\u82B1\u53EF\u77E5\u9053\u6211\u7684\u5FC3\u610F\uFF0C\u843D\u82B1\u9ED8\u9ED8\u4E0D\u8BED\uFF0C\u7EB7\u4E71\u7684\uFF0C\u96F6\u96F6\u843D\u843D\u4E00\u70B9\u4E00\u70B9\u98DE\u5230\u79CB\u5343\u5916\u3002
&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EAFcss\u7ED8\u5236\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#\u7EAFcss\u7ED8\u5236\u4E09\u89D2\u5F62" aria-hidden="true">#</a> \u7EAFCSS\u7ED8\u5236\u4E09\u89D2\u5F62</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u6B63\u4E09\u89D2 */</span>
<span class="token selector">.up-triangle</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
   <span class="token property">border-width</span><span class="token punctuation">:</span> 0 25px 40px 25px<span class="token punctuation">;</span>
   <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 129<span class="token punctuation">,</span> 127<span class="token punctuation">)</span> transparent<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">/* \u5012\u4E09\u89D2 */</span>
 <span class="token selector">.down-triangle</span> <span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
   <span class="token property">border-width</span><span class="token punctuation">:</span> 40px 25px 0 25px<span class="token punctuation">;</span>
   <span class="token property">border-color</span><span class="token punctuation">:</span>  <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 129<span class="token punctuation">,</span> 127<span class="token punctuation">)</span> transparent transparent transparent<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token selector">div:last-child</span> <span class="token punctuation">{</span>
   <span class="token property">margin-top</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u865A\u7EBF\u6846\u7ED8\u5236\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u865A\u7EBF\u6846\u7ED8\u5236\u6280\u5DE7" aria-hidden="true">#</a> \u865A\u7EBF\u6846\u7ED8\u5236\u6280\u5DE7</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.dotted-line</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px dashed transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> white<span class="token punctuation">)</span> padding-box<span class="token punctuation">,</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">,</span> red 0<span class="token punctuation">,</span> #ccc .25em<span class="token punctuation">,</span> white 0<span class="token punctuation">,</span> white .75em<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;p class=<span class="token string">&quot;dotted-line&quot;</span>&gt;\u5EAD\u9662\u6DF1\u6DF1\uFF0C\u4E0D\u77E5\u6709\u591A\u6DF1\uFF1F\u6768\u67F3\u4F9D\u4F9D\uFF0C\u98DE\u626C\u8D77\u7247\u7247\u70DF\u96FE\uFF0C\u4E00\u91CD\u91CD\u5E18\u5E55\u4E0D\u77E5\u6709\u591A\u5C11\u5C42\u3002&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9690\u85CF\u6587\u672C\u7684\u5E38\u7528\u4E24\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u6587\u672C\u7684\u5E38\u7528\u4E24\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> \u9690\u85CF\u6587\u672C\u7684\u5E38\u7528\u4E24\u79CD\u65B9\u6CD5</h3><blockquote><p>text-indent: -9999px; \u6216\u8005 font-size: 0;</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 190px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 8px
<span class="token punctuation">}</span>

<span class="token selector">.logo h1</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative
<span class="token punctuation">}</span>

<span class="token selector">.logo h1 .logo-bd</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 58px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 142px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>http://img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png<span class="token punctuation">)</span></span> 0 0 no-repeat<span class="token punctuation">;</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;h1&gt;
  &lt;a href=<span class="token string">&quot;#&quot;</span> role=<span class="token string">&quot;img&quot;</span> class=<span class="token string">&quot;logo-bd clearfix&quot;</span>&gt;\u6DD8\u5B9D\u7F51&lt;/a&gt;
&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8868\u683C\u8FB9\u6846\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C\u8FB9\u6846\u5408\u5E76" aria-hidden="true">#</a> \u8868\u683C\u8FB9\u6846\u5408\u5E76</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">table</span><span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;table border=<span class="token string">&quot;1&quot;</span>&gt;
    &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;\u7B2C\u4E00\u5217&lt;/th&gt;
      &lt;th&gt;\u7B2C\u4E8C\u5217&lt;/th&gt;
      &lt;th&gt;\u7B2C\u4E09\u5217&lt;/th&gt;
      &lt;th&gt;\u7B2C\u56DB\u5217&lt;/th&gt;
    &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;1.1&lt;/td&gt;
      &lt;td&gt;1.2&lt;/td&gt;
      &lt;td&gt;1.3&lt;/td&gt;
      &lt;td&gt;1.4&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;2.1&lt;/td&gt;
      &lt;td&gt;2.2&lt;/td&gt;
      &lt;td&gt;2.3&lt;/td&gt;
      &lt;td&gt;2.4&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;3.1&lt;/td&gt;
      &lt;td&gt;3.2&lt;/td&gt;
      &lt;td&gt;3.3&lt;/td&gt;
      &lt;td&gt;3.4&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,189),i=[p];function l(c,o){return s(),a("div",null,i)}var r=n(e,[["render",l],["__file","index.html.vue"]]);export{r as default};
