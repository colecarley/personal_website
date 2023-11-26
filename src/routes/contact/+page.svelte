<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import Textarea from "$lib/components/Textarea.svelte";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  let name = "";
  let email = "";
  let message = "";
</script>

<Center>
  <pre class="md:text-sm text-[6px]">
    _________  ________    _______________________  ____________________
    \_   ___ \ \_____  \   \      \__    ___/  _  \ \_   ___ \__    ___/
    /    \  \/  /   |   \  /   |   \|    | /  /_\  \/    \  \/ |    |   
    \     \____/    |    \/    |    \    |/    |    \     \____|    |   
     \______  /\_______  /\____|__  /____|\____|__  /\______  /|____|   
            \/         \/         \/              \/        \/          
    </pre>
</Center>
<Center>
  <Clamp>
    <Input label="name" bind:value={name} />
    <Input label="email" bind:value={email} />
    <Textarea label="what do you have to say?" rows={10} bind:value={message} />
    <div class="flex justify-center items-center">
      <button
        class="border border-green p-2 hover:text-black hover:bg-green hover:font-bold mt-6 rounded-lg"
        on:click={() =>
          console.log({
            name,
            email,
            message,
          })}>beam message</button
      >
    </div>
  </Clamp>
</Center>
