// Majuro Linguistic Landscape Project ©2015-18 I.Buchstaller & S.Alvanides
// with special thanks to Vasilios Vlastaras from Manchester University, UK

var projectCredits = '<a href="http://www.uni-due.de/anglistik/sociolinguistics_lab" target=_blank> Marshall Islands Linguistic Landscape </a> \
	<br> &copy;2015-18: I.Buchstaller & S.Alvanides';

var MajuroPhotoURL = 'https://dl.dropboxusercontent.com/u/2149416/';
var MajuroPhotoURL = ''; //Use this when accessing dropbox/USB offline
/* ...so that it picks them up from
 * \Dropbox\__Seraph_Isa\_LinguisticLandscape\2016_Majuro_Linguistic_Landscape_all */

/* 12.02.2024: The below DUE links are broken so cannot be used as repository
* var MajuroPhotoPop= 'https://www.uni-due.de/anglistik/sociolinguistics_lab/rmi_project/2016_Majuro_LL/10pc/';
* var MajuroPhotoOpen= 'https://www.uni-due.de/anglistik/sociolinguistics_lab/rmi_project/2016_Majuro_LL/20pc/';
*/

/* Temp solution to use github, but there is a limit of 1000 files in folder 10pc, so not all images are there */
var MajuroPhotoPop= 'https://raw.githubusercontent.com/geoLinx/geoLinx.github.io/master/RMI_project/2016_Majuro_LL/10pc/';
var MajuroPhotoOpen= 'https://raw.githubusercontent.com/geoLinx/geoLinx.github.io/master/RMI_project/2016_Majuro_LL/10pc/';
	
// Load baseMap layers from http://wiki.openstreetmap.org/wiki/Featured_tile_layers
//OpenStreetMap.Mapnik:L.tileLayer.grayscale('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//OpenStreetMap.DE: L.tileLayer.grayscale('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {

//OpenStreetMap.HOT:
var osmGrayMap = L.tileLayer.grayscale('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: 'Basemap &copy; <a href="https://www.openstreetmap.org/copyright" target=_blank>OpenStreetMap</a>  contributors. <br/>\
  <a href="http://www.uni-due.de/anglistik/sociolinguistics_lab" target=_blank> Sociolinguistics Lab</a>  &copy; I.Buchstaller & S.Alvanides',
  maxZoom: 20,  minZoom: 3}); //.addTo(map);
//var landGrayMap = L.tileLayer.grayscale('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
//  attribution: 'Map data &copy;<a href="http://thunderforest.com/"> Thunderforest</a> contributors. <br/> \
//  LinguisticLandscape &copy; I.Buchstaller & S.Alvanides', maxZoom: 20,  minZoom: 3}); //.addTo(map);

var baseMaps = {
	"OpenStreetMap": osmGrayMap,
	// "Landscape Map": landGrayMap
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
* (Tidy version :-)
*/
var photoPoints = photosFeatures.features.filter(function(feature) {
  return feature.geometry != null;
}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
});
var heatMapLanguages = L.heatLayer(photoPoints,{
  radius: 20, blur: 25, maxZoom: 20,
});

// Functional Code for each language in allothers-geotagged-2008-final.js

var MlanguagePoints220 = AllotherLanguageM220.features.filter(function(feature) {
  return feature.geometry != null;}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
  });
var heatMapMarshall = L.heatLayer(MlanguagePoints220,{
  radius: 40, blur: 25, maxZoom: 20,
  });

var ElanguagePoints1433 = AllotherLanguageE1433.features.filter(function(feature) {
  return feature.geometry != null;}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
  });
var heatMapEnglish = L.heatLayer(ElanguagePoints1433,{
  radius: 20, blur: 25, maxZoom: 20,
  });

var BlanguagePoints289 = AllotherLanguageB289.features.filter(function(feature) {
  return feature.geometry != null;}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
  });
var heatMapBilingual = L.heatLayer(BlanguagePoints289,{
  radius: 30, blur: 25, maxZoom: 20,
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

var markerMarshallOptions = { radius: 3, fillColor: "#ff7800", /* orange */
  color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1, };
var markerEnglishOptions = { radius: 3, fillColor: "#000099",  /* dark blue */
  color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1, };
var markerBilingualOptions = { radius: 3, fillColor: "#FF0000",  /* red */
  color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1, };

var markerEburcablesOptions = { radius: 3, fillColor: "#0000FF",  /* light blue */
  color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1, };
var markerEfurnitureOptions = { radius: 3, fillColor: "#0000FF",  /* light blue */
  color: "#000", weight: 0.5, opacity: 0.5, fillOpacity: 1, };

var MarshallMarkers220 = L.geoJson(AllotherLanguageM220, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, markerMarshallOptions);
  }});
var EnglishMarkers1433 = L.geoJson(AllotherLanguageE1433, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, markerEnglishOptions);
  }});
var BilingualMarkers289 = L.geoJson(AllotherLanguageB289, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, markerBilingualOptions);
  }});
var EburcablesMarkers91 = L.geoJson(eburcablesENgeotagged91, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, markerEburcablesOptions);
  }});
var EfurnitureMarkers343 = L.geoJson(efurnitureENgeotagged343, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, markerEfurnitureOptions);
  }});



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
    var photoLanguages = '<b>Language class: ' + feature.properties.Languages + '</b><br>'
    var photoTranslation = '<i>Translation: ' + feature.properties.Translate + '</i><br>'
    var photoProduction = 'Production: ' + feature.properties.printed_si + '<br>'
    var photoGeolocation = '<i><b>Location: '+feature.properties.Geog_Side+'</b> '+feature.properties.OLM_Name+'</i><br>'
    var popupContent = MajuroImageOpen+MajuroImageSRC+'<br><h3>'+photoLanguages+photoTranslation+photoProduction+photoGeolocation+'</h3>'+projectCredits
    marker.bindPopup(popupContent, {minWidth: 250});
    return marker;
  }
});
var clusterMap = L.markerClusterGroup({showCoverageOnHover:false});
clusterMap.addLayer(photoClusters);
// map.addLayer(clusterMap);

var overlayMaps = {
  // "All languages (n=2006)": languageMarkers,
  "Marshallese (220 signs)": MarshallMarkers220,
  "English only (1433 signs)": EnglishMarkers1433,
  "Bilingual only (289 signs)": BilingualMarkers289,
  "Burried cables (91 signs)": EburcablesMarkers91,
  "Street furniture (343 signs)": EfurnitureMarkers343,
  // "Heat Map All languages": heatMapLanguages,
  "Heat Map Marshallese only":heatMapMarshall,
  "Heat Map English only":heatMapEnglish,
  "Heat Map Bilingual": heatMapBilingual,
  // "Heat Map Burried cables": heatMapEburcables91,
  // "Heat Map Street furniture": heatMapEfurniture343,
  "Cluster Map (all signs)": clusterMap
};

L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(map);
