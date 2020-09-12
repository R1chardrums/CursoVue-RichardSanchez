//Componentes en Vue: se trata de separar en diferentes sitios la estructura de un diseño
//crear , por ejemplo, código html y dejarlo a nombre de una etiqueta que encapsula lo creado
	Vue.component('eltitulo',{//creación del componente más su nombre
//template para lo que contendrá el componente
		template: `
			<div>
				<h1>{{titulo}}</h1>
				<h2>Otro mensaje más</h2>
			</div>
				`,
//con acentos invertidos se pueden agregar más de una etiqueta
//con comilla simple solo se podría agregar una
//es obligatorio el uso del div para contener
		data(){//los datos a utilizar dentro del template anterior
			return{
				titulo: 'Mensaje desde un componente'
			}
		}
	})
