<script>
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import ProductCard from './ProductCard.svelte';
	import delcam from '../../../assets/images/delcam_logo.svg';
	import fileorganizer from '../../../assets/images/fileorganizer_logo.svg';
	import soulgarden from '../../../assets/images/soulgarden_logo.svg';
	import products from '../../../assets/data/products.json';

	const icons = {
		delcam,
		fileorganizer,
		soulgarden
	};
</script>

<section
	class="mx-3 mx-5 flex flex-col items-center justify-between gap-10 rounded-4xl bg-white px-4 py-3 [@media(min-width:640px)]:mx-5 [@media(min-width:640px)]:px-8 [@media(min-width:900px)]:px-15 [@media(min-width:900px)]:py-4"
	style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
>
	<h2 class="nunito-extralight mt-10 text-3xl">{$_('main_page.products.title')}</h2>
	<div class="flex flex-col justify-center gap-20 [@media(min-width:1040px)]:flex-row">
		{#each products as product}
				<ProductCard
					icon={icons[product.icon]}
					title={$_(product.name)}
					description={$_(product.description_short)}
					platforms={product.platforms}
					id={product.id}
					state={product.state}
				/>
		{/each}
	</div>
	<a href={`${base}/apps`}>
		<button
			class="m-5 w-auto rounded-full bg-neutral-200 px-12 py-2 text-neutral-600 hover:cursor-pointer hover:bg-neutral-300"
		>
			{$_('main_page.products.more_apps')}
		</button>
	</a>
</section>
