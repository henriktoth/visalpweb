<script>
    import { _, locale } from 'svelte-i18n';
    import BlogCard from './BlogCard.svelte';
    import { onMount, onDestroy } from 'svelte';
    let currentSlide = 0;
    const totalSlides = 2; // 4 blogs / 2 per slide = 2 slides
    let autoplayInterval;

    // new flag: false by default
    let hasBlogs = false;
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    function goToSlide(index) {
        currentSlide = index;
        resetAutoplay();
    }
    
    function resetAutoplay() {
        if (!hasBlogs) return;
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
        startAutoplay();
    }
    
    function startAutoplay() {
        if (!hasBlogs) return;
        autoplayInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    onMount(() => {
        if (hasBlogs) startAutoplay();
    });
    
    onDestroy(() => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    });
</script>

<section
    class="mx-5 my-15 flex flex-col items-center justify-between gap-10 rounded-4xl bg-white px-4 py-3 [@media(min-width:640px)]:mx-5 [@media(min-width:640sm)]:px-8 [@media(min-width:900px)]:px-15 [@media(min-width:900px)]:py-4"
    style="box-shadow: 0 6px 10px -5px rgba(0,0,0,0.2);"
>   
    <div class="text-center">
        <h2 class="nunito-extralight mt-10 text-3xl">BLOG</h2>
        <p>Olvass a VISALP-ról és a hozzá kapcsolódó témákról</p>
    </div>

    {#if hasBlogs}
        <!-- Mobile view: only first 2 blog cards -->
        <div class="flex flex-col gap-10 lg:hidden w-full">
            <div class="flex justify-center">
                <BlogCard
                    title={$_('main_page.blogs.blog1.title')}
                    description={$_('main_page.blogs.blog1.description')}
                />
            </div>
            <div class="flex justify-center">
                <BlogCard
                    title={$_('main_page.blogs.blog2.title')}
                    description={$_('main_page.blogs.blog2.description')}
                />
            </div>
        </div>

        <!-- Desktop view: custom carousel -->
        <div class="hidden lg:block w-full relative">
            <!-- Carousel container -->
            <div class="overflow-hidden">
                <div 
                    class="flex transition-transform duration-500 ease-in-out"
                    style="transform: translateX(-{currentSlide * 100}%)"
                >
                    <!-- Slide 1 -->
                    <div class="min-w-full flex gap-10 px-2">
                        <div class="flex-1 flex justify-center">
                            <BlogCard
                                title={$_('main_page.blogs.blog1.title')}
                                description={$_('main_page.blogs.blog1.description')}
                            />
                        </div>
                        <div class="flex-1 flex justify-center">
                            <BlogCard
                                title={$_('main_page.blogs.blog2.title')}
                                description={$_('main_page.blogs.blog2.description')}
                            />
                        </div>
                    </div>
                    
                    <!-- Slide 2 -->
                    <div class="min-w-full flex gap-10 px-2">
                        <div class="flex-1 flex justify-center">
                            <BlogCard
                                title={$_('main_page.blogs.blog3.title')}
                                description={$_('main_page.blogs.blog3.description')}
                            />
                        </div>
                        <div class="flex-1 flex justify-center">
                            <BlogCard
                                title={$_('main_page.blogs.blog4.title')}
                                description={$_('main_page.blogs.blog4.description')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Navigation buttons -->
            <button
                on:click={() => { prevSlide(); resetAutoplay(); }}
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button
                on:click={() => { nextSlide(); resetAutoplay(); }}
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            
            <!-- Dots indicator -->
            <div class="flex justify-center gap-2 mt-6">
                {#each Array(totalSlides) as _, index}
                    <button
                        on:click={() => goToSlide(index)}
                        class="w-3 h-3 rounded-full transition-colors {currentSlide === index ? 'bg-neutral-600' : 'bg-neutral-300'}"
                        aria-label="Go to slide {index + 1}"
                    >
                    </button>
                {/each}
            </div>
        </div>

        <a href="/blog">
            <button
                class="m-5 w-auto rounded-full bg-neutral-200 px-12 py-2 text-neutral-600 hover:cursor-pointer hover:bg-neutral-300"
            >
                {$_('main_page.blogs.read_more')}
            </button>
        </a>
    {:else}
        <div class="w-full flex flex-col items-center justify-center pb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 24 24"><!-- Icon from Majesticons by Gerrit Halfmann - https://github.com/halfmage/majesticons/blob/main/LICENSE --><g fill="#777777"><path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 15.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 1 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"/></g></svg>
            <p class="text-neutral-500 text-2xl font-bold">No blogs yet.</p>
        </div>
    {/if}
</section>