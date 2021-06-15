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