$( document ).ready(function() {
  
    $('button').click(function(){
        $('#template').after(
      // This is the path to the templates file
      JST['assets/templates/myTemplate.ejs']( {message: "mymessage"} )
      );
    });
});