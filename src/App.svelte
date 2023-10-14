<script lang="ts">
  import svelteLogo from '/svelte.svg'
  import viteLogo from '/vite.svg'
  import typescriptLogo from '/typescript.svg'
  import tailwindLogo from '/tailwind.svg'
  import Counter from '@/lib/Counter.svelte'
  // Imgs
  import imgOne from '@/assets/img-one.jpg?format=webp'
  import imgTwo from '@/assets/img-two.jpg?format=webp'
  import imgThree from '@/assets/img-three.jpg?format=avif'
  import imgFour from '@/assets/img-four.jpg?format=avif'
</script>

<main>
  <section class="bg-gradient-to-br from-amber-600 to-orange-600 p-6 rounded-3xl shadow mb-8">
    <h1
      class="inline-flex flex-wrap justify-center gap-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent font-medium"
    >
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer" class="flex">
        <img src={viteLogo} class="logo" alt="Vite Logo" /><span>Vite</span>
      </a>
      <span>+</span>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer" class="flex">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        <span>Svelte</span>
      </a>
      <span>+</span>
      <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer" class="flex">
        <img src={typescriptLogo} class="logo typescript" alt="TypeScript Logo" />
        <span>TypeScript</span>
      </a>
      <span>+</span>
      <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" class="flex">
        <img src={tailwindLogo} class="logo tailwind" alt="TailwindCSS Logo" />
        <span>TailwindCSS</span>
      </a>
      <span>Starter</span>
    </h1>

    <div class="p-6">
      <Counter />
      <div class="flex gap-6"></div>
    </div>

    <p>
      Based on official Vite Svelte template. Check out <a
        class="font-medium"
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer">SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>

    <p class="text-gray-300/50">Click on the Vite and Svelte logos to learn more</p>
  </section>

  <ul class="grid grid-cols-2 gap-4">
    <li class="shadow aspect-[4/3]">
      <img class="rounded-3xl object-cover max-w-full h-full" src={imgOne} alt="one" />
    </li>
    <li class="shadow aspect-[4/3]">
      <img class="rounded-3xl object-cover max-w-full h-full" src={imgTwo} alt="two" />
    </li>
    <li class="shadow aspect-[4/3]">
      <img class="rounded-3xl object-cover max-w-full h-full" src={imgThree} alt="three" />
    </li>
    <li class="shadow aspect-[4/3]">
      <img class="rounded-3xl object-cover max-w-full h-full" src={imgFour} alt="four" />
    </li>
  </ul>
</main>

<style>
  .logo {
    height: auto;
    width: 1em;
    margin-right: 0.25em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
