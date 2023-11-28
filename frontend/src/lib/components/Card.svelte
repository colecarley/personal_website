<script lang="ts">
  export let title = "TITLE";
  export let subtitle = "";
  export let titleIsLink = false;
  export let link = "";
  export let hoverable = false;
</script>

<div class="border border-green rounded-lg p-2 bg-dark" class:hover={hoverable}>
  <div class="p-6 border-green border-b border-r rounded-xl h-full">
    {#if titleIsLink}
      <a href={link} class="text-xl font-bold hover:underline"> &gt; {title}</a>
    {:else}
      <h3 class="text-xl font-bold">&gt; {title}</h3>
    {/if}
    <p class="text-sm mb-2">{subtitle}</p>
    <slot />
  </div>
</div>

<style>
  .hover:hover {
    background-color: var(--midnight);
  }
</style>
