<script>
	import { _ } from 'svelte-i18n';
	import logo_textonly from '../../../assets/images/logo_textonly.svg';
	import windows from '../../../assets/images/windos_logo.svg';
	import apple from '../../../assets/images/apple_logo.svg';
	import mac from '../../../assets/images/mac_logo.svg';
	import linux from '../../../assets/images/linux_logo.svg';

	let { icon, background, title, description, platforms = [], showPlatforms = false, id, state = 'indev' } = $props();

	const platformIcons = {
		Windows: windows,
		Mac: mac,
		Linux: linux,
		iOS: apple,
		Android: null
	};
</script>

<div
	class=" @media(min-width:720px)]:w-[380px] flex w-[280px] flex-col gap-5 [@media(min-width:1040px)]:w-[280px]"
>
	<div class="flex items-center">
		<div class="flex h-20 w-20 items-center justify-center rounded-2xl p-2 {background}">
			<img class="w-15" src={icon} alt={title} />
		</div>
		<div class="mx-5 flex flex-col items-end">
			<p class="text-[25px] font-bold">{title}</p>
			<img class="w-12" src={logo_textonly} alt="Visalp logo" />
		</div>
	</div>
	<p>{description}</p>
	{#if showPlatforms}
		<div class="mt-auto flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2">
			<p class="text-xs text-gray-500">{$_('main_page.products.available_on')}</p>
			{#each platforms as platform}
				{#if platformIcons[platform]}
					<img src={platformIcons[platform]} alt={platform} class="h-5 w-5" />
				{/if}
			{/each}
		</div>
	{/if}
	{#if state === 'released'}
		<a
			href={`/apps/${id}`}
			class="w-full inline-block text-center rounded-full border border-neutral-400 px-12 py-2 text-neutral-700 hover:bg-neutral-100"
		>
			{$_('main_page.products.try_now')}
		</a>
	{:else}
		<button
			disabled
			class="w-full rounded-full border border-neutral-400 px-12 py-2 text-neutral-400"
		>
			{$_('main_page.products.coming_soon')}
		</button>
	{/if}
</div>
