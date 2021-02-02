$(document).ready(function(){
    //Something

    $( "#addPrdFrm" ).submit(function( event ) {
        alert( "Handler for submitProduct.submit() called." );
        event.preventDefault();
        const somData = {
            name : $('#product').val(),
            cat : $('#catSelect').find(':selected').data('id'),
            price: $('#price').val()
        }

        //console.log(data);
        // Send the PUT request.
    $.ajax("/add/product", {
        type: "POST",
        data: somData
      }).then(
        function() {
          console.log("Adding Product...");
          // Reload the page to get the updated list
          location.reload();
        }
      );


      });
});