<script lang="ts">
  import { page } from "$app/stores";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  const routes = [
    { name: "home", url: "/" },
    { name: "projects", url: "/personal-projects" },
    { name: "blog", url: "/captains-blog" },
    { name: "about", url: "/about" },
    { name: "contact", url: "/contact" },
  ];

  $: innerWidth = 0;
  const sidebar = writable<boolean>(false);
  $: open = $sidebar;

  export function toggle() {
    sidebar.update((current) => !current);
  }
</script>

<svelte:window bind:innerWidth />

<header class="h-12 grid grid-cols-2 mx-6">
  <div class="flex justify-start items-center">
    <h1 class="typing-demo">why you little...</h1>
  </div>
  {#if innerWidth > 768}
    <nav class="flex justify-end items-center">
      <div class="gap-4 flex justify-between">
        {#each routes as route}
          <a
            href={route.url}
            class:active={$page.route.id === route.url}
            class="hover:border-green border border-hidden hover:font-bold px-2 mx-2"
            >{route.name}</a
          >
        {/each}
      </div>
    </nav>
  {:else}
    <button class="flex justify-end items-center z-20" on:click={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
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
    {#if open}
      <div
        class="bg-black border border-green z-10 fixed right-0 h-full min-w-[200px]"
      >
        <nav class="flex justify-center items-center w-full">
          <div class="gap-4 flex flex-col justify-between w-full">
            {#each routes as route}
              <a
                href={route.url}
                class:active={$page.route.id === route.url}
                class="px-6 hover:font-bold first:mt-12 w-full">{route.name}</a
              >
            {/each}
          </div>
        </nav>
      </div>
    {/if}
  {/if}
</header>

<style>
  .active {
    background-color: var(--green);
    color: var(--black);
    font-weight: bold;
    animation: blink-background 0.5s step-end infinite alternate;
  }

  .typing-demo {
    width: 18ch;
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

  @keyframes blink-background {
    50% {
      background-color: transparent;
      border-color: transparent;
      color: transparent;
    }
  }
</style>
