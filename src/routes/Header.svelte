<script>
	// import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	
	import logoicon from '$lib/images/logo-icon.png';
	import logo from '$lib/images/logo.png';
	//import login from 'auth/login.svelte';

</script>

<header class=" bg-white w-full">
	<div class="flex items-center justify-between h-[90px] sm:px-4 md:px-12 lg:px-16 xl:px-24">
		<div class="flex items-center justify-start">
			<a class="flex items-center gap-1" href="/">
				<!-- <img class="h-8 w-8" src="{logoicon}" alt="logo"> -->
				<i class="fa-solid fa-star-of-life text-3xl text-pink font-bold"></i>
				<!-- <img class="h-[28px] w-auto" src="{logo}" alt="logo"> -->
				<span class="text-[26px] font-bold">Voxo</span>
				<div class="flex pl-[4px] pt-[6px] sm:visible xl:invisible xl:hidden">
					<i class="fa-solid fa-bars"></i>
				</div>
			</a>
			<!-- <img src="{logo}" alt="voxo"> -->
	
		</div>
		<div class=" sm:invisible sm:hidden xl:visible xl:flex ">
			<!-- <div class=""> -->
			<ul class="flex gap-2 ">
				<li class="uppercase font-bold px-4"><a href="/">Home <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="uppercase font-bold px-4"><a href="./shop">Shop <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="uppercase font-bold px-4"><a href="/product">Product <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="uppercase font-bold px-4"><a href="/">Voxo Plus <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="uppercase font-bold px-4"><a href="/profile">Pages <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="uppercase font-bold px-4"><a href="/">Blog <i class="fa-solid fa-angle-down"></i></a></li>
			</ul>
			<!-- </div> -->
			<!-- <div> -->
			
			<!-- </div> -->
		</div>
		<div class="flex items-center gap-4">
			<ul class="flex px-4 gap-4 sm:gap-2 sm:px-1 md:gap-4">
				<li class=""><a href="/"><i class="fa-solid fa-magnifying-glass font-bold text-lg"></i></a></li>
				<li><a href="./auth/login">
					<i class="fa-regular fa-user text-lg"></i>
				</a></li>
				<li class="flex sm:invisible sm:hidden md:visible md:flex">
					<a href="./wishlist"><i class="fa-regular fa-heart text-lg"></i></a></li>

					<!-- <div class="w-full px-4 sm:w-1/2 lg:w-1/4">
						<div class="mb-14">
						  <div class="group relative inline-block">
							<button
							  class="inline-flex rounded bg-primary py-2 px-[18px] text-base font-semibold text-white"
							>
							  Tooltip on bottom
							</button>
							<div
							  class="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
							  <span
								class="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"
							  ></span>
							  Tooltip Text
							</div>
						  </div>
						</div>
					</div> -->
			</ul>
			<div class="flex justify-end px-[16px] py-[8px] border-white border-2 bg-pink hover:border-pink hover:border-2 hover:bg-white hover:text-black  sm:px-2 md:px-6 md:text-lg">
				<a href="./cart">
					<button class="text-sm text-white hover:text-black">
						<i class="fa-solid fa-cart-shopping">
							<span class="pl-2 font-semibold text-[14px]">$4500.25</span>
						</i>
					</button>
					<!-- <span class="pl-2 font-semibold text-white text-base hover:text-black">$4500.25</span> -->
				</a>
			</div>
		</div>
		
	</div>	
</header>












 <!-- <header>
// 	<div class="corner">
// 		<a href="https://kit.svelte.dev">
// 			<img src={logo} alt="SvelteKit" />
// 		</a>
// 	</div>

// 	<nav>
// 		<svg viewBox="0 0 2 3" aria-hidden="true">
// 			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
// 		</svg>
// 		<ul>
// 			<li class:active={$page.url.pathname === '/'}>
// 				<a href="/">Home</a>
// 			</li>
// 			<li class:active={$page.url.pathname === '/about'}>
// 				<a href="/about">About</a>
// 			</li>
// 			<li class:active={$page.url.pathname.startsWith('/sverdle')}>
// 				<a href="/sverdle">Sverdle</a>
// 			</li>
// 		</ul>
// 		<svg viewBox="0 0 2 3" aria-hidden="true">
// 			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
// 		</svg>
// 	</nav>

// 	<div class="corner">
// 		<a href="https://github.com/sveltejs/kit">
// 			<img src={github} alt="GitHub" />
// 		</a>
// 	</div>
// </header>

// <style>
// 	header {
// 		display: flex;
// 		justify-content: space-between;
// 	}

// 	.corner {
// 		width: 3em;
// 		height: 3em;
// 	}

// 	.corner a {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		width: 100%;
// 		height: 100%;
// 	}

// 	.corner img {
// 		width: 2em;
// 		height: 2em;
// 		object-fit: contain;
// 	}

// 	nav {
// 		display: flex;
// 		justify-content: center;
// 		--background: rgba(255, 255, 255, 0.7);
// 	}

// 	svg {
// 		width: 2em;
// 		height: 3em;
// 		display: block;
// 	}

// 	path {
// 		fill: var(--background);
// 	}

// 	ul {
// 		position: relative;
// 		padding: 0;
// 		margin: 0;
// 		height: 3em;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		list-style: none;
// 		background: var(--background);
// 		background-size: contain;
// 	}

// 	li {
// 		position: relative;
// 		height: 100%;
// 	}

// 	li.active::before {
// 		--size: 6px;
// 		content: '';
// 		width: 0;
// 		height: 0;
// 		position: absolute;
// 		top: 0;
// 		left: calc(50% - var(--size));
// 		border: var(--size) solid transparent;
// 		border-top: var(--size) solid var(--color-theme-1);
// 	}

// 	nav a {
// 		display: flex;
// 		height: 100%;
// 		align-items: center;
// 		padding: 0 0.5rem;
// 		color: var(--color-text);
// 		font-weight: 700;
// 		font-size: 0.8rem;
// 		text-transform: uppercase;
// 		letter-spacing: 0.1em;
// 		text-decoration: none;
// 		transition: color 0.2s linear;
// 	}

// 	a:hover {
// 		color: var(--color-theme-1);
// 	}
// </style> -->
