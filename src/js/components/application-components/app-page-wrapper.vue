<template>
	<div class="app-page-wrapper">
		<header class="header">
			<div class="container">
				{{ headerTitle }}
			</div>
		</header>
			<div class="content">
				<slot></slot>
			</div>
		<footer class="footer">
			<div class="container">
				Footer
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'app-page-wrapper',
		props: {
			headerTitle: String
		}
	}

</script>

<style lang="scss">
	.app-page-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
	}

	.header {
		width: 100%;
		background-color: #5f688c;
		color: white;
		padding: 20px 0px;
		font-size: rem(36);
	}

	.footer {
		background-color: lighten(black, 15%);
		color: white;
		padding: 20px 0px;
		font-size: 2em;
	}

	.content {
		min-height: 100vh;
	}
</style>