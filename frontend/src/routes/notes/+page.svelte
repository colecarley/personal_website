<script lang="ts">
  import { onMount } from "svelte";
  import Input from "$lib/components/Input.svelte";
  import Textarea from "$lib/components/Input.svelte";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  import Note from "$lib/components/Note.svelte";
  import { writable } from "svelte/store";
  type Note = {
    name: string;
    date: string;
    content: string;
  };

  let notes = writable<Note[]>([]);
  onMount(fetchNotes);

  let name = "";
  let content = "";

  async function fetchNotes() {
    const res = await fetch("http://localhost:1701/notes");
    notes.set((await res.json()).reverse());
  }

  function addComment() {
    fetch("http://localhost:1701/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });

    if (name && content) {
      notes.update((n) => [
        { name, date: Date.now().toString(), content },
        ...n,
      ]);
    }
  }
</script>

<Center>
  <pre class="md:text-sm text-[8px]">
_______   ______________________________ _________
\      \  \_____  \__    ___/\_   _____//   _____/
 /   |   \  /   |   \|    |    |    __)_ \_____  \ 
/    |    \/    |    \    |    |        \/        \
\____|__  /\_______  /____|   /_______  /_______  /
        \/         \/                 \/        \/ 
    </pre>
  <p class="text-center mb-4">speak your mind!</p>
</Center>

<Center>
  <Clamp>
    <div class="mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Name" bind:value={name} />
        <Textarea label="Note" bind:value={content} />
      </div>
      <div class="flex justify-center items-center">
        <button
          class="border border-green p-2 hover:text-black hover:bg-green hover:font-bold mt-6 rounded-lg"
          on:click={addComment}>leave note</button
        >
      </div>
    </div>
    <div class="flex flex-col gap-6">
      {#each $notes as note}
        <Note {note} />
      {/each}
    </div>
  </Clamp>
</Center>
