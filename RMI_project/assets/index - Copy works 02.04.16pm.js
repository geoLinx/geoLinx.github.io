// Majuro Linguistic Landscape Project ©2015-16 I.Buchstaller & S.Alvanides
// with special thanks to V.Vlastaras from Manchester University, UK

var projectCredits = 'Majuro Linguistic Landscape Project <br> &copy;2015-16 I.Buchstaller & S.Alvanides';
var MajuroPhotoURL = 'https://dl.dropboxusercontent.com/u/2149416/';
var MajuroPhotoPop= '2016_Majuro_Linguistic_Landscape_all/All_others_Reduced_to_10pc/';
var MajuroPhotoOpen= '2016_Majuro_Linguistic_Landscape_all/All_others_Reduced_to_20pc/';

// Load baseMap layers from http://wiki.openstreetmap.org/wiki/Featured_tile_layers
//OpenStreetMap.Mapnik:L.tileLayer.grayscale('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//OpenStreetMap.DE: L.tileLayer.grayscale('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
//OpenStreetMap.HOT:
var osmGrayMap = L.tileLayer.grayscale('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy;<a href="http://openstreetmap.org"> OpenStreetMap</a> contributors. <br/> LinguisticLandscape &copy; I.Buchstaller & S.Alvanides',
  maxZoom: 20,  minZoom: 3}); //.addTo(map);
var landGrayMap = L.tileLayer.grayscale('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy;<a href="http://thunderforest.com/"> Thunderforest</a> contributors. <br/> LinguisticLandscape &copy; I.Buchstaller & S.Alvanides',
  maxZoom: 20,  minZoom: 3}); //.addTo(map);
var baseMaps = {
	"OpenStreetMap": osmGrayMap,
	"Landscape Map": landGrayMap
};
// Initialize the map.
var map = L.map('map', {
    center: [7.105, 171.36],
    zoom: 14,
    layers: [osmGrayMap]
});
//L.control.layers(baseMaps).addTo(map);

// *** Functional approach ***
// Kostas says: me tin map function stin js na ftiakseis mia list of list pou tha exei ta x,y coords.
// Des edw na deis peripou pos to kanei: github.com/Leaflet/Leaflet.heat/blob/gh-pages/demo/draw.html
//
// Use the build in array map function to transform an array into another array.
// Take the photosFeatures object. Use its features property (photosFeatures.features) which is an array of objects,
// thus it has the map function defined on it.
// Call the map function passing to it a transformation function. The map function internally enumerates all the features
// and calls the transformation function for each feature.
// The transformation function can be anything, but in our case (since we transform the contents of the features array)
// the transformation function should have an argument (we call it 'feature.geometry')
// which manipulates somehow each individual feature of the features array.

// ================================================================================
/* Functional Code.
* This is the way to use the functional approach to do what is needed
* in order to transform the contents of the GeoJSON object
* in to the array of arrays needed by the heatmap layer.
* The result is assigned to the photoPoints variable which is then used to render the heatmap layer.
*/
// Tidy version :-)
var photoPoints = photosFeatures.features.filter(function(feature) {
  return feature.geometry != null;
}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
});
// End of functional code.
// ================================================================================
/* Imperative Code.
* Instead of using the functional approach that is described above
* we can use an imperative programming approach to achieve the same thing.
* The imperative way might look more conventional but its downside is a code that spans more lines.
* Compare the 5 lines of code used above in the functional approach.
*/
// Create an empty photoPoints array.
/*var photoPoints = [];
for (i = 0; i < photosFeatures.features.length; i++) {  // Loop through all the features in photosFeatures.
  if (photosFeatures.features[i].geometry != null) {  // Check if the feature has a non null geometry.
     // if geometry is not null, extract  lat,lon and create an array with 2 elements,
     // then push this array in to the photoPoints array.
     photoPoints.push([photosFeatures.features[i].geometry.coordinates[1], photosFeatures.features[i].geometry.coordinates[0]]);
   }
}*/
// End of imperative code.
// ================================================================================

var heatMapLanguages = L.heatLayer(photoPoints,{
  radius: 20, blur: 25, maxZoom: 20,
});

// Heat maps for burried cables and street furniture

var EburcablesPoints91 = eburcablesENgeotagged91.features.filter(function(feature) {
  return feature.geometry != null;
}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
});
var heatMapEburcables91 = L.heatLayer(EburcablesPoints91,{
  radius: 40, blur: 25, maxZoom: 20,
});

var EfurniturePoints343 = efurnitureENgeotagged343.features.filter(function(feature) {
  return feature.geometry != null;
}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
});
var heatMapEfurniture343 = L.heatLayer(EfurniturePoints343,{
  radius: 30, blur: 25, maxZoom: 20,
});


// Using the pointToLayer option to create a CircleMarker:
// Using simple vector points for different Languages in feature.properties.MajuroType

var markerMarshallOptions = {
    radius: 3, fillColor: "#ff7800", /* orange */
    color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1,
};
var markerEnglishOptions = {
    radius: 3, fillColor: "#000099",  /* blue */
    color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1,
};
var markerEburcablesOptions = {
    radius: 3, fillColor: "#000099",  /* blue */
    color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1,
};
var markerEfurnitureOptions = {
    radius: 3, fillColor: "#000099",  /* blue */
    color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1,
};

var languageMarkers = L.geoJson(photosFeatures, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, markerMarshallOptions);
    }
});
var EburcablesMarkers91 = L.geoJson(eburcablesENgeotagged91, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, markerEburcablesOptions);
    }
});
var EfurnitureMarkers343 = L.geoJson(efurnitureENgeotagged343, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, markerEfurnitureOptions);
    }
});



// onEachFeature is associated with a function to popup the contents of the feature
//  onEachFeature: function (feature, layer) {
var pointIcon = L.icon({
  iconUrl: 'assets/blaupunkt.png',
  iconSize: [15, 15]
});
var photoClusters = L.geoJson(photosFeatures, {
  pointToLayer: function(feature,latlng) {
    var marker = L.marker(latlng, {icon: pointIcon});
    var MajuroImageOpen = '<a href="' + MajuroPhotoURL + MajuroPhotoOpen + feature.properties.Name + '"target=_blank>'
    var MajuroImageSRC = '<img src="' + MajuroPhotoURL + MajuroPhotoPop + feature.properties.Name+'"/></a><br>'
    var photoLanguage = feature.properties.Language
    var popupContent = MajuroImageOpen + MajuroImageSRC + '<b>Language classification: '+photoLanguage+'</b><br>'+projectCredits
    marker.bindPopup(popupContent, {minWidth: 250});
    return marker;
  }
});
var clusterMap = L.markerClusterGroup({showCoverageOnHover:false});
clusterMap.addLayer(photoClusters);
//map.addLayer(clusterMap);

var overlayMaps = {
  "All languages (n=2006)": languageMarkers,
  "Burried cables (E=91)": EburcablesMarkers91,
  "Street furniture (E=343)": EfurnitureMarkers343,
  "Heat Map All languages": heatMapLanguages,
  "Heat Map Burried cables": heatMapEburcables91,
  "Heat Map Street furniture": heatMapEfurniture343,
  "Cluster Map Languages": clusterMap
};
L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);
