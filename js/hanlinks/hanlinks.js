if (typeof WebRootPath=='undefined') {
   var WebRootPath='/';
   //document.location.protocol+"//www.abc.com/wf/";
   var imeServer='/wf/';
   var jscript = document.createElement('script');
   jscript.setAttribute('lang', 'text/javascript');
   jscript.setAttribute('src', WebRootPath+'hanlinks/wf_links.js');
   document.getElementsByTagName('head').item(0).appendChild(jscript);
}
