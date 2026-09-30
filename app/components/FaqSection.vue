<script setup lang="ts">
useReveal()

const items = [
  {
    label: 'Wandaris est-il gratuit ?',
    content: 'Le jeu est gratuit jusqu\'au niveau 8. Vous pouvez explorer, combattre, crafter et découvrir les mécaniques sans rien payer. Au-delà, un achat unique débloque la progression complète, les donjons et tout le contenu endgame. Aucun avantage en jeu n\'est achetable — pas de pay-to-win.'
  },
  {
    label: 'Faut-il marcher beaucoup pour progresser ?',
    content: 'Pas du tout. Une petite balade de 20 minutes suffit pour gagner de l\'XP, récolter des ressources et visiter des points d\'intérêt. Le jeu s\'adapte à votre rythme — que vous fassiez le tour du quartier ou une randonnée en montagne.'
  },
  {
    label: 'Les lieux du jeu existent-ils vraiment ?',
    content: 'Oui ! Les points d\'intérêt (châteaux, ruines, cascades, sommets, monuments...) sont importés depuis des sources cartographiques en ligne puis vérifiés manuellement pour garantir qu\'ils sont bien réels, accessibles et dignes d\'intérêt. Vous pouvez aussi proposer l\'ajout de lieux que vous connaissez.'
  },
  {
    label: 'Peut-on jouer en ville ?',
    content: 'Absolument. Toutes les ressources sont accessibles partout, mais chaque environnement a ses spécialités : vous trouverez davantage de tissu en ville, de bois en forêt ou de minerai en montagne. Les zones urbaines ont aussi leurs propres points d\'intérêt (monuments, places, jardins) et créatures. Chaque biome a quelque chose à offrir.'
  },
  {
    label: 'Est-ce que ça consomme beaucoup de batterie ?',
    content: 'Le GPS est optimisé : le polling s\'adapte à votre vitesse et se réduit quand vous êtes à l\'arrêt. Vous pouvez aussi éteindre l\'écran et mettre le téléphone dans votre poche — le jeu continue de fonctionner en arrière-plan.'
  },
  {
    label: 'Sur quels appareils peut-on jouer ?',
    content: 'Android dans un premier temps, iOS est prévu ensuite. L\'application nécessite un GPS pour fonctionner.'
  }
]

// JSON-LD FAQPage structured data
useSchemaOrg([
  {
    '@type': 'FAQPage',
    'mainEntity': items.map(item => ({
      '@type': 'Question',
      'name': item.label,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.content
      }
    }))
  } as any
])
</script>

<template>
  <section class="relative py-20 md:py-28" aria-label="Questions fréquentes">
    <div class="max-w-3xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <h2 class="font-heading text-3xl md:text-4xl text-gradient text-glow mb-4">
          Questions fréquentes
        </h2>
      </div>

      <!-- Accordion -->
      <div class="reveal reveal-delay-1">
        <UAccordion
          :items="items"
          type="single"
          collapsible
          :ui="{
            item: 'border-b border-primary-400/10',
            trigger: 'py-5 font-title text-base text-neutral-200 hover:text-primary-400 transition-colors data-[state=open]:text-primary-400',
            content: 'pb-5',
            body: 'text-neutral-400 text-sm leading-relaxed',
          }"
        />
      </div>
    </div>
  </section>
</template>
