<!-- <script> -->
<!-- 
    let data = [
        {
            id: "Apple",
            catog1:"iphone8",
            catog2:"iphone9",
            catog3:"iphone10",
            catog4:"iphone11",
            catog5:"iphone12"
        },
        {
            id: "Apple",
            catog1:"iphone8",
            catog2:"iphone9",
            catog3:"iphone10",
            catog4:"iphone11",
            catog5:"iphone12"
        },
        {
            id: "Apple",
            catog1:"iphone8",
            catog2:"iphone9",
            catog3:"iphone10",
            catog4:"iphone11",
            catog5:"iphone12"
        }
    ] -->

        <!-- import Apples from "./apple/+page.svelte" 
        import Asus from "./asus/+page.svelte" -->


<!-- </script> -->


<!-- <span>

    <ul> -->
        <!-- <h2>Mobile cover</h2>
        <a href="/mobilecover/apple"> -->
            <!-- <button on:mouseenter={}>mobile Cover</button> -->
            <!-- <div class="flex gap-2">
                <Apples />
                <Asus />
            </div>
            
        </a> -->
    <!-- </ul>
</span> -->



<script>
 // import EachItems from "$lib/components/EachItems.svelte";

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

<div class="menu">
    {#each menuitems as menuitem}
    <div class="">{menuitem.name}</div>
        {#each menuitem.submenu as submenuitem}

        <ul class="">{submenuitem.name}</ul>

            {#each submenuitem.submenu as submenuname}
                <li>{submenuname.name}</li>
            {/each}
        {/each}
   
    {/each}

</div>

