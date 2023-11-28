<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Blog from "$lib/components/Blog.svelte";

  const title = $page.params.title;

  type Blog = {
    content: string;
  };
  let blog: Blog = {
    content: "",
  };
  onMount(async () => {
    const res = await fetch("http://localhost:1701/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    blog = await res.json();
  });
</script>

<Blog markdown={blog.content} />
