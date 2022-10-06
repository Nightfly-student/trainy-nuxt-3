<script lang="ts" setup>
import "@formkit/themes/genesis"

interface IRegister {
  username: string
  email: string
  password: string
}

async function onRegister(values) {
  const register: IRegister = {
    username: values.username,
    email: values.email,
    password: values.password
  }

  await $fetch('http://localhost:8080/api/users/register', {
    method: 'POST',
    body: register
  }).then((res) => {
    console.log(res)
  })
}

</script>

<template>
 
</template>
