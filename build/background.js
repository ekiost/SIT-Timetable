(()=>{"use strict";chrome.runtime.onMessage.addListener(((e,o,a)=>{if("GREETINGS"===e.type){const s=`Hi ${o.tab?"Con":"Pop"}, my name is Bac. I am from Background. It's great to hear from you.`;console.log(e.payload.message),a({message:s})}}))})();