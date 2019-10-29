


$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var index = $("#userinput1").val();
    var conditional =$("#userinput2").val();
    var count =$("#userinput3").val();

    var parsedIndex = parseInt(index);
    var parsedConditional = parseInt(conditional);
    var parsedCount = parseInt(count);

    if (parsedIndex === NaN) {
      alert("Please enter a number in the start point field.");
    } else if (parsedConditional === 0 || parsedConditional === "NaN") {
      alert("Please enter a number in the conditional field.");
    } else if (parsedCount === 0 || parsedCount === "NaN") {
      alert("Please enter a number in the count field.");
    } else {

      for (parsedIndex; parsedIndex <= parsedConditional; parsedIndex += parsedCount){
          $("#output").append("<li>" + parsedIndex + "</li>");
      }
    }
  });
});
