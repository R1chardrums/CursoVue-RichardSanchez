<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-if="!modoEdicion"
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Guardar escrito',
          icon: 'save',
          label: 'Guardar',
          handler: saveWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

    <q-editor
   	  v-else
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Actualizar escrito',
          icon: 'update',
          label: 'actualizar',
          handler: updateWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />

    <q-card class="row" flat bordered v-for="(item, index) in task" :key="index">
      <q-card-section :class="item.estado ? 'tachar' : ''" class="col" v-html="item.texto" />
      <q-btn flat color="green" @click="editar(index, item.id)">Editar</q-btn>
      <q-btn flat color="red" @click="eliminar(index, item.id)">Eliminar</q-btn>
    </q-card>
    <div class="flex flex-center" v-if="task.length == 0">
    	<h6>No hay nada pues</h6>
    </div>
  </div>
</template>

<script>
import { ddbb } from "boot/firebase";
export default {
	data(){
		return{
			editor: '',
			task:[],
			index: null,
			modoEdicion: false,
			id: null
		}
	},
	created(){
		this.listarTareas();
	},
	methods:{
		editar(index, id){
			this.modoEdicion = true;
			this.index = index;
			this.id = id;
			this.editor = this.task[index].texto;
		},
		async listarTareas(){
			try{
				const resDB = await ddbb.collection('tareas').get()
				resDB.forEach(res => {
					console.log(res.id);
					const fbTarea = {id: res.id, texto: res.data().texto, estado: res.data().estado}
					this.task.push(fbTarea)
				})
			}catch(error){
				console.log(error);
			}
		},
    	async saveWork () {

    		try{
    			const resDB = await ddbb.collection('tareas').add({
    				texto: this.editor,
    				estado: false
    			})

    		this.task.push({
    			id: resDB.id,
    			texto: this.editor,
    			estado: false
    		})
    		this.editor= ''
    		this.$q.notify({
      		message: 'Ah bueno, guardaste la vaina',
      		color: 'black',
      		textColor: 'white',
      		icon: 'cloud_done'
    		})

    		}catch(error){
    			console.log(error);
    		}
   		},
   		async updateWork(){
   			try{
   				const resDB = await ddbb.collection('tareas').doc(this.id).update({
   					texto: this.editor
   				})

   				this.task[this.index].texto = this.editor
    		
    			this.$q.notify({
      			message: 'Jaja ah bueno, ¿Viste, Wendy? Se actualizó, copia y pega mensaje jajaja',
      			color: 'black',
      			textColor: 'white',
      			icon: 'cloud_done'
    			})

   			}catch(error){
   				console.log(error);
   			}finally{
				this.modoEdicion = false;
				this.index = null;
				this.id = null;
				this.editor = ''  				
   			}
   		},

   		eliminar(index, id){
      		
      		this.$q.dialog({
        	title: 'Acción de eliminar... pilas',
        	message: 'Ah no vale, ¿Ahora me lo vas a borrar? Dale ahí en "ok" pues',
        	cancel: true,
        	persistent: true
      		}).onOk(async () => {

      		try{
      			await ddbb.collection('tareas').doc(id).delete()
   				this.task.splice(index,1);
      		}catch(error){
      			console.log(error);
      		}

      		})
   		}
	}
}
</script>
<style>
	.tachar{
		text-decoration: line-through;
	}
</style>