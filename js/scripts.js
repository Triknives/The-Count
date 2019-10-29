


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var index = $("#userinput1").val();
    var conditional =$("#userinput2").val();
    var count =$("#userinput3").val();

    var parsedIndex = parseInt(index);
    var parsedConditional = parseInt(conditional);
    var parsedCount = parseInt(count);

    if (isNaN(parsedIndex)) {
      alert("Please enter a number in the start point field.");
    } else if (parsedConditional === 0 || isNaN(parsedConditional)) {
      alert("Please enter a number in the conditional field.");
    } else if (parsedCount === 0 || isNaN(parsedCount)) {
      alert("Please enter a number in the count field.");
    } else {

      for (parsedIndex; parsedIndex <= parsedConditional; parsedIndex += parsedCount){
          $("#output").append("<li>" + parsedIndex + "</li>");
      }
    }
  });
});
