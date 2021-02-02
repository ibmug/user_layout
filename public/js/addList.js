$(document).ready(function(){
    //Something

    $( "#srchBTN" ).on("click", function( event ) {
       // alert( "Handler for submitLst.submit() called." );
        event.preventDefault();
        const usrString = $('#listid').val();
        let url = "/lista/"+ usrString;
        console.log("############################EVENT\n");
        console.log(usrString);
        if(usrString === ""){
            location.reload();
        }else {
            window.location.href = url;
        }
       // window.location.href =url;


    });

    $( "#viewBtn" ).on("click", function( event ) {
        // alert( "Handler for submitLst.submit() called." );
         event.preventDefault();
       
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
});