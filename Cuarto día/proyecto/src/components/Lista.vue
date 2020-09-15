<template>
	<div><!-- Estilo de lista encontrada en Bootstrap -->
<ul class="list-group"><!-- siempre determinar la :key para v-for -->
	<li v-for="(item, index) of frutas" :key="item.id" @click="aumentar(index)"
  class="list-group-item d-flex justify-content-between align-items-center">
   {{index}} {{item.nombre}}
    <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
	</li>
</ul>
<button class="my-3" @click="reiniciar">Reiniciar cantidades</button>
	</div>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';//para mapear los estados

	export default {
		name: 'lista',
		computed:{
			...mapState(['frutas'])
		},
		methods:{
			...mapMutations(['aumentar','reiniciar'])
		}
	}
</script>