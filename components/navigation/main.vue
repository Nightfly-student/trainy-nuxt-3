<script lang="ts" setup>
const urls = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/',
        text: 'Services'
    },
    {
        link: '/',
        text: 'Stores'
    },
    {
        link: '/',
        text: 'Blog'
    },
]

const mobileMenu = ref(false)
const openLoginModal = ref(false)

function openLogin(event: Event) {
    event.preventDefault()
    openLoginModal.value = !openLoginModal.value
}

</script>

<template>
    <div>
        <!-- main menu -->
        <nav class="container mx-auto hidden md:block">
            <div class="flex mx-7 lg:mx-0">
                <div class="flex-grow">
                    <ul class="ml-auto flex items-center space-x-10 pt-7 pb-5 text-lg font-semibold">
                        <li class="text-2xl">
                            <NuxtLink to="/">Brand Logo</NuxtLink>
                        </li>
                        <li v-for="url in urls" :key="url.text">
                            <NuxtLink class="hover:text-gray-300" :to="url.link">{{url.text}}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex-shrink">
                    <ul class="ml-auto flex items-center pt-5 ">
                        <li>
                            <a class="rounded-md shadow-sm border border-gray-500 py-2 px-5 text-lg hover:bg-stone-800"
                                href="#" @click="openLogin($event)" type="button">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- mobile menu -->
        <nav class="block md:hidden">
            <div class="flex mx-7">
                <div class="text-lg flex-grow pt-5 pb-5">
                    <NuxtLink to="/" class="font-semibold">Brand Logo</NuxtLink>
                </div>
                <div class="flex-shrink">
                    <a class="rounded-md shadow-sm border border-gray-500 mt-3 py-2 px-4 mr-5 text-md hover:bg-stone-800"
                        href="#" @click="openLogin($event)" type="button">
                        Login
                    </a>
                </div>
                <div class="flex-shrink">
                    <button @click="mobileMenu = !mobileMenu" data-collapse-toggle="navbar-default" type="button"
                        class="inline-flex items-center ml-3 pt-5 text-sm text-gray-300 rounded-lg md:hidden hover:text-gray-400"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div :class="{hidden: !mobileMenu}"
                class="mobileNavBody bg-stone-800 shadow-md transition ease-in-out delay-150">
                <ul class="mobileNav">
                    <li class="p-4 first:pt-4 last:pb-4 hover:bg-sky-500"
                        @click="this.$router.push(url.link), mobileMenu = !mobileMenu" v-for="url in urls"
                        :key="url.text">
                        <NuxtLink class="hover:text-gray-300" :to="url.link">{{url.text}}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
        <modal-authentication :clicked="openLoginModal"></modal-authentication>
    </div>
</template>