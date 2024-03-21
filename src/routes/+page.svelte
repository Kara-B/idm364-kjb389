<!-- // src/routes/index.svelte -->

<script>
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
    import logo from "$lib/assets/wickhead_logo.svg";
  
    let products = [];
    let filteredProducts = [];
    let catname = "classic"; // Initialize with the database category name
    let catdescription = "We're not your typical candle shop, but these are as typical as they'll get. Don't knock em' till you try em'"; // Default description
  
  
    onMount(async () => {
      const { data, error } = await supabase
        .from('productinfo')
        .select('*');
  
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        products = data;
        filterProducts(catname); // Initialize filtered products based on the default category
      }
    });
  
    function filterProducts(category) {
      filteredProducts = products.filter(product => product.category === category);
    }
  
    function updateCategory(name, description) {
      let dbCategoryName = "";
      switch (name) {
        case "The Classics":
          dbCategoryName = "classic";
          break;
        case "Rise & Shine":
          dbCategoryName = "riseandshine";
          break;
        case "H*t T*pic":
          dbCategoryName = "hottopic";
          break;
        default:
          dbCategoryName = "classic"; // Default category
      }
  
      catname = name;
      catdescription = description;
      filterProducts(dbCategoryName);
    }

    function formatPrice(price) {
      const numericPrice = Number(price);
      const formattedPrice = numericPrice.toFixed(2);
      return `$${formattedPrice}`;
    }
  </script>
  
  <svelte:head> 
      <title> Wickhead | Home </title>
  </svelte:head>
  
  <div class="hero">
      <img id="WickheadLogo" src={logo} alt="Wickhead Logo">
      <img id="MissWick" src="https://res.cloudinary.com/dsylo3btg/image/upload/v1710217494/candles/misswick_q6dlxl.svg" alt="A melted head made of wax with a lit wick coming out of it.">
  </div>
  <div class="subnav">
    <ul>
      <button type="button" on:click={() => updateCategory("The Classics", "We're not your typical candle shop, but these are as typical as they'll get. Don't knock em' till you try em'")} aria-label="The Classics"> The Classics </button>
      <button type="button" on:click={() => updateCategory("Rise & Shine", "It's time to WAKE UP, never too late for breakfast or too early for brunch!")} aria-label="Rise & Shine"> Rise & Shine </button>
      <button type="button" on:click={() => updateCategory("H*t T*pic", "You like D&D, Audrey Hepburn, Fangoria, Harry Houdini, and croquet. You can't swim, you can't dance, and you don't know karate. Face it. You're never gonna make it.")} aria-label="H*t T*pic"> H*t T*pic </button>
    </ul>
  </div>
  
  <div class="productSpace ml3" >
    <h1 id="ProductCategory"> {catname}</h1>
    <p  id="ProductDescription"> {catdescription}</p>
    <div class="productcardHolder">
      {#each filteredProducts as product}
          <a href="/products?id={product.id}">
            <div class="productDisplay dark_bg">
              <img src={product.image} alt={product.product_name} />
              <div>
                <h2>{product.product_name}</h2>
                <p>{formatPrice(product.price)}</p>
              </div>
            </div>
          </a>
      {/each}
    </div>
  </div>
  
  <style>
    .productDisplay {
        box-shadow: 0px 4px 4px 0px rgba(59, 59, 59, 0.27), 0px 1px 4px 0px rgba(0, 0, 0, 0.39);
        border-radius: 0px 0px 20px 20px;
        display: grid;
        justify-items: center;
        margin: 1.5rem 0 ;
        text-align: center;
        transition: transform ease-in-out .3s;
        overflow: hidden;
        width: 268px;
    }
    .productDisplay div {
        padding: 1rem;
        width: 100%;
    }
    .productDisplay img {
        object-fit: cover;
        width: 150%;
        height: 180px;
    }
        .productDisplay:hover {
        box-shadow: 0px 4px 4px 0px rgba(59, 59, 59, 0.27), 0px 1px 4px 0px rgba(0, 0, 0, 0.39);
        cursor: pointer;
        transform: scale(1.05);
    }
    .productcardHolder {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
      }
  
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
          background-image: url($lib/assets/hero_banner.png) ;
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
      a {
          text-decoration: none;
      }
      @media (max-width: 1040px) {
        #MissWick {
          display: none;
      }
      #WickheadLogo {
          position: absolute;
          top: 150px;
          left: -200px;
          width: 800px;
          z-index: 5;
      }
      .productcardHolder {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
      }

      }
  </style>
  