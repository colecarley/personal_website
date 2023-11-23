<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import Textarea from "$lib/components/Textarea.svelte";
  let name = "";
  let email = "";
  let message = "";
</script>

<div class="flex flex-col justify-center items-center">
  <div class="md:w-2/3 w-full">
    <Input label="name" bind:value={name} />
    <Input label="email" bind:value={email} />
    <Textarea label="what do you have to say?" rows={10} bind:value={message} />
    <div class="flex justify-center items-center">
      <button
        class="border border-green p-2 hover:text-black hover:bg-green hover:font-bold mt-6"
        on:click={() =>
          console.log({
            name,
            email,
            message,
          })}>send me a message!</button
      >
    </div>
  </div>
</div>
