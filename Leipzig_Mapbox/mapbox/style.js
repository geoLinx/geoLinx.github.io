
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Leipzig_OSM_changeideo_1": {
            "type": "geojson",
            "data": json_Leipzig_OSM_changeideo_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Leipzig_OSM_changeideo_1_0",
            "type": "line",
            "source": "Leipzig_OSM_changeideo_1",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'all_Sum'], 0], 2.142857142857143, ['==', ['get', 'all_Sum'], 1], 2.142857142857143, ['==', ['get', 'all_Sum'], 2], 2.142857142857143, ['==', ['get', 'all_Sum'], 3], 2.142857142857143, ['==', ['get', 'all_Sum'], 4], 2.142857142857143, ['==', ['get', 'all_Sum'], 5], 2.142857142857143, ['==', ['get', 'all_Sum'], 7], 2.142857142857143, 2.142857142857143], 'line-opacity': ['case', ['==', ['get', 'all_Sum'], 0], 1.0, ['==', ['get', 'all_Sum'], 1], 1.0, ['==', ['get', 'all_Sum'], 2], 1.0, ['==', ['get', 'all_Sum'], 3], 1.0, ['==', ['get', 'all_Sum'], 4], 1.0, ['==', ['get', 'all_Sum'], 5], 1.0, ['==', ['get', 'all_Sum'], 7], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'all_Sum'], 0], '#fcfdbf', ['==', ['get', 'all_Sum'], 1], '#febb80', ['==', ['get', 'all_Sum'], 2], '#f8765c', ['==', ['get', 'all_Sum'], 3], '#d3426e', ['==', ['get', 'all_Sum'], 4], '#982c80', ['==', ['get', 'all_Sum'], 5], '#5e177f', ['==', ['get', 'all_Sum'], 7], '#231151', '#000004']}
        }
],
}