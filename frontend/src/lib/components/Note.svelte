<script lang="ts">
  import { formatDate } from "$lib/helpers/format-date";

  export let note: { name: string; date: string; content: string } = {
    name: "",
    date: "",
    content: "",
  };
</script>

<div class="bg-dark rounded-lg border border-green p-2">
  <div class="border-l border-green rounded-lg p-4">
    <div class="flex flex-col md:flex-row justify-between">
      <p>crewman: {note.name}</p>
      <p class="text-sm">
        {formatDate(note.date)}
      </p>
    </div>
    <p class="mt-2">
      &gt; {note.content}
    </p>
  </div>
</div>
