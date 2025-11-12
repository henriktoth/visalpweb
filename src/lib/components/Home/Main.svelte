<script>
    import { _, locale, isLoading } from 'svelte-i18n';
    import {blur, fly} from 'svelte/transition';
    import phone from '../../assets/phone.png';
</script>
<main class="flex flex-row min-h-[500px] items-center justify-center mt-30 mb-10 mx-10 [@media(min-width:960px)]:justify-around z-0">
    <div class="" in:fly={{ x: -200, duration: 1000 }}>
        <div class="flex flex-col gap-5 [@media(min-width:960px)]:text-left text-center">
            <h1 class="text-[44px] [@media(min-width:450px)]:text-[64px] nunito-black">{$_('main.msg')}</h1>
            <p class="text-md [@media(min-width:450px)]:text-xl max-w-150">{$_('main.submsg')}</p>
        </div>
        <div class="flex mt-10 gap-2 [@media(min-width:960px)]:justify-start [@media(min-width:450px)]:gap-7 justify-center">
            <button class="rounded-full font-bold text-lg w-50% bg-white px-20 py-4 hover:transition-transform hover:translate-y-1 hover:cursor-pointer"
		        style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);">
                {$_('main.download_btn')}
            </button>
            <button class="rounded-full bg-white p-4 hover:transition-transform hover:translate-y-1 hover:cursor-pointer"
		        style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
            </button>
        </div>
    </div>
    <div class="hidden [@media(min-width:960px)]:block">
        <img src={phone} alt="Iphone showcasing decrease in screen time" class="w-80" in:fly={{ x: 200, duration: 1000 }} />
    </div>
</main>

<style>
    button:hover {
        box-shadow: 0 6px 10px -5px rgba(0,0,0,0.1) !important;
    }
</style>