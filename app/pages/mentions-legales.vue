<script setup lang="ts">
import { CONTACT_EMAIL } from '~/utils/links'

useHead({
  title: 'Mentions légales — Wandaris',
  meta: [
    { name: 'description', content: 'Mentions légales du site wandaris.com. Informations sur l\'éditeur, l\'hébergement, la propriété intellectuelle et les données cartographiques.' },
    { property: 'og:title', content: 'Mentions légales — Wandaris' },
    { property: 'og:description', content: 'Mentions légales du site wandaris.com. Éditeur, hébergement et propriété intellectuelle.' },
    { property: 'og:url', content: 'https://wandaris.com/mentions-legales' }
  ],
  link: [
    { rel: 'canonical', href: 'https://wandaris.com/mentions-legales' }
  ]
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-24 md:py-32">
    <h1 class="font-heading text-3xl md:text-4xl text-gradient text-glow mb-12">
      Mentions légales
    </h1>

    <div class="space-y-10 text-neutral-300 font-body text-sm leading-relaxed">
      <!-- Éditeur -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Éditeur du site</h2>
        <p>
          Le site <strong class="text-primary-400">wandaris.com</strong> est édité par :
        </p>
        <ul class="mt-3 space-y-1 text-neutral-400">
          <li><strong class="text-neutral-300">Nom :</strong> Anthony Tetrel</li>
          <li><strong class="text-neutral-300">Statut :</strong> Entrepreneur individuel (auto-entrepreneur)</li>
          <li><strong class="text-neutral-300">SIRET :</strong> 849 464 532 00027</li>
          <li><strong class="text-neutral-300">Code APE :</strong> 62.01Z — Programmation informatique</li>
          <li><strong class="text-neutral-300">Adresse :</strong> [ADRESSE À COMPLÉTER]</li>
          <li><strong class="text-neutral-300">Email :</strong> {{ CONTACT_EMAIL }}</li>
        </ul>
      </section>

      <!-- Hébergeur -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Hébergement</h2>
        <ul class="space-y-1 text-neutral-400">
          <li><strong class="text-neutral-300">Hébergeur :</strong> OVH SAS</li>
          <li><strong class="text-neutral-300">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</li>
          <li><strong class="text-neutral-300">Téléphone :</strong> 1007</li>
          <li><strong class="text-neutral-300">Site web :</strong> ovh.com</li>
        </ul>
      </section>

      <!-- Propriété intellectuelle -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu du site wandaris.com (textes, images, graphismes, logo, icônes, sons, logiciels)
          est la propriété exclusive d'Anthony Tetrel, sauf mention contraire. Toute reproduction, représentation,
          modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans
          autorisation écrite préalable.
        </p>
      </section>

      <!-- Données cartographiques -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Données cartographiques</h2>
        <p>
          Les données cartographiques utilisées dans l'application Wandaris proviennent d'OpenStreetMap
          (© les contributeurs d'OpenStreetMap, licence ODbL). Les tuiles cartographiques sont fournies par MapTiler.
        </p>
      </section>

      <!-- Responsabilité -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Limitation de responsabilité</h2>
        <p>
          Les informations fournies sur le site et dans l'application le sont à titre indicatif.
          L'éditeur ne saurait être tenu responsable des erreurs, d'une absence de disponibilité
          des informations ou de la présence de virus sur le site.
        </p>
        <p class="mt-3">
          L'utilisation de l'application Wandaris implique des déplacements en extérieur. L'utilisateur
          reste seul responsable de sa sécurité physique et du respect des propriétés privées,
          des réglementations locales et des conditions de terrain. L'éditeur décline toute responsabilité
          en cas d'accident, de blessure ou de dommage survenu lors de l'utilisation de l'application.
        </p>
      </section>

      <!-- Contact -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Contact</h2>
        <p>
          Pour toute question relative aux mentions légales, vous pouvez nous contacter à l'adresse :
          <a :href="`mailto:${CONTACT_EMAIL}`" class="text-primary-400 hover:text-primary-300 transition-colors">{{ CONTACT_EMAIL }}</a>
        </p>
      </section>
    </div>
  </div>
</template>
