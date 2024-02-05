<script lang="ts">
  import snarkdown from "snarkdown";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  export let markdown: string = "";
  let styles = [
    ".blog>h1 {font-size: 24px; font-weight: bold; margin: 2rem 0 2rem 0;}",
    ".blog>h2 {font-size: 20px; font-weight: bold; margin: 2rem 0 2rem 0;}",
    ".blog>h3, .blog>h4, .blog>h5, .blog>h6 {font-size: 16px; font-weight: bold; margin: 2rem 0 2rem 0;}",
    ".blog>ul {list-style-type: circle; list-style-position: inside;}",
    ".blog>ol{list-style-type: roman; list-style-position: inside;}",
    ".blog>a{font-weight: bold; text-decoration: underline;}",
    ".blog>code{background-color: var(--midnight); margin: 0 0.25rem 0 0.25rem}",
    ".blog>pre{background-color: var(--midnight); padding: 1rem; margin: 1rem 0 1rem 0;}",
    ".blog>blockquote {background-color: var(--midnight); padding: 1rem; margin: 1rem 0 1rem 0;}",
  ];

  let style = `<style>${styles.join("")}</style>`;
</script>

<Center>
  <Clamp>
    <div class="bg-dark rounded-lg border border-green p-12 blog">
      {@html snarkdown(markdown + style)}
    </div>
  </Clamp>
</Center>
