
$(document).ready(() => {
   $('#submit').click(()=>{
      $("#try").empty();
      $("#gifinput").val($("#search").val());
       let userInput = $("#search").val()
    //    alert(userInput)
       $.ajax({
       url: `http://api.giphy.com/v1/gifs/search?api_key=ztdTe0th1ULT4ef7vpNO0bTdJ0NUN6Gp&q=${userInput}&limit=10`
 })
 .done((res)=>{
     let giphy = res.data;
     $.each (giphy, function (i,e) {
         let gifs =e.images.original.url;
         console.log("index", i, e.images.original.url)
       $("#try").append(`<img src = "${gifs}" alt="giphy" />`) 
     });
   //   alert($("#try").children('img').length)
     var count = ($("#try").children('img').length)
     $("#gifcount").val($('count').val());
     alert (count)
    })
 })
})
