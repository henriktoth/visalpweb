<script>
	import { _, locale } from 'svelte-i18n';
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { animateTyping } from '../../../actions/actions.js';
	import mainArt from '../../../assets/images/main.png';
</script>

<section
	class="z-0 mx-4 mt-30 flex min-h-[500px] flex-col items-center justify-center [@media(min-width:960px)]:mx-10 [@media(min-width:960px)]:flex-row [@media(min-width:960px)]:justify-around"
>
	<div class="" in:fly={{ x: -200, duration: 1000 }}>
		<div class="flex flex-col gap-5 text-center [@media(min-width:960px)]:text-left">
			{#if $locale === 'en-GB' || $locale === 'en'}
				<h1
					class="nunito-black text-[35px] leading-tight [@media(min-width:450px)]:text-[45px] [@media(min-width:640px)]:text-[60px]"
				>
					{$_('home.main.msg')}
					<span class="inline-block" use:animateTyping={['PRODUCTIVE.', 'EFFECTIVE.', 'MINDFUL.']}
					></span>
				</h1>
			{:else if $locale === 'hu' || $locale === 'hu-HU'}
				<h1
					class="nunito-black text-[35px] leading-tight [@media(min-width:450px)]:text-[45px] [@media(min-width:640px)]:text-[60px]"
				>
					{$_('home.main.msg')}
					<span use:animateTyping={['PRODUKTÍV!', 'HATÉKONY!', 'TUDATOS!']}></span>
				</h1>
			{/if}
			<p
				class="[@media(min-width:450px)]:text-md max-w-150 text-sm [@media(min-width:640px)]:text-xl"
			>
				{$_('home.main.submsg')}
			</p>
		</div>
		<div
			class="mt-10 flex flex-col items-center justify-center gap-3 [@media(min-width:400px)]:flex-row [@media(min-width:450px)]:gap-7 [@media(min-width:960px)]:justify-start"
		>
			<a href={`${base}/apps`}>
				<button
					class="w-full rounded-full bg-white px-6 py-4 text-base font-bold hover:translate-y-1 hover:cursor-pointer hover:transition-transform [@media(min-width:400px)]:w-auto [@media(min-width:400px)]:px-12 [@media(min-width:640px)]:px-20 [@media(min-width:640px)]:text-lg"
					style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
				>
					{$_('home.main.download_btn')}
				</button>
			</a>
			<a href={`${base}/contact`}>
				<button
					class="mx-auto rounded-full bg-white p-4 hover:translate-y-1 hover:cursor-pointer hover:transition-transform [@media(min-width:400px)]:mx-0"
					style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
							fill="currentColor"
							d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
						/></svg
					>
				</button>
			</a>
		</div>
	</div>
	<div
		class="mt-8 flex w-full justify-center [@media(min-width:960px)]:mt-0 [@media(min-width:960px)]:w-auto"
	>
		<img
			src={mainArt}
			alt="Alpaca sitting in a meditating position"
			class="h-[50vh] w-full object-contain [@media(min-width:960px)]:h-auto [@media(min-width:960px)]:w-130"
			in:fly={{ x: 200, duration: 1000 }}
		/>
	</div>
</section>

<style>
	button:hover {
		box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.1) !important;
	}
</style>
