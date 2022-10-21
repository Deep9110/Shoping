<script>
    import banner from '$lib/images/sopping_list_banner.jpg';
    import EachItems from '$lib/components/EachItems.svelte';
</script>

<div class="flex flex-col items-center ">
    <div class="h-[35vh] w-full flex items-center justify-center bg-[#eff2f7]">
        <div class="flex flex-col items-center gap-4">
            <span class="font-bold text-3xl ">Shopping Cart</span>
            <span>
                <i class="fa-solid fa-house text-pink hover:text-[#4B83D6] "></i>
                <span class="text-gray-500">&nbsp;/&nbsp;Cart</span>
            </span>
        </div> 
    </div>
    <div class="relative w-full flex gap-6 sm:p-4 md:p-8 lg:p-12 xl: p-12">
        <div class="w-[25%] flex flex-col gap-4">
            <!-- <button class:active={isOpen} class="accordion" on:click={() => !isOpen}>
                Section 1
                <span class="icon">&plus;</span>
            </button>
            <div class="panel" class:open-panel={isOpen}>
              <p>Lorem ipsum...</p>
            </div> -->

            <div class="border p-4">
                <div class="flex justify-between items-center p-4 w-full text-black font-bold text-xl bg-[#eff2f7]">
                    <span>Brand</span>
                    <span class="icon">&minus;</span>
                </div>
                <div class="px-2 pt-4 h-[240px] overflow-y-auto">
                    <div class="flex justify-start items-center gap-2 py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    
                </div>
            </div>

            <div class="border p-4">
                <div class="flex justify-between items-center p-4 w-full text-black font-bold text-xl bg-[#eff2f7]">
                    <span>Color</span>
                    <span class="icon">&minus;</span>
                </div>
                <div class="px-2 pt-4 h-[90px] gap-2 flex justify-start flex-wrap overflow-y-auto">
                    <span class="h-6 w-6 bg-red-500 rounded"></span>
                    <span class="h-6 w-6 bg-green-500 rounded"></span>
                    <span class="h-6 w-6 bg-yellow-500 rounded"></span>
                    <span class="h-6 w-6 bg-slate-500 rounded"></span>
                    <span class="h-6 w-6 bg-black rounded"></span>
                    <span class="h-6 w-6 bg-orange-500 rounded"></span>
                    <span class="h-6 w-6 bg-red-500 rounded"></span>
                    <span class="h-6 w-6 bg-green-500 rounded"></span>
                    <span class="h-6 w-6 bg-yellow-500 rounded"></span>
                    <span class="h-6 w-6 bg-slate-500 rounded"></span>
                    <span class="h-6 w-6 bg-black rounded"></span>
                    <span class="h-6 w-6 bg-red-500 rounded"></span>
                    <span class="h-6 w-6 bg-green-500 rounded"></span>
                    <span class="h-6 w-6 bg-yellow-500 rounded"></span>
                </div>
            </div>

            <div class="border p-4">
                <div class="flex justify-between items-center p-4 w-full text-black font-bold text-xl bg-[#eff2f7]">
                    <span>Price</span>
                    <span class="icon">&minus;</span>
                </div>

                <div class="px-2 pt-4 h-[50px]">
                    <input  type=range min=$0 max= $5000>
                </div>
            </div>


            <div class="border p-4">
                <div class="flex justify-between items-center p-4 w-full text-black font-bold text-xl bg-[#eff2f7]">
                    <span>Categories</span>
                    <span class="icon">&minus;</span>
                </div>
                <div class="px-2 pt-4 h-[240px] overflow-y-auto">
                    <div class="flex justify-start items-center gap-2 py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Kurtas <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Jackets <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">Zara <span class="text-sm pl-2 text-gray-500">(25)</span></span>
                    </div>
                    
                </div>
            </div>

            <div class="border p-4">
                <div class="flex justify-between items-center p-4 w-full text-black font-bold text-xl bg-[#eff2f7]">
                    <span>Brand</span>
                    <span class="icon">&minus;</span>
                </div>
                <div class="px-2 pt-4 h-[120px] overflow-y-auto">
                    <div class="flex justify-start items-center gap-2 py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">5% and above</span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">10% and above</span>
                    </div>
                    <div class="flex justify-start items-center gap-2  py-2">
                        <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
                        <span class="text-black">20% and above</span>
                    </div>
                   
                   
                    
                </div>
            </div>
        </div>


        <div class="w-[75%] flex flex-col">
            <div class="flex flex-col items-start justify-center pl-12 gap-4 h-[250px] w-[100%] bg-cover bg-no-repeat"
            style="background-position:center center; background-image:url('{banner}')"
            >
                <span class="text-pink text-3xl font-bold">Shop The Latest Trends</span>
                <p class="text-slate-500">Shop the latest clothing trends with our weekly edit of what's<br /> new in online at Voxo. From out latest woman collection.</p>
            </div>

            <span class="py-4 text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </span>

            <div class="flex gap-4 py-2 flex-wrap ">
                <span class="bg-[#eff2f7] cursor-pointer rounded p-1">Shirt <span class="pl-4">&Cross;</span></span>
                <span class="bg-[#eff2f7] cursor-pointer rounded p-1">Kurtas <span class="pl-4">&Cross;</span></span>
                <span class="bg-[#eff2f7] cursor-pointer rounded p-1">Jackets <span class="pl-4">&Cross;</span></span>
                <span class="bg-[#eff2f7] cursor-pointer rounded p-1">Blazers <span class="pl-4">&Cross;</span></span>
                <span class="bg-[#eff2f7] cursor-pointer rounded p-1 text-pink">Clear all </span>
            </div>

            <div class="flex gap-4 items-center py-4">
                <div class="relative border-2 border-slate-400">
                  <select class="bg-[#eff2f7] text-slate-500 appearance-none py-1 px-1 focus:outline-none focus:ring-2 focus:border-indigo-500 text-sm pl-3 pr-8">
                    <option class="text-sm">24 Page Per View</option>
                    <option class="text-sm">Alphabetically A-Z</option>
                    <option class="text-sm">Alphabetically A-Z</option>
                    <option class="text-sm">Price, High to Low</option>
                    <option class="text-sm">Price, Low to high</option>
                  </select>
                  <span class="absolute right-0 top-0 h-full focus:outline-none w-10 text-center text-slate-500 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>

                <div class="relative border-2 border-slate-400">
                    <select class="bg-[#eff2f7] text-slate-500 appearance-none py-1 px-1 focus:outline-none focus:ring-2 focus:border-indigo-500 text-sm pl-3 pr-8">
                      <option class="text-sm">Select fetured</option>
                      <option class="text-sm">Alphabetically A-Z</option>
                      <option class="text-sm">Alphabetically A-Z</option>
                      <option class="text-sm">Price, High to Low</option>
                      <option class="text-sm">Price, Low to high</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full focus:outline-none w-10 text-center text-slate-500 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
            </div>

            <div class=" flex justify-center h-[120vh] overflow-x-auto flex-wrap  gap-4 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                <EachItems />
                <EachItems />
                <EachItems />
                <EachItems />
            </div>
            

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

<style>
    /* input[type='range'] {
      overflow: hidden;
      width: 100%;
      -webkit-appearance: round;
      background-color: #1f1f1f;
    } */

    input[type='range'] {
      overflow: hidden;  
      width: 100%;
      
    }
</style>