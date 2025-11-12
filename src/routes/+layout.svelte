<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import Switch from '$lib/components/util/Switch.svelte';
	import { slide, blur } from 'svelte/transition';
	import { _, locale, isLoading } from 'svelte-i18n'; // Add isLoading
	import '../lib/i18n';
	let { children } = $props();

	let darkMode = $state(false);
	let viewportWidth = $state(0);
	let mobileMenuOpen = $state(false);
	let languageMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleLanguageMenu() {
		languageMenuOpen = !languageMenuOpen;
	}
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Wait for translations to load -->
{#if $isLoading}
	<p>Loading translations...</p>
{:else}
<header>
	<nav
		class="mx-10 mt-5 flex items-center justify-between rounded-full bg-white px-10 py-4"
		style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
	>
		<img src={logo} alt="Logo" class="w-24" />
		{#if viewportWidth >= 900}
			<ul class="flex gap-15">
				<li><a class="navhover" href="/">{$_('nav.home')}</a></li>
				<li><a class="navhover" href="/apps">{$_('nav.apps')}</a></li>
				<li><a class="navhover" href="/blog">{$_('nav.blog')}</a></li>
				<li><a class="navhover" href="/contact">{$_('nav.contact')}</a></li>
			</ul>

			<div class="flex gap-4">
				<button class="hover:cursor-pointer" onclick={toggleLanguageMenu} aria-label="Toggle language menu" title="Language">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
							<path d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a9 9 0 0 1-.5 2.966m0-5.931h-17m0 0A9 9 0 0 0 3 12a9 9 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"/>
							<path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18"/>
						</g>
					</svg>
				</button>
				<Switch bind:value={darkMode} design="slider" />
			</div>
			{#if languageMenuOpen}
				<div
					transition:blur={{ duration: 200 }}
					class="absolute top-23 right-34 flex flex-col gap-4 rounded-4xl bg-white px-5 py-5"
					style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
				>
					<button
						class="hover:cursor-pointer"
						class:activeLanguage={$locale === 'hu'}
						onclick={() => { $locale = 'hu'; languageMenuOpen = false; }}
					>
						HU
					</button>
					<button
						class="hover:cursor-pointer"
						class:activeLanguage={$locale === 'en'}
						onclick={() => { $locale = 'en'; languageMenuOpen = false; }}
					>
						EN
					</button>
				</div>
			{/if}
		{:else}
			<button class="hover:cursor-pointer" onclick={toggleMobileMenu}>
				{#if !mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/>
					</svg>
				{/if}
			</button>
		{/if}
	</nav>
	{#if mobileMenuOpen && viewportWidth < 900}
		<nav
			transition:slide
			class="mx-10 mt-2 mb-5 flex-col items-center justify-between rounded-4xl bg-white px-10 py-4"
			style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
		>
			<ul class="flex flex-col gap-4">
				<li>
					<a class="navhover" href="/" onclick={() => { mobileMenuOpen = false; }}>
						{$_('nav.home')}
					</a>
				</li>
				<li>
					<a class="navhover" href="/apps" onclick={() => { mobileMenuOpen = false; }}>
						{$_('nav.apps')}
					</a>
				</li>
				<li>
					<a class="navhover" href="/blog" onclick={() => { mobileMenuOpen = false; }}>
						{$_('nav.blog')}
					</a>
				</li>
				<li>
					<a class="navhover" href="/contact" onclick={() => { mobileMenuOpen = false; }}>
						{$_('nav.contact')}
					</a>
				</li>
			</ul>
			<hr class="my-4 border-gray-300" />
			<div class="flex flex-row-reverse gap-4 px-3">
				<Switch bind:value={darkMode} design="slider" />
				<button
					class="hover:cursor-pointer"
					class:activeLanguage={$locale === 'hu'}
					onclick={() => ($locale = 'hu')}
				>
					HU
				</button>
				<button
					class="hover:cursor-pointer"
					class:activeLanguage={$locale === 'en'}
					onclick={() => ($locale = 'en')}
				>
					EN
				</button>
			</div>
		</nav>
	{/if}
</header>

<div class="my-5">
	<p>viewport width: {viewportWidth} px</p>
	<p>mobile menu open: {mobileMenuOpen}</p>
	<p>language menu open: {languageMenuOpen}</p>
	<p>current language: {$locale}</p>
	<p>dark mode: {darkMode ? 'on' : 'off'}</p>
</div>

{@render children()}
{/if}

<style>
	button.activeLanguage {
		font-weight: bold;
	}
</style>