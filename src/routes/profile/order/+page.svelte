<script>
    import cartimage1 from "$lib/images/image1.jpg"
    // import OrderRow from '$lib/components/OrderRow.svelte';
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
                         <a href="/address"><span class="">Saved Address</span></a> 
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
            <div class="overflow-x-auto ">
                <table class="table w-full">
                  <!-- head -->
                  <thead class="">
                    <tr class="text-xl font-bold uppercase">
                      <th class="text-lg font-bold uppercase" >Image</th>
                      <th class="text-lg font-bold uppercase">Order id</th>
                      <th class="text-lg font-bold uppercase">Product Details</th>
                      <th class="text-lg font-bold uppercase">Status</th>
                      <th class="text-lg font-bold uppercase">Price</th>
                      <th class="text-lg font-bold uppercase">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>
                        <a href="/">
                            <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                        </a>
                      </th>
                      <td class="text-black text-sm">#123021</td>
                      <td class="text-black font-bold">
                        Outwear & Coats
                      </td>
                      <td><span class="text-white bg-green-700 text-sm px-3 py-2 rounded">Shipped</span></td>
            
                      <td>
                        <span class=" text-pink text-lg"> $49.54</span>
                      </td>
            
                      <td>
                        <span class="text-pink hover:text-black ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                             </svg>
                        </span>
                      </td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                        <th>
                          <a href="/">
                              <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                          </a>
                        </th>
                        <td class="text-black text-sm">#123021</td>
                        <td class="text-black font-bold">
                          Outwear & Coats
                        </td>
                        <td><span class="text-white bg-pink text-sm px-3 py-2 rounded">Pending</span></td>
              
                        <td>
                          <span class=" text-pink text-lg"> $49.54</span>
                        </td>
              
                        <td>
                          <span class="text-pink hover:text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <circle cx="12" cy="12" r="2"></circle>
                                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                               </svg>
                          </span>
                        </td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <th>
                          <a href="/">
                              <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                          </a>
                        </th>
                        <td class="text-black text-sm">#123021</td>
                        <td class="text-black font-bold">
                          Outwear & Coats
                        </td>
                        <td><span class="text-white bg-green-700 text-sm px-3 py-2 rounded">Shipped</span></td>
              
                        <td>
                          <span class=" text-pink text-lg"> $49.54</span>
                        </td>
              
                        <td>
                          <span class="text-pink hover:text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <circle cx="12" cy="12" r="2"></circle>
                                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                               </svg>
                          </span>
                        </td>
                    </tr>
                    <!-- row-3 -->
                    <!-- <OrderRow /> -->
                    <tr>
                        <th>
                          <a href="/">
                              <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                          </a>
                        </th>
                        <td class="text-black text-sm">#123021</td>
                        <td class="text-black font-bold">
                          Outwear & Coats
                        </td>
                        <td><span class="text-white bg-green-700 text-sm px-3 py-2 rounded">Shipped</span></td>
              
                        <td>
                          <span class=" text-pink text-lg"> $49.54</span>
                        </td>
              
                        <td>
                          <span class="text-pink hover:text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <circle cx="12" cy="12" r="2"></circle>
                                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                               </svg>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <th>
                          <a href="/">
                              <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                          </a>
                        </th>
                        <td class="text-black text-sm">#123021</td>
                        <td class="text-black font-bold">
                          Outwear & Coats
                        </td>
                        <td><span class="text-white bg-pink text-sm px-3 py-2 rounded">Caneceled</span></td>
              
                        <td>
                          <span class=" text-pink text-lg"> $49.54</span>
                        </td>
              
                        <td>
                          <span class="text-pink hover:text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <circle cx="12" cy="12" r="2"></circle>
                                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                               </svg>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <th>
                          <a href="/">
                              <img class="w-[50px] h-[80px]" src="{cartimage1}" alt="">
                          </a>
                        </th>
                        <td class="text-black text-sm">#123021</td>
                        <td class="text-black font-bold">
                          Outwear & Coats
                        </td>
                        <td><span class="text-white bg-pink text-sm px-3 py-2 rounded">Cancelled</span></td>
              
                        <td>
                          <span class=" text-pink text-lg"> $49.54</span>
                        </td>
              
                        <td>
                          <span class="text-pink hover:text-black ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <circle cx="12" cy="12" r="2"></circle>
                                  <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                               </svg>
                          </span>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    
        
    </div>
</div>