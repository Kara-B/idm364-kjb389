<script>
	import {cart} from '$lib/cartStore.js';
	import Icon from '@iconify/svelte';
	function toggleMenu(){
		const nav = document.querySelector('nav');
		nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
	}
</script>

<button class="hamburger_menu bg_none" on:click={toggleMenu}> <Icon icon="game-icons:hamburger-menu" width="36" height="36"  style="color: white" /> </button>

<nav>
	<ul>
		<li><a href="/"> Our Products </a></li>
		<li><a href="/about"> About Us </a></li>
		<li class="cartOption">
			<a href="/cart"> 
				{#if $cart.length>0}
				<div class="badge"> <h6> {$cart.length} </h6> </div>
				{/if} 
				<Icon icon="mdi:cart" width="32" height="32" /> 
			</a>
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
	.hamburger_menu {
		display: none;
	}
	.cartOption {
			display: flex;		
			justify-content: flex-end;
		}
	@media (max-width: 605px) {
		nav {
			display: none;
			background-color: var(--dark-grey);
			height: 50vh;
			align-items: start;
			width: 50%;
			padding-top: 4rem;
			padding-right: 2rem;
			justify-content: end;
			text-align: right;
		}
		ul {
			flex-direction: column;
		}
		li {
			padding: 1rem 0;
		}
		.badge {
			position: relative;
			width: 20%;
			
		}
		.cartOption {
			display: flex;		
			justify-content: flex-end;
		}
		.hamburger_menu {
			display: block;
			position: absolute;
			right: 1rem;
			top: 1rem;
			z-index: 100;
		}
	}
	
</style>