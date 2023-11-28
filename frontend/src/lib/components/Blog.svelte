<script lang="ts">
  import snarkdown from "snarkdown";
  export let markdown: string = "";
  let styles = [
    ".blog>h1 {font-size: 24px; font-weight: bold;}",
    ".blog>h2 {font-size: 20px; font-weight: bold;}",
    ".blog>h3, .blog>h4, .blog>h5, .blog>h6 {font-size: 16px; font-weight: bold;}",
    ".blog>ul {list-style-type: circle; list-style-position: inside;}",
    ".blog>ol{list-style-type: roman; list-style-position: inside;}",
    ".blog>a{font-weight: bold; text-decoration: underline;}",
    ".blog>code{background-color: var(--midnight);}",
    ".blog>pre{background-color: var(--midnight); padding: 1rem;}",
    ".blog>blockquote {background-color: var(--midnight); padding: 1rem;}",
  ];
  let style = `<style>${styles.join("")}</style>`;
</script>

<div class="bg-dark rounded-lg border border-green p-6 blog">
  {@html snarkdown(markdown + style)}
</div>
