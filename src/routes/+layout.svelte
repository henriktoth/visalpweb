<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import Switch from '$lib/components/util/Switch.svelte';
	import { slide } from 'svelte/transition';
	let { children } = $props();

	let sliderValue;

	$effect(() => {
		if (sliderValue) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav
		class="mx-10 my-5 flex items-center justify-between rounded-full bg-white px-10 py-4"
		style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
	>
		<img src={logo} alt="Logo" class="w-24" />
		<ul class="flex gap-15">
			<li><a class="navhover" href="/">FŐOLDAL</a></li>
			<li><a class="navhover" href="/apps">APPOK</a></li>
			<li><a class="navhover" href="/blog">BLOG</a></li>
			<li><a class="navhover" href="/contact">KAPCSOLAT</a></li>
		</ul>
		<div class="flex gap-4">
			<button class=" hover:cursor-pointer"
				><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><!-- Icon from Majesticons by Gerrit Halfmann - https://github.com/halfmage/majesticons/blob/main/LICENSE --><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						><path
							d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a9 9 0 0 1-.5 2.966m0-5.931h-17m0 0A9 9 0 0 0 3 12a9 9 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"
						/><path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18" /></g
					></svg
				></button
			>
			<Switch class="hover:cursor-pointer" bind:value={sliderValue} design="slider" />
		</div>
	</nav>
</header>

{@render children()}
