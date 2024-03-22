<script>
	import {cart} from '$lib/cartStore.js';
	import Icon from '@iconify/svelte';
</script>
<nav>
	<ul>
		<li><a href="/"> Our Products </a></li>
		<li><a href="/about"> About Us </a></li>
		<li>
			{#if $cart.length>0}
		<div class="badge"> <h6> {$cart.length} </h6> </div>
		{/if}
			<a href="/cart"> <Icon icon="mdi:cart" width="32" height="32" /> </a>
	</li>
	</ul>
</nav>
<style>
 a {
	color: white;
	text-decoration: none;
	transition: color .3s ease-in-out;
 }
 a:hover {
	color: var(--secondary-color);
	transition: color .3s ease-in-out;
 }
 ul {
	display: flex;
	justify-content: flex-end;
	list-style: none;
 }
 	li {
		padding: 0 1rem;
		font-family: 'HeyNovember';
		font-size: 1.582rem;
		font-weight: 200;
		letter-spacing: .1em;
 	}
	nav {
		background-color: rgba(29, 29, 29, 0.708);
		display: flex;
		justify-content: end;
		padding: 1rem;
		position: sticky;
		z-index: 2;
	}
	.badge {
		align-items: center;
		justify-content: center;
		background: var(--secondary-color);
		border-radius: 40px;
		color: var(--dark-grey);
		display: flex;
		font-size: 12px;
		height: 16px;
		padding: .5rem;
		position: absolute;
		right: 10px;
		top: 0px;
		width: fit-content;
	}
	
</style>