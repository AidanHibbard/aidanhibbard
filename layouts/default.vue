<script setup lang='ts'>
useHead({
  title: 'Aidan Hibbard',
  titleTemplate: '%s %separator %siteName',
  templateParams: { separator: '|', siteName: 'Aidan Hibbard' },
  meta: [
    { name: 'description', content: 'Blog, projects, and more.' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>


<template>
  <div class="h-full antialiased">
    <NavBar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
