<script>
  import { _ } from 'svelte-i18n';
  import products from '$lib/assets/data/products.json';
  import filelogo from '$lib/assets/images/fileorganizer_logo.svg';
  import mac from '$lib/assets/images/mac_logo.svg';
  import windows from '$lib/assets/images/windos_logo.svg';
  import apple from '$lib/assets/images/apple_logo.svg';
  import linux from '$lib/assets/images/linux_logo.svg';
  import { base } from '$app/paths';

  const product = products.find((p) => p.id === 'fileorganizer');

  const platformIcons = {
    Windows: windows,
    Mac: mac,
    Linux: linux,
    iOS: apple,
    Android: null
  };

  const downloadLinks = {
    Windows: 'https://downloads.visalp.hu/FileOrganizer.exe',
    Mac: 'https://downloads.visalp.hu/FileOrganizer-Installer.dmg'
  };

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString();
  }
</script>

<svelte:head>
  <title>VISALP - {$_('nav.apps')} - {$_(product.name)}</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 pb-12 pt-28 sm:px-6 lg:px-8">
  <div class="mx-auto w-full max-w-6xl">
    <div class="mx-auto max-w-4xl text-center mb-16">
      <a href="{base}/apps" class="text-sm text-gray-500 hover:underline mb-8 inline-block">← {$_('nav.apps')}</a>
      
      <div class="flex justify-center mb-6">
        <img src={filelogo} alt="File Organizer Logo" class="h-24 w-24" />
      </div>

      <h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {@html $_('fileorganizer_page.hero_title')}
      </h1>
      <p class="mx-auto max-w-2xl text-xl text-gray-500 mb-10">
        {$_('fileorganizer_page.hero_subtitle')}
      </p>
      
      <div class="flex flex-col items-center justify-center gap-6">
        <div class="flex items-center gap-4 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span class="font-medium text-gray-900">v{product.version}</span>
            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{$_('fileorganizer_page.released')} {formatDate(product.release_date)}</span>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
            <!-- Mac Button -->
            <a href={downloadLinks.Mac} class="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-200 hover:-translate-y-0.5">
              <img src={mac} alt="Mac" class="w-6 h-6 brightness-0 invert" />
              <span>{$_('fileorganizer_page.download_mac')}</span>
            </a>
        </div>
        <p class="text-sm text-gray-400">{$_('fileorganizer_page.eula_text')} <a href="{base}/apps/fileorganizer/eula" class="underline hover:text-gray-600">{$_('fileorganizer_page.eula_link')}</a>.</p>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{$_('fileorganizer_page.feature_simple_title')}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
                {$_('fileorganizer_page.feature_simple_desc')}
            </p>
        </div>
        <div class="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <div class="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{$_('fileorganizer_page.feature_control_title')}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
                {$_('fileorganizer_page.feature_control_desc')}
            </p>
        </div>
    </div>

  </div>
</div>
