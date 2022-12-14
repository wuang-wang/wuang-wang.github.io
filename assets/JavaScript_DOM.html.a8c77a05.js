const e=JSON.parse('{"key":"v-8de825d0","path":"/guide/frontend/JavaScript/JavaScript_DOM.html","title":"JavaScript DOM","lang":"zh-CN","frontmatter":{"layout":"Post","title":"JavaScript DOM","date":"2022-08-29T00:00:00.000Z","useHeaderImage":true,"headerImage":"https://w.wallhaven.cc/full/8o/wallhaven-8owwej.png","headerMask":"rgba(40, 57, 101, .4)","giscus":false,"tags":["JavaScript"]},"excerpt":"","headers":[{"level":2,"title":"\u83B7\u53D6\u4E00\u4E2A\u5143\u7D20","slug":"\u83B7\u53D6\u4E00\u4E2A\u5143\u7D20","children":[{"level":3,"title":"getElementById","slug":"getelementbyid","children":[]},{"level":3,"title":"getElementsByClassName","slug":"getelementsbyclassname","children":[]},{"level":3,"title":"getElementsByTagName","slug":"getelementsbytagname","children":[]},{"level":3,"title":"querySelector","slug":"queryselector","children":[]},{"level":3,"title":"querySelectorAll","slug":"queryselectorall","children":[]}]},{"level":2,"title":"\u64CD\u4F5C\u5C5E\u6027","slug":"\u64CD\u4F5C\u5C5E\u6027","children":[{"level":3,"title":"innerHTML","slug":"innerhtml","children":[]},{"level":3,"title":"innerText","slug":"innertext","children":[]},{"level":3,"title":"getAttribute","slug":"getattribute","children":[]},{"level":3,"title":"setAttribute","slug":"setattribute","children":[]},{"level":3,"title":"removeAttribute","slug":"removeattribute","children":[]},{"level":3,"title":"style","slug":"style","children":[]},{"level":3,"title":"\u83B7\u53D6\u5143\u7D20\u7684\u975E\u884C\u95F4\u6837\u5F0F","slug":"\u83B7\u53D6\u5143\u7D20\u7684\u975E\u884C\u95F4\u6837\u5F0F","children":[]},{"level":3,"title":"className","slug":"classname","children":[]}]},{"level":2,"title":"DOM\u8282\u70B9","slug":"dom\u8282\u70B9","children":[{"level":3,"title":"\u5143\u7D20\u8282\u70B9","slug":"\u5143\u7D20\u8282\u70B9","children":[]},{"level":3,"title":"\u5C5E\u6027\u8282\u70B9","slug":"\u5C5E\u6027\u8282\u70B9","children":[]},{"level":3,"title":"\u6587\u672C\u8282\u70B9","slug":"\u6587\u672C\u8282\u70B9","children":[]},{"level":3,"title":"\u83B7\u53D6\u8282\u70B9","slug":"\u83B7\u53D6\u8282\u70B9","children":[]}]},{"level":2,"title":"\u8282\u70B9\u5C5E\u6027","slug":"\u8282\u70B9\u5C5E\u6027","children":[{"level":3,"title":"nodeType","slug":"nodetype","children":[]},{"level":3,"title":"nodeName","slug":"nodename","children":[]},{"level":3,"title":"nodeValue","slug":"nodevalue","children":[]},{"level":3,"title":"\u6C47\u603B","slug":"\u6C47\u603B","children":[]}]},{"level":2,"title":"\u64CD\u4F5C DOM \u8282\u70B9","slug":"\u64CD\u4F5C-dom-\u8282\u70B9","children":[{"level":3,"title":"\u521B\u5EFA\u4E00\u4E2A\u8282\u70B9","slug":"\u521B\u5EFA\u4E00\u4E2A\u8282\u70B9","children":[]},{"level":3,"title":"\u5411\u9875\u9762\u4E2D\u52A0\u5165\u4E00\u4E2A\u8282\u70B9","slug":"\u5411\u9875\u9762\u4E2D\u52A0\u5165\u4E00\u4E2A\u8282\u70B9","children":[]},{"level":3,"title":"\u5220\u9664\u9875\u9762\u4E2D\u7684\u67D0\u4E00\u4E2A\u8282\u70B9","slug":"\u5220\u9664\u9875\u9762\u4E2D\u7684\u67D0\u4E00\u4E2A\u8282\u70B9","children":[]},{"level":3,"title":"\u4FEE\u6539\u9875\u9762\u4E2D\u7684\u67D0\u4E00\u4E2A\u8282\u70B9","slug":"\u4FEE\u6539\u9875\u9762\u4E2D\u7684\u67D0\u4E00\u4E2A\u8282\u70B9","children":[]}]},{"level":2,"title":"\u83B7\u53D6\u5143\u7D20\u7684\u504F\u79FB\u91CF","slug":"\u83B7\u53D6\u5143\u7D20\u7684\u504F\u79FB\u91CF","children":[{"level":3,"title":"offsetParent","slug":"offsetparent","children":[]},{"level":3,"title":"offsetLeft \u548C offsetTop","slug":"offsetleft-\u548C-offsettop","children":[]}]},{"level":2,"title":"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8","slug":"\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8","children":[{"level":3,"title":"offsetWith \u548C offsetHeight","slug":"offsetwith-\u548C-offsetheight","children":[]},{"level":3,"title":"clientWidth \u548C clientHeight","slug":"clientwidth-\u548C-clientheight","children":[]}]},{"level":2,"title":"\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u5C3A\u5BF8","slug":"\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u65B9\u5F0F","slug":"\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u65B9\u5F0F","children":[]},{"level":2,"title":"\u5E38\u89C1\u7684\u4E8B\u4EF6","slug":"\u5E38\u89C1\u7684\u4E8B\u4EF6","children":[{"level":3,"title":"\u6D4F\u89C8\u5668\u4E8B\u4EF6","slug":"\u6D4F\u89C8\u5668\u4E8B\u4EF6","children":[]},{"level":3,"title":"\u9F20\u6807\u4E8B\u4EF6","slug":"\u9F20\u6807\u4E8B\u4EF6","children":[]},{"level":3,"title":"\u952E\u76D8\u4E8B\u4EF6","slug":"\u952E\u76D8\u4E8B\u4EF6","children":[]},{"level":3,"title":"\u8868\u5355\u4E8B\u4EF6","slug":"\u8868\u5355\u4E8B\u4EF6","children":[]},{"level":3,"title":"\u89E6\u6478\u4E8B\u4EF6","slug":"\u89E6\u6478\u4E8B\u4EF6","children":[]}]},{"level":2,"title":"\u4E8B\u4EF6\u5BF9\u8C61","slug":"\u4E8B\u4EF6\u5BF9\u8C61","children":[{"level":3,"title":"\u70B9\u51FB\u4E8B\u4EF6\u7684\u5149\u6807\u5750\u6807\u70B9\u83B7\u53D6","slug":"\u70B9\u51FB\u4E8B\u4EF6\u7684\u5149\u6807\u5750\u6807\u70B9\u83B7\u53D6","children":[]}]},{"level":2,"title":"\u4E8B\u4EF6\u7684\u4F20\u64AD","slug":"\u4E8B\u4EF6\u7684\u4F20\u64AD","children":[{"level":3,"title":"\u5192\u6CE1\u3001\u6355\u83B7\u3001\u76EE\u6807","slug":"\u5192\u6CE1\u3001\u6355\u83B7\u3001\u76EE\u6807","children":[]}]},{"level":2,"title":"\u4E8B\u4EF6\u59D4\u6258","slug":"\u4E8B\u4EF6\u59D4\u6258","children":[{"level":3,"title":"\u4E8B\u4EF6\u89E6\u53D1","slug":"\u4E8B\u4EF6\u89E6\u53D1","children":[]},{"level":3,"title":"target","slug":"target","children":[]},{"level":3,"title":"\u59D4\u6258","slug":"\u59D4\u6258","children":[]}]},{"level":2,"title":"\u9ED8\u8BA4\u884C\u4E3A","slug":"\u9ED8\u8BA4\u884C\u4E3A","children":[{"level":3,"title":"\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A","slug":"\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A","children":[]}]},{"level":2,"title":"this \u5173\u952E\u5B57","slug":"this-\u5173\u952E\u5B57","children":[{"level":3,"title":"call","slug":"call","children":[]},{"level":3,"title":"apply","slug":"apply","children":[]},{"level":3,"title":"bind","slug":"bind","children":[]}]}],"git":{"updatedTime":1664506602000},"readingTime":{"minutes":35,"words":8717},"filePathRelative":"guide/frontend/JavaScript/JavaScript_DOM.md"}');export{e as data};
