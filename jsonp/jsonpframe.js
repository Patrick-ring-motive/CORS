
async function main(){



let external_resource = await fetchjpf('https://www.w3schools.com/');


    console.log(external_resource);
  
}




window.jsonpframeCallback = function(data, prom_l) {

  if (prom_l) { return prom_l(data); }
  return data;
}




window.jsonpframe = function jsonpframe(frame_url, frame_id, prom_l) {
  frame_url = frame_url || "https://www.w3schools.com/";

  frame_id = frame_id || 'jsonpframe' + new Date().getTime();
  let jscr = document.createElement('iframe');
  jscr.id = frame_id;
  jscr.src = "https://jsonpframe.gamestop.workers.dev/" + frame_url+ 'xxscriptidxx' + jscr.id + 'xxscriptidxx';;
  jscr.style.visibility = 'hidden';
  jscr.style.height = '0px';
  jscr.style.width = '0px';
  jscr.prom = prom_l;
  jscr.lstnr = function(event) {

    if (event.data.toString().split('xxscriptidxx')[1] && (event.data.toString().split('xxscriptidxx')[1] == (jscr.id))) {

      jsonpframeCallback(decodeURIComponent(event.data.split('xxjsonpxx')[2]), jscr.prom);
document.body.removeChild(jscr);
    
    }
    return jscr.prom;

  }
  window.addEventListener("message", jscr.lstnr, false);




  document.body.appendChild(jscr);

}

window.fetchjpf = async function(furl) {



  let plres = await new Promise((resolve) => {
    jsonpframe(furl, 'jsonpframe' + new Date().getTime(), resolve);
  });
  return plres;
}


main();