<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item, index) in lastareas" :key="index">{{item}}</h2>

    <router-link :to="{query:{seccion:1}}">1</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default{
	computed:{
		...mapState('tareas',['lastareas'])
	},
	watch:{
		"$route.query.seccion":{
			immediate: true,
			handler(seccion){
				console.log(`Sección ha cambiado: ${seccion}`);
			}
		}
	}
}
</script>