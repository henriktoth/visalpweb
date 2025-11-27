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

		const body = `${message}\n\n --${name}--`;
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

<div
	in:blur={{ duration: 200 }}
	out:blur={{ duration: 200 }}
	class="mx-5 mt-20 flex min-h-screen items-center justify-center bg-gray-50 py-12 dark:bg-gray-900"
>
	<div
		class="grid w-full max-w-5xl grid-cols-1 items-center rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2 dark:bg-gray-800"
	>
		<div>
			<h1 class="mb-4 text-3xl font-bold md:text-4xl">{$_('contact_page.title')}</h1>
			<p class="text-m mb-6 text-gray-600 dark:text-gray-300">{$_('contact_page.subtitle')}</p>

			<form on:submit={handleSubmit} class="space-y-4" novalidate>
				<div>
					<label for="name" class="mb-1 block text-sm font-medium">{$_('contact_page.name')}</label>
					<input
						id="name"
						name="name"
						required
						class="w-full rounded-3xl border border-gray-200 bg-white px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-700"
						placeholder={$_('contact_page.name')}
					/>
				</div>

				<div>
					<label for="subject" class="mb-1 block text-sm font-medium"
						>{$_('contact_page.subject')}</label
					>
					<input
						id="subject"
						name="subject"
						class="w-full rounded-3xl border border-gray-200 bg-white px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-700"
						placeholder={$_('contact_page.subject')}
					/>
				</div>

				<div>
					<label for="message" class="mb-1 block text-sm font-medium"
						>{$_('contact_page.message')}</label
					>
					<textarea
						id="message"
						name="message"
						required
						style="resize: none;"
						rows="6"
						class="w-full rounded-3xl border border-gray-200 bg-white px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-700"
						placeholder={$_('contact_page.message_placeholder')}
					></textarea>
				</div>

				<div class="flex gap-3">
					<button
						type="submit"
						class="rounded-3xl bg-blue-400 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-blue-500"
						>{$_('contact_page.send_btn')}</button
					>
					<button
						type="reset"
						class="rounded-3xl border border-neutral-400 px-4 py-2 text-neutral-500 transition hover:cursor-pointer hover:bg-gray-100"
						>{$_('contact_page.delete_btn')}</button
					>
				</div>
			</form>
		</div>

		<!-- Hidden on small screens, visible from md and up -->
		<div class="hidden items-center justify-center md:flex">
			<img src={email} alt="Email icon" class="h-64 w-64 object-contain" />
		</div>
	</div>
</div>
