<script>
    import HeaderTwo from '$lib/HeaderTwo.svelte';
    import { cart } from '$lib/cartStore.js';
    import Icon from '@iconify/svelte';
    let subtotal = 0;
    $: {
        subtotal = $cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
    function formatPrice(price) {
        const numericPrice = Number(price);
        const formattedPrice = numericPrice.toFixed(2);
        return `$${formattedPrice}`;
    }

$: itemTotal = $cart.reduce((total, item) => total + item.quantity, 0);
$: tax = subtotal * .06;
$: fullTotal = subtotal + tax;

function decrementCount(itemId) {
    cart.update(items => {
        return items.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
    });
}

function incrementCount(itemId) {
    cart.update(items => {
        return items.map(item => {
            if (item.id === itemId) {
                item.quantity += 1;
            }
            return item;
        });
    });
}

console.log("this is cart")
console.log($cart);
  
</script>
<svelte:head>
    <title> Wickhead | Cart ({itemTotal}) </title>
</svelte:head>
<HeaderTwo />
<div class="two_col">
    <div class="cartDiv">
        <h1 class="wt_text"> Your Cart</h1>
        <hr>
        {#if $cart.length > 0}

        {#each $cart as item}
            <div class="productListCard">
                <img src={item.image} alt={item.product_name} >
                <div class="product_list_info">
                    <h5> {item.product_name} - {formatPrice(item.price)} </h5>
                    <div>
                        <div class="itemCounter button-stroke">
                            <button class="bg_none" on:click={decrementCount(item.id)}>-</button>
                                <p>{item.quantity}</p>
                            <button class="bg_none" on:click={incrementCount(item.id)}>+</button>
                            </div>
                       <div class="dark_bg itemsize">
                            {item.size}
                       </div> 
                        <button class="bg_none" on:click={() => cart.update(items => items.filter(i => i !== item))}>
                            <Icon icon="gridicons:trash"  style="color: #282828 ; font-size: 35px" />
                        </button>
                    </div>
                </div>
               
              
            </div>
        {/each}

        {:else}
        <div class= "centerDiv">
            <p class="wt_text">Your cart is still empty, let's fill it up?</p>
            <a href="/"> <button> Shop now </button> </a>
        </div>
       
        {/if}
    </div>
    <div class="totalsDiv" style="margin-top: 2rem;">
        <p> Item(s): <strong> {itemTotal} </strong> </p>
        <p> Subtotal: <strong> ${subtotal.toFixed(2)} </strong> </p>
        <p> Shipping: <strong> Free, but only for you! </strong></p>
        <p> Sales Tax: ${tax.toFixed(2)} </p> 
        <h5> Total: ${fullTotal.toFixed(2)} </h5>
        <button> Checkout </button>
    </div>
    <img class="absoluteGraphic" src="https://res.cloudinary.com/dsylo3btg/image/upload/v1710217494/candles/misswick_q6dlxl.svg" alt="">
</div>
<!-- <div class="two_col">
    <div class="cartDiv">
        <h1 class="wt_text"> Your Cart</h1>
        <hr>
        <div class="productListCard">
            <img src="https://placehold.jp/100x100.png" alt="" >
        <div>
            <h6> Product Name </h6>
            <p> $18.00 </p>
        </div>
    
        <div class="itemCounter button-stroke"> 
            <button class="bg_none" on:click={() => count--} on:keydown={(e) => {if (e.key === 'Enter') count--}}>-</button>
            <p> {count} </p>
            <button class="bg_none" on:click={() => count++} on:keydown={(e) => {if (e.key === 'Enter') count++}}>+</button>
        </div>
        <Icon icon="gridicons:trash"  style="color: #282828 ; font-size: 35px" />
    </div>
    </div>
    <div class="totalsDiv" style="margin-top: 2rem;">
        <p> Item(s): {itemTotal} </p>
        <p> Subtotal: {itemTotal} </p>
        <p> Shipping: </p>
        <p> Sales Tax: </p>
        <h5> Total: {itemTotal} </h5>
    </div>
    <img class="absoluteGraphic" src="/src/lib/assets/misswick1.svg" alt="">
</div> -->

<style>
    .two_col {
       display: grid;
       grid-template-columns: 1fr 1fr;
       height: 100vh;
       overflow-x: hidden;
       object-fit: cover;
    }
    .cartDiv {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 120%;
        padding: 2rem;
        max-width: 39.6875rem;
        background: linear-gradient(180deg, #636363 2.88%, #414141 27.76%, #000 100%);
    }
    .totalsDiv {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 400px;
        padding: 2rem;
        position: fixed;
        left: 50%;
        width: 39.6875rem;
    }
    .absoluteGraphic {
        position: fixed;
        z-index: 1;
        top: 200px;
        right: -190px;
        mix-blend-mode: multiply;
        width: 600px;
    }
    .productListCard {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        background-color: #f9f9f9;
        box-shadow: 0px 5px 2.4px 0px rgba(0, 0, 0, 0.07), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        object-fit: cover;
        width: 570px;
        height: 150px;
        padding-right: 1.5rem;
    }
    .productListCard img {
        height: 100%;
        width: 150px;
        object-fit: cover;
    }
    .product_list_info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .product_list_info div {
        display: flex;
        flex-direction: row;
    }
    .itemsize {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
    }
</style>