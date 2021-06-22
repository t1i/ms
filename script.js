    window.onload=()=>{
      function adcode(njs,vid) {
        document.querySelectorAll(njs).forEach((ee) => {
          if (getComputedStyle(ee).display!='none') {
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
