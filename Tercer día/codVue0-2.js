Vue.component('hijo',{
	template: `
		<div class="bg-danger">
			<h1>Hijo - {{numero}}</h1>
			<h2>Un nombre - {{nombre}}</h2>
		</div>
				`,
	props: ['numero'],//propiedad en donde se le determinó el valor de la data del padre
	//con los props se pueden compartir informaciones de un componente padre 
	//a otro componente hijo
	data(){
		return{
			nombre: 'Kim'
		}
	},

	mounted(){
		this.$emit('nombreHijo',this.nombre);
	},

})