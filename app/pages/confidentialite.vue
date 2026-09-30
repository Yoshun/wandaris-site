<script setup lang="ts">
useHead({
  title: 'Politique de confidentialité — Wandaris',
  meta: [
    { name: 'description', content: 'Politique de confidentialité de Wandaris. Découvrez quelles données sont collectées, leur finalité, vos droits RGPD et comment les exercer.' },
    { property: 'og:title', content: 'Politique de confidentialité — Wandaris' },
    { property: 'og:description', content: 'Politique de confidentialité de Wandaris. Données collectées, finalités et droits RGPD.' },
    { property: 'og:url', content: 'https://wandaris.com/confidentialite' }
  ],
  link: [
    { rel: 'canonical', href: 'https://wandaris.com/confidentialite' }
  ]
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-24 md:py-32">
    <h1 class="font-heading text-3xl md:text-4xl text-gradient text-glow mb-4">
      Politique de confidentialité
    </h1>
    <p class="text-neutral-500 font-title text-sm mb-12">Dernière mise à jour : mars 2026</p>

    <div class="space-y-10 text-neutral-300 font-body text-sm leading-relaxed">
      <!-- Intro -->
      <section>
        <p>
          Anthony Tetrel, éditeur de Wandaris, s'engage à protéger la vie privée des utilisateurs
          de l'application mobile Wandaris et du site wandaris.com. Cette politique décrit les données
          collectées, leur finalité et vos droits.
        </p>
      </section>

      <!-- Responsable -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Responsable du traitement</h2>
        <ul class="space-y-1 text-neutral-400">
          <li><strong class="text-neutral-300">Nom :</strong> Anthony Tetrel</li>
          <li><strong class="text-neutral-300">Statut :</strong> Entrepreneur individuel</li>
          <li><strong class="text-neutral-300">SIRET :</strong> 849 464 532 00027</li>
          <li><strong class="text-neutral-300">Email :</strong> contact@wandaris.com</li>
        </ul>
      </section>

      <!-- Données collectées -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Données collectées</h2>

        <h3 class="font-title text-base text-neutral-200 mt-4 mb-2">Compte utilisateur</h3>
        <ul class="list-disc list-inside space-y-1 text-neutral-400">
          <li>Nom d'utilisateur (pseudonyme)</li>
          <li>Adresse email</li>
          <li>Mot de passe (hashé, jamais stocké en clair)</li>
        </ul>

        <h3 class="font-title text-base text-neutral-200 mt-4 mb-2">Données de jeu</h3>
        <ul class="list-disc list-inside space-y-1 text-neutral-400">
          <li>Position GPS (latitude, longitude) — utilisée en temps réel pour le gameplay</li>
          <li>Progression du joueur (niveau, statistiques, inventaire, équipement)</li>
          <li>Actions en jeu (visites de POI, combats, récoltes, craft)</li>
        </ul>

        <h3 class="font-title text-base text-neutral-200 mt-4 mb-2">Données techniques</h3>
        <ul class="list-disc list-inside space-y-1 text-neutral-400">
          <li>Informations sur l'appareil (modèle, système d'exploitation, version de l'application)</li>
          <li>Logs d'activité (horodatage des actions, à des fins de débogage et d'anti-triche)</li>
        </ul>

        <h3 class="font-title text-base text-neutral-200 mt-4 mb-2">Formulaire de contact (site web)</h3>
        <ul class="list-disc list-inside space-y-1 text-neutral-400">
          <li>Nom, email, sujet et message (transmis par email, non stockés en base de données)</li>
        </ul>
      </section>

      <!-- Finalités -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Finalités du traitement</h2>
        <ul class="list-disc list-inside space-y-2 text-neutral-400">
          <li><strong class="text-neutral-300">Gameplay :</strong> afficher les éléments de jeu autour de votre position, calculer les distances, générer les parcours de balade</li>
          <li><strong class="text-neutral-300">Progression :</strong> sauvegarder votre avancement, votre inventaire et vos statistiques</li>
          <li><strong class="text-neutral-300">Anti-triche :</strong> vérifier la cohérence des actions (distances, vitesse de déplacement, durée des combats) pour garantir une expérience équitable</li>
          <li><strong class="text-neutral-300">Amélioration :</strong> analyser l'utilisation de l'application pour corriger les bugs et améliorer le gameplay</li>
          <li><strong class="text-neutral-300">Communication :</strong> répondre à vos messages via le formulaire de contact</li>
        </ul>
      </section>

      <!-- Base légale -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Base légale</h2>
        <ul class="list-disc list-inside space-y-2 text-neutral-400">
          <li><strong class="text-neutral-300">Exécution du contrat :</strong> les données de compte, de jeu et GPS sont nécessaires au fonctionnement de l'application</li>
          <li><strong class="text-neutral-300">Intérêt légitime :</strong> les données techniques et les logs sont utilisés pour la sécurité (anti-triche) et l'amélioration du service</li>
          <li><strong class="text-neutral-300">Consentement :</strong> l'accès au GPS est demandé via une permission système que vous pouvez révoquer à tout moment</li>
        </ul>
      </section>

      <!-- Durée de conservation -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Durée de conservation</h2>
        <ul class="list-disc list-inside space-y-2 text-neutral-400">
          <li><strong class="text-neutral-300">Compte et progression :</strong> conservés tant que le compte est actif. Supprimés dans un délai de 30 jours après demande de suppression</li>
          <li><strong class="text-neutral-300">Position GPS :</strong> utilisée en temps réel et non stockée de manière permanente. Seules les coordonnées des actions (visite de POI, combat) sont enregistrées dans les logs</li>
          <li><strong class="text-neutral-300">Logs d'activité :</strong> conservés 90 jours maximum à des fins de débogage et d'anti-triche</li>
          <li><strong class="text-neutral-300">Événements de sécurité :</strong> conservés 1 an pour la détection de comportements frauduleux</li>
        </ul>
      </section>

      <!-- Partage -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Partage des données</h2>
        <p>
          Vos données personnelles <strong class="text-neutral-100">ne sont ni vendues, ni partagées</strong>
          avec des tiers à des fins commerciales.
        </p>
        <p class="mt-3">Les seuls tiers impliqués sont :</p>
        <ul class="list-disc list-inside space-y-1 text-neutral-400 mt-2">
          <li><strong class="text-neutral-300">OVH :</strong> hébergement des serveurs (France)</li>
          <li><strong class="text-neutral-300">Google Play / Apple App Store :</strong> distribution de l'application et traitement des achats in-app</li>
          <li><strong class="text-neutral-300">MapTiler :</strong> fourniture des tuiles cartographiques (aucune donnée personnelle transmise)</li>
        </ul>
      </section>

      <!-- Droits -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Vos droits (RGPD)</h2>
        <p>Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :</p>
        <ul class="list-disc list-inside space-y-2 text-neutral-400 mt-3">
          <li><strong class="text-neutral-300">Accès :</strong> obtenir une copie de vos données personnelles</li>
          <li><strong class="text-neutral-300">Rectification :</strong> corriger des données inexactes</li>
          <li><strong class="text-neutral-300">Suppression :</strong> demander la suppression de votre compte et de vos données</li>
          <li><strong class="text-neutral-300">Portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong class="text-neutral-300">Opposition :</strong> vous opposer au traitement de vos données</li>
          <li><strong class="text-neutral-300">Limitation :</strong> demander la limitation du traitement</li>
        </ul>
        <p class="mt-3">
          Pour exercer ces droits, contactez-nous à :
          <a href="mailto:contact@wandaris.com" class="text-primary-400 hover:text-primary-300 transition-colors">contact@wandaris.com</a>
        </p>
        <p class="mt-3">
          Vous pouvez également introduire une réclamation auprès de la
          <strong class="text-neutral-200">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) — cnil.fr.
        </p>
      </section>

      <!-- Cookies -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Cookies</h2>
        <p>
          Le site wandaris.com n'utilise pas de cookies de tracking ni de publicité.
          Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés
          (mémorisation de la fermeture du bandeau d'annonce). Ces cookies ne nécessitent pas de consentement.
        </p>
      </section>

      <!-- Modifications -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Modifications</h2>
        <p>
          Cette politique de confidentialité peut être mise à jour. En cas de modification substantielle,
          les utilisateurs seront informés via l'application ou le site. La date de dernière mise à jour
          est indiquée en haut de cette page.
        </p>
      </section>

      <!-- Contact -->
      <section>
        <h2 class="font-title text-lg text-neutral-100 mb-3">Contact</h2>
        <p>
          Pour toute question relative à vos données personnelles :
          <a href="mailto:contact@wandaris.com" class="text-primary-400 hover:text-primary-300 transition-colors">contact@wandaris.com</a>
        </p>
      </section>
    </div>
  </div>
</template>
