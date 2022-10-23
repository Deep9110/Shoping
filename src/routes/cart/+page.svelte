<script>
      	import cartimage1 from '$lib/images/image1.jpg';    

        let people = [
            {name: "yellow jacket", price:"63$", quantity:"1", action:"x", total:"$3650", id:1},
            {name: "green jacket", price:"63$", quantity:"1", action:"x", total:"$3650", id:2},
            {name: "red jacket", price:"63$", quantity:"1", action:"x", total:"$3650", id:3},
            
        ];

</script>



<div>

<div class="h-[35vh] w-full flex items-center justify-center bg-[#eff2f7]">
    <div class="flex flex-col items-center gap-4">
        <span class="font-bold text-3xl ">Shopping Cart</span>
        <span>
            <i class="fa-solid fa-house text-pink hover:text-[#4B83D6] "></i>
            <span class="text-gray-500">&nbsp;/&nbsp;Cart</span>
        </span>
    </div> 
</div>

<div class="flex flex-col justify-center items-center max-w-auto sm:p-4 md:p-10 lg:p-12 xl:p-16">
    <div class="flex items-center justify-center">
        <span class="text-xl my-4">
            Your cart will be expired in 
            <span class="countdown font-mono text-pink">
                
                <span style="--value:15;"></span>:
                <span style="--value:00;"></span>
            </span>
            minutes !
        </span>
        <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-white px-4 py-2 border hover:border-1 border-pink mx-4 ">Check Out</button></a>
    </div>

    
</div>

