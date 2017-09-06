if (typeof WebRootPath=='undefined') {
       var WebRootPath='js/';
       var jscript = document.createElement('script');
       jscript.setAttribute('lang', 'text/javascript');
       jscript.setAttribute('src', WebRootPath+'hanlinks/wf_links.js');
       document.getElementsByTagName('head').item(0).appendChild(jscript);
}
