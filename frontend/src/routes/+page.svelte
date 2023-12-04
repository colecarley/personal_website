<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
  import { onMount } from "svelte";
  import { Result, littleFetch } from "$lib/types/result";
  let messages = [
    "thank you for coming <3!",
    "I hope you enjoy your stay!",
    "Feel free to look around!",
    "Have a nice day!",
    "check out my resume!",
    "i hope you find what you're looking for!",
    "check out my projects!",
    "feel free to leave a note!",
    "play a game while you're here!",
    "check out my blog!",
    "okay, that's enough!",
    "you can stop now!",
    "i am running out of messages!",
    "seriously, stop!",
    "i'm not kidding!",
    "i mean it!",
    "i'm going to stop you!",
  ];
  $: notification = "";
  let clicked = 0;
  function showNotification() {
    if (clicked == messages.length) {
      alert("RED ALERT! RED ALERT! RED ALERT!");
      clicked = 0;
    }
    const newMessage = messages[clicked++];
    notification = newMessage;
    setTimeout(() => {
      if (notification == newMessage) {
        notification = "";
      }
    }, 3000);
  }
</script>

{#if notification}
  <div class="bg-black border border-green rounded-lg absolute right-0 mr-6">
    <div class="flex justify-center items-center p-2">
      <span class="text-green">{notification}</span>
    </div>
  </div>
{/if}

<div class="flex flex-col justify-center items-center mb-6">
  <button on:click={showNotification} class="w-full">
    <pre class="md:text-sm text-[6px]">
    __      _____________.____   _________  ________      _____  ___________  
    /  \    /  \_   _____/|    |  \_   ___ \ \_____  \    /     \ \_   _____/ 
    \   \/\/   /|    __)_ |    |  /    \  \/  /   |   \  /  \ /  \ |    __)_  
     \        / |        \|    |__\     \____/    |    \/    Y    \|        \ 
      \__/\  / /_______  /|_______ \______  /\_______  /\____|__  /_______  / 
           \/          \/         \/      \/         \/         \/        \/  
      </pre>
  </button>

  <Center>
    <Clamp>
      <p class="text-center">
        to why you little (dot com). this website is serving as my personal
        playground and portfolio. feel free to snoop around, and give me a
        holler on the <a href="/contact" class="font-bold hover:underline"
          >contacts</a
        > page to connect! check out the options below:
      </p>
    </Clamp>
  </Center>
</div>

<Center>
  <Clamp>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <a href="/notes">
        <Card title="LEAVE ME A NOTE" hoverable={true}></Card>
      </a>

      <a href="/contact">
        <Card title="GIVE ME A HOLLER" hoverable={true}></Card>
      </a>

      <a href="/captains-blog">
        <Card title="LATEST BLOG POST" hoverable={true}></Card>
      </a>

      <a href="/personal-projects">
        <Card title="PROJECTS" hoverable={true}></Card>
      </a>
    </div>
  </Clamp>
</Center>
