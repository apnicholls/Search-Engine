
$(document).ready(() => {
   $('#submit').click(()=>{
      $("#try").empty();
      // makes value of gifinput equal to the value of search which is the input form value
      $("#gifinput").val($("#search").val()); 
       let userInput = $("#search").val()

       $.ajax({
       url: `http://api.giphy.com/v1/gifs/search?api_key=ztdTe0th1ULT4ef7vpNO0bTdJ0NUN6Gp&q=${userInput}`
 })
 .done((res)=>{
     let giphy = res.data;
     $.each (giphy, function (i,e) {
         let gifs =e.images.original.url;
         console.log("index", i, e.images.original.url)
       $("#try").append(`<img src = "${gifs}" alt="giphy" />`) 
     });
   //   counts img in container and asigns to a variable "count"
   //    then assigns value of count to id gifcount
     var count = ($("#try").children('img').length)
     $("#gifcount").val(count);

    })
 })
})

// $("#gifcount").val($('count').val());
// &limit=10