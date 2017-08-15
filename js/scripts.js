$(document).ready(function() {
  $("#form1").submit(function(event) {
    var sentence = ($("#sentence").val());
    var sentence2=[];
    event.preventDefault();
  for (i = 0; i <= sentence.length; i += 1) {
      var pass = sentence[i];
      if (pass != 'a' && pass !='e' && pass !='i' && pass !='o' && pass !='u') {
      sentence2[i] = pass;
    } else {
      sentence2[i]='-';
    }
    if(i===sentence.length-1) {
        $("#results").append("<p>" + sentence2.join('','') + "</p>");
        document.getElementById('form1').className += 'hidden';
    }
    };
  });
});
