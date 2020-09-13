Vue.component('padre',{
	template: `
		<div class="bg-dark text-white p-5">
			<h1>Padre: {{otroNumero}}</h1>
			<hijo :numero="otroNumero" @nombreHijo="nombrePadre = $event"></hijo>
			<h2>Nombre del hijo jaja - {{nombrePadre}}</h2>
		</div>
				`,
/*A la etiqueta "hijo" se le pasó el valor de otroNumero, data del padre (debe llevar : el "numero"
para que aparezca el valo, sino se estaría mostrando literalmente "otroNumero")*/
	data(){
		return{
			otroNumero: 10,
			nombrePadre: ''//aquí recibirá un nombre por parte del hijo a través de la data
			//además del evento creado en mounted
		}
	}
})