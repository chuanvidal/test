var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_suitable_areas_1 = new ol.format.GeoJSON();
var features_suitable_areas_1 = format_suitable_areas_1.readFeatures(json_suitable_areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_suitable_areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suitable_areas_1.addFeatures(features_suitable_areas_1);
var lyr_suitable_areas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_suitable_areas_1, 
                style: style_suitable_areas_1,
                interactive: false,
                title: '<img src="styles/legend/suitable_areas_1.png" /> suitable_areas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_suitable_areas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_suitable_areas_1];
lyr_suitable_areas_1.set('fieldAliases', {'Gen_Zoning': 'Gen_Zoning', 'DN': 'DN', 'area': 'area', });
lyr_suitable_areas_1.set('fieldImages', {'Gen_Zoning': '', 'DN': '', 'area': '', });
lyr_suitable_areas_1.set('fieldLabels', {'Gen_Zoning': 'no label', 'DN': 'no label', 'area': 'no label', });
lyr_suitable_areas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});