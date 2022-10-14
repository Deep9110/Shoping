<script>
    let items = [
        {
            name: "Deep",
            age: 24,
            avatar:'/logo/section_8_4.jpg'
        },
        {
            name: "Pratap",
            age: 25,
            avatar:'/src/lib/images/section_8_2.jpg'
        },
        {
            name: "Swadesh",
            age: 26,
            avatar:'/images/section_8_1.jpg'
        }
    ]
</script>

<div>
    {#each items as item, ix}
    <div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
        <img src="{item.avatar}" alt="{item.name}" class="h-10 w-10"/>
    </div>
{/each}
</div>