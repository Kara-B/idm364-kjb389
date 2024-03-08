<script>
  export let image;
  export let product_name;
  export let price;
  export let id;
</script>
<a href="/products{id}">
    <div class="productDisplay dark_bg">
    <img src={image} alt={product_name} >
    <div>
        <h5> {product_name} </h5>
        <p> {price}.00 </p>
    </div>
</div>
</a>

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
</style>