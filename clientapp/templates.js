(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});


// create our folder objects
exports["includes"] = {};
exports["pages"] = {};

// body.jade compiled template
exports["body"] = function tmpl_body(locals) {
    var buf = [];
    buf.push('<body><div class="container"><nav role="navigation" class="navbar navbar-default"><div class="container-fluid"><!--<Brand>and toggle get grouped for better mobile display </Brand>--><div class="navbar-header"><button type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="route navbar-brand">Translation and Back(bone)</a></div><!--<Collect>the nav links, forms, and other content for toggling </Collect>--><div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a href="/" class="route">Translate</a></li><li><a href="/about" class="route">About</a></li></ul><ul class="nav navbar-nav navbar-right"><li><li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Language<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="ar" class="language"><pre>(ar)       Arabic</pre></a><a href="bg" class="language"><pre>(bg)       Bulgarian</pre></a><a href="ca" class="language"><pre>(ca)       Catalan</pre></a><a href="zh-CHS" class="language"><pre>(zh-CHS)   Chinese Simplified</pre></a><a href="zh-CHT" class="language"><pre>(zh-CHT)   Chinese Traditional</pre></a><a href="cs" class="language"><pre>(cs)       Czech</pre></a><a href="da" class="language"><pre>(da)       Danish</pre></a><a href="nl" class="language"><pre>(nl)       Dutch</pre></a><a href="en" class="language"><pre>(en)       English</pre></a><a href="et" class="language"><pre>(et)       Estonian</pre></a><a href="fi" class="language"><pre>(fi)       Finnish</pre></a><a href="fr" class="language"><pre>(fr)       French</pre></a><a href="de" class="language"><pre>(de)       German</pre></a><a href="el" class="language"><pre>(el)       Greek</pre></a><a href="ht" class="language"><pre>(ht)       Haitian Creole</pre></a><a href="he" class="language"><pre>(he)       Hebrew</pre></a><a href="hi" class="language"><pre>(hi)       Hindi</pre></a><a href="mww" class="language"><pre>(mww)      Hmong Daw</pre></a><a href="hu" class="language"><pre>(hu)       Hungarian</pre></a><a href="id" class="language"><pre>(id)       Indonesian</pre></a><a href="it" class="language"><pre>(it)       Italian</pre></a><a href="ja" class="language"><pre>(ja)       Japanese</pre></a><a href="tlh" class="language"><pre>(tlh       Klingon</pre></a><a href="tlh-Qaak" class="language"><pre>(tlh-Qaak) Klingon (pIqaD)</pre></a><a href="ko" class="language"><pre>(ko)       Korean</pre></a><a href="lv" class="language"><pre>(lv)       Latvian</pre></a><a href="lt" class="language"><pre>(lt)       Lithuanian</pre></a><a href="ms" class="language"><pre>(ms)       Malay</pre></a><a href="mt" class="language"><pre>(mt)       Maltese</pre></a><a href="no" class="language"><pre>(no)       Norwegian</pre></a><a href="fa" class="language"><pre>(fa)       Persian</pre></a><a href="pl" class="language"><pre>(pl)       Polish</pre></a><a href="pt" class="language"><pre>(pt)       Portuguese</pre></a><a href="ro" class="language"><pre>(ro)       Romanian</pre></a><a href="ru" class="language"><pre>(ru)       Russian</pre></a><a href="sk" class="language"><pre>(sk)       Slovak</pre></a><a href="sl" class="language"><pre>(sl)       Slovenian</pre></a><a href="es" class="language"><pre>(es)       Spanish</pre></a><a href="sv" class="language"><pre>(sv)       Swedish</pre></a><a href="th" class="language"><pre>(th)       Thai</pre></a><a href="tr" class="language"><pre>(tr)       Turkish</pre></a><a href="uk" class="language"><pre>(uk)       Ukrainian</pre></a><a href="ur" class="language"><pre>(ur)       Urdu</pre></a><a href="vi" class="language"><pre>(vi)       Vietnamese</pre></a><a href="cy" class="language"><pre>(cy)       Welsh</pre></a></li></ul></li></li></ul></div></div></nav><main id="pages"></main></div></body>');
    return buf.join('');
};

// head.jade compiled template
exports["head"] = function tmpl_head(locals) {
    var buf = [];
    buf.push('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>');
    return buf.join('');
};

// includes/person.jade compiled template
exports["includes"]["person"] = function tmpl_includes_person(locals) {
    var buf = [];
    buf.push('<li class="person"><img width="40" height="40" class="avatar"/><span class="name"></span><span> <a href="#" class="delete">delete</a></span></li>');
    return buf.join('');
};

// includes/transResult.jade compiled template
exports["includes"]["transResult"] = function tmpl_includes_transResult(locals) {
    var buf = [];
    buf.push('<li><div class="language col-lg-1"></div><div class="result col-lg-5"></div><div class="sideResult col-lg-5"></div></li>');
    return buf.join('');
};

// pages/about.jade compiled template
exports["pages"]["about"] = function tmpl_pages_about(locals) {
    var buf = [];
    buf.push('<section class="page result"><h1 class="page-header">About</h1><h3>Original repository</h3><p>fork and hack, at: <a href="https://github.com/saitodisse/translate-and-back">saitodisse/translate-and-back</a></p><h3>human javascript</h3><p>"a bag of pre-assembled little tools that you\'re free to rip apart". Includes nodejs, browserify, express, jade, backbone...<ul><li><a href="http://humanjavascript.com/">the book</a></li><li><a href="http://docs.humanjavascript.com/">docs</a></li><li><a href="https://github.com/HenrikJoreteg/humanjs">humanjs on GitHub</a></li></ul></p><h3>Microsoft Translator</h3><p>\tThis API is free to use with a limit of up to 2,000,000 characters per month<ul><li><a href="http://msdn.microsoft.com/en-us/library/hh454950.aspx">Obtaining an Access Token</a></li><li><a href="http://msdn.microsoft.com/en-us/library/ff512387.aspx">Using the HTTP Interface</a></li></ul></p></section>');
    return buf.join('');
};

// pages/translate.jade compiled template
exports["pages"]["translate"] = function tmpl_pages_translate(locals) {
    var buf = [];
    buf.push('<section class="page config"><h1 class="page-header">Translate and Back</h1><div class="form-group"><label for="sentence">Type a sentence</label><input id="sentence" type="text" placeholder="Type a sentence here to translate ever several languages and back to original" class="form-control"/></div><div class="form-group"><label for="langPath">Choose the translations path</label><input id="langPath" type="text" placeholder="pt,en,ja" class="form-control"/></div><button class="btn btn-default translate">Start</button><ul class="results col-lg-12"></ul></section>');
    return buf.join('');
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();