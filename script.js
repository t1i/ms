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

let smo=sessionStorage
if (!smo.c) {
  function stn() {
    setTimeout(() => {
      
    (function b(i) {
      if (i==0) {
        (function () { }).constructor('debugger')()     
        b(i++)
      }
    })(0)

        
    }, 1000);
  }
  window.onblur=stn;
  window.onresize=stn;
  window.onload=stn;
  window.onfocus=stn;
}
