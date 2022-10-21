<script>

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
             <div class="flex  sm:flex-col md:flex-row lg:flex-col overflow-x-auto  p-6  gap-4  w-full text-black text-lg bg-[#eff2f7]">  
                    <span class="flex items-center font-semibold hover:text-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="9 6 15 12 9 18"></polyline>
                         </svg>
                         <a href="/profile"><span class="">Dashboard</span></a> 
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
                         <a href="/profile/reviews"><span class="">Reviews</span></a> 
                    </span>
                
            </div>   
        </div>

        <div class="sm:w-full lg:w-[75%] pt-6 flex flex-col sm:justify-center lg:justify-start">
            <div class="flex justify-between">
                <span class="text-xl font-bold">Save Address</span>
                <a href="/"><button class="text-white text-sm font-bold py-3 px-4 bg-pink  hover:border-2 hover:border-pink hover:bg-white hover:text-black"><span class=" font-bold">&plus;</span>Add New Address</button></a>
            </div>
            <div class="flex pt-4 gap-4 w-full leading-7 sm:flex-col sm:justify-center sm:items-center lg:items-start lg:justify-start lg:flex-row">
                <div class="h-[260px] w-[350px] gap-4 bg-[#eff2f7] rounded-md p-4">
                    <div class="flex justify-between items-center">
                        <span class="text-lg">Mark Jugal</span>
                        <a href="/"><button class="text-white text-sm font-bold py-2 px-4 bg-pink  rounded">Home</button></a>
                    </div>
                    <span class="text-gray-500 py-8">549 Sulphur Springs Road<br>

                        Downers Grove, IL<br>
                        
                        60515</span>
                        <br>

                    <span class=" py-12 text-sm text-gray-500">Mobile No. +1-123-456-7890
                    </span>

                    <div class="flex gap-2 pt-4">
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Edit</button></a>
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Remove</button></a>
                    </div>
                </div>
                <div class="h-[260px] w-[350px] gap-4 bg-[#eff2f7] rounded-md p-4">
                    <div class="flex justify-between items-center">
                        <span class="text-lg">Mark Jugal</span>
                        <a href="/"><button class="text-white text-sm font-bold py-2 px-4 bg-pink  rounded">Home</button></a>
                    </div>
                    <span class="text-gray-500 py-8">549 Sulphur Springs Road<br>

                        Downers Grove, IL<br>
                        
                        60515</span>
                        <br>

                    <span class=" py-12 text-sm text-gray-500">Mobile No. +1-123-456-7890
                    </span>

                    <div class="flex gap-2 pt-4">
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Edit</button></a>
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Remove</button></a>
                    </div>
                </div>
                <div class="h-[260px] w-[350px] gap-4 bg-[#eff2f7] rounded-md p-4">
                    <div class="flex justify-between items-center">
                        <span class="text-lg">Mark Jugal</span>
                        <a href="/"><button class="text-white text-sm font-bold py-2 px-4 bg-pink  rounded">Home</button></a>
                    </div>
                    <span class="text-gray-500 py-8">549 Sulphur Springs Road<br>

                        Downers Grove, IL<br>
                        
                        60515</span>
                        <br>

                    <span class=" py-12 text-sm text-gray-500">Mobile No. +1-123-456-7890
                    </span>

                    <div class="flex gap-2 pt-4">
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Edit</button></a>
                        <a href="/"><button class="py-3 px-14 bg-white text-sm">Remove</button></a>
                    </div>
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