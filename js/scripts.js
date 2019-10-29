


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var index = $("#userinput1").val();
    var conditional =$("#userinput2").val();
    var count =$("#userinput3").val();

    var parsedIndex = parseInt(index);
    var parsedConditional = parseInt(conditional);
    var parsedCount = parseInt(count);

    for(parsedIndex; parsedIndex <= parsedConditional; parsedIndex += parsedCount ){
      alert(parsedIndex);
    }

    console.log(parsedIndex, parsedConditional, parsedCount);

  });
});
