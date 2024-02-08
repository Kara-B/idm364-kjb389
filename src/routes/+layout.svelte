<svelte:head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500;600;800&display=swap" rel="stylesheet">
    <title> Title Test </title>
</svelte:head>
<script>
    import '/src/style.css';
	import Header from '$lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>
<Header />

<slot></slot>

<Footer />