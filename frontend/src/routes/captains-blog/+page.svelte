<script lang="ts">
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  import Blog from "$lib/components/Blog.svelte";
  import { onMount } from "svelte";
  import { formatDate } from "$lib/helpers/format-date";

  type Blog = {
    title: string;
    date: string;
    content: string;
  };

  let content: Blog[] = [];
  onMount(async () => {
    const res = await fetch("http://localhost:1701/blogs");
    content = await res.json();
  });
</script>

<Center>
  <pre class="md:text-sm text-[12px]">
    captain's
__________ ____    ________    ________ 
\______   \    |   \_____  \  /  _____/ 
|    |  _/    |    /   |   \/   \  ___ 
|    |   \    |___/    |    \    \_\  \
|______  /_______ \_______  /\______  /
       \/        \/       \/        \/ 
    </pre>
</Center>

<Center>
  <Clamp>
    {#each content as blog}
      <div
        class="mb-12 bg-dark hover:bg-midnight rounded-lg border border-green p-2"
      >
        <div
          class="border-l border-green rounded-md p-4 flex flex-row justify-between items-center"
        >
          <div>
            <h1 class="font-bold text-lg">{blog.title}</h1>
            <p class="text-sm">stardate: {formatDate(blog.date)}</p>
          </div>
          <a href="/blog/{blog.title}" class="font-bold hover:underline"
            >&gt; READ MORE</a
          >
        </div>
      </div>
    {/each}
  </Clamp>
</Center>
