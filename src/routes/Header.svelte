<script lang="ts">
  import { page } from "$app/stores";
  const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/personal-projects" },
    { name: "Contact", url: "/contact" },
  ];

  $: innerWidth = 0;
  function toggle() {}
</script>

<svelte:window bind:innerWidth />

<header class="h-12 grid grid-cols-3 mx-6">
  <div class="flex justify-start items-center">
    <h1 class="typing-demo">Why you little...</h1>
  </div>
  {#if innerWidth > 768}
    <nav class="flex justify-center items-center">
      <div class="gap-4 flex justify-between">
        {#each routes as route}
          <a
            href={route.url}
            class:active={$page.route.id === route.url}
            class="hover:bg-green hover:text-black hover:font-bold px-2 mx-2"
            >{route.name}</a
          >
        {/each}
      </div>
    </nav>
  {:else}
    <button class="flex justify-end items-center col-start-3" on:click={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 hover:text-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  {/if}
</header>

<style>
  .active {
    background-color: var(--green);
    color: var(--black);
    font-weight: bold;
  }

  .typing-demo {
    animation:
      typing 3s steps(22),
      blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
</style>
