<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import { _, locale, isLoading } from 'svelte-i18n';
	import '../lib/i18n';
	import Navbar from '../lib/components/Nav/Navbar.svelte'
	import Footer from '../lib/components/Footer/Footer.svelte'
	let { children } = $props();

</script>


<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $isLoading}
	<p>Loading translations...</p>
{:else}
	<p class="fixed text-right">DEV_BUILD: 2025-11-14</p>
	<Navbar />
	{@render children()}
	<Footer />
{/if}
