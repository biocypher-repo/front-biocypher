function postBiometry(data) {
  $.post( "test.php", { name: "eu", time: "0pm" })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
}

function postContract(json) {
  $.post( "test.php", { name: "eu", time: "0pm" })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
}

function postDashboard(json) {
  $.post( "test.php", { name: "eu", time: "0pm" })
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });
}

function getContract(txid) {
  $.get( "ajax/test.html", function( data ) {
    alert( data );
  });
}

function getAssociation(txid) {
  $.get( "ajax/test.html", function( data ) {
    alert( data );
  });
}
