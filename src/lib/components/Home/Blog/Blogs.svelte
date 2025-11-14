<script>
	import { _, locale } from 'svelte-i18n';
	import BlogCard from './BlogCard.svelte';
</script>

<div
	class="mx-3 mx-5 flex flex-col items-center justify-between gap-10 rounded-4xl bg-white px-4 py-3 [@media(min-width:640px)]:mx-5 [@media(min-width:640px)]:px-8 [@media(min-width:900px)]:px-15 [@media(min-width:900px)]:py-4"
	style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
>	
	<div class="text-center">
		<h2 class="nunito-extralight mt-10 text-3xl">BLOG</h2>
		<p>Olvass a VISALP-ról és a hozzá kapcsolódó témákról</p>
	</div>
	<!-- grid: 1 column on small/tablet, exactly 2 columns on desktop -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
		<div class="flex justify-center">
			<BlogCard
				title={$_('main_page.blogs.blog1.title')}
				description={$_('main_page.blogs.blog1.description')}
			/>
		</div>

		<div class="flex justify-center">
			<BlogCard
				title={$_('main_page.blogs.blog2.title')}
				description={$_('main_page.blogs.blog2.description')}
			/>
		</div>

		<div class="flex justify-center">
			<BlogCard
				title={$_('main_page.blogs.blog3.title')}
				description={$_('main_page.blogs.blog3.description')}
			/>
		</div>

		<div class="flex justify-center">
			<BlogCard
				title={$_('main_page.blogs.blog4.title')}
				description={$_('main_page.blogs.blog4.description')}
			/>
		</div>
	</div>
	<button
		class="m-5 w-auto rounded-full bg-neutral-200 px-12 py-2 text-neutral-600 hover:cursor-pointer hover:bg-neutral-300"
	>
		{$_('main_page.blogs.read_more')}
	</button>
</div>
