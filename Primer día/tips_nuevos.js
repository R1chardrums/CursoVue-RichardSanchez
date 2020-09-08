//TEMPLATE STRINGS

const suma = (nro1, nro2) =>/*Creas una función después de la flecha y dentro del
paréntesis*/(`La suma da: ${nro1 + nro2}`/*dentro de los acentos invertidos puedes integrar
	tareas lógicas junto con el mensaje*/)

const resultado = suma(2, 3)//se determinan los valores de los parámetros de la función suma

console.log(resultado)//se muestra el mensaje por consola

//-----------------------------------------------------------

//CREACIÓN DE OBJETOS

const persona ={
	nombre: 'Richard',
	edad: 24,
	caract: ['cabello negro','caucásico','ojos claros']
}

console.log('veamos '+persona.nombre+', tu tienes '+persona.caract[2])

//----------------------------------------------------------

//OBJETO DESESTRUCTURADO

const {edad} = persona /* se crea una constante determinando el elemento de un objeto, igual al
nombre de dicho objeto*/
console.log('Richard tiene '+edad)/*se tiene la oportunidad de llamar al elemento
sin necesidad de determinar el nombre del objeto*/

//-------------------------------------------------------------------

//OBJETOS DENTRO DE OBJETOS Y USANDO DESTRUCTURIG

const banda ={
	bateria:{//primer objeto dentro de un objeto
		tambores: 5,
		platillos: 3,
		baquetas: 2,

		detalles:{//objeto dentro del objeto creado al principio el objeto padre
			marca: 'Yamaha',
			color: 'negro' 
		}//detalles
	},//bateria

	guitarra:{//segundo objeto creado
		cuerdas: 7,
		pajuelas: 1,

		detalles:{//objeto dentro del segundo objeto creado en el objeto padre
			marca: 'Gibson',
			color: 'Rojo y blanco'
		}//detalles
	}//guitarra
}//banda

const {marca} = banda.bateria.detalles /*dirección para dirigir al elemento
'marca' que está creado en el objeto 'bateria' que se creó en el objeto padre
llamado 'banda'*/

console.log(marca)

//--------------------------------------------------------------------


