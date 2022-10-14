<script>
  import Hero from '$lib/components/landing/Hero.svelte';
  import LoopTesing from '$lib/components/LoopTesing.svelte';
  	import heroimage from '$lib/images/hero-image.jpg';
    import section21 from '$lib/images/section_2_1.jpg';
    import section22 from '$lib/images/section_2_2.jpg';
    import section23 from '$lib/images/section_2_3.jpg';
    import section31 from '$lib/images/section_3_1.jpg';
    import section32 from '$lib/images/section_3_2.jpg';
    import section33 from '$lib/images/section_3_3.jpg';
    import section34 from '$lib/images/section_3_4.jpg';
    import section41 from '$lib/images/section_4_1.jpg';
    import section42 from '$lib/images/section_4_2.jpg';
    import section43 from '$lib/images/section_4_3.jpg';
    import section44 from '$lib/images/section_4_4.jpg';
    import section51 from '$lib/images/section_5_1.jpg';
    import section52 from '$lib/images/section_5_2.jpg';
    import section53 from '$lib/images/section_5_3.jpg';
    import section54 from '$lib/images/section_5_4.jpg';
    import section7 from '$lib/images/section_7.jpg';
    import section81 from '$lib/images/section_8_1.jpg';
    import section82 from '$lib/images/section_8_2.jpg';
    import section83 from '$lib/images/section_8_3.jpg';
    import section84 from '$lib/images/section_8_4.jpg';
    import section85 from '$lib/images/section_8_5.jpg';

</script>

