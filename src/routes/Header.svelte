<script>
	// import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	// import github from '$lib/images/github.svg';
	
	import logoicon from '$lib/images/logo-icon.png';
	import logo from '$lib/images/logo.png';
</script>

<header class=" bg-white w-full">
	<div class="flex items-center justify-between h-20 sm:px-4 md:px-12 lg:px-16 xl:px-24">
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
				<li class="text-md uppercase font-bold px-4"><a href="/">Home <i class="fa-solid fa-angle-down"></i>

					<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				  	</svg> -->
				  </a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Home <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Shop <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Product <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Voxo Plus <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Pages <i class="fa-solid fa-angle-down"></i></a></li>
				<li class="text-md uppercase font-bold px-4"><a href="/">Blog <i class="fa-solid fa-angle-down"></i></a></li>
			</ul>
			<!-- </div> -->
			<!-- <div> -->
			
			<!-- </div> -->
		</div>
		<div class="flex items-center gap-4">
			<ul class="flex px-4 gap-4 sm:gap-2 sm:px-1 md:gap-4">
				<li class=""><a href="/"><i class="fa-solid fa-magnifying-glass font-bold text-lg"></i></a></li>
				<li><a href="/"><i class="fa-regular fa-user text-lg"></i></a></li>
				<li class="flex sm:invisible sm:hidden md:visible md:flex"><a href="/"><i class="fa-regular fa-heart text-lg"></i></a></li>
			</ul>
			<div class="flex justify-end px-6 py-2 hover:border-2 hover:bg-white  bg-pink hover:border-pink sm:px-2 md:px-6">
				<a class=" md:text-lg" href="/">
					<i class="fa-solid fa-cart-shopping"></i>
					<span class="pl-2 font-semibold">$4500.25</span>
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
