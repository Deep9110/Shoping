<script>
    import dashboard_1 from "$lib/images/dashboard_1.png";
</script>

<div class="flex flex-col items-center ">
    <div class="h-[35vh] w-full flex items-center justify-center bg-[#eff2f7]">
        <div class="flex flex-col items-center gap-4">
            <span class="font-bold text-3xl ">User Dashboard</span>
            <span>
                <i class="fa-solid fa-house text-pink hover:text-[#4B83D6] "></i>
                <span class="text-gray-500">&nbsp;/&nbsp;User Dashboard</span>
            </span>
        </div> 
    </div>

    <div class="relative w-full gap-6 flex sm:p-4 sm:flex-col md:p-8 lg:flex-row lg:p-12 xl: p-12">

        <div class="sm:w-full lg:w-[25%] flex flex-col sm:justify-center sm:h-[100px] lg:h-[280px]">
            <!-- <button class:active={isOpen} class="accordion" on:click={() => !isOpen}>
                Section 1
                <span class="icon">&plus;</span>
            </button>
            <div class="panel" class:open-panel={isOpen}>
              <p>Lorem ipsum...</p>
            </div> -->

            <div class="flex  sm:flex-col md:flex-row lg:flex-col overflow-x-auto  p-6  gap-4  w-full text-black text-lg bg-[#eff2f7]">
                 
                    
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/"><span class="">Dashboard</span></a> 
                    </span>
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/profile/order"><span class="">Orders</span></a> 
                    </span>
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/profile/user"><span class="">Profile</span></a> 
                    </span>
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/profile/address"><span class="">Saved Address</span></a> 
                    </span>
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/"><span class="">Dashboard</span></a> 
                    </span>


                
            </div>


            
            
        </div>

        <div class="sm:w-full lg:w-[75%] flex flex-col sm:justify-center lg:justify-start">
            <div>
                <span class="text-4xl font-bold border-b-2 border-slate-300">My Dashboard</span>
                <div class="bg-pink w-[80px] h-[4px] rounded-lg mt-[5px]"></div>
            </div>
            <div class="py-6 flex flex-col ">
                <span class="text-gray-500 text-sm">Hello, <span class="uppercase text-base text-black font-bold tracking-widest">Mark Jecno</span></span>
                <span class="text-gray-500 pt-2 text-sm">From your My Account Dashboard you have the ability to view a snapshot of your recent account 
                    activity and update your account information. Select a link below to view or edit information.</span>
            </div>
            <div class="flex gap-6 sm:flex-col md:flex-row ">
                <div class="flex rounded-md w-[300px] py-4 px-6 justify-start items-center bg-[#eff2f7]">
                    <div class="h-[60px] w-[60px]">
                        <img  src="{dashboard_1}" alt="">
                    </div>
                    <div class="flex flex-col pl-4 gap-1">
                        <span class="text-gray-500">Total Order</span>
                        <span class="text-lg font-bold text-black">3648</span>
                    </div>
                </div>
                <div class="flex rounded-md w-[300px] py-4 px-6 justify-start items-center bg-[#eff2f7]">
                    <div class="h-[60px] w-[60px]">
                        <img  src="{dashboard_1}" alt="">
                    </div>
                    <div class="flex flex-col pl-4 gap-1">
                        <span class="text-gray-500">Total Order</span>
                        <span class="text-lg font-bold text-black">3648</span>
                    </div>
                </div>
                <div class="flex rounded-md w-[300px] py-4 px-6 justify-start items-center bg-[#eff2f7]">
                    <div class="h-[60px] w-[60px]">
                        <img  src="{dashboard_1}" alt="">
                    </div>
                    <div class="flex flex-col pl-4 gap-1">
                        <span class="text-gray-500">Total Order</span>
                        <span class="text-lg font-bold text-black">3648</span>
                    </div>
                </div>
            </div>


            <div class="w-full pt-6">
                <span class="text-xl font-bold">Accout Information</span>
                <div class="flex sm:flex-col gap-4 md:flex-row w-full pt-2">
                    <div class="flex flex-col sm:w-full md:w-1/2 leading-7">
                        <div class="flex justify-between w-full">
                            <span class="text-lg font-semibold">Contact Information</span>
                            <span class="text-pink text-sm">Edit</span>
                        </div>
                        <hr class="text-gray-500">
                        <span class="Uppercase text-gray-500">Mark Jecno</span>
                        <span class="Uppercase text-gray-500">Mark Jecno<span class="text-sm">@gmail.com</span>
                    </div>
                    <div class="flex flex-col sm:w-full md:w-1/2 leading-7">
                        <div class="flex justify-between w-full">
                            <span class="text-lg font-semibold">Contact Information</span>
                            <span class="text-pink text-sm">Edit</span>
                        </div>
                        <hr class="text-gray-500">
                        <span class="Uppercase text-gray-500">Mark Jecno</span>
                        <span class="Uppercase text-gray-500">Mark Jecno<span class="text-sm">@gmail.com</span>
                    </div>
                </div>
                <span class="text-pink pt-2 hover:text-blue-700 text-sm">Change Password</span>
                <div class="flex sm:flex-col gap-4 md:flex-row w-full pt-2">
                    <div class="flex flex-col w-full leading-7">
                        <div class="flex justify-between w-full">
                            <span class="text-lg font-semibold">Contact Information</span>
                            <span class="text-pink text-sm">Edit</span>
                        </div>
                        <hr class="text-gray-500">
                        <div class="flex justify-between sm:flex-col md:flex-row w-full">
                            <div class="flex flex-col w-1/2 leading-7">
                                <span class="Uppercase text-gray-500">Mark Jecno</span>
                                <span class="Uppercase text-gray-500">Mark Jecno<span class="text-sm">@gmail.com</span><br>
                                <span class="text-pink pt-2 hover:text-blue-700 text-sm">Change Password</span>
                            </div>
                            <div class="flex flex-col w-1/2 leading-7">
                                <span class="Uppercase text-gray-500">Mark Jecno</span>
                                <span class="Uppercase text-gray-500">Mark Jecno<span class="text-sm">@gmail.com</span><br>
                                <span class="text-pink pt-2 hover:text-blue-700 text-sm">Change Password</span>
                            </div>
                        </div>
                    </div>
                    
                    <hr class="text-gray-500">

                </div>
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