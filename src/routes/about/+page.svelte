<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Clamp from "$lib/components/Clamp.svelte";
  import Center from "$lib/components/Center.svelte";
</script>

<Center>
  <pre class="md:text-sm text-[6px]">
    _____ __________ ________   ____ ______________    _____  ___________
    /  _  \\______   \\_____  \ |    |   \__    ___/   /     \ \_   _____/
   /  /_\  \|    |  _/ /   |   \|    |   / |    |     /  \ /  \ |    __)_ 
  /    |    \    |   \/    |    \    |  /  |    |    /    Y    \|        \
  \____|__  /______  /\_______  /______/   |____|    \____|__  /_______  /
          \/       \/         \/                             \/        \/ 
    </pre>
</Center>

<Center>
  <Clamp>
    <div class="flex flex-col gap-6">
      <Card title="ABOUT ME">
        <p>
          hello, my name is cole carley. I am a software developer base in reno,
          nevada. I am currently a junior-(ish) at the university of nevada,
          reno studying computer science. I am also a software developer at
          <a class="font-bold underline" href="https://www.alcomy.com/"
            >Alcomy</a
          >.
        </p>
      </Card>

      <Card title="INTERESTS">
        <p>Is this working?</p>
      </Card>

      <Card title="EXPERIENCE">
        <p>Is this working?</p>
      </Card>

      <Card title="RESUME">
        <p>Is this working?</p>
      </Card>
    </div>
  </Clamp>
</Center>
