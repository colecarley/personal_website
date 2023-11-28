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
          hello, my name is cole carley. i am a junior-(ish) at the university
          of nevada, reno studying computer science. i am always open to work or
          connect on projects!
        </p>
      </Card>

      <Card title="INTERESTS">
        <p>
          i &lt;3 programming. language design and implementation has
          particularly peaked my interests lately, but i am also interested in
          the AI and ML field. Most of my work experience is in the software
          development area, but my personal projects usually explore different
          areas. i am still feeling around for the specific subfield that will
          fit me best, but i'm having a great time doing a little bit of
          everything right now!
        </p>
      </Card>

      <Card title="EXPERIENCE">
        <p>
          all of my work experience has been in the software development field.
          All of my work time is spent writing in TypeScript (love) and working
          with libraries such as lodash (love). currently, i am working at <a
            class="font-bold underline"
            href="https://www.alcomy.com/">Alcomy</a
          >, a SaaS company, focused on developing software for the assisted
          living space.
        </p>
        <p>
          i have worked with frontend frameworks such as Angular and Svelte. in
          the backend, i have spent time working with Node.js and Feathers.js.
          As for databases, i have used postgres, firebase cloud storage, and
          sqlite.
        </p>
        <p>
          see the <a href="/personal-projects" class="font-bold hover:underline"
            >projects page</a
          > for non-work related experience!
        </p>
      </Card>
    </div>
  </Clamp>
</Center>
