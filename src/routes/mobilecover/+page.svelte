<script>
  import EachItems from "$lib/components/EachItems.svelte";
import { stringify } from "postcss";
  import { children } from "svelte/internal";

  export let data = { megamenu: [] }
</script>

<div class="menu">
  {#if data?.megamenu}
  

    {#each data.megamenu as menuitem}
      <!-- {JSON.stringify(menuitem)} -->
      {menuitem.name}
        {#each menuitem.children as childelement}
          <div>
            {childelement.name}
            <div>
              {#each childelement.children as subchild}
                {subchild.name}
              {/each}
            </div>
          </div>
         
        {/each}
    {/each}
 
  {/if}
</div>
