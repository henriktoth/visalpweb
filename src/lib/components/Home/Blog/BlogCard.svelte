<script>
	import { _ } from 'svelte-i18n';
	let { title, description } = $props();
	import blogPlaceholder from '../../../assets/images/blog_placeholder.png';
</script>

<div class="flex h-full w-full max-w-[420px] flex-col gap-5">
	<div class="flex flex-1 flex-col">
		<img src={blogPlaceholder} alt="" class="h-48 w-full" />
		<h2 class="mt-5 text-xl font-bold">{title}</h2>
		<p class="mt-2">{description}</p>
	</div>
	<button
		disabled
		class="mt-auto w-full rounded-full border border-neutral-400 px-12 py-2 text-neutral-400"
	>
		{$_('main_page.products.coming_soon')}
	</button>
</div>
