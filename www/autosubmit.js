$("#text")
  .keypress(
    function(event){
      if(event.charCode==32){
        $(".btn").click();
      }
    });