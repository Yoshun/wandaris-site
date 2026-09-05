<script setup lang="ts">
import { SOCIAL_LINKS } from '~/utils/links'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-primary-400/10 bg-neutral-950">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <span class="font-heading text-xl text-primary-400">Wandaris</span>
          <p class="mt-3 text-sm text-neutral-400 leading-relaxed">
            Un jeu mobile d'aventure RPG en monde réel.<br>
            L'aventure commence à chaque pas.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-title text-sm uppercase tracking-wider text-neutral-300 mb-4">Navigation</h4>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/#features" class="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Le Jeu</NuxtLink>
            <NuxtLink to="/#world" class="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Le Monde</NuxtLink>
            <NuxtLink to="/team" class="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Équipe</NuxtLink>
            <NuxtLink to="/support" class="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Support</NuxtLink>
            <NuxtLink to="/contact" class="text-sm text-neutral-400 hover:text-primary-400 transition-colors">Contact</NuxtLink>
          </div>
        </div>

        <!-- Community -->
        <div>
          <h4 class="font-title text-sm uppercase tracking-wider text-neutral-300 mb-4">Communauté</h4>
          <div class="flex flex-col gap-2">
            <a
              v-for="link in SOCIAL_LINKS"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
            >
              <UIcon :name="link.icon" class="size-4" />
              {{ link.name }}
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-title text-sm uppercase tracking-wider text-neutral-300 mb-4">Légal</h4>
          <div class="flex flex-col gap-2">
            <span class="text-sm text-neutral-500">Mentions légales (bientôt)</span>
            <span class="text-sm text-neutral-500">Politique de confidentialité (bientôt)</span>
          </div>
        </div>
      </div>

      <div class="divider-ornament my-8">✦</div>

      <div class="text-center text-sm text-neutral-500">
        <p>© {{ year }} Wandaris. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
