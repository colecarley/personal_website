<script lang="ts">
  export let title = "TITLE";
  export let subtitle = "";
</script>

<div class="p-6 rounded-lg border-green border w-fit h-fit my-6">
  <h3 class="text-lg">{title}</h3>
  <p class="text-sm">{subtitle}</p>
  <slot />
</div>
