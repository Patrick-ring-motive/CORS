
void async function main(){



let external_resource = await fetchjp('https://www.w3schools.com/');


    console.log(external_resource);
  
}();



var wandow = window || self || this;

wandow.jsonpCallback = function(data, prom_l) {

  if (prom_l) { return prom_l(data); }
  return data;
}



wandow.jsonp = function(script_url, script_id, prom_l) {
  script_url = script_url || "https://www.w3schools.com/";

  script_id = script_id || 'jsonp' + new Date().getTime();
  let jscr = document.createElement('script');
  jscr.id = script_id;
  jscr.src = "https://jsonp.gamestop.workers.dev/" + script_url + 'xxscriptidxx' + jscr.id + 'xxscriptidxx';
  jscr.prom = prom_l;
  jscr.lstnr = function(event) {

    if (event.data.toString().split('xxscriptidxx')[1] && (event.data.split('xxscriptidxx')[1] == (jscr.id))) {

      jsonpCallback(decodeURIComponent(event.data.split('xxjsonpxx')[2]), jscr.prom);
      document.body.removeChild(jscr);
    }
    return jscr.prom;

  }
  wandow.addEventListener("message", jscr.lstnr, false);



  document.body.appendChild(jscr);
  return prom_l;
}


wandow.fetchjp = async function(furl) {



  let plres = await new Promise((resolve) => {
    jsonp(furl, 'jsonp' + new Date().getTime(), resolve);
  });
 
  return plres;
}

