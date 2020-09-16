<template>
  <div class="Fotos">
    <h1>Página de fotos</h1>
    <router-link :to="{name: 'Fotos', params:{id: item}}" 
    v-for="(item, index) of lasFotos" :key="index">
    	<button>Foto {{item}}</button>
    </router-link>
	<Foto/>
	<button @click="home">Inicio</button>
	<button @click="anterior">Anterior</button>
	<button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/FotoComponent.vue";

export default{
	components:{
		Foto
	},

	data(){
		return{
			lasFotos: [1,2,3]
		}
	},

	methods:{
		home(){
			this.$router.push('/')
		},
		anterior(){
			this.$router.go(-1)
		},
		siguiente(){
			this.$router.go(1)
		}
	}
}
</script>