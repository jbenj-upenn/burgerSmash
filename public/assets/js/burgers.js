// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-smashed").on("click", function(event) {
      var id = $(this).data("id");
      var newSmashed = $(this).data("newsmashed");
  
      var newlySmashedBurger = {
        smashed: newSmashed
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newlySmashedBurger
      }).then(
        function() {
          console.log("changed smashed to", newSmashed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  // console.log($("#ca").val());
      var newBurger = {
        name: $("#ca").val().trim(),
        smashed: $("[name=smashed]:unchecked").val().trim()
      };
  
  // console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("check out a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });    
  });