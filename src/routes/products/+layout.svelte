<script>
    export let data;
    console.log(data); 
</script>
+ <aside>
    +   <h2>Teams list</h2>
    +   <ul>
    +     {#each data.productinfo as { slug, name }}
    +       <li>
    +         <a href="/products/{slug}">{name}</a>
    +       </li>
    +     {/each}
    +   </ul>
    + </aside>

    
  