<script>
    import HeaderTwo from "$lib/HeaderTwo.svelte";
    import Icon from '@iconify/svelte';
</script>
<HeaderTwo />
<h3> Weird- but it makes Scents</h3>
<p>Since the dawn of wax, candles have always found their space. Whether its creating holiday aromas in your home, preparing for a romantic proposal, or even as a last minute mother’s day gifts, the variety of uses is endless...but what about making candles purely for fun? </p>
<p> Our founder Randal Wickman built this company around the core concept of candles meant for lighthearted fun. These aren’t your grandma’s clean linen or cinnamon, our candles are about experimenting and delighting with something unique. We want to make you do a double take when you light our candles, maybe it takes a whiff or two before you come around to it. In the end, you should experience something *new*. Out with the traditional, and in with the experimental, its the only way we can create new art 🔥 </p>

<h3> Our Candles Are: </h3>

<div class="three-col-cards">
    <div class="infoCard">
        <div class="primary_bg ">
            <Icon icon="fa-solid:leaf"  style="color: #282828 ; font-size: 75px" />
            <h1> Eco-Friendly & Sustainable </h1>
        </div>
        <p> Made with Soy Wax and Bio-degradable materials, WickHeads were made to be not just fun- but environmentally concsious </p>
    </div>
    <div class="infoCard">
        <div class="secondary_bg ">
            <Icon icon="mdi:flame"  style="color: #282828 ; font-size: 75px" />
            <h1> High Quality & Long-Burning </h1>
        </div>
        <p> Made with Soy Wax and Bio-degradable materials, WickHeads were made to be not just fun- but environmentally concsious </p>
    </div>
    <div class="infoCard">
        <div class="dark_bg ">
            <Icon icon="mdi:charity"  style="color: #F9ECCF; font-size: 75px" />
            <h1> Charitable & Made With Love </h1>
        </div>
        <p> Made with Soy Wax and Bio-degradable materials, WickHeads were made to be not just fun- but environmentally concsious </p>
    </div>
</div>


<style>
    .infoCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        box-shadow: 0px 5px 2.4px 0px rgba(0, 0, 0, 0.07), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        width: 307px;
    }
    .infoCard div {
        display: flex;
        /* flex-direction: column; */
        padding: 1rem;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
    .infoCard p {
        font-weight: 500;
    }
    .three-col-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        width: 100%;
    }

</style>
