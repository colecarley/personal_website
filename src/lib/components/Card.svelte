<script lang="ts">
  export let title = "TITLE";
  export let subtitle = "";
  export let titleIsLink = false;
  export let link = "";
  export let hoverable = false;
</script>

<div class="p-6 rounded-lg border-green border" class:hover={hoverable}>
  {#if titleIsLink}
    <a href={link} class="text-lg font-bold hover:underline">{title}</a>
  {:else}
    <h3 class="text-lg">{title}</h3>
  {/if}
  <p class="text-sm mb-2">{subtitle}</p>
  <slot />
</div>

<style>
  .hover:hover {
    background-color: var(--dark);
  }
</style>
