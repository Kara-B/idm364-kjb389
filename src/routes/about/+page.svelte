<script>
    import HeaderTwo from "$lib/HeaderTwo.svelte";
    import Icon from '@iconify/svelte';
</script>
<svelte:head> 
    <title> Wickhead | About Us </title>
</svelte:head>
<HeaderTwo />
<div class="m2 ml3 special_image_grid">
    <div class="two-col-spec">
        <h3> Weird- but it makes Scents</h3>
        <p> Since the dawn of wax, candles have always found their space. Whether its creating holiday aromas in your home, preparing for a romantic proposal, or as a last minute mother&#39;s day gifts, the variety of uses is endless...but what about making them just for fun? </p>
        <p> Our founder Randal Wickman built this company around the core concept of shits and giggles. These aren&#39;t your grandma&#39;s clean linen and cinnamon, our candles are about experimenting and delighting with something unique. We want to make you do a double take when you light our candles, maybe it takes a whiff or two before you come around to it. In the end, the goal is creating *new* experiences. We say out with the traditional, and in with the experimental! Let's fuck around, and find out 🔥 </p>
    </div>
    <div class="special_image">
        <img src="https://res.cloudinary.com/dsylo3btg/image/upload/v1710217493/candles/bw_candles_graphic_jxb4l9.png" alt="A graphic of a variety of candles."> 
    </div>
</div>

<h3 class="ml3 m2"> Our Candles Are: </h3>

<div class="three-col-cards">
    <div class="infoCard">
        <div class="primary_bg ">
            <Icon icon="fa-solid:leaf"  style="color: #282828 ; font-size: 55px" />
            <h2> Eco-Friendly & Sustainable </h2>
        </div>
        <p> Made with Soy Wax and Bio-degradable materials, WickHeads were made to be not just fun- but environmentally conscious </p>
    </div>
    <div class="infoCard">
        <div class="secondary_bg ">
            <Icon icon="mdi:flame"  style="color: #282828 ; font-size: 75px" />
            <h2> High Quality & Long-Burning </h2>
        </div>
        <p> Our high quality wicks guarantee at least 100 hours of burn time & strong scents that last from start to finish </p>
    </div>
    <div class="infoCard">
        <div class="dark_bg ">
            <Icon icon="mdi:charity"  style="color: #F9ECCF; font-size: 75px" />
            <h2> Charitable & Made With Love </h2>
        </div>
        <p> 25% of our proceeds go to one charitable cause chosen monthly by our fans w/ giveaways to those with proof of donation or participation </p>
    </div>
</div>

<div class="heyThere">
    <h3> Scrolled down this far? </h3>
    <p> Either something is very right, or very wrong. Contact us for more information on getting involved, suggestions, or to voice a concern. One way or another- we're listening. </p>
    <div> 
        <button class="ctaHover"> <Icon icon="bxs:phone"  style="font-size: 35px" /> 012-345-6789 </button>
        <button class="ctaHover"> <Icon icon="ic:round-email"  style="font-size: 35px" /> contact@wickhead.co </button>
    </div>
</div>

<div class="colorBlock">
</div>

<style>
    .infoCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        box-shadow: 0px 5px 2.4px 0px rgba(0, 0, 0, 0.07), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin: 1rem;
        width: 250px;
    }
    .infoCard div {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        gap: 10px;
        text-align: center;
        width: 100%;
    }
    .infoCard p {
        font-weight: 500;
        padding: 1rem;
        text-align: center;
    }
    .three-col-cards {
        display: flex;
        flex-wrap: wrap;
        justify-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .heyThere {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 3rem 0 auto;
    }
    .heyThere div {
        display: flex;
        gap: 2.5rem;
    }
    .heyThere p {
        text-align: center;
        max-width: 830px;
    }
    .colorBlock {
        background: linear-gradient(180deg, #F9ECCF 24.48%, #dec188 78.71%, #B8985A 98%);
        bottom: -700px;
        height: 450px;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
    .two-col-spec p {
        font-size: 26px;
        max-width: 68rem;
        margin: 1rem;
    }
    .special_image_grid {
        display: grid;
        grid-template-columns: 70% 30%;
        right: 20px;
        top: 230px;
        z-index: -1;
    }
    @media (max-width: 800px) {
        .special_image_grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .special_image_grid img {
            display: none;
        }
        .two-col-spec p {
            font-size: 20px;
            max-width: 100%;
        }
        .heyThere p {
            font-size: medium;
        }
        .heyThere div {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
    }
</style>
