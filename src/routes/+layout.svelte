<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.svg';
	
	let { children } = $props();
</script>


<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav class="flex items-center justify-between px-10 py-4 mx-10 my-5 border-2 rounded-full">
		<img src={logo} alt="Logo" class="w-24"/>
		<ul class="flex gap-15">
			<li><a href="/">Home</a></li>
			<li><a href="/apps">Apps</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<div class="flex gap-4">
			<button>LC</button>
			<button>DMC</button>
		</div>
	</nav>
</header>

{@render children()}
