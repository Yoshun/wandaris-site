<script setup lang="ts">
useReveal()
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background layers -->
    <div class="absolute inset-0 bg-neutral-950" />
    <div class="absolute inset-0 bg-atmosphere" />

    <!-- Subtle vignette -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

    <!-- Floating particles (CSS only) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 15"
        :key="i"
        class="absolute rounded-full bg-primary-400/20 blur-sm animate-float"
        :style="{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${8 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 6}s`
        }"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <!-- Decorative frame -->
      <div class="flex justify-center mb-10 opacity-30 reveal">
        <div class="flex items-center gap-4">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
          <span class="text-primary-400 text-xs tracking-[0.4em] font-title uppercase">Explorez le monde</span>
          <div class="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
        </div>
      </div>

      <h1 class="font-heading text-5xl md:text-7xl lg:text-8xl text-gradient text-glow mb-8 leading-tight reveal reveal-delay-1">
        Wandaris
      </h1>

      <p class="font-title text-lg md:text-2xl text-neutral-200 tracking-wide mb-6 reveal reveal-delay-2">
        L'aventure commence à chaque pas
      </p>

      <div class="divider-ornament my-8 reveal reveal-delay-2">✦</div>

      <p class="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 reveal reveal-delay-3">
        Partez en balade, découvrez des lieux oubliés, récoltez des ressources
        et relevez les défis qui jalonnent votre chemin.
        Un RPG d'aventure qui vous fait marcher — pour de vrai.
      </p>

      <!-- CTA -->
      <div class="flex flex-col items-center gap-5 reveal reveal-delay-4">
        <a
          href="#features"
          class="group inline-flex items-center gap-2 px-10 py-4 bg-primary-700 hover:bg-primary-600 border border-primary-400/30 text-primary-100 font-title text-sm uppercase tracking-widest transition-all duration-300 btn-glow"
        >
          Découvrir le jeu
          <UIcon name="i-lucide-chevron-down" class="size-4 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <span class="text-neutral-500 text-sm font-title tracking-wider">
          Bientôt disponible sur Android & iOS
        </span>

        <a
          href="https://discord.gg/Cacq5xYX6Z"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-400 font-title text-sm tracking-wider transition-colors"
        >
          <UIcon name="i-simple-icons-discord" class="size-4" />
          Rejoindre le Discord
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <UIcon name="i-lucide-chevrons-down" class="size-6 text-primary-400/30" />
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
  25% { transform: translateY(-25px) translateX(10px); opacity: 0.5; }
  50% { transform: translateY(-50px) translateX(-8px); opacity: 0.2; }
  75% { transform: translateY(-25px) translateX(15px); opacity: 0.4; }
}
.animate-float {
  animation: float ease-in-out infinite;
}
</style>
