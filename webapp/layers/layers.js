var wms_layers = [];


        var lyr_Satelite_0 = new ol.layer.Tile({
            'title': 'Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_KeelandCurleyWinery572022orthophoto_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Keel-and-Curley-Winery-5-7-2022-orthophoto_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/KeelandCurleyWinery572022orthophoto_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9149281.550005, 3254893.787760, -9149014.888405, 3255138.565107]
                            })
                        });
var format_FloridaWindZones_2 = new ol.format.GeoJSON();
var features_FloridaWindZones_2 = format_FloridaWindZones_2.readFeatures(json_FloridaWindZones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FloridaWindZones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloridaWindZones_2.addFeatures(features_FloridaWindZones_2);
var lyr_FloridaWindZones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloridaWindZones_2, 
                style: style_FloridaWindZones_2,
                interactive: true,
    title: 'FloridaWindZones<br />\
    <img src="styles/legend/FloridaWindZones_2_0.png" /> 120 - 128.9<br />\
    <img src="styles/legend/FloridaWindZones_2_1.png" /> 128.9 - 137.8<br />\
    <img src="styles/legend/FloridaWindZones_2_2.png" /> 137.8 - 146.7<br />\
    <img src="styles/legend/FloridaWindZones_2_3.png" /> 146.7 - 155.6<br />\
    <img src="styles/legend/FloridaWindZones_2_4.png" /> 155.6 - 164.4<br />\
    <img src="styles/legend/FloridaWindZones_2_5.png" /> 164.4 - 176.7<br />\
    <img src="styles/legend/FloridaWindZones_2_6.png" /> 176.7 - 192.2<br />\
    <img src="styles/legend/FloridaWindZones_2_7.png" /> 192.2 - 201.1<br />\
    <img src="styles/legend/FloridaWindZones_2_8.png" /> 201.1 - 210<br />'
        });

lyr_Satelite_0.setVisible(true);lyr_KeelandCurleyWinery572022orthophoto_modified_1.setVisible(true);lyr_FloridaWindZones_2.setVisible(true);
var layersList = [lyr_Satelite_0,lyr_KeelandCurleyWinery572022orthophoto_modified_1,lyr_FloridaWindZones_2];
lyr_FloridaWindZones_2.set('fieldAliases', {'id': 'id', 'Speed': 'Speed', });
lyr_FloridaWindZones_2.set('fieldImages', {'id': 'TextEdit', 'Speed': 'TextEdit', });
lyr_FloridaWindZones_2.set('fieldLabels', {'id': 'header label', 'Speed': 'inline label', });
lyr_FloridaWindZones_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});