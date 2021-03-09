// Majuro Linguistic Landscape Project ©2015-16 I.Buchstaller & S.Alvanides
// with special thanks to V.Vlastaras from Manchester University, UK

var projectCredits = 'Majuro Linguistic Landscape Project <br> &copy;2015-16 I.Buchstaller & S.Alvanides';
var MajuroPhotoURL = 'https://dl.dropboxusercontent.com/u/2149416/';
var MajuroPhotoShow= '2016_Majuro_Linguistic_Landscape_all/All_others_Reduced_to_10pc/';
var MajuroPhotoOpen= '2016_Majuro_Linguistic_Landscape_all/All_others_Reduced_to_20pc/';

// Initialize the map.
var map = L.map('map').setView([7.105, 171.38], 15);

// load a tile layer from http://wiki.openstreetmap.org/wiki/Featured_tile_layers
//OpenStreetMap.Mapnik:L.tileLayer.grayscale('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//OpenStreetMap.DE: L.tileLayer.grayscale('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
//OpenStreetMap.HOT:
L.tileLayer.grayscale('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy;<a href="http://openstreetmap.org"> OpenStreetMap</a> contributors. <br/> LinguisticLandscape &copy; I.Buchstaller & S.Alvanides',
  maxZoom: 19,
  minZoom: 3
}).addTo(map);

var pointIcon = L.icon({
  iconUrl: 'assets/img/blaupunkt.png',
  iconSize: [20, 20]
});

var photos = L.geoJson(photosFeatures, {
  pointToLayer: function(feature, latlng) {
    var marker = L.marker(latlng, {icon: pointIcon});
    var MajuroImageShow = MajuroPhotoURL + MajuroPhotoShow + feature.properties.Name;
    var MajuroImageOpen = MajuroPhotoURL + MajuroPhotoOpen + feature.properties.Name;
    var popupContent = '<a href="' + MajuroImageOpen + '"target=_blank>' + '<img src="' + MajuroImageShow + '"/></a><br><b>Language classification: ' + feature.properties.Language + '</b><br>' + projectCredits;
    marker.bindPopup(popupContent, {minWidth: 250});
    return marker;
  }
});

var clusterMap = L.markerClusterGroup({showCoverageOnHover: false});
clusterMap.addLayer(photos);
map.addLayer(clusterMap);

// Note to Vas: (see demo/index.html) https://github.com/Leaflet/Leaflet.heat
// Below, instead of 5 points in "var photoPoints", I would like to have all 2000+ points from Allothers_GeoTagged_2008_final.js
// in order to create the L.heatLayer from  Allothers_GeoTagged_2008_final.js
// Kostas says: me tin map function stin js na ftiakseis mia list of list pou tha exei ta x,y coords.
// Des edw na deis peripou pos to kanei: github.com/Leaflet/Leaflet.heat/blob/gh-pages/demo/draw.html


/**
 *  *** About JavaScript ***
 * 
 * The JavaScript language is a very dynamic language. This means variables are not used the same way like in other
 * more conventinal languages. Also JavaScript is an object oriented language and most important JavaScript is a functional language.
 * 
 * In JavaScript a variable can store the following:
 * 
 * var a = undefined;     // A special keyword used to denote an undefined value.
 * var a = null;          // A special keyword used to denote that the variable is null.
 * var a = 'some string'; // The variable stores a string value.
 * var a = "some string"; // The variable stores a string value. 
 * var a = [];            // The variable stores an array. In this case an Empty array.
 * var a = {};            // The variable stores an Object. In this case an Empty object.
 * 
 * Obviously if the array [] or the object {} have some contents then they are not Empty.
 * 
 * Examples:
 * var a = [8, 5, 3, 56, 45]; // This is a one dimensional array having 5 elements.
 * 
 * Important is to understand that since JavaScript is a dynamic language arrays are not typed, thus it is perfectly valid
 * to mix types inside an array. The following is valid:
 * 
 * var a = [ 8, 'lala', 3.62, undefined, 73, null, {"prop1": 5, "prop2": "koula"} ]
 * 
 * This array stores an integer, a string, a floating point number, an undefined value, an integer, the null value
 * and an object which has 2 properties named prop1 which stores an integer and prop2 which stores a string.  
 * 
 * This level of flexibility makes JavaScript highly expressive and at the same time a HELL !
 * 
 * Now here is the most important part !!!
 * 
 * As it was mentioned above JavaScript is a functional language. That means a function is a first class citizen in JavaScript.
 * I will not go deeply to describe what functions are all about in JavaScript (they can be used for example
 * to define objects and closures), But I will make sure you understand the following.
 * 
 * In JavaScript a variable can store a function !!!
 * YES. A function.
 * 
 * So for example the following is perfectly valid:
 * 
 * var a = function() { here is the function body };
 * 
 * or this:
 * 
 * function func1() {
 *   this is the function body.
 * };
 * 
 * var a = func1;
 * 
 * So, in JavaScript a variable can store a function and this function can be used to do things in parts of the code.
 * That makes JavaScript super dynamic.
 * 
 */


