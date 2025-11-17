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
	<div class="min-h-screen flex items-center justify-center">
		<p class="text-center">Loading...</p>
	</div>
{:else}
	<Navbar />
	{@render children()}
	<Footer />
{/if}
