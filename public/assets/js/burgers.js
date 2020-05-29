// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-smashed").on("click", function (event) {
    event.preventDefault();
    console.log('clicked');
    var id = $(this).data("id");
    var newSmashed = $(this).data("newsmashed");

    var newlySmashedBurger = {
      smashed: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newlySmashedBurger
    }).then(
      function () {
        console.log("changed burger to", newSmashed);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //add one to eat
  $(".create-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // console.log($("#ca").val());
    var newBurger = {
      name: $("#newBurger").val().trim(),
      smashed: $("[name=burgerSmashed]:checked").val().trim()
    };

    // console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("check out a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //Create a delete request
  $(".change-delete").on("click", function (event) {
    event.preventDefault();
    console.log('deleted');
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("delete that burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});