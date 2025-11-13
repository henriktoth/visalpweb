<script>
    let {icon, title, description} = $props();
</script>
<div class="flex w-[280px] flex-col gap-5 border border-neutral-200 bg-neutral-100 rounded-3xl items-center p-5">
    <img class="w-35" src={icon} alt={title}>
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="justified">{description}</p>
</div>