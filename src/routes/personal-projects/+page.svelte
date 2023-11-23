<script lang="ts">
  const projects = [
    {
      url: "https://github.com/colecarley/sudoku_solver",
      name: "Sudoku Solver",
    },
    {
      url: "https://github.com/colecarley/huffman-compressor",
      name: "Huffman Compressor",
    },
    {
      url: "https://github.com/colecarley/perceptron",
      name: "Perceptron",
    },
    {
      url: "https://github.com/colecarley/todo",
      name: "CLI todo app",
    },
  ];
</script>

{#each projects as project}
  <div>
    <a href={project.url}>{project.name}</a>
  </div>
{/each}
