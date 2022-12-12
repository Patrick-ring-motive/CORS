
async function main(){



let external_resource = await fetchcors('https://www.w3schools.com/');


    console.log(external_resource);
  
}



window.fetchcors=async function(url){


return await fetch('https://cors.gamestop.workers.dev/'+url);

  
}


window.cors=function(url){

return 'https://cors.gamestop.workers.dev/'+url;

  
}

main();