var isNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 4);
var isIE = !isNS;
var HIDDEN  = (isNS) ? 'hide' : 'hidden';
var VISIBLE = (isNS) ? 'show' : 'visible';
