<script>
    import HeaderTwo from '$lib/HeaderTwo.svelte';
    import ProductCardList from '$lib/ProductCardList.svelte';
    let itemTotal = 0;
</script>
<svelte:head>
    <title> Wickhead | Cart ({itemTotal}) </title>
</svelte:head>
<HeaderTwo />

<div class="two_col">
    <div class="cartDiv">
        <h1 class="wt_text"> Your Cart</h1>
        <hr>
        <ProductCardList />
        <!-- <p class="wt_text">There are no items in your cart.</p>
        <button> Continue Shopping </button> -->
    </div>
    <div class="totalsDiv" style="margin-top: 2rem;">
        <p> Item(s): {itemTotal} </p>
        <p> Subtotal: {itemTotal} </p>
        <p> Shipping: </p>
        <p> Sales Tax: </p>
        <h5> Total: {itemTotal} </h5>
    </div>
    <img class="absoluteGraphic" src="/src/lib/assets/misswick1.svg" alt="">
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
</style>