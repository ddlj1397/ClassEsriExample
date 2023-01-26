  require([ "esri/Map", "esri/views/MapView" ], (Map, MapView) => {
    // Code to create the map and view will go here
  });
require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
  const map = new Map({
    basemap: "topo-vector"
  });
});
require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
  const map = new Map({
    basemap: "topo-vector"
  });

  const view = new MapView({
    container: "viewDiv", // Reference to the DOM node that will contain the view
    map: map // References the map object created in step 3
  });
});
