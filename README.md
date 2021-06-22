<p align="center">
  <img src="assets/logo-apicnig.png" height="152" />
</p>
<h1 align="center"><strong>APICNIG</strong> <small>🔌 M.plugin.QueryAttributes</small></h1>

<p align="center">
  <a title="MIT License" href="LICENSE.md">
    <img src="https://img.shields.io/badge/license-EUPL-blue.svg">
  </a>
  <a title="Node version" href="#">
    <img src="https://img.shields.io/badge/node-v14.16-blue">
  </a>  
  <a title="NPM version" href="#">
    <img src="https://img.shields.io/badge/npm-v6.14-blue">
  </a>  
  <br />
  <br />
</p>

## Descripción 👷

Plugin que permite aplicar filtros sobre las capas de un mapa y visualizar de forma gráfica las features que cumplen los filtros. Permite guardar consultas, combinarlas y exportar los resultados de estas.

## Dependencias 👷

- queryattributes.ol.min.js
- queryattributes.ol.min.css


```html
 <link href="../../plugins/queryattributes/queryattributes.ol.min.css" rel="stylesheet" />
 <script type="text/javascript" src="../../plugins/queryattributes/queryattributes.ol.min.js"></script>
```

## Parámetros 👷

El constructor se inicializa con un JSON de _options_ con los siguientes atributos:

- **collapsed**. Indica si el plugin viene cerrado por defecto (true/false).
- **collapsible**. Indica si el plugin se puede cerrar (true/false).
- **position**. Indica la posición donde se mostrará el plugin
  - 'TL':top left (default)
  - 'TR':top right
  - 'BL':bottom left
  - 'BR':bottom right
- **filters**: Cuando toma el valor false, en cada panning muestra en la tabla los registros que se encuentran en el bounding box de la pantalla. Cuando toma valor tres, muestra botones para establecer filtro por bounding box o por poligono trazado por el usuario.
- **configuration**: aquí definimos el aspecto y el tratamiento de lso campos de la capa vectorial dentro de la tabla de atributos.
  - **layer**: nombre de la capa cuyos elementos se mostrarán en la tabla de atributos, especificada en su propiedad *name*.
  - **pk**: nombre del atributo que actúa como clave principal.
  - **initialsort**: aquí indicamos el campo por el que se ordena inicialmente
    - **name**: nombre del campo para ordenar.
    - **dir**: sentido de ordenación [asc, desc]
  - **columns**: array de objetos con la definición de los campos para la tabla de atributos

### Definición de campos

Cada campo de la capa vectorial necesita un objeto para definirlo. Los atributos del objeto son

* **name**: nombre del campo en el *feature*.
* **alias**: denominación del campo para mostrar,
* **visible**: true/false. Se muestra o no en la tabla.
* **align**: right/left. Alineación horizontal en la celdilla de la tabla
* **type**: tipo del campo
  * **string**: tipo de cadena. Por defecto.
  * **image**: contiene la URL de una imagen. La imagen se  mostrarla en la tabla.
  * **linkURL**: contiene una URL. Se muestra dentro de un hipervínculo. 
  * **buttonURL**: contiene una URL. Se muestra dentro de un botón. 
  * **formatter**: repite un carácter formateado un número especificado de veces.
  * **percentage**: muestra el valor formateado en una barra de progreso.
* **typeparam**: parámetros para complementar al atributo *type*.
  * **buttonURL**: texto que figura en el botón.
  * **formatter**: valor que se repite.


## Ejemplo de definición del plugin

