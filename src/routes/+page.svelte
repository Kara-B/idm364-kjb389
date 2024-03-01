<script lang="js">
    export let catname = "The classics";
    export let catdescription ="We're not your typical candle shop, but these are as typical as they'll get. Don't knock em' till you try em'";
    export let data;
    $: {
        console.log(data);
    }
</script>
<svelte:head> 
    <title> Wickhead | Products </title>
</svelte:head>
<div class="hero">
    <img id="WickheadLogo" src="/src/lib/assets/wickhead_logo.svg" alt="Wickhead Logo">
    <img id="MissWick" src="/src/lib/assets/misswick.svg" alt="A melted head made of wax with a lit wick coming out of it.">
</div>
<div class="subnav">
    <ul>
        <button type="button" on:click={() => {
            catname = "The classics";
            catdescription = "We're not your typical candle shop, but these are as typical as they'll get. Don't knock em' till you try em'";
        }} aria-label="The cLASSICS">  The Classics </button>
        <button type="button" on:click={() => {
            catname = "Rise & Shine";
            catdescription = "It's time to WAKE UP, never too late for breakfast or too early for brunch!";
        }} aria-label="Rise & Shine">  Rise & Shine </button>
        <button type="button" on:click={() => {
            catname = "H*t T*pic";
            catdescription = "You like D&D, Audrey Hepburn, Fangoria, Harry Houdini, and croquet. You can’t swim, you can’t dance, and you don’t know karate. Face it. You’re never gonna make it.";
        }} aria-label="H*t T*pic">  H*t T*pic </button>

    </ul>
</div>
 
<div class="productSpace ml3" >
    <h1 id="ProductCategory">  {catname} </h1>
    <p  id="ProductDescription"> {catdescription} </p>
    <div class="productcardHolder ">
    {#if data.productinfo}
        {#each data.productinfo as { product_name, price, image }}
            <div class="productDisplay dark_bg">
                <img src={image} alt={product_name} >
                <div>
                    <h5> {product_name} </h5>
                    <p> {price} </p>
                </div>
            </div>
        {/each}
{/if}
          <!-- this will become an each block -->
        <!-- <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard />  -->
   </div>
       
    </div>


<style>

    ul {
        display: flex;
        color: white;
    }
    button {
        padding: 1rem 1.5rem;
        text-decoration: underline #fee10600;
        transition: text-decoration ease-in-out .3s;
    }

    button:hover, button:focus {
        text-decoration: underline var(--secondary-color);
        cursor: pointer;
    }
   
    .hero {
        display: flex;
        background-image: url(/src/lib/assets/hero_banner.png) ;
        width: 100%;
        height: 405.8px;
    }
    #WickheadLogo {
        position: absolute;
        top: 130px;
        width: 80%;
        z-index: 5;
    }
    #MissWick {
        position: absolute;
        left: 30px;
        width: 372px;
        z-index: 10;
    }
    .subnav {
        background-color: var(--dark-grey);
        box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.11), 0px 3px 4px 0px rgba(0, 0, 0, 0.14);
        font-family: 'Darker Grotesque', sans-serif;
        font-size: 1.125rem;
        font-weight: 600;
        position: sticky;
        z-index: 30;
    }
    .productcardHolder {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    .productDisplay {
        box-shadow: 0px 4px 4px 0px rgba(59, 59, 59, 0.27), 0px 1px 4px 0px rgba(0, 0, 0, 0.39);
        border-radius: 0px 0px 20px 20px;
        display: grid;
        justify-items: center;
        margin: 1.5rem 0 ;
        text-align: center;
        overflow: hidden;
        width: 268px;
    }
    .productDisplay div {
        padding: 1rem;
        width: 100%;
    }
    .productDisplay img {
        object-fit: cover;
        width: 120%;
        height: 180px;
    }
</style>