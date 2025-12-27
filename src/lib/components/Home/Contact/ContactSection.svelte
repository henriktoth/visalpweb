<script>
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
</script>

<section class="flex justify-center">
	<div class="mx-4 mb-20 inline-block rounded-4xl border border-neutral-200 bg-neutral-100 p-6">
		<div class="mx-auto flex max-w-[600px] flex-col items-center justify-center gap-8 sm:flex-row">
			<div class="text-center">
				<h3 class="nunito-extralight text-2xl font-bold">{$_('home.contact.title')}</h3>
				<p class="mt-3 max-w-xl text-sm">{$_('home.contact.subtitle')}</p>
			</div>
			<a
				href={`${base}/contact`}
				class="inline-block rounded-full bg-neutral-600 px-8 py-3 text-white hover:bg-neutral-700"
				>{$_('home.contact.contact_btn')}</a
			>
		</div>
	</div>
</section>
