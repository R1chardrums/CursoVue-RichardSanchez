<template>
	<div class="my-5">
		<h1>Formulario</h1>
		<form>
			<b-row>
				<b-col md="3">
					<b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
					<small>Mínimo, 3 caracteres</small>
					<b-form-input type="number"></b-form-input>
					<p>{{texto}}</p>					
				</b-col>	
				<b-col md="3">
					<b-form-select v-model="select" :options="animales"></b-form-select>	
					<p>Lo que hace un {{select}}</p>				
				</b-col>
				<b-col md="3">
					<b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
					<p>Aquí se eligió un {{radio}}</p>
				</b-col>
				<b-col md="3">
					<b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
					<p>Aquí se eligieron: {{check}}</p>
				</b-col>
			</b-row>
		</form>
	</div>
</template>

<script>
	export default{
		name: 'Formulario',
		data(){
			return{
				texto:'',
				select: null,
				radio: null,
				check: [],
				animales: [
					{value: null, text: 'Seleccione un animal'},
					{value: 'perro', text: 'Guau'},
					{value: 'gato', text: 'Miau'},
					{value: 'pato', text: 'Cuack'}
				],
				animalesRadio: [
					{value: 'perro', text: 'Guau'},
					{value: 'gato', text: 'Miau'},
					{value: 'pato', text: 'Cuack'}
				]
			}
		},
		computed:{
			comprobar(){
				return this.texto.length > 2 ? true : false
			}
		}
	}
</script>