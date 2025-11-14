<script>
	import { _, locale } from 'svelte-i18n';
	import logo_textonly from '../../../assets/logo_textonly.svg';
	let { icon, title, description } = $props();
</script>

<div class=" flex w-[280px] flex-col gap-5 [@media(min-width:1040px)]:w-[280px] @media(min-width:720px)]:w-[380px]">
	<div class="flex items-center">
		<div class="w-10 rounded-4xl p-10 {icon}"></div>
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
