<script lang="ts">
  import { theme } from '../routes/store'
  const toggleTheme = () => {
    $theme = $theme === 'dark' ? 'light' : 'dark'
  }
</script>

<button on:click={toggleTheme}> Toggle Theme {$theme} </button>
