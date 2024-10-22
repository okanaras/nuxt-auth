<script setup>
import SocialLogin from "~/components/SocialLogin.vue";

const form = reactive({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
  terms: false,
});

const handleSubmit = () => {
  if (!form.terms) {
    alert('Koşulları kabul etmelisiniz');
    return;
  }
  console.log(form);
};
</script>

<template>
  <div class="min-h-screen flex items-center">
    <div class="w-full">
      <div class="card bg-white p-8 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/3">
        <h3 class="text-center text-2xl font-semibold mb-6">Kayıt Ol</h3>
        <form @submit.prevent="handleSubmit">
          <div class="mb-6">
            <FormLabel for="name">Adınız</FormLabel>
            <FormInputText id="name" placeholder="Adınızı giriniz" required v-model="form.name"/>
          </div>
          <div class="mb-6">
            <FormLabel for="email">Email adresi</FormLabel>
            <FormInputText id="email" placeholder="Email adresinizi giriniz" required v-model="form.email"/>
          </div>
          <div class="mb-6">
            <FormLabel for="password">Parolanız</FormLabel>
            <FormInputText id="password" type="password" placeholder="Parolanızı giriniz" required
                           v-model="form.password"/>
          </div>
          <div class="mb-6">
            <FormLabel for="password_confirmation">Parola Tekrarı</FormLabel>
            <FormInputText id="password_confirmation" type="password" placeholder="Parola tekrarı giriniz" required
                           v-model="form.password_confirmation"/>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <FormInputText id="terms" type="checkbox" v-model="form.terms"/>
            </div>
            <FormLabel for="terms" custom-class="ms-2 dark:text-gray-300">
              <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Koşulları okudum</a>, kabul ediyorum.
            </FormLabel>
          </div>

          <ButtonPrimary type="submit">Kayıt Ol</ButtonPrimary>
        </form>

        <SocialLogin/>
      </div>
    </div>
  </div>
</template>

