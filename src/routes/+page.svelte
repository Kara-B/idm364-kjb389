<script>
    import ProductCard from "$lib/ProductCard.svelte";
</script>
<div class="hero">
    <img id="WickheadLogo" src="/src/lib/assets/wickhead_logo.svg" alt="Wickhead Logo">
    <img id="MissWick" src="/src/lib/assets/misswick.png" alt="A melted head made of wax with a lit wick coming out of it.">
</div>
<div class="subnav">
    <ul>
        <li> Classic </li>
        <li> Rise & Shine </li>
        <li> H*t T*pic </li>
    </ul>
</div>
<div class="productSpace ml3">
    <h1 id="ProductCategory"> THE cLASSICS </h1>
    <p  id="ProductDescription"> We're not your typical candle shop, but these are as typical as they'll get. Don&#39;t knock em&#39; till you try em&#39;</p>
    <ProductCard /> 
</div>


<style>

    ul {
        display: flex;
        color: white;
    }
    li {
        padding: 1rem 1.5rem;
        text-decoration: underline #fee10600;
        transition: text-decoration ease-in-out .3s;
    }

    li:hover, li:focus {
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
        top: 13px;
        z-index: 10;
    }
    .subnav {
        background-color: var(--dark-grey);
        box-shadow: 0px 6px 4px 0px rgba(0, 0, 0, 0.11), 0px 3px 4px 0px rgba(0, 0, 0, 0.14);
        font-family: 'Darker Grotesque', sans-serif;
        font-size: 1.258rem;
        font-weight: 600;
    }

</style>