/**
 * The heatmap layer expects to be fed with an array of arrays.
 * This array holds all the points that are needed to produce the heatmap layer.
 * Each individual point is represented as an array of length 2 which holds the lat and lon of each point.
 * Thus the photoPoints variable needs to be like this: [[lat, lon], [lat, lon], ...]
 * In our case we have all the points as a complex GeoJSON object stored in variable photosFeatures.
 * This means we can use the photosFeatures variable to extract all the points and produce an array of arrays like
 * the one described above.
 * There are more than one ways to do this because JavaScript is a very flexible language.
 * Νo matter what is the approach we are going to use to produce the array of arrays, the most important is to understand the hierarchy
 * of the GeoJSON object stored inside the photosFeatures variable before we do do anything with it.
 * 
 * To understand the hierarchy either you read the documentation of GeoJSON, or you copy the contents of allothers-geotagged-2008-final.js
 * in to a file and you make sure you reformat it in such a nice way that the hierarchy of the object is then obvious.
 * 
 * You can do this using the 'Sublime Text' editor and the 'Pretty JSON' plugin for example, or an online JSON editor.
 * 
 * An online editor is: http://www.jsoneditoronline.org/
 * 
 * Just go there and copy the contents of the allothers-geotagged-2008-final.js in the editor.
 * MAKE SURE you edit the contents in the editor by removing 'var photosFeatures = ' and also removing the semicolon (;) at the end of the contents.
 * What will remain will be a long list of things inside a {}.
 * Once you do this just press the '>' button and to the right of the screen the hierarchy of objects will be rendered nicely.
 * Then what I am going to describe from here onwards will make sense.
 * 
 * The photosFeatures is an object with two properties defined as follows { type: string, features: array }
 *  
 * Now the features property (which is an array) stores instances of features and each individual feature is a complex object
 * which has the properties named 'type', 'properties' and 'geometry' as follows:
 *
 * { type: string, features: object, geometry: object }
 * 
 * That means the features object expect some kind of an arbitrary object having its own properties which is not currently of our interest.
 * What is of our interest however is the geometry object which in our case is a point geometry object.
 * 
 * Now the geometry object in our case is defined as follows: { type: string, coordinates: array }
 * So the coordinates of the point is stored in the property named 'coordinates' and this property is of type 'array'.
 * The array in our case is an array of length 3 in which the first element stores the lon, the second element stores the lat
 * and the third element stores the z.
 * 
 * So if for example we want to read the lat of the 5th feature stored in our GeoJSON object we need to do the following:
 * 
 * photosFeatures.features[5].geometry.coordinates[1];
 * 
 */

