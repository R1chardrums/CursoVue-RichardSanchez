const objVue = new Vue({
	el: '#entorno',
	data:{
		oracion: 'Ciclos de vida Vue'
	},

	beforeCreate(){//ejecuta antes o durante de iniciar Vue, sin acceder al DOM

	},

	created(){//ejecuta una vez creado Vue y sus datas pero no el elemento #

	},

	beforeMount(){//antes de insertar el DOM

	},

	mounted(){//después de insertar el DOM

	},

	beforeUpdate(){//cuando se encuentra un cambio

	},

	updated(){//al realizar los cambios

	},

	beforeDestroy(){//antes de destruir una instancia

	},

	destroyed(){//instancia destruida

	},

	methods:{
		destruir(){
			this.$destroy();//no funciona la instancia para cambiar el título de "oración"
		}
	}
});