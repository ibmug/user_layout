$(document).ready(function(){
    //Something

    $( "#srchBTN" ).on("click", function( event ) {
        alert( "Handler for submitLst.submit() called." );
        event.preventDefault();
        const somData = {
            publicID : $('#listID').val(),
           
        }

        $.ajax("/", {
            type: "GET",
          }).then(
            function(result) {
              console.log("Checking Lists...");
            //   console.log(somData.publicID);
            //   console.log(result);
              // Reload the page to get the updated list and display.
              location.reload();
            }
          );


    });

        //console.log(data);
       





        // Send the PUT request.
    // $.ajax("/add/product", {
    //     type: "POST",
    //     data: somData
    //   }).then(
    //     function() {
    //       console.log("Adding List...");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );


    //   });
});