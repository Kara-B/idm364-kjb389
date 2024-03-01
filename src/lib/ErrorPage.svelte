<script>
    export let status;
</script>
<div>
    <h1> {status} </h1>
    <h1 >Something Smells Funny... </h1>
    <p> Looks like that page couldn’t be found, let’s clear the air? </p>
    <button> View Our Candles </button>
</div>
 
  <style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 1rem;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }
</style>
