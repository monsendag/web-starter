<script lang="ts">
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import { theme } from './store'
</script>

<svelte:head>
  <title>web starter</title>
  <meta name="title" content="web starter" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <!-- Open Graph  -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta property="og:description" content="" />
  <meta property="og:image" content="" />
</svelte:head>

<h1 class="text-5xl font-extrabold mb-4">Hello {$theme} world!</h1>

<ToggleTheme />
