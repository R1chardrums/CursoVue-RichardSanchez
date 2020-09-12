Vue.component('padre',{
	template: `
		<div class="bg-dark text-white p-5">
			<h1>Padre: {{otroNumero}}</h1>
			<hijo :numero="otroNumero"></hijo>
		</div>
				`,
/*A la etiqueta "hijo" se le pasó el valor de otroNumero, data del padre (debe llevar : el "numero"
para que aparezca el valo, sino se estaría mostrando literalmente "otroNumero")*/
	data(){
		return{
			otroNumero: '10'
		}
	}
})