<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>VISALP - {$_('apps.fileorganizer.eula.title')}</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 pb-12 pt-32 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
		<h1 class="mb-1 text-3xl font-bold text-gray-900">{$_('apps.fileorganizer.eula.title')}</h1>
		<p class="mb-4 text-lg text-gray-600">{$_('apps.fileorganizer.eula.for_app')}</p>
		<p class="mb-8 text-sm text-gray-500">{$_('apps.fileorganizer.eula.last_updated')}</p>

		<div class="space-y-6 text-gray-700">
			<p class="whitespace-pre-wrap">{$_('apps.fileorganizer.eula.intro')}</p>

			{#each $_('apps.fileorganizer.eula.sections') as section}
				<div>
					<h2 class="mb-2 text-lg font-bold text-gray-900">{section.title}</h2>
					<p class="whitespace-pre-wrap">{section.content}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
