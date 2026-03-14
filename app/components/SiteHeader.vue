<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Le Jeu', to: '/#features' },
  { label: 'Le Monde', to: '/#world' },
  { label: 'Équipe', to: '/team' },
  { label: 'Contact', to: '/contact' }
]

const mobileOpen = ref(false)

const isHome = computed(() => route.path === '/')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <span class="font-heading text-2xl text-primary-400 group-hover:text-primary-300 transition-colors">
          Wandaris
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-title text-sm tracking-wider uppercase text-neutral-300 hover:text-primary-400 transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-neutral-300 hover:text-primary-400 transition-colors"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      >
        <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-6" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-primary-400/10">
        <div class="px-6 py-4 flex flex-col gap-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="font-title text-sm tracking-wider uppercase text-neutral-300 hover:text-primary-400 transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
