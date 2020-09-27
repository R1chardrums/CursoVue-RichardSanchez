<template>
	<div>
		<h1>Componente</h1>
		<ul>
			<li v-for="(item, index) in lista" :key="index">{{item.nombre}} - {{item.descripcion}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lista: [
					{nombre: 'html', descripcion: 'Lenguaje de marcado de hipertexto'},
					{nombre: 'css', descripcion: 'Estilo de hojas en cascada'},
					{nombre: 'SQL', descripcion: 'Lenguaje de sentencias de consulta'}
				]
			}
		}
	}
</script>