$(document).ready(function(){
    //Something

    $( "#srchBTN" ).on("click", function( event ) {
       // alert( "Handler for submitLst.submit() called." );
        event.preventDefault();
        const usrString = $('#listid').val();
        let url = "/lista/"+ usrString;
        window.location.href =url;

        // const somData = {
        //     publicID : $('#listID').val(),
           
        // }

        // $.ajax("/", {
        //     type: "GET",
        //   }).then(
        //     function(result) {
        //       console.log("Checking Lists...");
        //     //   console.log(somData.publicID);
        //     //   console.log(result);
        //       // Reload the page to get the updated list and display.
        //       location.reload();
        //     }
        //   );


    });

    $( "#viewBtn" ).on("click", function( event ) {
        // alert( "Handler for submitLst.submit() called." );
         event.preventDefault();
        // const url = window.location.href;
        // const id = $(this).attr("data-id");
        // url += "/list/" + id;
        // window.location.href =url;
        console.log("DOingsomething");
       let url = "/lista/"+ $(this).attr("name");
       //url += $(this).name.val();
       
       window.location.href =url;
 
 
     });


    $( "#createBTN" ).on("click", function( event ) {
      //  alert( "Handler for submitLst.submit() called." );
        event.preventDefault();
        const somData = {
            publicID : $('#listid').val(),
           
        }
        console.log(somData.publicID);
        // Send the PUT request.
    $.ajax("/add/list/" + somData.publicID, {
        type: "POST",
        data: somData
      }).then(
        function() {
          console.log("Adding List...");
          // Reload the page to get the updated list
          location.reload();
        }
      );


      });


  //  });

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