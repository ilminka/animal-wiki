$(document).ready(function() {
  $("#animals").submit(function(event) {
  var animal = parseInt($("#selections").val());

    if (animal === 1) {
      $("#lion").show();
    } else if (animal === 2) {
      $("#tiger").show();
    }  else if (animal === 3) {
      $("#bear").show();
    }  else if (animal === 4) {
      $("#ohmy").show();
    }

    console.log(animal);
    event.preventDefault();
  });
});
