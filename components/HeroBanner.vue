<script setup lang='ts'>
const { data } = await useAsyncData(
  'article',
  () => queryContent('articles')
    .sort({ publishedAt: -1 })
    .limit(1)
    .find()
)
</script>

<template>
  <div class="sm:mt-0 md:mt-0 lg:mt-14">
    <div class="mx-auto max-w-7xl py-18 sm:px-6 sm:py-1">
      <div class="relative isolate overflow-hidden px-6 pt-8 sm:px-16 md:pt-10 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-8 lg:text-left">
          <h3 class="text-lg font-semibold text-gray-500">
            Latest Article
          </h3>
          <NuxtLink to="/">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{ data![0]?.title }}
            </h2>
          </NuxtLink>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ data![0]?.desc }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <NuxtLink
              :to="data![0]?._path"
              class="px-5 py-2.5 text-lg font-semibold text-white bg-gray-900 shadow-sm rounded hover:shadow-xl delay-75"
            >
              Read
            </NuxtLink>
            <NuxtLink
              to="/articles"
              class="text-md font-semibold leading-6 text-gray-900"
            >
              Browse articles <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/">
          <div class="relative h-80 mt-8">
            <img
              class="absolute left-0 top-0 w-[57rem] max-w-none"
              :src="data![0]?.img"
              alt="App screenshot"
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>