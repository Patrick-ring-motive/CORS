
void async function main(){



let external_resource = await fetchcors('https://www.w3schools.com/');


    console.log(external_resource);
  
}();

var wandow = window || self || this;

wandow.fetchcors=async function(url){


return await fetch('https://cors.gamestop.workers.dev/'+url);

  
}


wandow.cors=function(url){

return 'https://cors.gamestop.workers.dev/'+url;

  
}

