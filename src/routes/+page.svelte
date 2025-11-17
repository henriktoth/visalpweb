<script>
	import Main from '../lib/components/Home/Main/Main.svelte';
	import ProductSection from '../lib/components/Home/Products/ProductSection.svelte';
	import GoalSection from '../lib/components/Home/Goals/GoalSection.svelte';
	import BlogSection from '../lib/components/Home/Blog/BlogSection.svelte';
	import ContactSection from '../lib/components/Home/Contact/ContactSection.svelte';
	import { blur } from 'svelte/transition';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>VISALP - {$_('nav.home')}</title>
	<meta name="description" content="Welcome to MyApp, your productivity companion." />
</svelte:head>
<main in:blur={{ duration: 200 }} out:blur={{ duration: 200 }} class="flex flex-col gap-20">
	<Main />
	<ProductSection />
	<GoalSection />
	<BlogSection />
	<ContactSection />
</main>
