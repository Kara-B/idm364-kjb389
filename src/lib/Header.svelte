<script>
	import Nav from '$lib/Nav.svelte';
</script>
<header> 
    <Nav />
</header>
<style>
	header {
		display: flex;
		justify-content: end;
		font-size: 1.258rem;
		font-weight: bold;
		padding: 1.5rem 0;
		text-align: right;
		position: fixed;
		width: 100%;
		z-index: 100;
	}
</style>