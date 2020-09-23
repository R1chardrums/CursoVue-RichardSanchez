<template>
	<v-container grid-list-xl>
		<v-layout row wrap>
			<v-flex md6>
				<v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
					<v-card-text>
					    <v-chip class="ma-2" color="pink" label text-color="white">
      						<v-icon left>mdi-label</v-icon>
      						{{item.titulo}}
    					</v-chip>
						<p>{{item.descripcion}}</p>
						<v-btn @click="editar(index)">editar</v-btn>
						<v-btn class="ml-1" @click="eliminarTarea(item.id)">eliminar</v-btn>
					</v-card-text>
				</v-card>
			</v-flex>

			<v-flex md6 v-if="agregar">
				<v-card class="mb-3 pa-3">
					<v-form @submit.prevent="agregarTarea">
						<v-text-field label="Título de tarea" v-model="titulo"></v-text-field>
						<v-textarea label="Descripción de tarea" v-model="descripcion"></v-textarea>
						<v-btn block type="submit">Agregar tarea</v-btn>
					</v-form>
				</v-card>
			</v-flex>

			<v-flex md6 v-if="!agregar">
				<v-card class="mb-3 pa-3">
					<v-form @submit.prevent="editarTarea">
						<v-text-field label="Título de tarea" v-model="titulo"></v-text-field>
						<v-textarea label="Descripción de tarea" v-model="descripcion"></v-textarea>
						<v-btn block type="submit">Editar tarea</v-btn>
					</v-form>
				</v-card>
			</v-flex>
		</v-layout>
   <v-snackbar v-model="snackbar">
      {{ mensaje }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>

	</v-container>
</template>

<script>
	export default{
		data(){
			return{
				agregar: true,
				listaTareas: [
					{id: 1, titulo: 'Tarea1', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam similique voluptate ratione, at eius placeat, temporibus officia iste illum voluptatem repudiandae labore impedit voluptatum eligendi sapiente quis accusamus et.'},

					{id: 2, titulo: 'Tarea2', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laboriosam similique voluptate ratione, at eius placeat, temporibus officia iste illum voluptatem repudiandae labore impedit voluptatum eligendi sapiente quis accusamus et.'}
				],
				titulo: '',
				descripcion: '',
				snackbar: false,
				mensaje: '',
				indexTarea: ''
			};
		},
		methods:{
			agregarTarea(){
				console.log(this.titulo,this.descripcion);
				if (this.titulo === '' && this.descripcion === '') {
					this.snackbar= true;
					this.mensaje= 'Está vacía la tarea'
				}else{
					this.listaTareas.push({
						id: Date.now(),
						titulo: this.titulo,
						descripcion: this.descripcion
					})
					this.titulo=''
					this.descripcion=''
					this.snackbar= true
					this.mensaje= 'Se ha agregado'
				}
			},
			eliminarTarea(id){
				this.listaTareas = this.listaTareas.filter(e => e.id != id)
			},
			editar(index){
				this.agregar=false
				this.titulo= this.listaTareas[index].titulo
				this.descripcion= this.listaTareas[index].descripcion
				this.indexTarea= index
			},
			editarTarea(){
				this.listaTareas[this.indexTarea].titulo= this.titulo
				this.listaTareas[this.indexTarea].descripcion= this.descripcion
				this.agregar= true

				this.titulo=''
				this.descripcion=''
				this.snackbar= true
				this.mensaje= 'Se ha editado'
			}
		}
	};
</script>