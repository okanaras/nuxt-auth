<script setup>
import {useAuthStore} from '~/stores/auth.js';

definePageMeta({
  title: 'Anasayfa',
  description: 'Ana sayfa',
  url: 'https://okanaras.com.tr/dashboard',
  middleware: ['auth-middleware'],
});

const auth = useAuthStore();

</script>

<template>
  <div class="min-h-screen flex items-center">
    <div class="w-full">
      <div class="card p-10 md:w-3/4 mx-auto lg:w-1/3">
        <div class="hero min-h-screen bg-base-200">
          <div class="text-center hero-content">
            <div class="max-w-md">
              <h1 class="text-3xl font-bold">This is Dashboard Page</h1>
              <p class="py-6">Welcome to the Dashboard Page</p>
              <p class="py-2">Name: <strong>{{ auth.getUser?.name }}</strong></p>
              <p class="py-2">Email: <strong>{{ auth.getUser?.email }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
