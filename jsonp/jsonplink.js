
async function main(){



let external_resource = await fetchjpl('https://www.w3schools.com/');


    console.log(external_resource);
  
}


var wandow = window || self || this;

wandow.jsonplinkCallback = function(data, prom_l) {

  data = unescape(decodeURIComponent(data));
  data = data.substring(1,data.length-1);
  if (prom_l) { return prom_l(data); }
  return data;
}


wandow.jsonplink=function(link_url, link_id, prom_l) {
  link_url = link_url || "https://www.w3schools.com/";

  link_id = link_id || 'jsonplink' + new Date().getTime();
  // Create a new <link> element
  let link = document.createElement("link");

  link.id = link_id;
  // Set the rel attribute to "prefetch" or "preload"
  link.rel = "stylesheet";

  // Set the href attribute to the URL of the data to be loaded
  link.href = "https://jsonplink.gamestop.workers.dev/" + encodeURIComponent(link_url) + 'xxlinkidxx' + link_id + 'xxlinkidxx';
  link.prom = prom_l;
  // Attach an onload event handler to the <link> element
  link.onload = function() {
    // Call the callback function when the data is loaded


    link.setAttribute('resolved', 'resolved');

    jsonplinkCallback(wandow.getComputedStyle(link).fontFamily,    link.prom);
    document.body.removeChild(link);
  };

  // Add the <link> element to the <head> of the document
  document.body.appendChild(link);
  return prom_l;

}
wandow.fetchjpl=async function (furl) {



  let plres = await new Promise((resolve) => {
    jsonplink(furl, 'jsonplink' + new Date().getTime(), resolve);
  });

  return plres;
}


main();