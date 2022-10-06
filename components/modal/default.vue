<script lang="ts" setup>
    interface IProps {
        clicked: boolean
    }
    const clicked = ref(false)
    
    const isOpen = ref(false)
    
    const props = defineProps<IProps>()
    
    onMounted(() => {
        watch(() => clicked.value, (value) => {
        var html = document.getElementsByTagName('html')[0]
        if (value == true) {
            html.classList.add('lock-scroll')
        } else {
            html.classList.remove('lock-scroll')
        }
    }, { immediate: true })
    watch(
        () => props.clicked,
        (value: boolean) => {
            clicked.value = !clicked.value
            isOpen.value = !isOpen.value
        }
    )
    })
    
    function closeModal($event: Event) {
        $event.preventDefault()
        if ($event.target == document.getElementById("overlay")) {
            clicked.value = false
        }
    }
    </script>
    
    <template>
        <div id="overlay" @click="closeModal($event)" :class="{ hidden: !clicked }"
            class="fixed inset-0 bg-black bg-opacity-60 h-full w-full">
            <div id="authentication-modal"
                class="relative modal-opened top-20 mx-auto p-5 border border-stone-900 w-96 shadow-lg rounded-md bg-stone-800">
                <slot></slot>
            </div>
        </div>
    </template>
    