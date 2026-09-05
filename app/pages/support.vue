<script setup lang="ts">
import { DISCORD_URL, CONTACT_EMAIL } from '~/utils/links'

useHead({
  title: 'Support — Wandaris'
})

// Cible du bouton « Contacter le support » de l'écran de crash de l'application.
// Pas de marche à suivre après un plantage : Sentry reçoit déjà le rapport.
const faq = [
  {
    q: 'Ma position est fausse ou saute d\'un endroit à l\'autre',
    a: 'Vérifiez que la localisation précise est autorisée pour Wandaris dans les réglages de votre téléphone, et que le mode économie d\'énergie ne la limite pas. À l\'intérieur d\'un bâtiment ou entre des immeubles, le GPS peut dériver de plusieurs dizaines de mètres. Faites quelques pas à découvert : la position se stabilise en général en moins d\'une minute.'
  },
  {
    q: 'Un lieu de la carte est faux, disparu ou inaccessible',
    a: 'Signalez-le directement depuis l\'application, sur la fiche du lieu. Chaque signalement est relu par l\'équipe, et le lieu est corrigé ou retiré. Vous pouvez aussi proposer un lieu qui manque, depuis la carte.'
  },
  {
    q: 'Rien ne se passe quand j\'appuie sur un lieu, une ressource ou un monstre',
    a: 'Il faut être à proximité pour interagir : rapprochez-vous et réessayez. Les lieux, ressources et monstres n\'apparaissent qu\'à partir d\'un certain niveau de zoom ; si la carte est vide, utilisez le bouton + pour vous rapprocher.'
  },
  {
    q: 'J\'ai acheté l\'Aventure complète mais elle n\'est pas active',
    a: 'Ouvrez l\'écran d\'achat dans l\'application et appuyez sur « Restaurer mes achats ». Si elle n\'apparaît toujours pas, écrivez-nous avec l\'adresse e-mail de votre compte et le reçu envoyé par le store : nous rétablissons l\'accès à la main.'
  },
  {
    q: 'Je change de téléphone',
    a: 'Installez Wandaris sur le nouvel appareil et connectez-vous avec le même compte. Votre progression, votre inventaire et vos lieux découverts sont conservés sur nos serveurs.'
  }
]
</script>

<template>
  <div class="pt-24 pb-16 min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-heading text-3xl md:text-4xl text-primary-400 text-glow mb-4">
          Support
        </h1>
        <div class="divider-ornament my-6">✦</div>
        <p class="text-neutral-400 max-w-xl mx-auto">
          Un souci en chemin ? Voici les réponses aux questions les plus fréquentes,
          et la façon la plus rapide de nous joindre.
        </p>
      </div>

      <!-- FAQ -->
      <section class="mb-16">
        <h2 class="font-title text-base text-neutral-200 mb-6 uppercase tracking-wider text-center">
          Questions fréquentes
        </h2>
        <div class="flex flex-col gap-4">
          <div
            v-for="item in faq"
            :key="item.q"
            class="parchment-card p-6"
          >
            <h3 class="font-title text-sm text-neutral-100 tracking-wider mb-2">{{ item.q }}</h3>
            <p class="text-sm text-neutral-400 leading-relaxed">{{ item.a }}</p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section>
        <h2 class="font-title text-base text-neutral-200 mb-6 uppercase tracking-wider text-center">
          Nous joindre
        </h2>
        <div class="parchment-card p-8 text-center">
          <p class="text-sm text-neutral-400 leading-relaxed mb-8">
            Le Discord est le moyen le plus rapide : l'équipe y répond directement.
            Pour un problème lié à votre compte, préférez le formulaire ou l'e-mail.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              :href="DISCORD_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-8 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-400/30 text-primary-100 font-title text-sm uppercase tracking-wider transition-all duration-300 btn-glow"
            >
              <UIcon name="i-simple-icons-discord" class="size-4" />
              Rejoindre le Discord
            </a>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-8 py-3 border border-primary-400/20 hover:border-primary-400/40 text-neutral-300 hover:text-primary-400 font-title text-sm uppercase tracking-wider transition-all"
            >
              <UIcon name="i-lucide-send" class="size-4" />
              Nous écrire
            </NuxtLink>
          </div>
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="inline-block mt-6 text-primary-400 hover:text-primary-300 transition-colors font-body"
          >
            {{ CONTACT_EMAIL }}
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
