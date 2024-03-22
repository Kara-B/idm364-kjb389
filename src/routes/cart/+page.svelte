<script>
    import HeaderTwo from '$lib/HeaderTwo.svelte';
    import { cart } from '$lib/cartStore.js';
    import Icon from '@iconify/svelte';
    import { writable } from 'svelte/store';
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
    let orderPlaced = writable(false);
    let orderNumber = writable("");
function checkout() {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        orderNumber.set(`#${randomNumber}`);
        cart.set([]);

        orderPlaced.set(true);

        setTimeout(() => {
            orderPlaced.set(false);
        }, 4000);
    }
  
</script>
<svelte:head>
    <title> Wickhead | Cart ({itemTotal}) </title>
</svelte:head>
<HeaderTwo />
{#if $orderPlaced}
<div class="order_confirmation">
    <h2>Your order has been placed successfully!</h2>
    <p>Thank you for shopping with Wickhead!</p>
    <p>Order number: {$orderNumber}</p>
    <div class="toast-timer"></div>
</div>
{/if}
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
                           <p> {item.size} </p> 
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
        <button class="ctaHover" on:click={checkout} > Checkout </button>
    </div>
    <img class="absoluteGraphic" src="https://res.cloudinary.com/dsylo3btg/image/upload/v1710217494/candles/misswick_q6dlxl.svg" alt="">
</div>


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
    .order_confirmation {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
        background-color: #f9f9f9;
        border-radius: 20px;
        box-shadow: 0px 5px 2.4px 0px rgba(0, 0, 0, 0.07), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 2px solid var(--primary-color);
        transition: all 0.5s ease-in-out;
        z-index: 1;
    }
    @media (max-width: 1238px) {
        .two_col {
            display: flex;
        }
        .cartDiv {
            max-width: 100%;
        
        }
        .totalsDiv {
            position: relative;
            left: 0;
            width: 100%;
            padding: 2rem;
        }
  
        .absoluteGraphic {
            display: none;
        }
    }
    @media (max-width: 950px) {
        .two_col {
            display: flex;
            flex-direction: column;
            overflow-y: hidden;
        }
        .productListCard {
            height: 100px;
        }
        .productListCard img {
            width: 20%;
        }
        .product_list_info {
            flex-direction: row;
        }
        .product_list_info div {
            align-items: center;
        }
        .itemCounter {
            height: 40px;
            width: 100px;
        }
        .cartDiv {
            padding: 1rem;
        }
    }
		
</style>