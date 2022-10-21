<script>
    import product_page from "$lib/images/product_page.jpg";
    import heroImage from "$lib/images/hero-image.jpg";
    import EachItems from '$lib/components/EachItems.svelte';

</script>

<div class="flex flex-col items-center ">
    <div class="h-[35vh] w-full flex items-center justify-center bg-[#eff2f7]">
        <div class="flex flex-col items-center gap-4">
            <span class="font-bold text-3xl ">Product Left Sidebar</span>
            <span>
                <i class="fa-solid fa-house text-pink hover:text-[#4B83D6] "></i>
                <span class="text-gray-500">&nbsp;/&nbsp;Cart</span>
            </span>
        </div> 
    </div>

    <div class="relative w-full gap-6 flex sm:p-4 sm:flex-col md:p-8 lg:flex-row lg:p-12 xl: p-12">

        <div class="sm:w-full lg:w-[25%] flex flex-col gap-4 ">
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
                <div class="px-2 pt-4 sm:h-[100px] lg:h-[360px] overflow-y-auto">
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

            <div class="border p-4 sm:h-[100px] lg:h-[320px] overflow-y-auto flex justify-center flex-col gap-4"> 
                    <div class="flex gap-2 items-center justify-start">
                        <span>
                          <i class="fa-brands fa-servicestack text-4xl text-pink"></i>
                        </span>
                        <div class="flex flex-col pl-2">
                            <span class="text-base font-bold">Customer Services</span>
                            <span class="text-sm text-slate-500">Top notch customer services.</span>
                        </div>
                        
                    </div>
                    <div class="flex gap-2 items-center justify-start">
                        <span>
                          <i class="fa-solid fa-store text-4xl text-pink"></i>
                        </span>
                        <div class="flex flex-col pl-2">
                            <span class="text-base font-bold">Customer Services</span>
                            <span class="text-sm text-slate-500">Top notch customer services.</span>
                        </div>
                        
                    </div>
                    <div class="flex gap-2 items-center justify-start">
                        <span>
                          <i class="fa-solid fa-credit-card text-4xl text-pink"></i>
                        </span>
                        <div class="flex flex-col pl-2">
                            <span class="text-base font-bold">Customer Services</span>
                            <span class="text-sm text-slate-500">Top notch customer services.</span>
                        </div>
                        
                    </div>
                    <div class="flex gap-2 items-center justify-start">
                        <span>
                          <i class="fa-solid fa-bag-shopping text-5xl text-pink"></i>
                        </span>
                        <div class="flex flex-col pl-2">
                            <span class="text-base font-bold">Customer Services</span>
                            <span class="text-sm text-slate-500">Top notch customer services.</span>
                        </div>
                        
                    </div>
                   

                
            </div>
            
        </div>

        <div class=" sm:w-full lg:w-[35%] flex flex-col gap-4 sm:items-center lg:justify-start lg:items-start">
            <div class="h-[600px] sm:w-[350px] lg:w-[430px] bg-no-repeat object-cover">
                <img class="h-full w-full" src="{product_page}" alt="" srcset="">
            </div>
            <div class="flex gap-2 overflow-x-auto">
                <div class="h-[190px] w-[140px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
                <div class="h-[190px] w-[140px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
                <div class="h-[190px] w-[140px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-4 sm:w-full sm:justify-center sm:items-center lg:justify-start lg:items-start  lg:w-[40%] ">
            <span class="p-2 rounded-sm bg-slate-300 text-sm">37 order in last 24 hours <span class="pl-4">44 active view this</span></span>
            <span class="uppercase font-bold text-3xl">Brand New T-shirt</span>
            <div class="flex items-center">
                <span class="p-[4px] font-bold text-sm text-white bg-gray-600">#1 Best seller</span>
                <span class="text-sm pl-2">In Fashion</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-2xl font-semibold">$32.96</span>
                <strike class="text-sm text-slate-500">$459.00</strike>
                <span class="text-pink font-semibold">55% off</span>
            </div>
            <div class="flex items-start justify-start gap-2">
                <span class="pt-6">Color:</span>
                <div class="h-[80px] w-[60px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
                <div class="h-[80px] w-[60px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
                <div class="h-[80px] w-[60px] bg-no-repeat object-cover">
                    <img class="h-full w-full" src="{product_page}" alt="" srcset="">
                </div>
            </div>
            <hr class="text-gray border-dotted">
            <div class="flex gap-10 justify-between">
                <span class="text-black font-bold">Select Size</span>
                <span class="text-pink font-bold">Size Chart</span>
            </div>
            <div class="flex gap-2 ">
                <span class="text-black text-sm py-[8px] px-[14px] font-bold rounded bg-[#eff2e7]">s</span>
                <span class="text-black text-sm py-[8px] px-[14px] font-bold rounded bg-[#eff2e7]">M</span>
                <span class="text-black text-sm py-[8px] px-[14px] font-bold rounded bg-[#eff2e7]">l</span>
                <span class="text-black text-sm py-[8px] px-[14px] font-bold rounded bg-[#eff2e7]">xl</span>
            </div>

            <div class="flex flex-col gap-6">
                <span class="font-bold text-base text-black">Quantity</span>
                <div class="">
                    <span class="icon text-bold px-5 py-3 border border-gray-300 font-bold">&minus;</span>
                    <span class="px-8 py-3 border border-gray-300 ml-[-6px]">1</span>
                    <span class="icon text-bold px-5 py-3 border border-gray-300 font-bold ml-[-6px]">&plus;</span>

                </div>
            </div>

            <div class = "flex gap-2 pt-3">
                <a href="/"><button class="text-white flex items-center font-bold py-3 px-8 bg-pink cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                      </svg>
                      <span class="pl-2">Wishlist</span>
                    </button></a>
                <a href="/"><button class="text-white flex font-bold py-3 px-8 bg-pink cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                      <span class="pl-2">Add to Cart</span>
                    </button></a>
            </div>

            <div class="p-3 bg-[#eff2f7] text-left pr-20">
                <span>Free shipping for orders above $500 USD</span>
            </div>

            <div>
                <span class="font-bold">Hurry Up! Left <span class="text-pink">10</span> In Stock</span>
                <div class="w-[350px] h-[4px] bg-pink rounded-lg my-4"></div>
                <span class="text-gray-500 font-bold">Order in the next to get <span class="text-black font-bold">303</span> 
                Days:<span class="text-black font-bold pl-1 "> 13</span>
                Hour:<span class="text-black font-bold pl-1"> 50</span>
                Min: <span class="text-black font-bold pl-1"> 43</span>
                Sec</span>
            </div>

            <div class="">
                <span class="font-bold ">Share It</span>
                <div class="flex gap-4 py-4">
                    <span ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="black" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                     </svg></span>
                    <span class="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                           </svg>
                           
                    </span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                     </svg></span>

                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                            <circle cx="12" cy="12" r="3"></circle>
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                         </svg>
                     </span>
                </div>
            </div>
        </div>

    </div>

    <div class=" relative w-full flex flex-col sm:p-4 md:p-8 lg:p-12 xl: p-12">
        <div class="font-semibold text-lg  overflow-x-auto">
            <span class=" mx-6 border-b-2 border-red-600">Description</span>
            <span class=" mx-6 hover:border-b-2 hover:border-red-600">Specifications</span>
            <span class="mx-6 hover:border-b-2 hover:border-red-600">Sizing Guide</span>
            <span class="mx-6 hover:border-b-2 hover:border-red-600">Q & A</span>
            <span class="mx-6 hover:border-b-2 hover:border-red-600">Review</span>
        </div>
        <hr class="mt-4">
        <div>
            <span class="flex pt-6 flex-col sm:justify-center lg:justify-start">
                <h4 class=" font-bold text-xl">Give You A Complete Account Of The System
                </h4>
                <div class="flex gap-2 sm:flex-col sm:justify-start lg:justify-center lg:flex-row ">
                    <span class="sm:w-full leading-7 text-md pt-6 sm:text-center lg:text-start">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, 
                        but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                         To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some
                          advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has 
                          no annoying consequences, or one who avoids a pain that produces no resultant pleasure.
    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, autem nemo? Tempora vitae assumenda laudantium
                         unde magni, soluta repudiandae quam, neque voluptate deleniti consequatur laboriosam veritatis? Tempore dolor 
                         molestias voluptatum! Minima possimus, pariatur sed, quasi provident dolorum unde molestias, assumenda consequuntur
                          odit magni blanditiis obcaecati? Ea corporis odit dolorem fuga, fugiat soluta consequuntur magni.<br>
                          <span class="text-xl font-bold">Fabric</span>
                        <p>Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </span>

                          
                    <div class="flex justify-center h-[400px] w-[550px]">
                        <img class="object-cover w-full h-full" src="{heroImage}" alt="">
    
                    </div>
                </div>
                
            </span>
        </div>
    </div>
    <div class="overflow-x-auto">
        <div class="flex w-[100vw] justify-between gap-4  sm:px-4 md:px-10 lg:px-12 xl:px-16">
            <EachItems />
            <EachItems/>
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