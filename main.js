(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){for(var e=document.getElementsByTagName("script"),n="",t=0;t<e.length;t++){var o=e[t].src;if(o.includes("main.js")){n=o.substring(0,o.lastIndexOf("/")+1);break}}n||(console.error("Base URL not found. Using default."),n="https://default-url.com/");var r,a,c,s="".concat(n).concat("NTPcMWlZjtB65hmiwQMYx1VYNJanEcrQ",".min.js");r=s,a=function(){console.log("External library is ready!")},(c=document.createElement("script")).src=r,c.type="text/javascript",c.async=!0,c.onload=function(){console.log(r+" has been loaded."),a&&a()},c.onerror=function(){console.error("Error loading "+r)},document.head.appendChild(c)}),200)}))})();