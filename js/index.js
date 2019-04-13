$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
  });

  $("#userFontInput").on("click", function(e) {
    $("table").append($(this).prop(":checked"));
    var inputFont = $(this).is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont);
  });

  $("#confirmOrder").on("click", function(e) {
    event.preventDefault();
    //console.log('is my event firing')
    var previewMsg = $('').val();
    var previewMsg = $("#userSignInput").val();
    $("#previewScreen").prepend(previewMsg);
    $("#previewScreen")
      .toggle()
      .animate({ right: "0px" }, 250);
  }); //closing tag to click event
  $("#cancelPreview").on("click", function(e) {
    event.preventDefault();

    $("#previewScreen").toggle();
  });
    $("#confirmPreview").on("click", function(e) {
    event.preventDefault();

    $("#previewScreen").toggle();
    window.alert('Purchase confirmed!');
  });
}); //closing tag to my doc.ready function
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;

  if (fontUpgrade) {
    console.log("upgrading your tile cost");
    costPerTile = 6;
  } else {
    costPerTile = 5;
  }

  var subTotal = signLength * costPerTile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }
  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}