<script context="module">
  import { status } from '@sveltejs/kit';
  import ErrorPage from '$lib/ErrorPage.svelte';
</script>

  <ErrorPage {status} />
