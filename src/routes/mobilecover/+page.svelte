<script>
  export let data = { megamenu: [] }
</script>

<div class="menu">
  {#if data?.megamenu}
    {#each data.megamenu as menuitem}
      {JSON.stringify(menuitem)}
    {/each}
  {/if}
</div>
