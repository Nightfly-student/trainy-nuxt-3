<template>
    <div class="mt-20">
        <div class="text-center">
            <h1 class="font-semibold text-2xl md:text-4xl mb-4">
                Online Gaming Services & Stores
            </h1>
            <p class="mt-2 text-gray-300">
                All high quality gaming services, gold and accounts
            </p>
            <p class="text-gray-300">in one place</p>
        </div>
        <div class="bg-stone-800 rounded-md shadow-md mt-10 mx-7 max-w-full md:max-w-lg lg:max-w-xl mx-auto">
            <div class="flex space-x-3">
                <div class="flex-shrink">
                    <select
                        class="mx-2 text-xl shadow-md bg-stone-800 outline-0 bg-gradient-to-r from-sky-600 to-sky-500 p-2 m-2 rounded-md">
                        <option>Services</option>
                        <option>Stores</option>
                    </select>
                </div>
                <div class="flex-grow">
                    <input class="focus:ring-blue-500 outline-0 text-xl h-14 w-full bg-stone-800"
                        placeholder="Search Services..." type="text" />
                </div>
                <div class="flex-shrink">
                    <div class="mt-3 mr-3">
                        <button class="hover:text-blue-400">
                            <svg aria-hidden="true" class="w-7 h-7" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
