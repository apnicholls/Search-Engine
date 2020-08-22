
$(document).ready(() => {
   $('#submit').click(()=>{
      $("section").empty();
       let userInput = $("#search").val()
    //    alert(userInput)

       $.ajax({
       url: `http://api.giphy.com/v1/gifs/search?api_key=ztdTe0th1ULT4ef7vpNO0bTdJ0NUN6Gp&q=${userInput}`
 })
 .done((res)=>{
     let giphy = res.data;
     $.each (giphy, function (i,e) {
         let gifs =e.images.original.url;
         console.log("index", i, e.images.preview_webp.url)
       $("section").append(`<img src = "${gifs}" alt="giphy" />`) 
     });
    })
 })
})
