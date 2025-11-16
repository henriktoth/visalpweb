<script>
	import GoalsCard from './GoalsCard.svelte';
	import goals_icon1 from '../../../assets/goal_logo_1.svg';
	import goals_icon2 from '../../../assets/goal_logo_2.svg';
	import goals_icon3 from '../../../assets/goal_logo_3.svg';
	import { _, locale } from 'svelte-i18n';
</script>

<section class="container mx-auto px-4">
	<div class="flex flex-col items-center text-center">
		<h2 class="nunito-extralight text-2xl md:text-3xl">{$_('main_page.goals.title')}</h2>
		<p class="font-600 text-[28px] md:text-[42px]">{$_('main_page.goals.subtitle')}</p>
		<hr class="my-3 w-full max-w-200 border-neutral-300" />
		<p class="max-w-3xl">{$_('main_page.goals.description')}</p>
	</div>

	<!-- stacked on small screens, single-row (no wrap) on md+ -->
	<div class="mt-6 flex flex-col gap-15 md:flex-row md:justify-center items-center md:items-stretch">
			<GoalsCard
                icon={goals_icon1}
				title={$_('main_page.goals.goal1.title')}
				description={$_('main_page.goals.goal1.description')}
			/>
			<GoalsCard
                icon={goals_icon2}
				title={$_('main_page.goals.goal2.title')}
				description={$_('main_page.goals.goal2.description')}
			/>
			<GoalsCard
				icon={goals_icon3}
				title={$_('main_page.goals.goal3.title')}
				description={$_('main_page.goals.goal3.description')}
			/>
	</div>
</section>
