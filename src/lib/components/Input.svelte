<script lang="ts">
  export let label = "label";
  export let value = "";
  const onInput = (e: any) => (value = e.target.value);
</script>

<div class="flex flex-col">
  <label for={label}>{label}</label>
  <input
    name={label}
    type="text"
    class="border border-green p-2 bg-black rounded-lg"
    {value}
    on:input={onInput}
  />
</div>
