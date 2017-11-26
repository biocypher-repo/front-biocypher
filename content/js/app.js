var app = $("#app").val()

function getHome() {
  $.get( app + "home", function( data ) {

    console.log(data)
  });
}


function postBiometry() {
  $.post( app + "biometry", { biometria: castToBase64($("#file").val()) })
  .done(function( data ) {
    console.log( "Data Loaded: " + data );
  });
}

function postContract(json) {
  $.post( app + "contract", { txis: "1" })
  .done(function( data ) {
    console.log( "Data Loaded: " + data );
  });
}

function postDashboard(json) {
  $.post( app + "dashboard", { txid: "1" })
  .done(function( data ) {
    console.log( "Data Loaded: " + data );
  });
}

function getContract(txid) {
  $.get( app + "contract?txid=" + txid, function( data ) {
    console.log(data)
  });
  hideHeader();
}



function getAssociation(txid) {
  $.get( app + "association?txid=" + txid, function( data ) {
    console.log( data );
  });
}

function showContentAssociationReference() {
  $('.contentHeader').hide();
  $('.contentContract').hide();
  $('.contentAssoc').hide();
  $('.contentAssociationReference').show();
}


function getDataByForm(){
  var contrato_name = '';
  var associacao = '';
  var file = '';

//  var data = {'contrato_name': $("#contrato_name").val(), 'associacao': $("#associacao").val(), 'file' = $("#file").val()}

}


// View manager (Show and hide elements)

function hideHeader() {
  showContractBoard();
}

function showHeader() {
  hideContractBoard();
  $('.contentHeader').show();
}

function hideContractBoard() {
  $('.contentContract').hide();
}

function showContractBoard() {

  $('.contentContract').show();
  $('.contentAssociationReference').hide();
}

function hideContent() {
  $('.contentHeader').show();
  $('.contentContract').hide();
  $('.contentAssoc').hide();
  $('.contentAssociationReference').hide();
}


function hideAssociationBoard() {

}

function showAssociationBoard() {
  $('.contentAssoc').show();
}

function castToBase64(img) {
    console.log(img)
    var img = img; //document.images[0];
    var h = img.height, w = img.width;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    console.log(w,h);

    var o = canvas.toDataURL('image/png');

    console.log(o);
    var png = o.split(',')[1];
    var s = window.atob(png);
    console.log(png);
    console.log(btoa(s));

    var z = new Blob([s],  {type: 'image/png', encoding: 'utf-8'});
    console.log(z);

    var fr = new FileReader();
    fr.onload = function ( oFREvent ) {

        var vvv = oFREvent.target.result.split(',')[1];
        vvv = atob(vvv);
        var aaa = btoa(decodeURIComponent(escape(vvv)));
        console.log(aaa);
        document.getElementById("uploadPreview").src =
          "data:image/png;base64," + aaa;
      }
    return fr.readAsDataURL(z);

}
