var app = app || {};

app.CollectionClientes = Backbone.Collection.extend({
	model: app.modelCliente,
	url: "data.json",
	// initialize: function(){
		// console.log('inicializa coleccion');
		// this.on("add", function (modelo){
		// 	console.log('nuevo modelo', modelo);
		// });
	// }
});