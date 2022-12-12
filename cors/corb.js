
async function main(){





let scr = document.createElement('script');

  scr.src=corb('https://raw.githubusercontent.com/Patrick-ring-motive/gwiki/master/UserScripts/testAlert.js','text/javascript');
  document.body.appendChild(scr);

  
}



window.fetchcorb=async function(url,mime){


return await fetch('https://corb.gamestop.workers.dev/'+url+'xxmimexx'+mime+'xxmimexx');

  
}

window.corb=function(url,mime){

return 'https://corb.gamestop.workers.dev/'+url+'xxmimexx'+mime+'xxmimexx';

  
}



main();