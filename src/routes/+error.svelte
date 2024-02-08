<script>
    export let error;
</script>

<div>
    <h1>Something Smells Funny...</h1>
    <p>{error.message}</p>
</div>
<button> Clear the Air </button>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }
</style>
