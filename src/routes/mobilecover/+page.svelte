<script>

    // let data = [
    //     {
    //         id: "Apple",
    //         catog1:"iphone8",
    //         catog2:"iphone9",
    //         catog3:"iphone10",
    //         catog4:"iphone11",
    //         catog5:"iphone12"
    //     },
    //     {
    //         id: "Apple",
    //         catog1:"iphone8",
    //         catog2:"iphone9",
    //         catog3:"iphone10",
    //         catog4:"iphone11",
    //         catog5:"iphone12"
    //     },
    //     {
    //         id: "Apple",
    //         catog1:"iphone8",
    //         catog2:"iphone9",
    //         catog3:"iphone10",
    //         catog4:"iphone11",
    //         catog5:"iphone12"
    //     }
    // ]

        import Apples from "./apple/+page.svelte" 
        import Asus from "./asus/+page.svelte"


</script>


<span>

    <ul>
        <h2>Mobile cover</h2>
        <a href="/mobilecover/apple">
            <!-- <button on:mouseenter={}>mobile Cover</button> -->
            <div class="flex gap-2">
                <Apples />
                <Asus />
            </div>
            
        </a>
    </ul>
</span>