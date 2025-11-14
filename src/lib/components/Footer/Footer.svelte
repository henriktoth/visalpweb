<script>
    import logo from '$lib/assets/logo.svg';
    import { _ } from 'svelte-i18n';
</script>
<footer
		class="bg-neutral-700 px-4 text-white [@media(min-width:640px)]:px-8 [@media(min-width:900px)]:px-10"
	>
		<div
			class="flex flex-col items-center justify-around gap-8 py-7 [@media(min-width:925px)]:flex-row [@media(min-width:925px)]:gap-15"
		>
			<div
				class="flex flex-col items-center gap-4 p-3 pb-8 font-extralight [@media(min-width:925px)]:pb-0"
			>
				<img
					src={logo}
					alt="Logo"
					class="w-32 [@media(min-width:640px)]:w-40 [@media(min-width:925px)]:w-50"
					style="filter: brightness(0) invert(1);"
				/>
				<p class="text-center text-xs break-all [@media(min-width:640px)]:text-sm">
					Email: visalpentertainment@gmail.com
				</p>
			</div>
			<div
				class="flex w-full flex-col gap-8 [@media(min-width:650px)]:w-auto [@media(min-width:650px)]:flex-row [@media(min-width:650px)]:gap-15 [@media(min-width:925px)]:gap-25"
			>
				<div class="flex flex-col gap-2 text-center [@media(min-width:650px)]:text-left">
					<p class="text-sm font-bold [@media(min-width:640px)]:text-base">
						{$_('footer.platforms')}:
					</p>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">YouTube</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">TikTok</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">AppStore</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">Google Play</a>
				</div>
				<div class="flex flex-col gap-2 text-center [@media(min-width:650px)]:text-left">
					<p class="text-sm font-bold [@media(min-width:640px)]:text-base">
						{$_('footer.navigation')}:
					</p>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">{$_('nav.home')}</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">{$_('nav.apps')}</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">{$_('nav.blog')}</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">{$_('nav.contact')}</a>
				</div>
				<div class="flex flex-col gap-2 text-center [@media(min-width:650px)]:text-left">
					<p class="text-sm font-bold [@media(min-width:640px)]:text-base">
						{$_('footer.important_links')}:
					</p>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">Link 1</a>
					<a href="" class="text-xs [@media(min-width:640px)]:text-sm">Link 2</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center py-5">
			<hr class="my-3 w-full max-w-100 border-neutral-500" />
			<p class="px-2 text-center text-xs [@media(min-width:640px)]:text-sm">
				© {new Date().getFullYear()} VISALP. {$_('footer.copyright_text')}
			</p>
		</div>
	</footer>