<main class="relative">
  <!-- <Hero /> -->

  <!-- <LoopTesing /> -->
  <!-- section-1 -->
    <div class="relative flex w-full h-screen">
      <!-- left side -->
        <div class="absolute h-screen flex flex-col justify-center items-start bg-[#232323] sm:p-4 sm:invisible sm:hidden sm:w-full md:p-8 lg:p-12 lg:visible lg:flex lg:w-[28%] ">
            <h1 class="text-[40px] text-white font-bold">Raw Ham Colorblock T-shirt</h1>
            <span class="flex gap-2 py-4 items-center">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                <span>
                    <p class="text-white font-medium">( 5040 Review )</p>
                </span>
            </span>
            <span>
                <p class="text-slate-500">The international hoodies with excellent durable fabric, not to heavy but
                    simply perfect for Indian summer.
                </p>
            </span>
            <span class="py-4">
                <span class="text-white font-bold text-[40px]">$49.55</span>
                <span class="text-pink font-bold text-[30px]">$49.55</span>
            </span>

            <div class="flex items-start">
                <div class="flex items-center">
                    <div class="relative">
                      <select class="bg-black text-white appearance-none py-2 focus:outline-none focus:ring-2 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option class="text-sm">Size</option>
                        <option class="text-sm">SM</option>
                        <option class="text-sm">M</option>
                        <option class="text-sm">L</option>
                        <option class="text-sm">XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-white pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                </div>
                <div class="flex ml-4  items-center">
                    <div class="relative">
                      <select class="bg-black text-white appearance-none py-2 focus:outline-none focus:ring-2 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option class="text-sm">Color</option>
                        <option class="text-sm">Black</option>
                        <option class="text-sm">White</option>
                        <option class="text-sm">Blue</option>
                        <option class="text-sm">Gray</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-white pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                </div>
                <div class="flex ml-4  items-center">
                    <div class="relative">
                      <select class="bg-black text-white appearance-none py-2 focus:outline-none focus:ring-2 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option class="text-sm">Qty</option>
                        <option class="text-sm">1</option>
                        <option class="text-sm">2</option>
                        <option class="text-sm">3</option>
                        <option class="text-sm">4</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-white pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                </div>
            </div>

            <div class="flex gap-4 py-8">
                <div class="flex justify-center items-center border bg-white text-black hover:bg-black hover:text-white px-6 py-2 font-semibold text-sm">
                    <a href="/"><button>Add To Cart</button></a>
                </div>
                <div>
                    <span class="flex justify-center hover:bg-black hover:border-1 hover:border-pink">
                        <i class="fa-regular fa-heart text-md hover:border hover:border-pink text-white hover:text-pink bg-pink font-bold p-4 hover:bg-black"></i>
                    </span>
                </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-white">Share With</span>
              <ul class="flex gap-4 px-4 py-1 bg-black">
                <li><a href="/"><i class="fa-brands fa-facebook-f text-blue-700"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-google text-green-500"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-twitter text-sky-400"></i></a></li>
              </ul>
            </div>
        </div>

        <!-- right side -->
        <div class="absolute flex h-screen bg-cover bg-no-repeat sm:w-[100vw] lg:w-[72%] lg:left-[28%]"
            style="background-position:center center; background-image:url('{heroimage}')"
          >
          <div class="flex flex-col h-full items-start justify-center pl-12">
            <span class="font-semibold text-lg">
              Sale<span class="text-pink pl-2">70% OFF</span>
            </span>
            <span class="py-6">
              <h1 class="text-6xl font-bold text-black">New <br> Tranding <br> Fashion</h1>
            </span>
            <span class="py-4">
              <p class="uppercase text-md font-bold tracking-widest">Buy One Get One <span class="text-pink">Free</span></p>
            </span>
            <div class="flex gap-4 py-4">
              <div class="">
                <i class="fa-solid fa-play text-md bg-pink text-white py-[14px] px-[16px] p rounded-full border-4 border-slate-200"></i>
              </div>
              <div class="flex flex-col ">
                <span class="text-pink text-xl">Discover</span>
                <span class="text-slate-800 text-sm">Our Collection</span>
              </div>
            </div>
          </div>
          <!-- <img src="{heroimage}" alt=""> -->
        </div>
    </div>

    <!-- section-2  -->

    <div class="relative flex items-cente justify-center gap-6 sm:p-4 sm:flex-wrap md:p-12 md:flex-nowrap lg:p-16 ">
      <div class="relative h-[400px] w-[450px] bg-cover"
            style="background-position:center center; background-image:url('{section21}')"
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
      </div>
      <div class="relative h-[400px] w-[450px] bg-cover"
            style="background-position:center center; background-image:url('{section22}')"
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
      </div>

      <div class="relative h-[400px] w-[450px] bg-cover"
            style="background-position:center center; background-image:url('{section23}')"
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- section-3 -->

    <div class="relative flex flex-col pb-8 sm:px-4 md:px-12 lg:px-16">
      <div class="flex flex-col justify-center items-center pb-4">
        <span class="font-bold text-3xl">New Arrival</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="relative flex items-center justify-center gap-6 overflow-x-auto">
        <div class="flex flex-col">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section31}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section32}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section33}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section34}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section-4 -->

    <div class="relative flex justify-center flex-col pb-8 sm:px-4 md:px-12 lg:px-16">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">Our Categories</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="flex relative gap-6 sm:flex-col lg:flex-row">
        <div class="absolute flex items-center justify-between sm:w-full sm:h-[120px] lg:w-[250px] bg-pink text-white px-6 py-8">
          <div class="flex flex-col gap-4">
            <span class="text-3xl text-white font-bold">Our Top</span>
            <span class="text-md tracking-wide text-white font-semibold uppercase">C a t e g o r i e s</span>
          </div>
          <div class="flex flex-col gap-4">
            <i class="fa-solid fa-chevron-left px-[12px] py-[6px] rounded-full bg-white hover:text-pink text-black text-sm"></i>
            <i class="fa-solid fa-chevron-right px-[12px] py-[6px] rounded-full bg-white hover:text-pink text-black text-sm"></i>
          </div>
        </div>
        <div class="flex sm:mt-[125px] sm:overflow-auto lg:overflow-hidden  sm:ml-0  lg:mt-0 lg:ml-[260px] gap-6">
          <div class="relative h-[120px] w-[260px] bg-cover "
              style="background-position:center center; background-image:url('{section41}')"
            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover"
              style="background-position:center center; background-image:url('{section42}')"
            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
              style="background-position:center center; background-image:url('{section43}')"
            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
              style="background-position:center center; background-image:url('{section44}')"
            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
              style="background-position:center center; background-image:url('{section41}')"
            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
          </div>
        </div>
        
        </div>
      </div>
    </div>

    <!-- section-5 -->
    <div class="relative flex flex-col pb-8 sm:px-4 md:px-12 lg:px-16">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">Our Categories</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="flex items-center justify-between gap-8 w-full sm:flex-wrap md:flex-nowrap">
        <div class="relative h-[500px] bg-cover sm:w-full md:w-[50%]"
          style="background-position:center center; background-image:url('{section51}')"
          >
          <div class="flex flex-col h-full w-full items-end justify-center text-right sm:px-8 lg:px-14">
            <span class="text-sm">New<span class="text-pink pl-2">Collections</span></span>
            <span class="text-black font-bold text-5xl py-4">New Red<br> Jackets From</span>
            <span class="text-pink font-bold text-4xl pb-4">$48</span>
            <div class="flex justify-center items-center border bg-white text-black hover:bg-black hover:text-white px-6 py-2 font-semibold text-sm">
              <a href="/"><button>Add To Cart</button></a>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 sm:w-full md:w-[50%]">
          <div class="relative h-[250px] w-[100%] bg-cover"
            style="background-position:center center; background-image:url('{section52}')"
            >
            <div class="flex flex-col h-full w-full items-start justify-center text-right sm:px-8 lg:px-14">
              <span class="text-3xl font-bold">New Hoodies from</span>
              <span class="text-4xl font-bold text-pink py-4">$34</span>
              <div class="flex justify-center items-center border bg-white text-black hover:bg-black hover:text-white px-6 py-2 font-semibold text-sm">
                <a href="/"><button>Add To Cart</button></a>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="relative h-[230px] w-[50%] bg-cover "
              style="background-position:center center; background-image:url('{section53}')"
              >
              <div class="absolute flex justify-center bottom-[20px] left-[60px] right-[60px]">
                <div class="flex flex-col items-center justify-center text-center h-[100px] w-[220px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
                  <span class="text-xl font-bold text-white">
                    New Jacket
                  </span>
                  <span class="py-2">
                    <p class="uppercase text-[10px] font-bold tracking-widest text-white">Discount-70%</p>
                  </span>
                </div>
              </div>
            </div>
            <div class="relative h-[230px] w-[50%] bg-cover "
              style="background-position:center center; background-image:url('{section54}')"
              >
              <div class="absolute flex justify-center bottom-[20px] left-[60px] right-[60px]">
                <div class="flex flex-col items-center justify-center text-center h-[100px] w-[220px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
                  <span class="text-xl font-bold text-white">
                    New Jacket
                  </span>
                  <span class="py-2">
                    <p class="uppercase text-[10px] font-bold tracking-widest text-white">Discount-70%</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- section-6 -->
    <div class="relative flex flex-col pb-8 sm:px-4 md:px-12 lg:px-16 ">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">New Arrival</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="grid grid-cols-4 grid-rows-2 auto-cols-auto	gap-y-4 items-center justify-center place-items-center sm:grid-cols-1 sm:grid-rows-none md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-2 ">
        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section31}'); "
          >
            <div class=" absolute top-[32px]">
              <span class="bg-black p-2 text-white font-bold text-md mr-[80px] ">NEW</span>
              <span class="bg-pink p-2 text-white font-bold text-md ml-[60px]">50% OFF</span>
            </div>
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section32}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section33}'); "
          >
          <div class=" absolute top-[32px]">
            <span class="bg-black p-2 text-white font-bold text-md mr-[80px] ">NEW</span>
            <span class="bg-pink p-2 text-white font-bold text-md ml-[60px]">50% OFF</span>
          </div>
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section34}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section32}'); "
          >
            <div class=" absolute top-[32px]">
              <span class="bg-black p-2 text-white font-bold text-md mr-[80px] ">NEW</span>
              <span class="bg-pink p-2 text-white font-bold text-md ml-[60px]">50% OFF</span>
            </div>
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section31}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section34}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col  w-[320px]">
          <div class="relative flex justify-center h-[410px] w-[320px] bg-cover "
          style="background-position:center center; background-image:url('{section33}'); "
          >
            <div class="absolute flex items-center gap-2 px-6 bottom-4">
              <span class=" hover:visible">
                <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
              <span>
                <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
              </span>
              <span>
                <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
              </span>
            </div>
          </div>
          <div class="flex justify-between items-center py-2 w-[320px]">
            <div class="flex flex-col items-start gap-2">
              <span class="text-slate-500">B&Y Jacket</span>
              <span class="font-semibold text-md">Slim Fit Plasitc...</span>
            </div>
            <div class="flex flex-col items-end ">
              <span class="flex gap-2">
                <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
                  <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              </span>
              <span class="font-bold text-xl text-pink">$78.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section-7 -->
    <div class="sm:p-4 md:p-8 lg:p-12 xl:p-16">
      <div class="relative flex justify-center h-[650px] w-[100%] bg-cover sm:p-4 md:p-12"
          style="background-position:center center; background-image:url('{section7}'); "
          >
        <div class="absolute flex flex-col justify-center items-center left-0 top-[40%] h-[100px] w-[300px] bg-[#e22e5bc6] sm:invisible sm:hidden lg:visible lg:flex">
          <span class="text-white font-bold text-xl">Latest Jacket</span>
          <span class="text-white uppercase font-bold text-sm tracking-widest">Buy One Get One Free</span>
        </div>
        <div class="flex flex-col justify-center items-center text-center leading-[50px]">
          <span>
            <i class="fa-regular fa-heart text-md rounded-full text-pink font-bold p-[10px] bg-[#e22e5b8a]"></i>
          </span>
          <span class="text-black">Special Discount <span class="text-pink">70% OFF</span></span>
          <span class="font-bold py-4 sm:text-3xl lg:text-4xl">Deal Of The Day<br> From <span class="text-pink">$75</span></span>
          <div class="flex gap-2 py-4">
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">314</span>
              <span>Days</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">8</span>
              <span>Hour</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">9</span>
              <span>Min</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">20</span>
              <span>Second</span>
            </div>
          </div>
          <div class="py-4">
            <div class="flex justify-center items-center border bg-pink text-white px-6 py-2 font-semibold text-sm">
              <a href="/"><button>Add To Cart</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section-8 -->

    <div class="relative flex flex-col pb-8 sm:px-4">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">Instagram Shop</span>
        <span class="font-semibold text-gray-500 text-base">New collection</span>
      </div>
      <div class="relative flex items-center p-4 gap-6 overflow-x-auto sm:justify-center md:justify-between">

        <div class="relative flex justify-center h-[350px] sm:w-[350px] lg:w-[360px] bg-cover "
          style="background-position:center center; background-image:url('{section81}'); "
          >
          <div class="h-[350px] sm:w-[350px]  bg-transparent hover:bg-[#e22e5bc6]">
            <span class=" absolute top-[14px] right-[14px] ">
              <i class="fa-regular fa-heart text-md rounded-full text-pink hover:text-blue-400  p-[8px] bg-white"></i>
            </span>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col text-center leading-[50px] justify-center items-center text-white font-semibold">
              <span >New offer -50% Discount</span>
              <span class="text-bold text-2xl">Women T-shirt From <br> $35</span>
              <a class="py-4" href="/"><button class="text-white text-sm py-[6px]  px-6 bg-[#d895a6c6]">Shop Now 
                <i class="fa-solid fa-chevron-right text-white text-[10px] pl-1"></i>

              </button></a>

              <span class="absolute top-[14px] left-[1px] flex flex-col">   
                <i class="fa-solid fa-plus text-pink rounded-full text-md p-[8px] m-6 bg-white"></i>
                <span class="uppercase text-md font-bold mt-[14px] rotate-90 text-white tracking-widest">S h a r e</span>
             </span>
            </div>
            
          </div>
        </div>
        
        <div class="relative flex justify-center h-[350px] sm:w-[350px] lg:w-[360px] bg-cover "
          style="background-position:center center; background-image:url('{section82}'); "
          >
          <div class="h-[350px] sm:w-[350px] bg-transparent hover:bg-[#e22e5bc6]">
            <span class=" absolute top-[14px] right-[14px] ">
              <i class="fa-regular fa-heart text-md rounded-full text-pink hover:text-blue-400  p-[8px] bg-white"></i>
            </span>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col text-center leading-[50px] justify-center items-center text-white font-semibold">
              <span >New offer -50% Discount</span>
              <span class="text-bold text-2xl">Women T-shirt From <br> $35</span>
              <a class="py-4" href="/"><button class="text-white text-sm py-[6px]  px-6 bg-[#d895a6c6]">Shop Now 
                <i class="fa-solid fa-chevron-right text-white text-[10px] pl-1"></i>

              </button></a>

              <span class="absolute top-[14px] left-[1px] flex flex-col">   
                <i class="fa-solid fa-plus text-pink rounded-full text-md p-[8px] m-6 bg-white"></i>
                <span class="uppercase text-md font-bold mt-[14px] rotate-90 text-white tracking-widest">S h a r e</span>
             </span>
            </div>
            
          </div>
        </div>

        <div class="relative flex justify-center h-[350px] sm:w-[350px] lg:w-[360px] bg-cover "
          style="background-position:center center; background-image:url('{section83}'); "
          >
          <div class="h-[350px] sm:w-[350px] bg-transparent hover:bg-[#e22e5bc6]">
            <span class=" absolute top-[14px] right-[14px] ">
              <i class="fa-regular fa-heart text-md rounded-full text-pink hover:text-blue-400  p-[8px] bg-white"></i>
            </span>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col text-center leading-[50px] justify-center items-center text-white font-semibold">
              <span >New offer -50% Discount</span>
              <span class="text-bold text-2xl">Women T-shirt From <br> $35</span>
              <a class="py-4" href="/"><button class="text-white text-sm py-[6px]  px-6 bg-[#d895a6c6]">Shop Now 
                <i class="fa-solid fa-chevron-right text-white text-[10px] pl-1"></i>

              </button></a>

              <span class="absolute top-[14px] left-[1px] flex flex-col">   
                <i class="fa-solid fa-plus text-pink rounded-full text-md p-[8px] m-6 bg-white"></i>
                <span class="uppercase text-md font-bold mt-[14px] rotate-90 text-white tracking-widest">S h a r e</span>
             </span>
            </div>
            
          </div>
        </div>

        <div class="relative flex justify-center h-[350px] sm:w-[350px] lg:w-[360px] bg-cover "
          style="background-position:center center; background-image:url('{section84}'); "
          >
          <div class="h-[350px] sm:w-[350px] bg-transparent hover:bg-[#e22e5bc6]">
            <span class=" absolute top-[14px] right-[14px] ">
              <i class="fa-regular fa-heart text-md rounded-full text-pink hover:text-blue-400  p-[8px] bg-white"></i>
            </span>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col text-center leading-[50px] justify-center items-center text-white font-semibold">
              <span >New offer -50% Discount</span>
              <span class="text-bold text-2xl">Women T-shirt From <br> $35</span>
              <a class="py-4" href="/"><button class="text-white text-sm py-[6px]  px-6 bg-[#d895a6c6]">Shop Now 
                <i class="fa-solid fa-chevron-right text-white text-[10px] pl-1"></i>

              </button></a>

              <span class="absolute top-[14px] left-[1px] flex flex-col">   
                <i class="fa-solid fa-plus text-pink rounded-full text-md p-[8px] m-6 bg-white"></i>
                <span class="uppercase text-md font-bold mt-[14px] rotate-90 text-white tracking-widest">S h a r e</span>
             </span>
            </div>
            
          </div>
        </div>

        <div class="relative flex justify-center h-[350px] sm:w-[350px] lg:w-[360px] bg-cover "
          style="background-position:center center; background-image:url('{section85}'); "
          >
          <div class="h-[350px] sm:w-[350px] bg-transparent hover:bg-[#e22e5bc6]">
            <span class=" absolute top-[14px] right-[14px] ">
              <i class="fa-regular fa-heart text-md rounded-full text-pink hover:text-blue-400  p-[8px] bg-white"></i>
            </span>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col text-center leading-[50px] justify-center items-center text-white font-semibold">
              <span >New offer -50% Discount</span>
              <span class="text-bold text-2xl">Women T-shirt From <br> $35</span>
              <a class="py-4" href="/"><button class="text-white text-sm py-[6px]  px-6 bg-[#d895a6c6]">Shop Now 
                <i class="fa-solid fa-chevron-right text-white text-[10px] pl-1"></i>

              </button></a>

              <span class="absolute top-[14px] left-[1px] flex flex-col">   
                <i class="fa-solid fa-plus text-pink rounded-full text-md p-[8px] m-6 bg-white"></i>
                <span class="uppercase text-md font-bold mt-[14px] rotate-90 text-white tracking-widest">S h a r e</span>
             </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <!-- section-9 -->
    <div class="flex items-center justify-around sm:flex-wrap sm:p-4 gap-8 md:p-10 lg:p-16 lg:flex-nowrap">
      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-brands fa-servicestack text-5xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-store text-4xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-credit-card text-4xl text-pink"></i>
        </span>
        <span class="text-xl font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-bag-shopping text-4xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>
    </div>
  </main>