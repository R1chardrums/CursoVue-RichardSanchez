const v = new Vue({ //instanciar la clase Vue
	el: '.estilos', //determinar el elemento a usarse (class estilos)
	data: {//datos creados
		titulo: 'Mensaje usando Vue',
		cadena: ['abc','def','ghi'],

		cadena2: [
			{nombre: 'Baterías', cantidad:10},
			{nombre: 'Guitarras', cantidad:5},
			{nombre: 'Bajos', cantidad:3}
		],//cadena2

	otroInstrumento: '',
	total: 0
	},//data

	methods:{
	//this para tratar con todo el objeto.
	/*La siguiente función añadirá con el push un
	nuevo nombre o dato en el arreglo, especificando
	en el elemento "nombre" que se agregará el valor 
	tomado en "otroInstrumento"*/
		agregarInstrumento () {
			this.cadena2.push({
				nombre: this.otroInstrumento, cantidad: 1
			})
		this.otroInstrumento= '';
		}
	},

	computed:{
		sumaTotal(){
			this.total=0;

			for (inst of this.cadena2) {
				this.total= this.total + inst.cantidad;
				/*se suma total con la cantidad de cada
				elemento del arreglo cadena2*/
			}

			return this.total;
		}
	}
});