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

<div class="min-h-screen bg-gray-50 px-4 pb-12 sm:px-6 lg:px-8 flex items-center justify-center">
  <div class="w-full max-w-4xl px-4">
    <div class="mx-auto max-w-3xl">
      <a href="{base}/apps" class="text-sm text-gray-500 hover:underline mb-4 inline-block">← {$_('nav.apps')}</a>
    </div>

    <div class="mx-auto max-w-3xl rounded-4xl bg-white p-8 shadow-md">
      <div class="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div class="flex h-28 w-28 items-center justify-center rounded-2xl p-4">
          <img src={filelogo} alt={$_(product.name)} class="h-20 w-20" />
        </div>

        <div class="flex flex-1 flex-col items-center md:items-start">
          <h1 class="text-2xl font-bold">{$_(product.name)}</h1>
          <p class="mt-2 text-sm text-gray-500">{formatDate(product.release_date)}</p>
          <p class="mt-4 text-gray-700">{$_(product.description_long)}</p>

          <div class="mt-6 flex w-full flex-col items-center gap-4 md:items-start">
            <div class="flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2">
              <p class="text-xs text-gray-500">{$_('main_page.products.available_on')}</p>
              {#each product.platforms as platform}
                {#if platformIcons[platform]}
                  <img src={platformIcons[platform]} alt={platform} class="h-6 w-6" />
                {:else}
                  <span class="text-xs text-gray-600">{platform}</span>
                {/if}
              {/each}
            </div>

            <div class="flex flex-wrap gap-3">
              {#each product.platforms as platform}
              <a href={downloadLinks[platform] || '#'} target="_blank">  
              <button
                  class="group relative flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 overflow-hidden hover:cursor-pointer hover:bg-black hover:border-black"
                >
                  <div class="flex items-center gap-2 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                    {#if platformIcons[platform]}
                      <img src={platformIcons[platform]} alt={platform} class="h-4 w-4" />
                    {/if}
                    <span>{platform}</span>
                  </div>
                  
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                  </div>
                </button>
              </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
