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
    <Center>
      <p class="mb-4 text-center">
        please contact me with anything! I will respond as quickly as I can! you
        can also see my linkedin and github below!
      </p>
    </Center>
  </Clamp>
</Center>
<Center>
  <Clamp>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-2">
      <Input label="name" bind:value={name} />
      <Input label="email" bind:value={email} />
    </div>
    <Textarea label="what do you have to say?" rows={10} bind:value={message} />
    <div class="flex justify-center items-center">
      <a
        class="border border-green p-2 hover:text-black hover:bg-green hover:font-bold mt-6 rounded-lg"
        href="mailto:cole.carley@gmail.com?subject=Why you little - {name}&body={message}"
        >beam message</a
      >
    </div>
  </Clamp>
</Center>
