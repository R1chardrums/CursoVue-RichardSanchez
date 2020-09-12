const claseVue = new Vue({
	el: '#entorno',//uso del contenedor de HTML
	data: {
		titulo: 'Gimnasiou',
		tareas: [],//almacena lo registrado
		tarea: ''//obtendrá el valor pasado en el campo text
	},

	methods: {
		agregar: function(){
			this.tareas.push({//se agrega lo pasado en el campo a nombre y se determina un estado
				nombre: this.tarea,
				estado: false
			});
		this.tarea= '';//se limpia el campo
		localStorage.setItem('tareasVue', JSON.stringify(this.tareas));//se guarda el registro
		},

		cambiarEstado: function(indice){
			this.tareas[indice].estado = true;//se pasa de false a true al usarse la función
		localStorage.setItem('tareasVue', JSON.stringify(this.tareas));//se guarda
		},

		eliminar: function(indice){
			this.tareas.splice(indice,1);//función de eliminar, mediante el índice clickeado (1 de un solo elemento)
		localStorage.setItem('tareasVue', JSON.stringify(this.tareas));//se guarda
		}
	},

	created: function(){
		let registros = JSON.parse(localStorage.getItem('tareasVue'));//se obtiene el arreglo en JSON

		if (registros === null) {
			this.tareas= [];//vacío
		}else{
			this.tareas= registros;//se mostrará lo almacenado en el arreglo de objeto JSON
		}
	}
});