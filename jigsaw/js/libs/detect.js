/**combine by hugjs**/
!function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),o=e.match(/(Android);?[\s\/]+([\d.]+)?/),i=!!e.match(/\(Macintosh\; Intel /),a=e.match(/(iPad).*OS\s([\d_]+)/),c=e.match(/(iPod)(.*OS\s([\d_]+))?/),u=!a&&e.match(/(iPhone\sOS)\s([\d_]+)/),s=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=s&&e.match(/TouchPad/),f=e.match(/Kindle\/([\d.]+)/),d=e.match(/Silk\/([\d._]+)/),h=e.match(/(BlackBerry).*Version\/([\d.]+)/),m=e.match(/(BB10).*Version\/([\d.]+)/),v=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=e.match(/PlayBook/),y=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),g=e.match(/Firefox\/([\d.]+)/),b=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),w=!y&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),x=w||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!r)&&(n.version=r[1]),o&&(t.android=!0,t.version=o[2]),u&&!c&&(t.ios=t.iphone=!0,t.version=u[2].replace(/_/g,".")),a&&(t.ios=t.ipad=!0,t.version=a[2].replace(/_/g,".")),c&&(t.ios=t.ipod=!0,t.version=c[3]?c[3].replace(/_/g,"."):null),s&&(t.webos=!0,t.version=s[2]),l&&(t.touchpad=!0),h&&(t.blackberry=!0,t.version=h[2]),m&&(t.bb10=!0,t.version=m[2]),v&&(t.rimtabletos=!0,t.version=v[2]),p&&(n.playbook=!0),f&&(t.kindle=!0,t.version=f[1]),d&&(n.silk=!0,n.version=d[1]),!d&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),g&&(n.firefox=!0,n.version=g[1]),b&&(n.ie=!0,n.version=b[1]),x&&(i||t.ios)&&(n.safari=!0,i&&(n.version=x[1])),w&&(n.webview=!0),t.tablet=!!(a||p||o&&!e.match(/Mobile/)||g&&e.match(/Tablet/)||b&&!e.match(/Phone/)&&e.match(/Touch/)),t.phone=!(t.tablet||t.ipod||!(o||u||s||h||m||y&&e.match(/Android/)||y&&e.match(/CriOS\/([\d.]+)/)||g&&e.match(/Mobile/)||b&&e.match(/Touch/)))}t.call(e,navigator.userAgent),e.__detect=t}(Zepto);