<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  import Pill from "$lib/components/Pill.svelte";
  const projects = [
    {
      url: "https://github.com/colecarley/sudoku_solver",
      name: "sudoku solver",
      date: "jul, 2023",
      description: `I spent some time in the summer of 2023 becoming increasingly interested in recursive problem solving.
      I was also, at the time, playing a lot of sudoku; so, I decided to combine these two interests and write a sudoku solver in Rust.`,
      skills: ["Rust", "algorithms", "data manipulation"],
    },
    {
      url: "https://github.com/colecarley/huffman-compressor",
      name: "huffman data compressor",
      date: "sep, 2023",
      description: `This data compressor was an excuse to learn Go, and practice some algorithms and data structures. The Huffman
      algorithm is a beautiful lossless data compression algorithm that uses a binary tree (made from a frequency analysis and a min-heap) to compress data.`,
      skills: ["Go", "data compression", "algorithms", "data structures"],
    },
    {
      url: "https://github.com/colecarley/perceptron",
      name: "perceptron",
      date: "oct, 2023",
      description: `A simple perceptron written in C. As my first time diving into neural networks, I wanted to start simple, but stay close to the grain.
      I had to sit and figure out how gradient decent works, which was a fun challenge. I am currently working up some plans for a more complex neural network.
        `,
      skills: ["C", "neural networks", "machine learning"],
    },
    {
      url: "https://github.com/colecarley/todo",
      name: "cli todo app",
      date: "nov, 2023",
      description: `I was getting bored of using the Todoist, and I was itching for a project that would let me stretch my Rust muscles,
      so I decided to write a todo list for the command line. It is stateful, and uses SQLite to store the data. I am currently working on adding a folder system to the app.`,
      skills: ["Rust", "SQLite", "database management"],
    },
  ];
</script>

<Center>
  <pre class="md:text-sm text-[6px]">

___________________ ________        ____.________________________________________
\______   \______   \\_____  \      |    |\_   _____/\_   ___ \__    ___/   _____/
 |     ___/|       _/ /   |   \     |    | |    __)_ /    \  \/ |    |  \_____  \ 
 |    |    |    |   \/    |    \/\__|    | |        \\     \____|    |  /        \
 |____|    |____|_  /\_______  /\________|/_______  / \______  /|____| /_______  /
                  \/         \/                   \/         \/                \/ 
  </pre>
</Center>

<Center>
  <Clamp>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each projects as project}
        <Card
          title={project.name}
          titleIsLink={true}
          link={project.url}
          subtitle={"stardate: " + project.date}
        >
          <p class="mb-4">{project.description}</p>
          <div class="flex flex-row flex-wrap gap-2">
            {#each project.skills as skill}
              <Pill text={skill} />
            {/each}
          </div></Card
        >
      {/each}
    </div>
  </Clamp>
</Center>
