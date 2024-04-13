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
    title: 'romeqgis<br />\
    <img src="styles/legend/romeqgis_1_0.png" /> 0<br />\
    <img src="styles/legend/romeqgis_1_1.png" /> 1<br />\
    <img src="styles/legend/romeqgis_1_2.png" /> 2<br />\
    <img src="styles/legend/romeqgis_1_3.png" /> 3<br />\
    <img src="styles/legend/romeqgis_1_4.png" /> 4<br />\
    <img src="styles/legend/romeqgis_1_5.png" /> 5<br />\
    <img src="styles/legend/romeqgis_1_6.png" /> 6<br />\
    <img src="styles/legend/romeqgis_1_7.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_romeqgis_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_romeqgis_1];
lyr_romeqgis_1.set('fieldAliases', {'X-spot': 'X-spot', 'Y-spot': 'Y-spot', 'name': 'name', 'day': 'day', 'hours': 'hours', });
lyr_romeqgis_1.set('fieldImages', {'X-spot': 'TextEdit', 'Y-spot': 'TextEdit', 'name': 'TextEdit', 'day': 'Range', 'hours': 'TextEdit', });
lyr_romeqgis_1.set('fieldLabels', {'X-spot': 'no label', 'Y-spot': 'no label', 'name': 'no label', 'day': 'no label', 'hours': 'no label', });
lyr_romeqgis_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});