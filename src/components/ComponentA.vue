<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<h1>{{msgfromfather}}</h1>
		<button v-on:click="onClickMe">open mouse!</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function () {
			return {
				msg: 'hello from Component a!'
			}
		},
		props: ['msgfromfather'],
		methods: {
			onClickMe: function () {
				console.log(this.msgfromfather)
				this.$dispatch('child-tell-me-something', this.msg);
			}
		}
	}
</script>

<style type="text/css">
	h1 {
		color: #42b983;
	}
</style>