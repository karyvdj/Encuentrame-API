function initMap() {
  var mapaContenedor = document.getElementById('mapa');
  // var coordenadasLabPeru = {lat:-12-1191427, lng:-77.03}
  var coordenadasLaboratoria = {lat:19.4699103, lng:-99.3249405}

  var mapa = new google.maps.Map(
    mapaContenedor,{
    zoom:9,
    Center: coordenadasLaboratoria
    }
  )
}
