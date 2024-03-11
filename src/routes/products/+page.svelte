<script> 
  import HeaderTwo from "$lib/HeaderTwo.svelte";
  // import ProductListing from "$lib/ProductListing.svelte";
  import { onMount } from 'svelte';

let product = {};
onMount(async (params) => {
  const {id} = params;
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
  
<HeaderTwo />

<!-- <ProductListing /> -->
<div>
  <h1>{product.product_name}</h1>
  <!-- Show other details -->
</div>