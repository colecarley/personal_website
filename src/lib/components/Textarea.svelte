<script lang="ts">
  export let label = "label";
  export let value = "";
  export let rows = 5;
  const onInput = (e: any) => (value = e.target.value);
</script>

<div class="flex flex-col">
  <label for={label}>{label}</label>
  <textarea
    {rows}
    name={label}
    class="border border-green p-2 bg-black rounded-lg"
    {value}
    on:input={onInput}
  />
</div>
