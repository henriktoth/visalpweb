<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	import Switch from '$lib/components/util/Switch.svelte';
	import { slide, blur } from 'svelte/transition';
	import { _, locale, isLoading } from 'svelte-i18n';
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

{#if $isLoading}
	<p>Loading translations...</p>
{:else}
<header class="fixed top-0">
	<nav
	class="fixed z-50 inset-x-5 top-5 flex items-center justify-between rounded-full bg-white px-15 py-4"
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
					class="absolute top-20 right-29 flex flex-col gap-4 rounded-4xl bg-white px-5 py-5"
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
		class="fixed z-40 inset-x-5 top-23 flex-col items-center justify-between rounded-4xl bg-white px-15 py-4"
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

{@render children()}

<footer class="bg-neutral-700 text-white px-10 ">
	<div class="flex flex-col [@media(min-width:925px)]:flex-row items-center justify-around py-7 gap-0 [@media(min-width:925px)]:gap-15 ">
		<div class="flex flex-col font-extralight items-center gap-4 p-3 pb-15 [@media(min-width:925px)]:pb-0">
			<img src={logo} alt="Logo" class="w-50" style="filter: brightness(0) invert(1);" />
			<p>Email: visalpentertainment@gmail.com</p>
		</div>
		<div class="flex flex-col gap-10 [@media(min-width:650px)]:flex-row [@media(min-width:650px)]:gap-25">
			<div class="flex flex-col gap-2">
				<p class="font-bold">{$_('footer.platforms')}:</p>
				<a href="">YouTube</a>
				<a href="">TikTok</a>
				<a href="">AppStore</a>
				<a href="">Google Play</a>
			</div>
			<div class="flex flex-col gap-2">
				<p class="font-bold">{$_('footer.navigation')}:</p>
				<a href="">{$_('nav.home')}</a>
				<a href="">{$_('nav.apps')}</a>
				<a href="">{$_('nav.blog')}</a>
				<a href="">{$_('nav.contact')}</a>
			</div>
			<div class="flex flex-col gap-2">
				<p class="font-bold">{$_('footer.important_links')}:</p>
				<a href="">Link 1</a>
				<a href="">Link 2</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-center py-5">
		<hr class="my-3 w-100 border-neutral-500" />
		<p class="text-center">© {new Date().getFullYear()} VISALP. {$_('footer.copyright_text')}</p>
	</div>
</footer>
{/if}

<style>
	button.activeLanguage {
		font-weight: bold;
	}
</style>