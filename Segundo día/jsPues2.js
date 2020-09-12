const objVue = new Vue({
	el: '#entorno',
	data:{
		oracion: 'R1chardrums aprendiendo Vue... es muy bueno',
		contador: 0
	},

	computed:{
		invertido(){
			return this.oracion.split('').reverse().join('');
		},

		color(){
			return{
				'bg-primary': this.contador<=10,
				'bg-warning': this.contador>10 && this.contador<20,
				'bg-danger': this.contador>=20
			}
		}
	}
});