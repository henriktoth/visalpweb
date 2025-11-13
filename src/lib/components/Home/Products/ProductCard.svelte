<script>
	import { _, locale } from 'svelte-i18n';
	import logo_textonly from '../../../assets/logo_textonly.svg';
    import { fade } from 'svelte/transition';
	let { icon, title, description } = $props();
</script>

<div in:fade={{duration: 500}} class=" flex w-[280px] flex-col gap-5">
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
		class="w-full rounded-full border border-neutral-400 px-12 py-2 text-neutral-400 [@media(min-width:400px)]:w-auto"
	>
		{$_('products.coming_soon')}
	</button>
</div>
