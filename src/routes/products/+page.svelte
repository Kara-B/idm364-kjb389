<script> 
    import HeaderTwo from "$lib/HeaderTwo.svelte";
    import ProductListing from "$lib/ProductListing.svelte";
    import { supabase } from '$lib/server/supabase_client.js';
    
  import { onMount } from 'svelte';
  
  export let id;
  
  let product = {};
  
  onMount(async () => {
    const { data, error } = await supabase
      .from('productinfo')
      .select('*')
      .eq('id', id)
      .single();

    if (data) {
      product = data;
    } else {
      console.error(error);
    }
  });
</script>
    
<!-- <HeaderTwo /> -->

<!-- <ProductListing /> -->
<div>
    <h1>{product.product_name}</h1>
    <!-- Show other details -->
  </div>

