# Apuntoes



## Plugin Name Control

El objeto M.Layer tiene un método para acceder a la implementación de una capa this.Layer.getImpl()

Con this.map_.getMapImpl() accedo al mapa OL

Para acceder a los métodos definidos en Impl, usamos 


mapjs.getMapImpl().on('click', (evt) => {
        mapjs.getMapImpl().forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
          if () {

          }        
      }
  });

  https://github.com/sigcorporativo-ja/Mapea4/wiki



  


        //const extentPointClicked = this.getImpl().getGeomExtent('point',evt.coord);
        //const polygonFromExtentPointClicked=this.getImpl().getPolygonFromExtent(extentPointClicked);
        //console.log(polygonFromExtentPointClicked);
        
        var featureFacade = M.impl.Feature.olFeature2Facade(feature);
        const filter = M.filter.spatial.INTERSECT(featureFacade.getGeometry());

        //console.log(this.hasLayer_(layerName)[0]);

        /*this.layer.setFilter(filter);
        this.filtered = true;
        this.oldFilter = filter;
        this.oldLayer = this.layer;
        this.showAttributeTable(this.layer.name);
        const buttons = '#m-queryattributes-options-buttons>button';
        document.querySelector(`${buttons}#limpiar-filtro-btn`).style.display = 'block';
        if (this.filters) {
          this.map.setBbox(this.getImpl().getLayerExtent(this.layer));
        }
    */



//        var featureFacade = M.impl.Feature.olFeature2Facade(feature);
  //      const filter = M.filter.spatial.INTERSECT(featureFacade.getGeometry());

        //console.log(this.map.getLayers());

/*

        layer.setFilter(filter);
        this.filtered = true;
        this.oldFilter = filter;
        this.oldLayer = layer;
        this.showAttributeTable(layer.name);
        const buttons = '#m-queryattributes-options-buttons>button';
        document.querySelector(`${buttons}#limpiar-filtro-btn`).style.display = 'block';
        if (this.filters) {
          this.map.setBbox(this.getImpl().getLayerExtent(layer));
        }        
        console.log(layer);
*/


### Recorriendo un objeto, entradas, claves y valores

```javascript
// Objeto [featureFacade.getAttributes()]
Object.keys(featureFacade.getAttributes()).forEach((entry) => {
  console.log(`Clave ${entry}`);
});
Object.values(featureFacade.getAttributes()).forEach((entry) => {
  console.log(`Valor ${entry}`);
});
Object.entries(featureFacade.getAttributes()).forEach((entry) => {
  console.log(`Clave ${entry[0]} 👉 Valor ${entry[1]}`);
});
```

### Configuración de Eslint

Utilizo el fichero .eslintignore para evitar que **ESlint** me de continuamente la tabarra. Al final del proyecto elimino el fichero para arreglar las cosas que hago mal

```bash
**/*.js
```

### Búsquedas facetadas

```javascript
/*
En contrar valores únicos en un array
https://www.etnassoft.com/2011/06/24/array-unique-eliminar-valores-duplicados-de-un-array-en-javascript/
*/

Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

var myArr = [ 1, 2, 3, 'foo', 'bar', 'Hello World', 2, 3, 'bar', 1, 4, 5];
console.log( myArr.unique() ); // ["foo", "Hello World", 2, 3, "bar", 1, 4, 5]





/*
https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
*/
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique);

console.log(unique); // ['a', 1, 2, '1']


```

### Handlebars

https://jonathanmh.com/handlebars-custom-helpers-chaining/