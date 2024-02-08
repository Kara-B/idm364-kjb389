<script>
    let count = 2;
    import Icon from '@iconify/svelte';
</script>
<div class="productListCard">
    <div style="height: 100%; object-fit: cover;">
        <img src="https://placehold.jp/100x100.png" alt="" >
    </div>
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

<style>
    .productListCard {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        background-color: #f9f9f9;
        box-shadow: 0px 5px 2.4px 0px rgba(0, 0, 0, 0.07), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 500px;
        padding-right: 1.5rem;
    }
    .itemCounter {
        padding: 0;
    }
</style>