<script setup lang="ts">
import { formatDate } from '#imports'

const props = defineProps<{
  type: 'articles' | 'projects'
  title: string
  description: string
}>()

const { data } = await useAsyncData(props.type, async () =>
  queryCollection(props.type).order('publishedAt', 'DESC').limit(3).select('title', 'desc', 'tags', 'publishedAt', 'stem').all())
</script>

<template>
  <div class="py-8 sm:py-12 md:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          {{ props.title }}
        </h2>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {{ props.description }}
        </p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="c in data"
          :key="c.title"
          class="flex flex-col max-w-xl h-full space-y-3"
        >
          <div class="group relative flex flex-col flex-grow space-y-4">
            <h3 class="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">
              <NuxtLink :to="c.stem">
                <span class="absolute inset-0" />
                {{ c.title }}
              </NuxtLink>
            </h3>
            <div class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <span>{{ props.type === 'articles' ? 'Published' : 'Started on' }}</span>
              <time class="font-medium text-gray-700 dark:text-gray-300">{{ formatDate(c.publishedAt) }}</time>
            </div>

            <!-- This ensures description and tags stay aligned at the bottom -->
            <div class="mt-auto">
              <p class="mb-3 line-clamp-3 text-base text-gray-700 dark:text-gray-300">
                {{ c.desc }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in c.tags"
                  :key="tag"
                  class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-600 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
