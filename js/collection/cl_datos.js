var app = app || {};

app.CollectionDatosClientes = Backbone.Collection.extend({
	model: app.modelCliente,
	url: "data.json",
	initialize: function(){
		console.log('inicializa coleccion');
	}
});