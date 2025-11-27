<script>
	import { blur } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
	import ProductCard from '../../lib/components/Home/Products/ProductCard.svelte';
	import products from '../../lib/assets/data/products.json';
	import delcam from '../../lib/assets/images/delcam_logo.svg';
	import fileorganizer from '../../lib/assets/images/fileorganizer_logo.svg';
	import soulgarden from '../../lib/assets/images/soulgarden_logo.svg';

	const icons = {
		delcam,
		fileorganizer,
		soulgarden
	};

	let searchQuery = $state('');
	let sortOrder = $state('asc'); // 'asc', 'desc'

	function toggleSort() {
		if (sortOrder === 'asc') sortOrder = 'desc';
		else sortOrder = 'asc';
	}

	let filteredProducts = $derived(
		products
			.filter((product) => {
				const name = $_(product.name).toLowerCase();
				const description = $_(product.description_short).toLowerCase();
				const query = searchQuery.toLowerCase();
				return name.includes(query) || description.includes(query);
			})
			.sort((a, b) => {
				const nameA = $_(a.name).toLowerCase();
				const nameB = $_(b.name).toLowerCase();
				if (sortOrder === 'asc') return nameA.localeCompare(nameB);
				if (sortOrder === 'desc') return nameB.localeCompare(nameA);
				return 0;
			})
	);
</script>

<svelte:head>
	<title>VISALP - {$_('nav.apps')}</title>
</svelte:head>

<div
	in:blur={{ duration: 200 }}
	out:blur={{ duration: 200 }}
	class="min-h-screen bg-gray-50 px-4 pb-12 pt-30 sm:px-6 lg:px-8"
>
	<div class="mx-auto flex flex-col max-w-7xl">
		<h1 class="mb-10 text-center text-3xl font-light">{$_('nav.apps').toUpperCase()}</h1>

		<div class="mb-20 flex flex-col items-center justify-center gap-8 md:flex-row">
			<!-- Search -->
			<div class="relative w-full md:w-96">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						class="h-5 w-5 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					class="block w-full rounded-full border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 transition duration-150 ease-in-out focus:border-blue-300 focus:placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200 sm:text-sm"
					placeholder="Search apps"
				/>
			</div>

			<!-- Sort & Filter (Visual only for now) -->
			<div class="flex gap-6">
				<button
					onclick={toggleSort}
					class="flex items-center gap-2 font-medium text-gray-700 hover:cursor-pointer hover:text-gray-900"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"
						></line><line x1="21" y1="14" x2="3" y2="14"></line><line
							x1="21"
							y1="18"
							x2="3"
							y2="18"
						></line></svg
					>
					Sort
					{#if sortOrder === 'asc'}
						<span class="text-xs">▲</span>
					{:else}
						<span class="text-xs">▼</span>
					{/if}
				</button>
				<button
					class="flex items-center gap-2 font-medium text-gray-700 hover:cursor-pointer hover:text-gray-900"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"
						></line><line x1="12" y1="21" x2="12" y2="12"></line><line
							x1="12"
							y1="8"
							x2="12"
							y2="3"
						></line><line x1="20" y1="21" x2="20" y2="16"></line><line
							x1="20"
							y1="12"
							x2="20"
							y2="3"
						></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"
						></line><line x1="17" y1="16" x2="23" y2="16"></line></svg
					>
					Filter
				</button>
			</div>
		</div>

		<!-- Grid -->
		<div class="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProducts as product}
				<div
					class="rounded-3xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
				>
					<ProductCard
						icon={icons[product.icon]}
						title={$_(product.name)}
						description={$_(product.description_short)}
						platforms={product.platforms}
						showPlatforms={true}
					/>
				</div>
			{/each}
		</div>

		{#if filteredProducts.length === 0}
			<div class="py-20 text-center text-gray-500">
				No apps found matching "{searchQuery}"
			</div>
		{/if}

	</div>
</div>
