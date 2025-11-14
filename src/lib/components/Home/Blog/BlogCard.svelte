<script>
	import { _, locale } from 'svelte-i18n';
	let { icon, title, description } = $props();
	import blogPlaceholder from '../../../assets/blog_placeholder.png';
</script>

<div class="flex w-full max-w-[420px] flex-col gap-5 h-full">
	<div class="flex flex-col flex-1">
		<img src={blogPlaceholder} alt="" class="w-full h-48" />
		<h2 class="text-xl font-bold mt-5">{title}</h2>
		<p class="mt-2">{description}</p>
	</div>
	<button
		disabled
		class="mt-auto w-full rounded-full border border-neutral-400 px-12 py-2 text-neutral-400"
	>
		{$_('main_page.products.coming_soon')}
	</button>
</div>
