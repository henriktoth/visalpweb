<script>
	import { _ } from 'svelte-i18n';
	import logo_textonly from '../../../assets/images/logo_textonly.svg';
	let { icon, background, title, description } = $props();
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
	<button
		disabled
		class="w-full rounded-full border border-neutral-400 px-12 py-2 text-neutral-400"
	>
		{$_('main_page.products.coming_soon')}
	</button>
</div>
