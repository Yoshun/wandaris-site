<script setup lang="ts">
const dismissed = ref(false)

onMounted(() => {
  dismissed.value = localStorage.getItem('wandaris-banner-dismissed') === 'true'
})

function dismiss() {
  dismissed.value = true
  localStorage.setItem('wandaris-banner-dismissed', 'true')
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div
      v-if="!dismissed"
      class="relative bg-gradient-to-r from-primary-900/90 via-primary-800/90 to-primary-900/90 border-b border-primary-400/20"
    >
      <div class="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3">
        <span class="text-primary-200 text-sm font-title tracking-wide">
          En développement actif —
        </span>
        <a
          href="https://discord.gg/Cacq5xYX6Z"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-primary-100 hover:text-white text-sm font-title tracking-wide transition-colors"
        >
          <UIcon name="i-simple-icons-discord" class="size-3.5" />
          Rejoignez les Pionniers !
        </a>
        <button
          class="absolute right-4 text-primary-300/50 hover:text-primary-200 transition-colors"
          aria-label="Fermer la bannière"
          @click="dismiss"
        >
          <UIcon name="i-lucide-x" class="size-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>
