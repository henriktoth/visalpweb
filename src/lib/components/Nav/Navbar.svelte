<script>
	import Switch from '$lib/components/util/Switch.svelte';
	import { slide, blur } from 'svelte/transition';
	import logo from '$lib/assets/logo.svg';
	import { _, locale } from 'svelte-i18n';

	let viewportWidth = $state(0);
	let darkMode = $state(false);
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

<header class="fixed top-0 right-0 left-0 z-50">
	<nav
		class="mx-5 mt-5 flex items-center justify-between rounded-full bg-white px-8 py-3 [@media(min-width:640px)]:mx-5 [@media(min-width:640px)]:mt-5"
		style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
	>
		<a href="/"><img src={logo} alt="Logo" class="w-24" /></a>
		{#if viewportWidth >= 900}
			<ul class="flex gap-15">
				<li><a class="navhover" href="/">{$_('nav.home')}</a></li>
				<li><a class="navhover" href="/apps">{$_('nav.apps')}</a></li>
				<li><a class="navhover" href="/blog">{$_('nav.blog')}</a></li>
				<li><a class="navhover" href="/contact">{$_('nav.contact')}</a></li>
			</ul>

			<div class="flex gap-4">
				<button
					class="hover:cursor-pointer"
					onclick={toggleLanguageMenu}
					aria-label="Toggle language menu"
					title="Language"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<path
								d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a9 9 0 0 1-.5 2.966m0-5.931h-17m0 0A9 9 0 0 0 3 12a9 9 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"
							/>
							<path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18" />
						</g>
					</svg>
				</button>
				<!-- <Switch bind:value={darkMode} design="slider" /> -->
			</div>
			{#if languageMenuOpen}
				<div
					transition:blur={{ duration: 200 }}
					class="absolute top-23 right-9 flex flex-col gap-4 rounded-4xl bg-white px-5 py-5"
					style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
				>
					<button
						class="hover:cursor-pointer"
						class:activeLanguage={$locale === 'hu'}
						onclick={() => {
							$locale = 'hu';
							languageMenuOpen = false;
						}}
					>
						HU
					</button>
					<button
						class="hover:cursor-pointer"
						class:activeLanguage={$locale === 'en'}
						onclick={() => {
							$locale = 'en';
							languageMenuOpen = false;
						}}
					>
						EN
					</button>
				</div>
			{/if}
		{:else}
			<button class="hover:cursor-pointer" onclick={toggleMobileMenu}>
				{#if !mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
						/>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
						/>
					</svg>
				{/if}
			</button>
		{/if}
	</nav>
	{#if mobileMenuOpen && viewportWidth < 900}
		<nav
			transition:slide
			class="mx-3 mt-5 flex-col items-center justify-between rounded-4xl bg-white px-4 py-4 [@media(min-width:640px)]:mx-5 [@media(min-width:640px)]:px-8"
			style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
		>
			<ul class="flex flex-col gap-4">
				<li>
					<a
						class="navhover"
						href="/"
						onclick={() => {
							mobileMenuOpen = false;
						}}
					>
						{$_('nav.home')}
					</a>
				</li>
				<li>
					<a
						class="navhover"
						href="/apps"
						onclick={() => {
							mobileMenuOpen = false;
						}}
					>
						{$_('nav.apps')}
					</a>
				</li>
				<li>
					<a
						class="navhover"
						href="/blog"
						onclick={() => {
							mobileMenuOpen = false;
						}}
					>
						{$_('nav.blog')}
					</a>
				</li>
				<li>
					<a
						class="navhover"
						href="/contact"
						onclick={() => {
							mobileMenuOpen = false;
						}}
					>
						{$_('nav.contact')}
					</a>
				</li>
			</ul>
			<hr class="my-4 border-gray-300" />
			<div class="flex flex-row-reverse gap-4 px-3">
				<!--<Switch bind:value={darkMode} design="slider" /> -->
				<button
					class="text-sm hover:cursor-pointer [@media(min-width:640px)]:text-base"
					class:activeLanguage={$locale === 'hu'}
					onclick={() => ($locale = 'hu')}
				>
					HU
				</button>
				<button
					class="text-sm hover:cursor-pointer [@media(min-width:640px)]:text-base"
					class:activeLanguage={$locale === 'en'}
					onclick={() => ($locale = 'en')}
				>
					EN
				</button>
			</div>
		</nav>
	{/if}
</header>

<style>
	button.activeLanguage {
		font-weight: bold;
	}
</style>
