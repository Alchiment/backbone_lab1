var app = app || {};
app.viewCliente = Backbone.View.extend({
	el: "#area",
	initialize: function(){
		// var that = this;
		console.log('inicializa vista');
		// window.mdCliente = new app.modelCliente();
		window.mdCliente = new app.CollectionClientes();
		window.mdCliente.fetch({success: function(reg){
			console.log("primera ",reg.toJSON());
		}});
	},
	events: {
		"click #btn_carga": "carga",
		"click #guardar": "nuevoCliente",
		"click #dibujar": "dibujar"
	},
	carga: function(){
		console.log(window.mdCliente.toJSON());
	},
	nuevoCliente: function(modelo){
		console.log('clicka');
		var txtNombre = $('#txt_nombre').val();
		var txtApellidos = $('#txt_apellidos').val();
		var txtCedula = $('#txt_cedula').val();

		console.log(window.mdCliente.toJSON())
		window.mdCliente.push({nombre: txtNombre, apellidos:txtApellidos, cedula: txtCedula});
		console.log(window.mdCliente.toJSON())
		// modeloN.save();
	},
	dibujar: function(){

	}

});