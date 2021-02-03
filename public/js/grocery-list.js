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
                 $('#prodSelAdd').append(`<option data-id=${result[x].id}>${result[x].name}</option>`);
            }
          //  console.log(anArray);

          }
          );
    }
    populateCategories();





    $("#aplBTN").on("click", function(req){
        //two calls.
        console.log("ADDING A PRODUCT TO THE LIST");

        //AJAX call that populates groceryLISt
        //Something like this:
        //insert into grocerylistproducts (quantity, createdAt, updatedAt, GroceryListId, ProductId)
        //values (2, now(), now(), 2, 1);
        let listid = $('#addPrdtoLstFrm').attr('data-id')
        let prodId = $( '#prodSelAdd option:selected' ).attr('data-id');
       // alert(listid + ": " + prodId);
        //console.log(listid + prodId);

        $.ajax("/addToList", {
            type: "POST",
            data: {
                GroceryListId: listid,
                ProductId: prodId,
                quantity: 1
            }
          }).then(
            function() {
              console.log("Adding Product to List...");
              // Reload the page to get the updated list
              location.reload();
            }
          );


    })
});