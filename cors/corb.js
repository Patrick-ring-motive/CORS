
void async function main(){





let scr = document.createElement('script');

  scr.src=corb('https://raw.githubusercontent.com/Patrick-ring-motive/gwiki/master/UserScripts/testAlert.js','text/javascript');
  document.body.appendChild(scr);

  
}();

var wandow = window || self || this;

wandow.fetchcorb=async function(url,mime){


return await fetch('https://corb.gamestop.workers.dev/'+url+'xxmimexx'+mime+'xxmimexx');

  
}

wandow.corb=function(url,mime){

return 'https://corb.gamestop.workers.dev/'+url+'xxmimexx'+mime+'xxmimexx';

  
}



