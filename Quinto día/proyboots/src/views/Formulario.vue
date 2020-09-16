<template>
	<div class="my-5">
		<h1>Formulario</h1>
		<form>
			<b-row>
				<b-col md="6">
					<b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
					<small>Mínimo, 3 caracteres</small>
					<b-form-input type="number"></b-form-input>
					<p>{{texto}}</p>					
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
				texto:''
			}
		},
		computed:{
			comprobar(){
				return this.texto.length > 2 ? true : false
			}
		}
	}
</script>