```javascript

const map = M.map({
  container: 'map'
});

const mp = new QueryAttributes({
  position: 'TL',
  collapsed: true,
  collapsible: true,
  filters: true,
  configuration: {
    layer: 'vertices',
    pk: 'id',
    initialSort: { name: 'nombre', dir: 'asc' },
    columns: [
      { name: 'id', alias: 'Identificador', visible: false, align: 'right', type: 'string' },
      { name: 'nombre', alias: 'Nombre Vértice', visible: true, align: 'left', type: 'string' },
      { name: 'xutmetrs89', alias: 'Coordenada X', visible: false, align: 'left', type: 'string' },
      { name: 'yutmetrs89', alias: 'Coordenada Y', visible: false, align: 'left', type: 'string' },
      { name: 'horto', alias: 'Altitud Ortométrica', visible: false, align: 'left', type: 'string' },
      { name: 'calidad', alias: 'Calidad', visible: false, align: 'left', type: 'formatter', typeparam:'⭐️' },
      { name: 'nivel', alias: 'Vida útil', visible: true, align: 'left', type: 'percentage' },
      { name: 'urlficha', alias: 'URL PDF Ficha', visible: true, align: 'left', type: 'linkURL' },
      { name: 'urlcdd', alias: 'Descargas', visible: true, align: 'left', type: 'buttonURL', typeparam:'🔗 Acceder' },
      { name: 'nivel', alias: 'Vida útil', visible: true, align: 'left', type: 'percentage' },
      { name: 'hojamtn50', alias: 'Hoja MTN50', visible: false, align: 'right', type: 'string' },
      { name: 'summary', alias: 'Localización', visible: false, align: 'left', type: 'string' },
      { name: 'imagemtn50', alias: 'Imagen Hoja MTN50', visible: true, align: 'left', type: 'image' },
    ],
  }
});

map.addPlugin(mp);
```



## Mejoras 👷

* Nueva documentación del plugin.
* Definimos el atributo con la clave principal de *featureset*. De esa manera no es necesario que la primera columna contenga este valor.
* Mostramos información del número de elementos en la tabla y el número de elementos del filtro aplicado. Spinner para marcar tiempos de búsqueda.
* Nuevos tipos de valores para dar más opciones de renderizar los valores.



* Mejorar datos muestra
* Al seleccionar un elemento, sus propiedades tiene que aparecer filtradas en la lista
* Mejorar el aspecto visual de la información mostrada
* Filtros por campo ?¿

## 📸 Capturas 👷

Lorem ipsum asdkjasjdlajldjal

## 👨‍💻 Desarrollo

Para el stack de desarrollo de este componente se ha utilizado

* NodeJS Version: 14.16
* NPM Version: 6.14.11

## 📐 Para configurar el stack de desarrollo

### 1️⃣ Instalación de dependencias / *Install Dependencies*

```bash
npm i
```

### 2️⃣ Arranque del servidor de desarrollo / *Run Application*

```bash
npm run start
```

## 📂 Estructura del código / *Code scaffolding*

```any
/
├── assets 🌈               # Recursos
├── src 📦                  # Código fuente.
├── task 📁                 # EndPoints
├── test 📁                 # Testing
├── tmp 📁                  # Destination directory for images.
└── ...
```
## 📌 Metodologías y pautas de desarrollo / *Methodologies and Guidelines*

Metodologías y herramientas usadas en el proyecto para garantizar el Quality Assurance Code (QAC)

* ESTlint
  * [NPM ESLint](https://www.npmjs.com/package/eslint) \
  * [NPM ESLint | Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## ⛽️ Revisión e instalación de dependencias / *Review and Update Dependencies*

Para la revisión y actualización de las dependencias de los paquetes npm es necesario instalar de manera global el paquete/ módulo "npm-check-updates".

```bash
# Install and Run
$npm i -g npm-check-updates
$ncu
```

## 🚔 Licencia

* [European Union Public Licence v1.2](https://raw.githubusercontent.com/JoseJPR/tutorial-nodejs-cli-system-notification/main/README.md)

## ⛲️ Recursos y Herramientas

* [APICNIG](https://componentes.ign.es/api-core/doc/)
* [Mapea Plugins](https://github.com/sigcorporativo-ja/mapea-plugins)
* [APICNIG Plugins](https://componentes.ign.es/api-core/test.html)
* [Wiki APICNIG](https://github.com/IGN-CNIG/API-CNIG/wiki)
