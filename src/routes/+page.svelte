<script>
	import Main from '../lib/components/Home/Main/Main.svelte';
	import Products from '../lib/components/Home/Products/Products.svelte';
	import Goals from '../lib/components/Home/Goals/Goals.svelte';
	import Blogs from '../lib/components/Home/Blog/Blogs.svelte';
	import { blur } from 'svelte/transition';
</script>
<main in:blur={{duration:200}} out:blur={{duration:200}} class="flex flex-col gap-20">
	<Main />
	<Products />
	<Goals />
	<Blogs />
</main>