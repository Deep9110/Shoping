<script>
        import footer1 from '$lib/images/footer_1.jpg';
        import footer2 from '$lib/images/footer_2.jpg';
        import footer3 from '$lib/images/footer_3.jpg';
        import footer4 from '$lib/images/footer_4.jpg';

</script>

<footer>
    <hr>
    <div class="flex justify-between items-center gap-8 flex-wrap sm:p-4 md:p-10 lg:p-12 xl:p-16">
        <div class="flex flex-col justify-start items-start gap-4">
            <div class="flex items-center justify-start">
                <a class="flex items-center gap-1" href="/">
                    <i class="fa-solid fa-star-of-life text-3xl text-pink font-bold"></i>
                    <span class="text-[26px] font-bold">Voxo</span>
                </a>        
            </div>
            <span class="text-black font-semibold">Phone: <span class="text-gray-500 text-sm tracking-widest"> + 847384384</span></span>
            <span class="text-black font-semibold">Address: <span class="text-gray-500 text-sm tracking-wide"> 1418 Riverwood Drive, Suite 3245<br> Cottonwood, CA 96052, United States</span></span>
            <span class="text-black font-semibold">Address: <span class="text-gray-500 text-sm tracking-wide"> Voxo123@gmail.com</span></span>
        </div>

        <div class="flex flex-col justify-start items-start gap-4">
            <span class="text-2xl font-bold text-black">About us</span>
            <span class="text-sm text-gray-500">Home</span>
            <span class="text-sm text-gray-500">Shop</span>
            <span class="text-sm text-gray-500">About Us</span>
            <span class="text-sm text-gray-500">Blog</span>
            <span class="text-sm text-gray-500">Contact</span>
        </div>
        <div class="flex flex-col justify-start items-start gap-4">
            <span class="text-2xl font-bold text-black">New Categories</span>
            <span class="text-sm text-gray-500">Latest Shoes</span>
            <span class="text-sm text-gray-500">Branded Jeans</span>
            <span class="text-sm text-gray-500">New Jackets</span>
            <span class="text-sm text-gray-500">Colorfull Hodies</span>
            <span class="text-sm text-gray-500">Shiner Googles</span>
        </div>
        <div class="flex flex-col justify-start items-start gap-4">
            <span class="text-2xl font-bold text-black">Get Help</span>
            <span class="text-sm text-gray-500">Your Order</span>
            <span class="text-sm text-gray-500">Your Account</span>
            <span class="text-sm text-gray-500">Track Order</span>
            <span class="text-sm text-gray-500">Your Wishlist</span>
            <span class="text-sm text-gray-500">Shopping FAQs</span>
        </div>

        <div class="flex flex-col justify-start items-start gap-4">
            <span class="text-2xl font-bold text-black">let's stay in touch</span>
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative sm:w-64 w-40 ">
                    <input type="text" id="footer-field" name="footer-field" placeholder=" Your Email Address" class="w-full bg-gray-300 bg-opacity-50 focus:ring-indigo-200 focus:pink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="inline-flex text-white bg-pink border-0 py-2 px-4 focus:outline-none ">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6 " viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                </button>
               
              </div>
              <span class="text-gray-500 text-sm">
                Keep up to date with our latest news and special offers.
            </span>
        </div>
    </div>
    <hr>
    <div class="py-8 flex items-center gap-6 flex-wrap sm:px-4 sm:justify-center md:px-10 lg:justify-between lg:px-12 xl:px-16">
        <div class="flex items-center gap-6">
            <span>We accept: </span>
            <div class="items-center flex">
                <img src="{footer1}" alt="">
            </div>
            <div class="items-center flex">
                <img src="{footer2}" alt="">
            </div>
            <div class="items-center flex">
                <img src="{footer3}" alt="">
            </div>
            <div class="items-center flex">
                <img src="{footer4}" alt="">
            </div>
            
        </div>
        <div>
            <span class="text-gray-500">© 2022, Voxo Theme. Made with heart by Misiki</span>
        </div>
    </div>
</footer>