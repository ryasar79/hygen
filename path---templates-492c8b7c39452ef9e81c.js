webpackJsonp([49593498941915],{270:function(n,a){n.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Hygen: The scalable code generator that lives in your project",doc:null,section:null,type:null},fields:{slug:"/hygen-the-scalable-code-generator-that-lives-in-your-project"}}},{node:{frontmatter:{title:"Express",doc:3,section:2,type:"doc"},fields:{slug:"/express"}}},{node:{frontmatter:{title:"FAQ",doc:4,section:1,type:"doc"},fields:{slug:"/faq"}}},{node:{frontmatter:{title:"Generators",doc:2,section:1,type:"doc"},fields:{slug:"/generators"}}},{node:{frontmatter:{title:"React Native",doc:2,section:2,type:"doc"},fields:{slug:"/react-native"}}},{node:{frontmatter:{title:"Quick Start",doc:1,section:1,type:"doc"},fields:{slug:"/quick-start"}}},{node:{frontmatter:{title:"Redux",doc:1,section:2,type:"doc"},fields:{slug:"/redux"}}},{node:{frontmatter:{title:"Templates",doc:3,section:1,type:"doc"},fields:{slug:"/templates"}}}]},postBySlug:{html:'<p>A <code>hygen</code> template is a header of a markdown-like frontmatter and a body of an ejs templating engine.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>                            &lt;<span class="token punctuation">---</span><span class="token punctuation">-</span><span class="token punctuation">-</span> frontmatter section\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/emails/&lt;%= name %<span class="token punctuation">></span>.html\n<span class="token punctuation">---</span>\n\nHello &lt;%= name %<span class="token punctuation">></span><span class="token punctuation">,</span>\n&lt;%= message %<span class="token punctuation">></span>                 &lt;<span class="token punctuation">---</span><span class="token punctuation">-</span><span class="token punctuation">-</span> body<span class="token punctuation">,</span> ejs\n(version &lt;%= version %<span class="token punctuation">></span>)\n</code></pre>\n      </div>\n<h2 id="frontmatter"><a href="#frontmatter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frontmatter</h2>\n<p>The frontmatter is delimited by a matching <code>---</code> top and bottom with <code>yaml</code> in it, where we define the template metadata.</p>\n<p>Templates are also rendered, so if we have this in the file <code>_templates/mailer/campaign/emails.ejs.t</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="gatsby-highlight-code-line"><span class="token punctuation">---</span>\n</span><span class="token key atrule">to</span><span class="token punctuation">:</span> app/&lt;%=section%<span class="token punctuation">></span>/emails.js\n<span class="token key atrule">foo</span><span class="token punctuation">:</span> &lt;%= bar %<span class="token punctuation">></span>\n<span class="gatsby-highlight-code-line"><span class="token punctuation">---</span>\n</span></code></pre>\n      </div>\n<p>And this command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ hygen mailer campaign --section weekend --bar ping</code></pre>\n      </div>\n<p>It builds this frontmatter, behind the scenes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/weekend/emails.js\n<span class="token key atrule">foo</span><span class="token punctuation">:</span> ping\n<span class="token punctuation">---</span>\n</code></pre>\n      </div>\n<div class="custom-block-info"><h6 id="frontmatter-cleans-up-our-act"><a href="#frontmatter-cleans-up-our-act" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frontmatter cleans up our act</h6><p>While other generator engines use the file names, folder structure, or arbitrary configuration files to store metadata, <code>hygen</code> uses the frontmatter.</p><p>This makes templating and generators clean and maintainable and meta data lives directly in the template it refers to.</p></div>\n<h2 id="template-body"><a href="#template-body" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Template Body</h2>\n<p>Let\'s recall how a template looks like. Templates bodies are <a href="https://github.com/tj/ejs">ejs</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>workers<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span>name<span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">-</span>\n\n<span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// your code here!</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In <code>hygen</code>, the variable <code>name</code> is blessed, because you can get a capitalized version of it for free, by saying <code>Name</code>. There will be a growing list of variables that are special, where you get \'free\' version of them to save some time, but currently it\'s only that one.</p>\n<p>If we wanted to capitalize some other variable then we could do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>\nto<span class="token punctuation">:</span> app<span class="token operator">/</span>workers<span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">%=</span>name<span class="token operator">%</span><span class="token operator">></span><span class="token punctuation">.</span>js\n<span class="token operator">--</span><span class="token operator">-</span>\n<span class="gatsby-highlight-code-line"><span class="token operator">&lt;</span><span class="token operator">%</span>\n</span><span class="gatsby-highlight-code-line"> Message <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</span><span class="gatsby-highlight-code-line"><span class="token operator">%</span><span class="token operator">></span>\n</span>\n<span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"&lt;%= Message %>"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>You can also use the built-in helpers by accessing <code>h</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token operator">&lt;</span><span class="token operator">%=</span> Name <span class="token operator">%</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">        <span class="token keyword">return</span> <span class="token string">"&lt;%= h.capitalize(message) %>"</span>\n</span>    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>With time, we\'ll add more utilities onto <code>h</code>.</p>\n<h2 id="addition"><a href="#addition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Addition</h2>\n<p>By default templates are \'added\' to your project as a new target file. By specifying a <code>to:</code> frontmatter property, we\'re telling <code>hygen</code> where to put it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">to</span><span class="token punctuation">:</span> app/index.js\n<span class="token punctuation">---</span>\nconsole.log(\'this is index<span class="token tag">!\')</span>\n</code></pre>\n      </div>\n<h3 id="injection"><a href="#injection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Injection</h3>\n<p>You can also choose to inject a template <em>into</em> an existing target file.</p>\n<p>For this to work, you need to use <code>inject: true</code> with the accompanied inject-specific props.</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="gatsby-highlight-code-line"><span class="token key atrule">inject</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</span><span class="token key atrule">to</span><span class="token punctuation">:</span> package.json\n<span class="token key atrule">after</span><span class="token punctuation">:</span> dependencies\n<span class="token key atrule">skip_if</span><span class="token punctuation">:</span> react<span class="token punctuation">-</span>native<span class="token punctuation">-</span>fs\n<span class="token punctuation">---</span>\n"react<span class="token punctuation">-</span>native<span class="token punctuation">-</span>fs"<span class="token punctuation">:</span><span class="token string">"*"</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>The new props to notice here are <code>after</code> and <code>skip_if</code>. This template will add the <code>react-native-fs</code> dependency into a <code>package.json</code> file, but it will not add it twice (because of <code>skip_if</code>).</p>\n<div class="custom-block-info"><h6 id="regular-expressions-everywhere-promote-flexibility"><a href="#regular-expressions-everywhere-promote-flexibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Regular expressions everywhere promote flexibility</h6><p>In <code>after: dependencies</code>, \'dependencies\' is actually a regular expression, so it\'ll find the <code>"dependencies":{</code> block in a <code>package.json</code> file</p></div>\n<p>Here are the available properties for an <code>inject: true</code> template:</p>\n<ul>\n<li><code>before</code> or <code>after</code> which contain a regular expression of text to locate. The inject line will appear <code>before</code> or <code>after</code> the located line.</li>\n<li><code>prepend</code> or <code>append</code>, when true, add a line to start or end of file respectively.</li>\n<li><code>line_at</code> which contains a line number will add a line at this exact line number.</li>\n</ul>\n<p>In almost all cases you want to ensure you\'re not injecting content twice:</p>\n<ul>\n<li><code>skip_if</code> which contains a regular expression / text. If exists, injection is skipped.</li>\n</ul>\n<p>Let\'s see how these play out in the <a href="redux">Redux</a> use case.</p>',timeToRead:3,excerpt:"A  hygen  template is a header of a markdown-like frontmatter and a body of an ejs templating engine. Frontmatter The frontmatter is…",frontmatter:{title:"Templates"},fields:{slug:"/templates"}}},pathContext:{slug:"/templates"}}}});
//# sourceMappingURL=path---templates-492c8b7c39452ef9e81c.js.map