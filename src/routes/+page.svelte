<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  let messages = [
    "thank you for coming!",
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
  let nums: number[] = [];
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
  <div class="bg-black border border-green absolute right-0 mr-6">
    <div class="flex justify-center items-center p-2">
      <span class="text-green">{notification}</span>
    </div>
  </div>
{/if}

<div class="flex flex-col justify-center items-centemb-b">
  <button on:click={showNotification} class="w-full">
    <pre class="md:text-sm text-[6px]">

    __      _____________.____   _________  ________      _____  ___________            
    /  \    /  \_   _____/|    |  \_   ___ \ \_____  \    /     \ \_   _____/            
    \   \/\/   /|    __)_ |    |  /    \  \/  /   |   \  /  \ /  \ |    __)_             
     \        / |        \|    |__\     \____/    |    \/    Y    \|        \            
      \__/\  / /_______  /|_______ \______  /\_______  /\____|__  /_______  / /\  /\  /\ 
           \/          \/         \/      \/         \/         \/        \/  \/  \/  \/ 
      </pre>
  </button>
</div>

<div class="grid md:grid-cols-4 grid-cols-1 gap-6">
  <a href="/notes">
    <Card title="LEAVE ME A NOTE" hoverable={true}></Card>
  </a>

  <a href="/game">
    <Card title="PLAY A LITTLE GAME" hoverable={true}></Card>
  </a>

  <a href="/captains-blog">
    <Card title="LATEST BLOG POST" hoverable={true}></Card>
  </a>

  <a href="/personal-projects">
    <Card title="CHECK OUT MY PROJECTS" hoverable={true}></Card>
  </a>
</div>
