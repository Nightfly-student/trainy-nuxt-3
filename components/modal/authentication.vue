<script lang="ts" setup>
interface IProps {
    clicked: boolean
}

const props = defineProps<IProps>()

</script>

<template>
    <modal-default :clicked="clicked">
        <div class="mt-3">
            <h3 class="text-2xl mb-3 font-medium">
                Sign in to <span class="text-sky-400">Trainy</span>
            </h3>

            <div>
                <p>Your Email</p>
                <input class="bg-stone-700 text-xl shadow-md outline-none focus:ring-2 p-2 w-full my-3 rounded-md mb-7"
                    placeholder="example@gmail.com" type="text" />
                <p>Your Password</p>
                <input class="bg-stone-700 text-xl shadow-md outline-none focus:ring-2 p-2 w-full my-3 rounded-md"
                    placeholder="password" type="password" />
            </div>

            <button
                class="px-4 py-2 bg-sky-500 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sky-600 outline-none mt-4">
                Sign In
            </button>
        </div>
    </modal-default>
</template>
