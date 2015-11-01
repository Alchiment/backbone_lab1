var app = app || {};

app.modelCliente = Backbone.Model.extend({
	// urlRoot: "data.json",
	initialize: function(){
		// console.log('inicializa modelo');
		this.on("change", function(model){
			console.log('cambia modelo', model);
		});
	},
});