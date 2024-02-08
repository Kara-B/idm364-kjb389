<script> 
import HeaderTwo from "$lib/HeaderTwo.svelte";
let selectedSize = "L";
let count = 0;
function selectSize(size) {
    selectedSize = size;
}
</script>
<HeaderTwo />

<main class="two-col">
    <div>
        <img src="https://via.placeholder.com/300x400" alt="placeholder" />
    </div>
    <div>
        <h1> Product Name </h1>
        <h4> $18.00 </h4>
        <p> This is a product description. It should be a little longer than the title, but not too long. </p>
        <div class="chooseSize button-stroke"> 
            <button class:active={selectedSize === "S"} on:click={() => selectSize("S")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("S")}}>S</button>
            <button class:active={selectedSize === "L"} on:click={() => selectSize("L")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("L")}}>L</button>
            <button class:active={selectedSize === "XL"} on:click={() => selectSize("XL")} on:keydown={(e) => {if (e.key === 'Enter') selectSize("XL")}}>XL</button>
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
  
</style>