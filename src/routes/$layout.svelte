<script lang="ts">
  import { browser } from '$app/env'
  import './_global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'
  if (browser) {
    document.querySelector('html').classList.add('dark')
  }
  function onLoad() {
    console.log('load')
  }
  onMount(() => {
    return theme.subscribe(value => {
      console.log('theme changed')
            // document.querySelector('html').classList.tog
    })
  })
</script>

<svelte:window on:DOMContentLoaded={() => onLoad()} />

<main>
  <slot />
</main>
