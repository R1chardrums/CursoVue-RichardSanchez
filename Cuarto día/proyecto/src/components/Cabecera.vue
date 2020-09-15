<template>
	<div class="text-center"><!-- siempre debe ir dentro de un div lo que se haga dentro del template-->
    <img alt="Vue logo" src="@/assets/logo.png"><!-- el @ facilita la dirección del archivo -->
		<h1>Frutas</h1>
	</div>
</template>

<!-- Componente Cabecera. Será importado en App.vue y puesto dentro del componente de ese archivo -->
<script>
	export default {
		name: 'cabecera'
	}
</script>