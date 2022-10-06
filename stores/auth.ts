import { defineStore } from "pinia"
import { notify } from "@kyvg/vue3-notification"

type userObject = {
  _id: string
  username: string
}

type dataObject = {
  user: userObject
  token: string
}

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      token: null,
      user: null,
    }
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
  actions: {
    async login(email, password) {
      const config = useRuntimeConfig()

      await $fetch<dataObject>(`${config.DOMAIN}/api/users/login`, {
        body: {
          email,
          password,
        },
      })
        .then((data) => {
          useCookie("user").value = JSON.stringify(data.user)
          useCookie("token").value = JSON.stringify(data.token)

          this.token = data.token
          this.user = data.user

          const router = useRouter()
          router.push("/")

          notify({
            text: "Successfully Logged In",
            type: "success",
          })
        })
        .catch((err) => {
          notify({
            text: "Invalid Credentials",
            type: "error",
          })
          console.log(err)
        })
    },
  },
})
