import QueryAttributes from 'facade/queryattributes';


M.language.setLang('es'); //Español
//M.language.setLang('en'); //Inglés

const map = M.map({
  container: 'mapjs',
  controls: ['panzoom','panzoombar', 'scale*true', 'scaleline', 'rotate', 'location','backgroundlayers'], //getfeatureinfo: este control es un poco coñazo, siempre está buscando información al hacer clic en el mapa.
  // controls: ['panzoom', 'scale*true', 'scaleline', 'rotate', 'location', 'backgroundlayers', 'getfeatureinfo'],
  zoom: 10 ,  //6
  maxZoom: 20,
  minZoom: 4,
  projection: "EPSG:3857*m",
  center: {
      x: -860000, //-712300,
      y: 5420000, //4310700,
      draw: false  //Dibuja un punto en el lugar de la coordenada
  },
});


const mp = new QueryAttributes({
  position: 'TL',
  collapsed: true,
  collapsible: true,
  filters: true,
  configuration: {
    layer: 'vertices',
    initialSort: { name: 'codigoregi', dir: 'asc' },
    columns: [
      { name: 'id', alias: 'Identificador', visible: true, align: 'right', type: 'string' },
      { name: 'nombre', alias: 'Nombre Vértice', visible: true, align: 'left', type: 'string' },
      { name: 'xutmetrs89', alias: 'Coordenada X (UTM ETRS89)', visible: false, align: 'left', type: 'string' },
      { name: 'yutmetrs89', alias: 'Coordenada Y (UTM ETRS89)', visible: false, align: 'left', type: 'string' },
      { name: 'huso', alias: 'Huso UTM', visible: false, align: 'left', type: 'formatter', param:'🥚' },
      { name: 'horto', alias: 'Altitud Ortométrica', visible: false, align: 'left', type: 'string' },
      { name: 'summary', alias: 'Descripción', visible: false, align: 'left', type: 'string' },
      { name: 'lat', alias: 'Latitud', visible: false, align: 'left', type: 'string' },
      { name: 'lng', alias: 'Longitud', visible: false, align: 'left', type: 'string' },
      { name: 'urlficha', alias: 'URL PDF Ficha', visible: false, align: 'left', type: 'url' },
      { name: 'urlcdd', alias: 'URL Centro Descargas', visible: false, align: 'left', type: 'url' },
      { name: 'hojamtn50', alias: 'Hoja MTN50', visible: false, align: 'left', type: 'string' },
      { name: 'imagemtn50', alias: 'Imagen Hoja MTN50', visible: false, align: 'left', type: 'image' },
      { name: 'description', alias: 'Descripción completa', visible: true, align: 'left', type: 'string' },
    ],
  }
});



const campamentos = new M.layer.WFS({
  url: "http://geostematicos-sigc.juntadeandalucia.es/geoserver/sepim/ows?",
  namespace: "sepim",
  name: "campamentos",
  legend: "Campamentos",
  geometry: 'POINT',
}, {
  getFeatureOutputFormat: 'json',
  describeFeatureTypeOutputFormat: 'json'
});
map.addWFS(campamentos);


const vertex = new M.layer.GeoJSON({
  name: 'vertices',
  url: 'https://projects.develmap.com/attributestable/roivertexred.geojson',
  extract: true, // Con esta propiedad sale el popup standard con las propiedades
});
map.addLayers(vertex);


map.addPlugin(mp);


const plugMouse = new M.plugin.MouseSRS({
  tooltip: "Muestra coordenadas",
  srs: "EPSG:4326",
  label: "WGS84",
  precision: 4,
  geoDecimalDigits: 3,
  utmDecimalDigits: 2,
  activeZ: false
});
map.addPlugin(plugMouse);

window.map = map;

