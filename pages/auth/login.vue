<script setup>

import SocialLogin from "~/components/SocialLogin.vue";
import {useAuthStore} from "~/stores/auth.js";
import {reactive, ref} from "vue";

definePageMeta({
  title: 'Giriş Yap',
  description: 'Giriş yap sayfası',
  url: 'https://localhost:3000/auth/login',
  middleware: ['guest-middleware'],
});

const auth = useAuthStore();
// const token = useTokenStore();

const form = reactive({
  email: 'test@gmail.com',
  password: 'password',
  remember: false,
});

const errors = ref([]);

const handleSubmit = async () => {
  try {
    await auth.login(form);
  } catch (error) {
    errors.value = error.data.errors;
  }
};

</script>

<template>
  <div class="min-h-screen flex items-center">
    <div class="w-full">
      <div class="card bg-white p-8 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/3">
        <h3 class="text-center text-2xl font-semibold mb-6">Giriş Yap</h3>
        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <FormLabel for="email">Email adresiniz</FormLabel>
            <FormInputText id="email" v-model="form.email" placeholder="Email adresinizi giriniz"/>
            <span class="text-xs text-red-600" v-if="errors.email">{{ errors.email[0] }}</span>
          </div>
          <div class="mb-6">
            <FormLabel for="password">Parolanız</FormLabel>
            <FormInputText id="password" v-model="form.password" type="password" placeholder="Parolanızı giriniz"/>
            <span class="text-xs text-red-600" v-if="errors.password">{{ errors.password[0] }}</span>

          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <FormInputText id="remember" v-model="form.remember" type="checkbox"/>
            </div>
            <FormLabel for="remember" custom-class="ms-2 dark:text-gray-300">
              Beni hatırla
            </FormLabel>
          </div>
          <ButtonPrimary>Giriş Yap</ButtonPrimary>
          <!--          <ButtonPrimary @click.prevent="token.removeToken()">Remove</ButtonPrimary>-->
        </form>

        <SocialLogin/>

      </div>
    </div>
  </div>

</template>

<style scoped>

</style>