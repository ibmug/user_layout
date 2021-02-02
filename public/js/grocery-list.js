$(document).ready(function(){
    //Something
    function starttheload(){
        
    }
    starttheload();



    function populateCategories(){
        console.log("Populating Products");
        $.ajax("/api/products", {
            type: "GET",
          }).then((result)=>{
            console.log("########################################################HI");
            //let anArray = [];
            let anOption = $('<option>');
            // let aButton = $('<button>');
            for(var x in result){
                console.log(result[x].name + " : " + result[x].id);
                 $('#productSelect').append(`<option value=${result[x].id}>${result[x].name}</option>`);

            }
          //  console.log(anArray);

          }
          );
    }
    populateCategories();





    $().on("click", function(req){
        //two calls.
    })
});