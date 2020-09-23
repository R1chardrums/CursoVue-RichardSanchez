<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs12 sm6>
				<v-card>
					<v-img>IMG</v-img>
					<v-card-title>Título</v-card-title>
					<v-card-text>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Sint quibusdam, iusto minus non voluptas dolores, nihil maiores pariatur eaque ducimus at laudantium vitae sed sequi. Laudantium amet praesentium impedit molestiae.</v-card-text>
					<v-card-actions>
						<v-btn>no se jaja</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
			<v-flex xs12 sm6>
				<v-card>
					<v-img>IMG</v-img>
					<v-card-title>Título</v-card-title>
					<v-card-text>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Sint quibusdam, iusto minus non voluptas dolores, nihil maiores pariatur eaque ducimus at laudantium vitae sed sequi. Laudantium amet praesentium impedit molestiae.</v-card-text>
					<v-card-actions>
						<v-btn @click="dialogo = true">salte</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>

		<v-dialog v-model="dialogo" width="500" persistent>
			<v-card>
				<v-card-title>
					Aja
				</v-card-title>
				<v-card-text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet dolorum facere explicabo veniam sapiente consequatur accusantium, expedita, sequi minus molestias, unde eaque minima enim. Esse consequuntur sint id nemo!
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-btn @click="dialogo = false">Cerrar</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

	</v-container>
</template>

<script>

export default {
  name: 'Home',
  data(){
  	return{
  		dialogo: false
  	}
  }

}
</script>
