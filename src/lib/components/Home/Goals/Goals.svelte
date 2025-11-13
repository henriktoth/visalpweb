<script>
    import GoalsCard from './GoalsCard.svelte';
    import emoji1 from '../../../assets/emoji1.png';
    import emoji2 from '../../../assets/emoji2.png';
    import emoji3 from '../../../assets/emoji3.png';
    import {_, locale} from 'svelte-i18n';
</script>
<section class="container mx-auto px-4 my-10">
    <div class="mb-6"></div>

    <div class="flex flex-col items-center text-center">
        <h2 class="text-2xl md:text-3xl nunito-extralight">{$_('goals.title')}</h2>
        <p class="text-[28px] md:text-[42px] font-600">{$_('goals.subtitle')}</p>
        <hr class="my-3 w-full max-w-200 border-neutral-300">
        <p class="max-w-3xl">{$_('goals.description')}</p>
    </div>

    <!-- stacked on small screens, single-row (no wrap) on md+ -->
    <div class="mt-6 flex flex-col md:flex-row md:justify-center gap-6">
        <div class="w-full md:w-1/3 flex justify-center">
            <GoalsCard
                icon={emoji1}
                title={$_('goals.goal1.title')}
                description={$_('goals.goal1.description')}
            />
        </div>

        <div class="w-full md:w-1/3 flex justify-center">
            <GoalsCard
                icon={emoji2}
                title={$_('goals.goal2.title')}
                description={$_('goals.goal2.description')}
            />
        </div>

        <div class="w-full md:w-1/3 flex justify-center">
            <GoalsCard
                icon={emoji3}
                title={$_('goals.goal3.title')}
                description={$_('goals.goal3.description')}
            />
        </div>
    </div>
</section>