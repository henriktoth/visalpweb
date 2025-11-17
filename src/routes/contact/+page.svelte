<script>
    import email from '../../lib/assets/email.svg';
    import { blur } from 'svelte/transition';
    import { _ } from 'svelte-i18n';

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);
        const name = (formData.get('name') || '').toString().trim();
        const subject = (formData.get('subject') || '').toString().trim() || 'Általános megkeresés';
        const message = (formData.get('message') || '').toString().trim();

        const body = `Név: ${name}\n\n${message}`;
        const mailto =
            'mailto:visalpentertainment@gmail.com?subject=' +
            encodeURIComponent(subject) +
            '&body=' +
            encodeURIComponent(body);

        window.location.href = mailto;
    }
</script>

<svelte:head>
	<title>VISALP - {$_('nav.contact')}</title>
</svelte:head>

<div in:blur={{duration: 200}} out:blur={{duration: 200}} class="min-h-screen mt-20 mx-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12">
    <div class="w-full max-w-5xl bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
            <h1 class="text-3xl md:text-4xl font-bold mb-4">{$_('contact_page.title')}</h1>
            <p class="text-m text-gray-600 dark:text-gray-300 mb-6">{$_('contact_page.subtitle')}</p>

            <form on:submit={handleSubmit} class="space-y-4" novalidate>
                <div>
                    <label for="name" class="block text-sm font-medium mb-1">{$_('contact_page.name')}</label>
                    <input
                        id="name"
                        name="name"
                        required
                        class="w-full border rounded-3xl px-5 py-3 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="{$_('contact_page.name')}"
                    />
                </div>

                <div>
                    <label for="subject" class="block text-sm font-medium mb-1">{$_('contact_page.subject')}</label>
                    <input
                        id="subject"
                        name="subject"
                        class="w-full border rounded-3xl px-5 py-3 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="{$_('contact_page.subject')}"
                    />
                </div>

                <div>
                    <label for="message" class="block text-sm font-medium mb-1">{$_('contact_page.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        style="resize: none;"
                        rows="6"
                        class="w-full border rounded-3xl px-5 py-3 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="{$_('contact_page.message_placeholder')}"
                    ></textarea>
                </div>

                <div class="flex gap-3">
                    <button type="submit" class="bg-blue-400 text-white px-4 py-2 rounded-3xl hover:bg-blue-500 hover:cursor-pointer transition">{$_('contact_page.send_btn')}</button>
                    <button type="reset" class="border text-neutral-500 border-neutral-400 px-4 py-2 rounded-3xl hover:bg-gray-100 hover:cursor-pointer transition">{$_('contact_page.delete_btn')}</button>
                </div>
            </form>
        </div>

        <!-- Hidden on small screens, visible from md and up -->
        <div class="hidden md:flex items-center justify-center">
            <img src={email} alt="Email icon" class="w-64 h-64 object-contain" />
        </div>
    </div>
</div>
