<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
  import { range } from "lodash";
</script>

<div class="app">
  <Header />
  <div class="m-6">
    <slot />
  </div>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .app > * {
    flex: 1;
  }
</style>