/**
 *  *** Functional Approach ***
 * 
 * We can use the highly dynamic features of JavaScript to produce the array of arrays needed by the heatMap layer.
 * 
 * After examining the photosFeatures GeoJSON object I found out that some instances of the features have null geometries.
 * I am not sure you have noticed this (for example the 8th element has a null geometry). I think this is some problem in your data.
 * Leaflet seems can handle gracefully a GeoJSON object and can produce a layer ommiting the features with a null geometry.
 * In the case of the heatmap layer we need to ommit these features ourselves before producing the array of arrays.
 * 
 * JavaScript provides a set of build-in array functions. That means arrays are equiped with an out of the box functionality to deal
 * and transform arrays effectively without the need for the developer to reinvent the  wheel.
 * 
 * Here is the documentation for the JavaScript array object.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 * So, our goal is to take the photosFeatures variable which stores an object so as to extract the points that
 * will be used to render the heat map.
 * 
 * First we need to make sure that we deal only with those features that their geometry is not null.
 * This means we need to extract these features from the array of all features.
 * How can we do this? If we go to the array documentation (in link above) we can see there is a method (function) called 'filter'.
 * Filter is used to do what it says, to filter the contents of an array based on a rule.
 * 
 * From the documentation we read:
 * arr.filter(callback[, thisArg])
 * 
 * So the filter function expects a callback variable argument. That basically means that the argument variable
 * is expected to be a function.
 * So we just found a case where the variable used in an argument is expected to be a function.
 * Here is what the documentation actually says:
 * 
 * Function to test each element of the array. Invoked with arguments (element, index, array).
 * Return true to keep the element, false otherwise.
 * 
 * Lets make things a bit clearer. The Filter function of the array object is a built-in function that returns a subset
 * of the original array filtered based on a rule. The filter function takes 2 arguments (the second one optional).
 * The first argument has to be a function. The function expected is a function we need to define and it will have the logic based
 * on which the array filter function will select the elements of the subset we need. Our function needs to have a pre-agreed signature.
 * As we can see above it expects three arguments (two of them optional).
 * The first argument needs to be the element that needs to be tested.
 * 
 * Thus our function should be something like: function(feature) { body of the function }
 * 
 * Internally the filter function creates a new internal empty array. Then starts a -for- iteration in the array and calls the function
 * we provided as an argument to test if each individual element of the array can pass the test we provide in our function.
 * If the element passes the test it is pushed inside the internal array. Once all the elements of the array are tested,
 * the internal array is returned as the product of the filter function and so we have the result of our filtering in our hands.
 * That's how the filter function works. 
 * 
 * What should be the test? Since we want only features that have no null geometries then the test should be this:
 * 
 * feature.geometry != null; 
 * 
 * so our function can be:
 * 
 * function(feature) {
 *   return feature.geometry != null;
 * }
 * 
 * What is the array we need to use?
 * 
 * photosFeatures.features (because the features property is of type array).
 * 
 * Thus something like:
 * 
 * photosFeatures.features.filter(function(feature) {
 *   return feature.geometry != null;
 * }) 
 * 
 * The product of this operation is an array with all the features whose geometry is not null.
 * The product can be assigned in to a variable, however we are not going to do this but instead we will use
 * a feature of the JavaScript language called function chaining.
 * 
 * Since the above three line language expression is essentialy an array, we can call another array function.
 * (this is basically the function chaining).
 * 
 * Now we have an array that is free of null geometries. We can use this array to transform it in to another array.
 * 
 * So, our goal is to search in the documentation of the array object so as to see if exists a function that can perform
 * such transformations. Luckily such a function exists and is called 'map'. The name is carefully selected to remind us
 * of functional mappings as we perform them in mathematics.
 * So, the map function takes an argument that must be a function and works similarly like the filter function we used above.
 * The function we need to provide needs to have the logic that will take an individual element and turn it (map it)
 * in to something else. The transformed element then will be stored inside an internal array inside the map function
 * and once all elements have been processed the internal array will be returned to the user.
 * 
 * Thus with two chained functions (filter and map) we can get an array which will have the values in the form that the heatmap layer
 * expects them to be.
 * 
 * The map function is this:
 * 
 * function(feature) {
 *   return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
 * }
 * 
 * The function takes a feature as an argument and seeks to get its geometry and then the lat and lon of it.
 * The lat is located in the second element of the coordinates array of the geometry property of the feature object.
 *  feature.geometry.coordinates[1]
 * The lon is located in the first element of the coordinates array of the geometry property of the feature object
 *  feature.geometry.coordinates[0] 
 * 
 * A new array of length 2 is created, the two extracted lat and lon values are pushed as elements in the new array
 * [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]
 * 
 * and the array is returned by the function.
 * 
 * This function is used inside the body of the built-in 'map' function which internally creates a new internal empty array.
 * Then the map function performs a -for- iteration on all the elements of the array and calls our provided
 * element function to extract the coordinates and push them inside the internal array. Once this done in all elements of the array
 * the internal array which already has the transformed elements is returned as the function's result.
 * This is how the 'map' function works.
 * 
 * This is the way to use the functional approach to do what is needed in order to transform the contents of the GeoJSON object
 * in to the array of arrays needed by the heatmap layer.
 * 
 * The result is assigned to the photoPoints variable which is then used to render the heatmap layer.
 *  
 */

// ================================================================================
// Functional Code.

var photoPoints = photosFeatures.features.filter(function(feature) {
  return feature.geometry != null;
}).map(function(feature) {
  return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
});

// End of functional code.
// ================================================================================

/**
 *  *** Imperative Approach ***
 * 
 * Instead of using the functional approach that is described above we can use an imperative programming approach to achieve
 * the same thing. The imperative way might look more conventional but its downside is a code that usually spans more lines.
 * This approach might be understood more easily comparing to the 5 lines of code used above in the functional approach.
 * 
 * Just uncomment the following lines and make sure you comment the lines of the previous approach.
 * 
 */

// ================================================================================
// Imperative Code.

// // Create an empty photoPoints array.
// var photoPoints = [];

// // Loop through all the features in photosFeatures.
// for (i = 0; i < photosFeatures.features.length; i++) {
//   // Check if the feature has a non null geometry.
//   if (photosFeatures.features[i].geometry != null) {
//     // The geometry is not null, extract its lat and lon and create an array with 2 elements,
//     // then push this array in to the photoPoints array.
//     photoPoints.push([photosFeatures.features[i].geometry.coordinates[1], photosFeatures.features[i].geometry.coordinates[0]]);
//   }
// }

// End of imperative code.
// ================================================================================


// Finally add the heatLayer on the map.
var heatMap = L.heatLayer(photoPoints).addTo(map);

