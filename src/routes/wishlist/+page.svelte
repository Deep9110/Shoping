<script>
    import cartimage1 from '$lib/images/image1.jpg';

</script>

<div>
 
    <div class="h-[35vh] w-full flex items-center justify-center bg-[#eff2f7]">
        <div class="flex flex-col items-center gap-4">
            <span class="font-bold text-3xl ">Wishlist</span>
            <span>
                <i class="fa-solid fa-house text-pink hover:text-[#4B83D6] "></i>
                <span class="text-gray-500">&nbsp;/&nbsp;Wishlist</span>
            </span>
        </div> 
    </div>

    <div class="overflow-x-auto max-w-auto pt-12 sm:px-4 md:px-10 lg:px-12 xl:px-16">
        <table class="table w-full">
          <!-- head -->
          <thead class="">
            <tr class="text-xl font-bold uppercase">
              <th class="text-lg font-bold uppercase" >Image</th>
              <th class="text-lg font-bold uppercase">Product Name</th>
              <th class="text-lg font-bold uppercase">Price</th>
              <th class="text-lg font-bold uppercase">Availability</th>
              <th class="text-lg font-bold uppercase">Action</th>
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
              <td class="text-slate-500">Yello Jacket</td>
              <td class="text-pink font-semibold text-xl">
                $63.00
              </td>
              <td><span class="">In Stock</span></td>

              <td>
                <span class="">
                    <i class="fa-solid fa-xmark text-pink py-1 px-3 text-lg bg-whitegray mr-2 border-2"></i>
                    <i class="fa-solid fa-cart-shopping text-pink p-2 text-md bg-whitegray ml-2 border-2 "></i>

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
                  <td class="text-slate-500">Yello Jacket</td>
                  <td class="text-pink font-semibold text-xl">
                    $63.00
                  </td>
                  <td><span class="">In Stock</span></td>
    
                  <td>
                    <span class="">
                        <i class="fa-solid fa-xmark text-pink py-1 px-3 text-lg border bg-whitegray mr-2 border-2"></i>
                        <i class="fa-solid fa-cart-shopping text-pink p-2 text-md border bg-whitegray ml-2 border-2 "></i>
    
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
                  <td class="text-slate-500">Yello Jacket</td>
                  <td class="text-pink font-semibold text-xl">
                    $63.00
                  </td>
                  <td><span class="">In Stock</span></td>
    
                  <td>
                    <span class="">
                        <i class="fa-solid fa-xmark text-pink py-1 px-3 text-lg border bg-whitegray mr-2 border-2"></i>
                        <i class="fa-solid fa-cart-shopping text-pink p-2 text-md border bg-whitegray ml-2 border-2 "></i>
    
                    </span>
                  </td>
            </tr>
          </tbody>
        </table>
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