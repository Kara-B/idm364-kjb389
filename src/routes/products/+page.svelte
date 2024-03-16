<!-- src/routes/products/+page.svelte -->

<svelte:head>
    <title>Wickhead | {productDetails.product_name}</title>
</svelte:head>
<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import { get } from 'svelte/store';
  import { cart } from '$lib/cartStore.js';
  import Icon from '@iconify/svelte';
import HeaderTwo from '$lib/HeaderTwo.svelte';
  let selectedSize = "R";
  let count = 1;
  function selectSize(size) {
    selectedSize = size;
  }

  let productDetails = {};
//   function showToast() {
//     // Get the snackbar DIV
//     var toast = document.getElementById("snackbar");

//     // Add the "show" class to DIV
//     toast.className = "show";

//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
// } 
// function hideToast() {
//   var toast = document.getElementById("toast");
//   toast.className = "hide";
//   setTimeout(function(){ toast.className = toast.className.replace("hide", ""); }, 3000);
// } 
// function showToast() {
//     var toast = document.getElementById("toast");
//     toast.className = "show";
//     setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
// };

  onMount(async () => {
    const queryParams = get(page).url.searchParams;
    const productId = queryParams.get('id');
    const { data, error } = await supabase
      .from('productinfo')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) {
      console.error('Error fetching product details:', error);
    } else {
      productDetails = data;
    }
  });
  function formatPrice(price) {
    const numericPrice = Number(price);
    const formattedPrice = numericPrice.toFixed(2);
    return `$${formattedPrice}`;
  }

  function addToCart() {
    cart.update(items => {
      const productToAdd = {
        product_name: productDetails.product_name,
        price: productDetails.price,
        image: productDetails.image,
        quantity: count,
        size: selectedSize,
      };
      return [...items, productToAdd];
    });
  }

  function decrementCount() {
    if (count > 1) {
      count--;
    }
  }

  function incrementCount() {
    count++;
  }
</script>
<HeaderTwo />
{#if productDetails}
<main class="two-col">
  <div class="main_image_detail_page">
      <img src="{productDetails.image}" alt={productDetails.product_name} />
  </div>
  <div class="right_side">
      <h1>{productDetails.product_name}</h1>
      <h5>{formatPrice(productDetails.price)}</h5>
      <p>{productDetails.description}</p>
      <div class="chooseSize button-stroke"> 
          <button class="bg_none" class:active={selectedSize === "S"} on:click={() => selectSize("S")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("S")}}>S</button>
          <button class="bg_none" class:active={selectedSize === "R"} on:click={() => selectSize("R")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("R")}}>R</button>
          <button class="bg_none" class:active={selectedSize === "XL"} on:click={() => selectSize("XL")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("XL")}}>XL</button>
      </div>
      <div class="flexbox"> 
          <div class="itemCounter button-stroke">
            <button class="bg_none" on:click={decrementCount} on:keydown={(e) => {if (e.key === 'Enter') decrementCount()}}>-</button>
            <p> {count} </p>
            <button class="bg_none" on:click={incrementCount} on:keydown={(e) => {if (e.key === 'Enter') incrementCount()}}>+</button>
          </div>
          <button class="dark_bg" on:click={addToCart}> Add to Cart </button>
      </div>
  </div>
  <!-- <div id="toast"> 
    <h6> Added to Cart!  </h6>
    <button class="bg_none" on:click={hideToast}>
      <Icon icon="gg:close-o" width="30" height="30"  style="color: #F9ECCF; padding: 0;" />
    </button>
  </div> -->
</main>
{:else}
  <p>Loading product details...</p>
{/if}

<style>
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
  .chooseSize {
    display: flex;
    gap: 0;
    width: fit-content;
    padding: 0;
  }
  .active {
    background-color: var(--dark-grey);
    color: var(--light-cream);
  }
  .chooseSize button {
    cursor: pointer;
    height: 100%;
    padding: 1rem;
  }
  .flexbox {
    display: flex;
    gap: 1rem;
  }
  .right_side {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .main_image_detail_page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main_image_detail_page img {
    width: 100%;
    height: auto;
  }
  /* #toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    padding: 1rem;
    background-color: var(--primary-color);
    color: var(--light-cream);
  }
  .show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear;
  }
  .hide {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  } */
</style>
