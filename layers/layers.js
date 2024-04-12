var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_romeqgis_1 = new ol.format.GeoJSON();
var features_romeqgis_1 = format_romeqgis_1.readFeatures(json_romeqgis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_romeqgis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_romeqgis_1.addFeatures(features_romeqgis_1);
var lyr_romeqgis_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_romeqgis_1, 
                style: style_romeqgis_1,
                popuplayertitle: "romeqgis",
                interactive: true,
                position: "topleft"
    title: 'romeqgis<br />\
    <img src="styles/legend/romeqgis_1_0.png" /> 0<br />\
    <img src="styles/legend/romeqgis_1_1.png" /> 1<br />\
    <img src="styles/legend/romeqgis_1_2.png" /> 2<br />\
    <img src="styles/legend/romeqgis_1_3.png" /> 3<br />\
    <img src="styles/legend/romeqgis_1_4.png" /> 4<br />\
    <img src="styles/legend/romeqgis_1_5.png" /> 5<br />\
    <img src="styles/legend/romeqgis_1_6.png" /> <br />'
        });
var format_RouteDay5_2 = new ol.format.GeoJSON();
var features_RouteDay5_2 = format_RouteDay5_2.readFeatures(json_RouteDay5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteDay5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteDay5_2.addFeatures(features_RouteDay5_2);
var lyr_RouteDay5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteDay5_2, 
                style: style_RouteDay5_2,
                popuplayertitle: "Route Day 5",
                interactive: true,
                title: '<img src="styles/legend/RouteDay5_2.png" /> Route Day 5'
            });
var format_RouteDay3_3 = new ol.format.GeoJSON();
var features_RouteDay3_3 = format_RouteDay3_3.readFeatures(json_RouteDay3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteDay3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteDay3_3.addFeatures(features_RouteDay3_3);
var lyr_RouteDay3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteDay3_3, 
                style: style_RouteDay3_3,
                popuplayertitle: "Route Day 3",
                interactive: true,
                title: '<img src="styles/legend/RouteDay3_3.png" /> Route Day 3'
            });
var format_RouteDay1_4 = new ol.format.GeoJSON();
var features_RouteDay1_4 = format_RouteDay1_4.readFeatures(json_RouteDay1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteDay1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteDay1_4.addFeatures(features_RouteDay1_4);
var lyr_RouteDay1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteDay1_4, 
                style: style_RouteDay1_4,
                popuplayertitle: "Route Day 1",
                interactive: true,
                title: '<img src="styles/legend/RouteDay1_4.png" /> Route Day 1'
            });
var format_RouteDay2_5 = new ol.format.GeoJSON();
var features_RouteDay2_5 = format_RouteDay2_5.readFeatures(json_RouteDay2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteDay2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteDay2_5.addFeatures(features_RouteDay2_5);
var lyr_RouteDay2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteDay2_5, 
                style: style_RouteDay2_5,
                popuplayertitle: "Route Day 2",
                interactive: true,
                title: '<img src="styles/legend/RouteDay2_5.png" /> Route Day 2'
            });
var format_RouteDay4_6 = new ol.format.GeoJSON();
var features_RouteDay4_6 = format_RouteDay4_6.readFeatures(json_RouteDay4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteDay4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteDay4_6.addFeatures(features_RouteDay4_6);
var lyr_RouteDay4_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RouteDay4_6, 
                style: style_RouteDay4_6,
                popuplayertitle: "Route Day 4",
                interactive: true,
                title: '<img src="styles/legend/RouteDay4_6.png" /> Route Day 4'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_romeqgis_1.setVisible(true);lyr_RouteDay5_2.setVisible(true);lyr_RouteDay3_3.setVisible(true);lyr_RouteDay1_4.setVisible(true);lyr_RouteDay2_5.setVisible(true);lyr_RouteDay4_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_romeqgis_1,lyr_RouteDay5_2,lyr_RouteDay3_3,lyr_RouteDay1_4,lyr_RouteDay2_5,lyr_RouteDay4_6];
lyr_romeqgis_1.set('fieldAliases', {'X-spot': 'X-spot', 'Y-spot': 'Y-spot', 'name': 'name', 'day': 'day', });
lyr_RouteDay5_2.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RouteDay3_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RouteDay1_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RouteDay2_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_RouteDay4_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_romeqgis_1.set('fieldImages', {'X-spot': 'TextEdit', 'Y-spot': 'TextEdit', 'name': 'TextEdit', 'day': 'Range', });
lyr_RouteDay5_2.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RouteDay3_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RouteDay1_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RouteDay2_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_RouteDay4_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_romeqgis_1.set('fieldLabels', {'X-spot': 'no label', 'Y-spot': 'no label', 'name': 'no label', 'day': 'no label', });
lyr_RouteDay5_2.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RouteDay3_3.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RouteDay1_4.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RouteDay2_5.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RouteDay4_6.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_RouteDay4_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
