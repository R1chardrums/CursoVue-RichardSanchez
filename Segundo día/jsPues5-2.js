Vue.component('hijo',{
	template: `
		<div class="bg-danger">
			<h1>Hijo - {{numero}}</h1>
		</div>
				`,
	props: ['numero']//propiedad en donde se le determinó el valor de la data del padre
	//con los props se pueden compartir informaciones de un componente padre 
	//a otro componente hijo
})