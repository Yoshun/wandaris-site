<script setup lang="ts">
import { SOCIAL_LINKS, CONTACT_EMAIL } from '~/utils/links'

useHead({
  title: 'Contact — Wandaris'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)
const sending = ref(false)
const error = ref('')

const apiBase = import.meta.dev ? 'http://localhost:4000' : 'https://api.wandaris.com'

async function handleSubmit() {
  sending.value = true
  error.value = ''

  try {
    const res = await fetch(`${apiBase}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'Une erreur est survenue')
    }

    submitted.value = true
  } catch (e: any) {
    error.value = e.message || 'Impossible d\'envoyer le message. Réessayez plus tard.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="pt-24 pb-16 min-h-screen">
    <div class="max-w-2xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="font-heading text-3xl md:text-4xl text-primary-400 text-glow mb-4">
          Contact
        </h1>
        <div class="divider-ornament my-6">✦</div>
        <p class="text-neutral-400">
          Une question, une suggestion, un partenariat ?
          N'hésitez pas à nous écrire.
        </p>
      </div>

      <!-- Success message -->
      <div v-if="submitted" class="parchment-card p-8 text-center">
        <UIcon name="i-lucide-check-circle" class="size-12 text-primary-400 mx-auto mb-4" />
        <h2 class="font-title text-xl text-neutral-100 mb-2">Message envoyé !</h2>
        <p class="text-neutral-400">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
        <button
          @click="submitted = false; form.name = ''; form.email = ''; form.subject = ''; form.message = ''"
          class="mt-6 inline-flex items-center gap-2 px-6 py-2 border border-primary-400/20 hover:border-primary-400/40 text-neutral-300 hover:text-primary-400 font-title text-sm uppercase tracking-wider transition-all"
        >
          Nouveau message
        </button>
      </div>

      <!-- Error -->
      <div v-if="error" class="mb-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center">
        {{ error }}
      </div>

      <!-- Form -->
      <form v-else-if="!submitted" @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block font-title text-sm text-neutral-300 mb-2 uppercase tracking-wider">Nom</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Votre nom"
              class="w-full px-4 py-3 bg-neutral-900/50 border border-primary-400/15 text-neutral-100 placeholder-neutral-500 focus:border-primary-400/40 focus:outline-none transition-colors font-body"
            />
          </div>
          <div>
            <label class="block font-title text-sm text-neutral-300 mb-2 uppercase tracking-wider">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="votre@email.com"
              class="w-full px-4 py-3 bg-neutral-900/50 border border-primary-400/15 text-neutral-100 placeholder-neutral-500 focus:border-primary-400/40 focus:outline-none transition-colors font-body"
            />
          </div>
        </div>

        <div>
          <label class="block font-title text-sm text-neutral-300 mb-2 uppercase tracking-wider">Sujet</label>
          <input
            v-model="form.subject"
            type="text"
            required
            placeholder="L'objet de votre message"
            class="w-full px-4 py-3 bg-neutral-900/50 border border-primary-400/15 text-neutral-100 placeholder-neutral-500 focus:border-primary-400/40 focus:outline-none transition-colors font-body"
          />
        </div>

        <div>
          <label class="block font-title text-sm text-neutral-300 mb-2 uppercase tracking-wider">Message</label>
          <textarea
            v-model="form.message"
            required
            rows="6"
            placeholder="Votre message..."
            class="w-full px-4 py-3 bg-neutral-900/50 border border-primary-400/15 text-neutral-100 placeholder-neutral-500 focus:border-primary-400/40 focus:outline-none transition-colors font-body resize-none"
          />
        </div>

        <div class="text-center pt-4">
          <button
            type="submit"
            :disabled="sending"
            class="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-400/30 text-primary-100 font-title text-sm uppercase tracking-wider transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UIcon :name="sending ? 'i-lucide-loader' : 'i-lucide-send'" class="size-4" :class="{ 'animate-spin': sending }" />
            {{ sending ? 'Envoi...' : 'Envoyer' }}
          </button>
        </div>
      </form>

      <!-- Direct contact -->
      <div class="mt-16 parchment-card p-8 text-center">
        <h3 class="font-title text-base text-neutral-200 mb-4 uppercase tracking-wider">Ou contactez-nous directement</h3>
        <a
          :href="`mailto:${CONTACT_EMAIL}`"
          class="text-primary-400 hover:text-primary-300 transition-colors font-body"
        >
          {{ CONTACT_EMAIL }}
        </a>

        <div class="mt-6 flex items-center justify-center gap-5">
          <a
            v-for="link in SOCIAL_LINKS"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="noopener"
            :title="link.name"
            :aria-label="link.name"
            class="text-neutral-400 hover:text-primary-400 transition-colors"
          >
            <UIcon :name="link.icon" class="size-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
