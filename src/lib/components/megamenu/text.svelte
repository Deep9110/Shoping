<script>
    let menuitems= [
        {
        "name" : "voxoplus",
         "url" : "#",
         "submenu" : [
            {
                "name" : "Email Templete",
                "url" : "#",
                "submenu" : [
                    {
                    "name" : "Abandon",
                    "url" : "#"
                    },
                    {
                      "name" : "Black",
                      "url" : "#"
                    },
                    {
                      "name" : "Email",
                      "url" : "#"
                    }
                ]
            },
            {
                "name" : "Email Templete",
                "url" : "#",
                "submenu" : [
                    {
                    "name" : "product",
                    "url" : "#"
                    },
                    {
                      "name" : "reset",
                      "url" : "#"
                    },
                    {
                      "name" : "welcome",
                      "url" : "#"
                    }
                ]
            }
            
              
        ]
      }
 
    ]
</script>
{#each menuitems as items}
<div class="menu">
    <ul>{items.name}</ul>
    
</div>
{/each}