<script>
    import { _ } from 'svelte-i18n';
</script>

<section class="flex justify-center">
    <div class="inline-block  bg-neutral-100 border border-neutral-200 mx-4 mb-20 rounded-4xl p-6">
    <div class="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-[600px] mx-auto">
        <div class="text-center">
            <h3 class="text-2xl font-bold nunito-extralight">{$_('main_page.contact.title')}</h3>
            <p class="mt-3 text-sm max-w-xl">{$_('main_page.contact.subtitle')}</p>
        </div>
        <a href="/contact" class="inline-block rounded-full bg-neutral-600 text-white px-8 py-3 hover:bg-neutral-700">{$_('main_page.contact.contact_btn')}</a>
    </div>
    </div>
</section>
