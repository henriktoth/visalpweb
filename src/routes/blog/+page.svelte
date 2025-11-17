<script>
	import { blur } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>VISALP - {$_('nav.blog')}</title>
</svelte:head>

<div
	in:blur={{ duration: 200 }}
	out:blur={{ duration: 200 }}
	style="min-height: 100vh"
	class="flex flex-col items-center justify-center gap-4"
>
	<svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 24 24"
		><!-- Icon from Majesticons by Gerrit Halfmann - https://github.com/halfmage/majesticons/blob/main/LICENSE --><g
			fill="currentColor"
			><path
				d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 15.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 1 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"
			/></g
		></svg
	>
	<h1 class="text-center text-4xl font-bold">{$_('blog_page.title')}</h1>
	<p>{$_('blog_page.subtitle')}</p>
</div>
