<!-- Icon.svelte -->
<script lang="ts">
  export let icon: string // The SVG icon as a string
  export let width = '1rem' // Default width
  export let height = '1rem' // Default height
</script>

<span class="icon" style={`width: ${width}; height: ${height}`}>
  {@html icon}
</span>

<style>
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
