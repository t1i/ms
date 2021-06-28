canonical.href=location.href;
let scpt=document.createElement('script');
scpt.text=`
{
"@context": "https://schema.org",
"@graph":[
  {
    "@type": "Organization",
    "name": "MrJaz",
    "alternateName": "www.mrjaz.com",
    "url": "https://www.mrjaz.com/",
    "logo": "https://www.mrjaz.com/favicon.ico",
    "image": "https://www.mrjaz.com/favicon.ico",
    "description": "${title.innerText}",
    "sameAs": [
      "https://www.mrjaz.com/",
      "https://www.am2z.com/",
      "https://insurance-hosting-loans.mrjaz.com/",
      "https://templatetoy.mrjaz.com/"
    ]
  },
  {
    "@type": "WebSite",
    "name": "${title.innerText}",
    "url": "https://templatetoy.mrjaz.com/",
    "description": "${description.content}",
    "image": "${image.content}",
    "publisher": {"name": "MrJaz"},
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://templatetoy.mrjaz.com/s?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@type": "ImageObject",
    "name": "${title.innerText}",
    "url": "${image.content}",
    "contentUrl": "${image.content}",
    "author": "MrJaz",
    "caption": "${title.innerText}",
    "description": "${description.content}"
  },
  {
    "@type": "Article",
    "name" : "${title.innerText}",
    "headline": "${title.innerText}",
    "description": "${description.content}",
    "image": "${image.content}",
    "keywords": ["${title.innerText}","${keywords.content.replace(/,/g,`","`)}"],
    "articleBody" : "${body.innerText}",
    "articleSection" : "${body.innerText}",
    "url" : "${location.href}",
    "author": {"@type": "Person","name": "MrJaz"},
    "mainEntityOfPage": "${location.href}",
    "datePublished": "",
    "dateModified": "",
    "publisher": {"@type": "Organization","name": "MrJaz","logo": "https://www.mrjaz.com/favicon.ico"
    }
  },
  {
    "@type": "WebPage",
    "url": "${location.href}",
    "name": "${title.innerText}",
    "description": "${description.content}",
    "breadcrumb": "MrJaz > TemplateToy > Am2z",
    "potentialAction": {
      "@type": "ReadAction",
      "target": "${location.href}"
    }
  },
  {
    "@type":"CreativeWorkSeries",
    "name":"${title.innerText}",
    "aggregateRating":{
      "@type":"AggregateRating",
      "ratingValue":"5",
      "ratingCount":"69"
    }
  },
  {
    "@type": "CreativeWork",
    "name": "${title.innerText}",
    "headline": "${title.innerText}",
    "contentRating": "excellent",
    "image": "${image.content}",
    "author": "MrJaz",
    "publisher": {"name": "MrJaz"}
  }
]
}`;
scpt.type='application/ld+json';
document.head.append(scpt);
let dkp=1000,maj='/what-is-insurance-types-of-insurance-with-full-meaning',nap='/what-is-bitcoin-how-to-mine-bitcoin-what-is-bitcoin-value';
window.onload=()=>{
  function adcode(njs,vid) {
    document.querySelectorAll(njs).forEach((ee) => {
      if (getComputedStyle(ee).display!='none'&&location.ancestorOrigins[0]==undefined) {
        ee.innerHTML=`<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8870343551793834" data-ad-slot=${vid} data-ad-format="auto" data-full-width-responsive="true"></ins>`
        let spt = document.createElement('script');
        spt.text = `(adsbygoogle=window.adsbygoogle||[]).push({});`;
        ee.append(spt);
      }
    })
  }
  adcode('.hrads','4437257043')
  adcode('.vrads','9174358269')
}

