<script> 
    let selectedSize = "R";
    let count = 0;
    export let image;
    export let data;
    export let product_name;
    export let price;
    export let description;
    function selectSize(size) {
        selectedSize = size;
    }
    console.log(data);
</script>
<svelte:head>
    <title> Wickhead | {product_name} </title>
</svelte:head>
<main class="two-col">
    <div>
        <img src="{image}" alt={product_name} />
    </div>
    <div class="right_side">
        <h1> {product_name} </h1>
        <h5> {price}.00 </h5>
        <p> {description} </p>
        <div class="chooseSize button-stroke"> 
            <button class="bg_none" class:active={selectedSize === "S"} on:click={() => selectSize("S")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("S")}}>S</button>
            <button class="bg_none" class:active={selectedSize === "R"} on:click={() => selectSize("R")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("R")}}>R</button>
            <button class="bg_none" class:active={selectedSize === "XL"} on:click={() => selectSize("XL")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("XL")}}>XL</button>
        </div>
        <div class="flexbox"> 
            <div class="itemCounter button-stroke"> 
                <button class="bg_none" on:click={() => count--} on:keydown={(e) => {if (e.key === 'Enter') count--}}>-</button>
                <p> {count} </p>
                <button class="bg_none" on:click={() => count++} on:keydown={(e) => {if (e.key === 'Enter') count++}}>+</button>
            </div>
            <button class="dark_bg"> Add to Cart </button>
        </div>
        
    </div>
</main>

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
</style>