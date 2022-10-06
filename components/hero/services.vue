
import { Title } from 'nuxt/dist/head/runtime/components';
<template>
    <div>
        <div class="flex">
            <div class="flex-grow">
                <ul class="flex justify-center md:justify-start flex-wrap items-center space-x-10 text-xl md:text-2xl">
                    <li class="text-yellow-400">
                        Popular
                    </li>
                    <li class="text-lg md:text-xl text-gray-300 hidden md:block">
                        New
                    </li>
                    <li>
                        |
                    </li>
                    <li class="text-sky-400">
                        Services
                    </li>
                    <li class="text-lg md:text-xl text-gray-300 hidden md:block">
                        Stores
                    </li>
                </ul>
            </div>
            <div class="hidden md:block flex-">
                <i class="material-icons-outlined text-3xl hover:text-gray-300">tune</i>
            </div>
        </div>
        <div class="mt-4">
            <div class="justify-center content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-stone-800 rounded-md shadow-lg hover:scale-105" v-for="index in 6" :key="index">
                        <div class="m-4 text-center">
                            <img class="h-auto w-auto rounded-md" alt="League of Legends wallpaper services"
                                Title="League of legends" src="/assets/images/lol.jpg" />
                        </div>
                        <div class="mb-10 mt-5">
                            <h2 class="text-center text-xl">League of Legends Coaching</h2>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>