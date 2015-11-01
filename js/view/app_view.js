var app = app || {};

app.AppControl = Backbone.View.extend({
	el: '#AppControl',
	initialize: function(){
		window.collectionClientes = new app.CollectionClientes();
		this.render();
	},
	render: function(){
		var that = this;
		window.collectionClientes.fetch({success:function (model){
			var modelos = model.toJSON();
			that.listElement(modelos);
		}});
	},
	events:{
		"click #btn_nuevo": "handleNew",
		"click #btn_guardar": "handleSave",
		"click #btn_imp": "handleImpr"
	},
	listElement: function (array){
		_.each(array, function(obj){
			var template = _.template($('#tplcliente').html());
			$('#result').append(template(obj));
		});
	},
	handleNew: function(e){
		e.preventDefault();
		var that = this;
		var txtNombre 		= $('#txt_nombre');
		var txtApellidos 	= $('#txt_apellidos');
		var txtCedula 		= $('#txt_cedula');
		var obj = {
				nombre: txtNombre.val(), 
				apellidos: txtApellidos.val(), 
				cedula: txtCedula.val()
			}
		var model = new app.modelCliente(obj);

		window.collectionClientes.on("add", function (modelo){
			console.log('nuevo modelo', modelo);
		});
		window.collectionClientes.add(obj)
		$('#result').html('');
		that.listElement(window.collectionClientes.toJSON());
	},
	handleSave: function (e){
		e.preventDefault();
		var cfm = confirm("¿Deseas guardar este registro en el LocalStorage?");
		if(cfm){
			if(window.localStorage){
				var json = JSON.stringify(window.collectionClientes);
				window.localStorage.setItem("clientes", json);
				// var p = JSON.parse(window.localStorage.getItem("clientes"));
				// console.log(p);
			}else
				alert("Su navegador no soporta el localStorage");
		}
	},
	handleImpr: function(e){
		e.preventDefault();
		if(window.localStorage){
			var data = window.localStorage.getItem('clientes');
			$('#impr').html(data);
		}else
			alert("Su navegador no soporta el localStorage");

	}
});