var _0xfb8d=["\x6C\x6F\x67","\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x6F\x6E\x66\x6F\x63\x75\x73","\x32\x33\x5A\x6A\x49\x57\x4A\x4B","\x31\x30\x38\x39\x36\x30\x4A\x6B\x71\x43\x62\x4B","\x34\x36\x34\x33\x31\x31\x6F\x4B\x4A\x45\x49\x42","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x6F\x6E\x62\x6C\x75\x72","\x62\x6C\x75\x72","\x6F\x6E\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65","\x39\x39\x38\x36\x33\x33\x6D\x7A\x5A\x70\x54\x62","\x31\x37\x32\x34\x31\x30\x34\x64\x76\x48\x66\x48\x47","\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x32\x58\x59\x48\x43\x72\x6B","\x6C\x6F\x61\x64","\x34\x36\x30\x37\x31\x35\x4B\x4C\x67\x6F\x6C\x6C","\x66\x6F\x63\x75\x73","\x37\x31\x30\x34\x38\x31\x52\x66\x77\x59\x4A\x54","\x63\x61\x6C\x6C\x65\x65","\x6F\x6E\x72\x65\x73\x69\x7A\x65","\x61\x74\x74\x61\x63\x68\x45\x76\x65\x6E\x74","\x34\x30\x35\x31\x31\x37\x50\x61\x4B\x46\x49\x72","\x44\x45\x56\x54\x4F\x4F\x4C\x53\x20\x64\x65\x74\x65\x63\x74\x65\x64\x20","\x73\x68\x69\x66\x74","\x70\x75\x73\x68","\x63","\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x76\x65","\x72\x65\x73\x69\x7A\x65"];var _0x4661=[_0xfb8d[0],_0xfb8d[1],_0xfb8d[2],_0xfb8d[3],_0xfb8d[4],_0xfb8d[5],_0xfb8d[6],_0xfb8d[7],_0xfb8d[8],_0xfb8d[9],_0xfb8d[10],_0xfb8d[11],_0xfb8d[12],_0xfb8d[13],_0xfb8d[14],_0xfb8d[15],_0xfb8d[16],_0xfb8d[17],_0xfb8d[18],_0xfb8d[19],_0xfb8d[20],_0xfb8d[21],_0xfb8d[22],_0xfb8d[23]];(function(_0xe0d7x2,_0xe0d7x3){var _0xe0d7x4=_0x3f8c;while(!![]){try{var _0xe0d7x5=parseInt(_0xe0d7x4(0x83))* parseInt(_0xe0d7x4(0x81))+  -parseInt(_0xe0d7x4(0x95))+  -parseInt(_0xe0d7x4(0x85))+ parseInt(_0xe0d7x4(0x89))+  -parseInt(_0xe0d7x4(0x96))+ parseInt(_0xe0d7x4(0x90))+ parseInt(_0xe0d7x4(0x8e))* parseInt(_0xe0d7x4(0x8f));if(_0xe0d7x5=== _0xe0d7x3){break}else {_0xe0d7x2[_0xfb8d[25]](_0xe0d7x2[_0xfb8d[24]]())}}catch(_0x5e3c33){_0xe0d7x2[_0xfb8d[25]](_0xe0d7x2[_0xfb8d[24]]())}}}(_0x4661,0xd2de8));let smo=sessionStorage;function _0x3f8c(_0xe0d7x8,_0xe0d7x9){return _0x3f8c= function(_0xe0d7xa,_0xe0d7xb){_0xe0d7xa= _0xe0d7xa- 0x81;var _0xe0d7xc=_0x4661[_0xe0d7xa];return _0xe0d7xc},_0x3f8c(_0xe0d7x8,_0xe0d7x9)}!smo[_0xfb8d[26]]&&  !function(){var _0xe0d7xd=_0x3f8c;function _0xe0d7xe(_0xe0d7xf){var _0xe0d7x10=_0x3f8c;if(isNaN(+_0xe0d7xf)){_0xe0d7xf= 0x64};var _0xe0d7x11=+ new Date();debugger;var _0xe0d7x12=+ new Date();(isNaN(_0xe0d7x11)|| isNaN(_0xe0d7x12)|| _0xe0d7x12- _0xe0d7x11> _0xe0d7xf)&& console[_0xe0d7x10(0x8b)](_0xe0d7x10(0x8a)+ _0xe0d7xf)}window[_0xe0d7xd(0x88)]?document[_0xe0d7xd(0x91)]=== _0xe0d7xd(0x8c)|| document[_0xfb8d[6]]=== _0xfb8d[27]?(_0xe0d7xe(),window[_0xfb8d[21]](_0xe0d7xd(0x87),_0xe0d7xe),window[_0xe0d7xd(0x88)](_0xe0d7xd(0x94),_0xe0d7xe),window[_0xe0d7xd(0x88)](_0xe0d7xd(0x8d),_0xe0d7xe),window[_0xfb8d[21]](_0xe0d7xd(0x92),_0xe0d7xe)):setTimeout(argument[_0xe0d7xd(0x86)],0x0):(window[_0xfb8d[13]](_0xe0d7xd(0x82),_0xe0d7xe),window[_0xe0d7xd(0x98)](_0xfb8d[28],_0xe0d7xe),window[_0xe0d7xd(0x98)](_0xe0d7xd(0x97),_0xe0d7xe),window[_0xfb8d[13]](_0xe0d7xd(0x84),_0xe0d7xe),window[_0xe0d7xd(0x98)](_0xe0d7xd(0x93),_0xe0d7xe))}()
