<script>
    export let data;
    console.log(data);
</script>
<ul>
    {#each data.productinfo as { product_name, slug, name }}
      <li>
        <a href="/products/{slug}">{product_name} {name} {slug} </a>
      </li>
    {/each}
  </ul>

  