<div class="overflow-x-auto max-w-auto sm:px-4 md:px-10 lg:px-12 xl:px-16">
    <table class="table w-full">
      <!-- head -->
      <thead class="">
        <tr class="text-xl font-bold uppercase">
          <th class="text-lg font-bold uppercase" >Image</th>
          <th class="text-lg font-bold uppercase">Product Name</th>
          <th class="text-lg font-bold uppercase">Price</th>
          <th class="text-lg font-bold uppercase">Quantity</th>
          <th class="text-lg font-bold uppercase">Action</th>
          <th class="text-lg font-bold uppercase">Total</th>
        </tr>
      </thead>
      <tbody>
        {#each people as person (person.id)}
        <!-- row 1 -->
        <tr>
          <th>
            <a href="/">
                <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
            </a>
          </th>
          <td class="text-slate-500">{person.name}</td>
          <td class="text-pink font-semibold text-xl">
            {person.price}
          </td>
          <td><span class="border-2 px-6 py-4 rounded">{person.quantity}</span></td>

          <td>
            <span class=" px-4"><i class="fa-solid fa-xmark text-slate-500"></i></span>
          </td>

          <td>
            <span class="text-black font-bold text-xl">{person.total}</span>
          </td>
        </tr>
        {/each}
        <!-- row 2 -->
        <!-- <tr>
          <th>
            <a href="/">
                <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
            </a>
          </th>
          <td class="text-slate-500">Yello Jacket</td>
          <td class="text-pink font-semibold text-xl">
            $90.00
          </td>
          <td><span class="border-2 px-6 py-4 rounded">1</span></td>

          <td>
            <span class=" px-4"><i class="fa-solid fa-xmark text-slate-500"></i></span>
          </td>

          <td>
            <span class="text-black font-bold text-xl">$4650.00</span>
          </td>
        </tr> -->
        <!-- row 3 -->
        <!-- <tr>
          <th>
            <a href="/">
                <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
            </a>
          </th>
          <td class="text-slate-500">Yello Jacket</td>
          <td class="text-pink font-semibold text-xl">
            $103.00
          </td>
          <td><span class="border-2 px-6 py-4 rounded">1</span></td>

          <td>
            <span class=" px-4"><i class="fa-solid fa-xmark text-slate-500"></i></span>
          </td>

          <td>
            <span class="text-black font-bold text-xl">$6650.00</span>
          </td>
        </tr> -->
       

      </tbody>
    </table>
</div>

<div class="flex justify-between max-w-auto py-10 sm:px-4 md:px-10  lg:px-12 xl:px-16">
    <div class="flex max-w-auto items-center justify-between w-full">
        <span>
            <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-white px-4 py-2 border hover:border-1 border-pink mx-4 ">Continue Shopping</button></a>
        </span>
        <span class="text-pink underline">
            <a href="/">Clear All Items</a>
        </span>
    </div>
</div>
<div class="flex justify-between max-w-auto w-full gap-4 sm:px-4 sm:flex-col md:px-10 lg:flex-row  lg:px-12 xl:px-20">
    <div class="flex items-start sm:w-full lg:w-[50%]">
        <input type="text" placeholder="Coupon Code" class="sm:w-40 lg:w-60 px-4 py-4 rounded border hover:border hover:border-gray bg-transprend hover:bg-[#eff2f7]">
        <span>
            <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-white px-4 py-4 rounded border hover:border-1 border-pink mx-4 ">Apply Coupon</button></a>
        </span>
    </div>
    <div class="flex justify-between sm:items-end lg:items-start gap-4  sm:flex-col sm:w-full sm:justify-center  lg:flex-row  lg:justify-between lg:w-[50%]">
        <div class="flex sm:justify-end lg:justify-start ">
            <span class="">
                <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-white w-[130px] px-4 py-2 rounded border hover:border-1 border-pink mx-4 ">Check Out</button></a>
            </span>
        </div>
        
        <!-- small -->
        <div class="h-[200px] flex flex-col rounded leading-10 sm:w-[30%] sm:invisible sm:hidden lg:w-full lg:visible lg:flex  ">
            <div class="h-[200px] sm:w-[30%] lg:w-full bg-[#eff2f7] p-4  rounded">
                <span class="text-xl font-semibold">Cards Total</span>
                <div class="flex justify-between">
                    <span>MRP</span>
                    <span>$250.00</span>
                </div>
                <div class="flex justify-between">
                    <span>Coupon Discount</span>
                    <span>-$25.00</span>
                </div>
                <div class="flex justify-between">
                    <span>MRP</span>
                    <span>$250.00</span>
                </div>
            </div>
            <span class="h-[50px] sm:w-[30%] lg:w-full bg-[#eff2f7]  rounded">
                <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-whiterounded border hover:border-1 border-pink w-full h-auto py-4">Check Out</button></a>
            </span>
        </div>

        <!-- large -->
        <div class="h-[200px] flex flex-col  rounded leading-10 sm:w-full  sm:visible sm:flex lg:invisible lg:hidden  ">
            <div class="h-[200px] sm:w-full  bg-[#eff2f7] p-4  rounded">
                <span class="text-xl font-semibold">Cards Total</span>
                <div class="flex justify-between">
                    <span>MRP</span>
                    <span>$250.00</span>
                </div>
                <div class="flex justify-between">
                    <span>Coupon Discount</span>
                    <span>-$25.00</span>
                </div>
                <div class="flex justify-between">
                    <span>MRP</span>
                    <span>$250.00</span>
                </div>
            </div>
            <span class="h-[50px] sm:w-full lg:w-full bg-[#eff2f7]  rounded">
                <a href="/"><button class="font-bold text-white hover:text-black bg-pink hover:bg-whiterounded border hover:border-1 border-pink w-full h-auto py-4">Check Out</button></a>
            </span>
        </div>
        <!-- <span class="">
            <a href="/"><button class="font-bold text-white bg-pink hover:bg-white px-4 py-2 rounded border hover:border-1 border-pink mx-4 ">Check Out</button></a>
        </span> -->
    </div>

</div>
<div class="h-[250px] flex items-center gap-4 justify-between w-full max-w-auto sm:flex-col sm:justify-center sm:text-center sm:p-4 mt-[80px] md:justify-between md:text-start md:flex-row lg:p-12 xl:p-16 bg-gray-300">
    <div class="gap-4 flex flex-col">
        <span class="text-2xl font-bold">Subscribe Our News</span>
        <span class="text-base text-slate-500">Subscribe and receive our newsletters to follow the news about our fresh and fantastic Products.
        </span>
    </div>
    <div class="flex">
        <div class="relative sm:w-64 w-40 ">
            <input type="text" id="footer-field" name="footer-field" placeholder=" Your Email Address" class="w-full bg-white-300 bg-opacity-50 focus:ring-indigo-200 focus:pink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-pink border-0 py-2 px-4 focus:outline-none ">
            Button
        </button>
    </div>
</div>

</div>