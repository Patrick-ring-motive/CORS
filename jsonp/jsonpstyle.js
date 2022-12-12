
async function main(){



let external_resource = await fetchjpst('https://www.w3schools.com/');


    console.log(external_resource);
  
}

var wandow = window || self || this;
// Define the callback function that will be called when the data is loaded
wandow.jsonpstyleCallback = function(data, prom_l) {

  data = unescape(decodeURIComponent(data));
  data = data.substring(1, data.length - 1);
  if (prom_l) { return prom_l(data); }
  return data;
}

wandow.jsonpstyle = function(style_url, style_id, prom_l) {
  style_url = style_url || "https://www.w3schools.com/";

  style_id = style_id || 'jsonpstyle' + new Date().getTime();
  // Create a new <style> element
  let style = document.createElement("style");

  style.id = style_id;

  // Set the href attribute to the URL of the data to be loaded
  style.innerHTML = "@import url('https://jsonplink.gamestop.workers.dev/" + encodeURIComponent(style_url) + 'xxlinkidxx' + style_id + "xxlinkidxx');";
  style.prom = prom_l;
  // Attach an onload event handler to the <style> element
  style.onload = function() {
    // Call the callback function when the data is loaded

    style.setAttribute('resolved', 'resolved');
    jsonpstyleCallback(wandow.getComputedStyle(style).fontFamily, style.prom);
    document.body.removeChild(style);
  };

  // Add the <style> element to the <head> of the document
  document.body.appendChild(style);
  return prom_l;

}

wandow.fetchjpst = async function(furl) {



  let plres = await new Promise((resolve) => {
    jsonpstyle(furl, 'jsonpstyle' + new Date().getTime(), resolve);
  });

  return plres;
}


main();