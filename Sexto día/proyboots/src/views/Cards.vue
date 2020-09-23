<template>
	<div class="my-5">
		<h1>Cards</h1>
		<b-button variant="info">Texto</b-button>
		<b-button variant="success">Texto</b-button>
		<b-button variant="danger">Texto</b-button>
		<b-button variant="primary">Texto</b-button>
		<b-button variant="warning">Texto</b-button>
		<b-button variant="dark">Texto</b-button>

		<b-row class="mt-5">
			<b-col cols="12" md="4">
				<b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ratione provident fugit labore modi iste porro, velit est. Dolorem animi commodi ab ea, ipsam earum aut. Obcaecati, ut, animi? Eligendi!</p>
					<b-button variant="dark">Texto</b-button>
				</b-card>
			</b-col>

			<b-col cols="12" md="4">
				<b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ratione provident fugit labore modi iste porro, velit est. Dolorem animi commodi ab ea, ipsam earum aut. Obcaecati, ut, animi? Eligendi!</p>
					<b-button variant="dark">Texto</b-button>
				</b-card>
			</b-col>

			<b-col cols="12" md="4">
				<b-card img-src="https://picsum.photos/600/300/?image=25" img-top>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ratione provident fugit labore modi iste porro, velit est. Dolorem animi commodi ab ea, ipsam earum aut. Obcaecati, ut, animi? Eligendi!</p>
					<b-button variant="dark">Texto</b-button>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default{
		name: 'Cards'
	}
</script>