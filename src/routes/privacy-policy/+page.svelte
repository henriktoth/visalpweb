<script>
	import { blur } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>VISALP - {$_('privacy_policy.title')}</title>
</svelte:head>

<div
	in:blur={{ duration: 200 }}
	out:blur={{ duration: 200 }}
	class="mx-auto max-w-4xl px-4 pt-32 pb-12"
>
	<h1 class="mb-4 text-4xl font-bold">{$_('privacy_policy.title')}</h1>
	<p class="mb-8 text-gray-600">{$_('privacy_policy.last_updated')}</p>

	<div class="space-y-6 text-lg leading-relaxed">
		<p>
			{@html $_('privacy_policy.intro')}
		</p>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.1.title')}</h2>
			<p>
				{$_('privacy_policy.sections.1.content')}
			</p>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.2.title')}</h2>

			<h3 class="mb-2 text-xl font-medium">
				{$_('privacy_policy.sections.2.subsection_a.title')}
			</h3>
			<p>{$_('privacy_policy.sections.2.subsection_a.content')}</p>
			<ul class="ml-6 list-disc space-y-2">
				<li>
					{@html $_('privacy_policy.sections.2.subsection_a.list.log_data')}
				</li>
				<li>
					{@html $_('privacy_policy.sections.2.subsection_a.list.cookies')}
				</li>
				<li>
					{@html $_('privacy_policy.sections.2.subsection_a.list.communication')}
				</li>
			</ul>

			<h3 class="mt-4 mb-2 text-xl font-medium">
				{$_('privacy_policy.sections.2.subsection_b.title')}
			</h3>
			<p>
				{$_('privacy_policy.sections.2.subsection_b.content')}
			</p>
			<ul class="ml-6 list-disc space-y-2">
				<li>
					{@html $_('privacy_policy.sections.2.subsection_b.list.local_processing')}
				</li>
			</ul>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.3.title')}</h2>
			<p>{$_('privacy_policy.sections.3.content')}</p>
			<ul class="ml-6 list-disc space-y-2">
				<li>{$_('privacy_policy.sections.3.list.1')}</li>
				<li>{$_('privacy_policy.sections.3.list.2')}</li>
				<li>{$_('privacy_policy.sections.3.list.3')}</li>
				<li>{$_('privacy_policy.sections.3.list.4')}</li>
			</ul>
			<p class="mt-2">
				{$_('privacy_policy.sections.3.footer')}
			</p>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.4.title')}</h2>
			<p>
				{$_('privacy_policy.sections.4.content')}
			</p>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.5.title')}</h2>
			<p>
				{$_('privacy_policy.sections.5.content')}
			</p>
			<ul class="ml-6 list-disc space-y-2">
				<li>
					{@html $_('privacy_policy.sections.5.list.payment')}
				</li>
				<li>
					{@html $_('privacy_policy.sections.5.list.analytics')}
				</li>
			</ul>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.6.title')}</h2>
			<p>
				{$_('privacy_policy.sections.6.content')}
			</p>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.7.title')}</h2>
			<p>
				{$_('privacy_policy.sections.7.content')}
			</p>
		</section>

		<section>
			<h2 class="mb-3 text-2xl font-semibold">{$_('privacy_policy.sections.8.title')}</h2>
			<p>{$_('privacy_policy.sections.8.content')}</p>
			<ul class="ml-6 list-disc space-y-2">
				<li>{$_('privacy_policy.sections.8.list.email')}</li>
				<li>
					{@html $_('privacy_policy.sections.8.list.page')}
				</li>
			</ul>
		</section>
	</div>
</div>
