<script>
    import HeaderTwo from '$lib/HeaderTwo.svelte';
    import ProductCardList from '$lib/ProductCardList.svelte';
    let itemTotal = 0;
</script>
<HeaderTwo />
<main>
    <div class="cartDiv">
        <h1 class="wt_text"> Your Cart</h1>
        <hr>
        <ProductCardList />
        <p class="wt_text">There are no items in your cart.</p>
        <button> Continue Shopping </button>
    </div>
    <div class="m2">
        <p> Item(s): {itemTotal} </p>
        <p> Subtotal: {itemTotal} </p>
        <p> Shipping: </p>
        <p> Sales Tax: </p>
        <h5> Total: {itemTotal} </h5>
    </div>
</main>
<div class="absoluteGraphic">
    <img src="/src/lib/assets/misswick1.svg" alt="">
</div>

<style>
    main {
       display: grid;
       grid-template-columns: 1fr 1fr;
       height: 500px;
    }
    .cartDiv {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 120%;
        padding: 2rem;
        width: 39.6875rem;
        background: linear-gradient(180deg, #636363 2.88%, #414141 27.76%, #000 100%);
    }
    .absoluteGraphic {
        position: absolute;
        z-index: 1;
        top: 200px;
        right: -180px;
        mix-blend-mode: multiply;
        object-fit: cover;
        overflow: hidden;
        width: 400px;
    }
    .absoluteGraphic img {
        width: 100%;
    }
</style>