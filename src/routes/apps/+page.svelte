<script>
	import { blur } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>VISALP - {$_('nav.apps')}</title>
</svelte:head>

<div
	in:blur={{ duration: 200 }}
	out:blur={{ duration: 200 }}
	style="min-height: 100vh"
	class="flex flex-col items-center justify-center gap-4"
>
<h1>Test text</h1>
</div>
