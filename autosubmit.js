$("#text")
  .change(
    function(){
      if($("#text").slice(-1) == ' '){
        $("button").click();
      }
    });