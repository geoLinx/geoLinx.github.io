var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.338000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Leipzig_OSM_changeideo_1 = new ol.format.GeoJSON();
var features_Leipzig_OSM_changeideo_1 = format_Leipzig_OSM_changeideo_1.readFeatures(json_Leipzig_OSM_changeideo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leipzig_OSM_changeideo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leipzig_OSM_changeideo_1.addFeatures(features_Leipzig_OSM_changeideo_1);
var lyr_Leipzig_OSM_changeideo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Leipzig_OSM_changeideo_1, 
                style: style_Leipzig_OSM_changeideo_1,
                interactive: true,
    title: 'Leipzig_OSM_change+ideo<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_0.png" /> 0<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_1.png" /> 1<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_2.png" /> 2<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_3.png" /> 3<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_4.png" /> 4<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_5.png" /> 5<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_6.png" /> 7<br />\
    <img src="styles/legend/Leipzig_OSM_changeideo_1_7.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Leipzig_OSM_changeideo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Leipzig_OSM_changeideo_1];
lyr_Leipzig_OSM_changeideo_1.set('fieldAliases', {'FID_1': 'FID_1', 'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'maxspeed': 'maxspeed', 'name': 'name', 'oneway': 'oneway', 'ref': 'ref', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'FID_2': 'FID_2', 'OT': 'OT', 'SBZ': 'SBZ', 'ORTSTEIL': 'ORTSTEIL', 'Year': 'Year', 'name_Ortst': 'name_Ortst', 'OSM_Name': 'OSM_Name', 'ORTSTEIL_1': 'ORTSTEIL_1', 'OSM_Name_C': 'OSM_Name_C', 'OSM_Clean_': 'OSM_Clean_', 'Sum_Change': 'Sum_Change', 'all_2018_1': 'all_2018_1', 'all_1988_1': 'all_1988_1', 'all_1944_1': 'all_1944_1', 'all_1932_1': 'all_1932_1', 'all_Sum': 'all_Sum', 'Sum__I__P': 'Sum__I__P', 'ide_2018_1': 'ide_2018_1', 'ide_1988_1': 'ide_1988_1', 'ide_1944_1': 'ide_1944_1', 'ide_1932_1': 'ide_1932_1', 'ide_Sum': 'ide_Sum', 'Sum_non_I_': 'Sum_non_I_', 'non_2018_1': 'non_2018_1', 'non_1988_1': 'non_1988_1', 'non_1944_1': 'non_1944_1', 'non_1932_1': 'non_1932_1', 'non_Sum': 'non_Sum', });
lyr_Leipzig_OSM_changeideo_1.set('fieldImages', {'FID_1': 'Range', 'id': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'FID_2': 'Range', 'OT': 'TextEdit', 'SBZ': 'TextEdit', 'ORTSTEIL': 'TextEdit', 'Year': 'Range', 'name_Ortst': 'TextEdit', 'OSM_Name': 'TextEdit', 'ORTSTEIL_1': 'TextEdit', 'OSM_Name_C': 'TextEdit', 'OSM_Clean_': 'TextEdit', 'Sum_Change': 'TextEdit', 'all_2018_1': 'TextEdit', 'all_1988_1': 'TextEdit', 'all_1944_1': 'TextEdit', 'all_1932_1': 'TextEdit', 'all_Sum': 'TextEdit', 'Sum__I__P': 'TextEdit', 'ide_2018_1': 'TextEdit', 'ide_1988_1': 'TextEdit', 'ide_1944_1': 'TextEdit', 'ide_1932_1': 'TextEdit', 'ide_Sum': 'TextEdit', 'Sum_non_I_': 'TextEdit', 'non_2018_1': 'TextEdit', 'non_1988_1': 'TextEdit', 'non_1944_1': 'TextEdit', 'non_1932_1': 'TextEdit', 'non_Sum': 'TextEdit', });
lyr_Leipzig_OSM_changeideo_1.set('fieldLabels', {'FID_1': 'no label', 'id': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'oneway': 'no label', 'ref': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'FID_2': 'no label', 'OT': 'no label', 'SBZ': 'no label', 'ORTSTEIL': 'no label', 'Year': 'no label', 'name_Ortst': 'no label', 'OSM_Name': 'no label', 'ORTSTEIL_1': 'no label', 'OSM_Name_C': 'no label', 'OSM_Clean_': 'no label', 'Sum_Change': 'no label', 'all_2018_1': 'no label', 'all_1988_1': 'no label', 'all_1944_1': 'no label', 'all_1932_1': 'no label', 'all_Sum': 'no label', 'Sum__I__P': 'no label', 'ide_2018_1': 'no label', 'ide_1988_1': 'no label', 'ide_1944_1': 'no label', 'ide_1932_1': 'no label', 'ide_Sum': 'no label', 'Sum_non_I_': 'no label', 'non_2018_1': 'no label', 'non_1988_1': 'no label', 'non_1944_1': 'no label', 'non_1932_1': 'no label', 'non_Sum': 'no label', });
lyr_Leipzig_OSM_changeideo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});