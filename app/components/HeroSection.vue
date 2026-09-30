<script setup lang="ts">
import { DISCORD_URL } from '~/utils/links'

// Lié, pas écrit en dur dans le template : tant que la capture n'existe pas, Vite ne doit
// pas la résoudre au build. Au runtime, le 404 bascule sur le fallback (onerror).
const HERO_SCREENSHOT = '/screenshots/map.png'

useReveal()
</script>

<template>
  <section class="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden" aria-label="Présentation de Wandaris">
    <!-- Background layers -->
    <div class="absolute inset-0 bg-neutral-950" />
    <div class="absolute inset-0 bg-atmosphere" />
    <!-- Green-tinted top atmosphere for the evolving gradient -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(40,80,50,0.15)_0%,transparent_60%)]" />

    <!-- Subtle vignette -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

    <!-- Floating particles (CSS only) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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

    <!-- Content: split layout -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- LEFT: text content -->
        <div class="text-center md:text-left">
          <!-- Decorative frame -->
          <div class="flex justify-center md:justify-start mb-8 opacity-30 reveal" aria-hidden="true">
            <div class="flex items-center gap-4">
              <div class="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span class="text-primary-400 text-xs tracking-[0.4em] font-title uppercase">Explorez le monde</span>
              <div class="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <h1 class="font-heading text-5xl md:text-6xl lg:text-7xl text-gradient text-glow mb-6 leading-tight reveal reveal-delay-1">
            Wandaris
          </h1>

          <p class="font-title text-lg md:text-xl text-neutral-200 tracking-wide mb-4 reveal reveal-delay-2">
            L'aventure commence à chaque pas
          </p>

          <div class="divider-ornament my-6 reveal reveal-delay-2 md:justify-start" aria-hidden="true">✦</div>

          <!-- GEO-optimized: dense factual paragraph in first 200 words -->
          <p class="text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-10 reveal reveal-delay-3">
            Wandaris est un jeu mobile d'aventure RPG en monde réel, développé en France.
            Partez en balade, découvrez de vrais châteaux, ruines et cascades autour de vous,
            combattez des créatures, récoltez des ressources selon les biomes que vous traversez
            et maîtrisez 5 métiers d'artisanat. Un RPG qui vous fait marcher — pour de vrai,
            sans aucun pay-to-win.
          </p>

          <!-- CTA -->
          <div class="flex flex-col items-center md:items-start gap-5 reveal reveal-delay-4">
            <!-- Buttons row -->
            <div class="flex flex-col sm:flex-row items-center gap-3">
              <a
                :href="DISCORD_URL"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-600 border border-primary-400/30 text-primary-100 font-title text-xs uppercase tracking-widest transition-all duration-300 btn-glow whitespace-nowrap"
              >
                Rejoindre le Discord
                <UIcon name="i-simple-icons-discord" class="size-3.5 shrink-0" />
              </a>

              <a
                href="#features"
                class="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-400/20 hover:border-primary-400/40 hover:bg-primary-400/5 text-neutral-200 hover:text-primary-400 font-title text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
              >
                Découvrir le jeu
                <UIcon name="i-lucide-chevron-down" class="size-3.5 shrink-0 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            <span class="text-neutral-500 text-sm font-title tracking-wider">
              Bientôt disponible sur Android & iOS
            </span>
          </div>
        </div>

        <!-- RIGHT: phone mockup -->
        <div class="flex justify-center md:justify-end reveal reveal-delay-2">
          <div class="phone-glow-wrapper">
            <div class="phone-mockup-hero">
              <div class="phone-mockup-content">
                <!-- Placeholder: replace with actual screenshot -->
                <img
                  :src="HERO_SCREENSHOT"
                  alt="Capture d'écran de la carte de Wandaris affichant les points d'intérêt autour du joueur"
                  class="w-full h-full object-cover"
                  loading="eager"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                />
                <div class="phone-mockup-fallback" style="display:none">
                  <UIcon name="i-lucide-map" class="size-12 text-primary-400/40" />
                  <span class="font-title text-xs text-primary-400/30 mt-3 uppercase tracking-wider">Carte du jeu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
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

.phone-glow-wrapper {
  position: relative;
}

.phone-glow-wrapper::before {
  content: '';
  position: absolute;
  inset: -20px;
  border-radius: 36px;
  background: radial-gradient(ellipse at center, rgba(196, 168, 130, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.phone-mockup-hero {
  position: relative;
  width: 220px;
  aspect-ratio: 9 / 18;
  border-radius: 24px;
  overflow: hidden;
  border: 3px solid rgba(196, 168, 130, 0.2);
  background: linear-gradient(180deg, rgba(42, 32, 24, 0.9), rgba(26, 20, 16, 0.95));
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(196, 168, 130, 0.06);
}

.phone-mockup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.phone-mockup-fallback {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* On mobile, make the phone mockup smaller */
@media (max-width: 767px) {
  .phone-mockup-hero {
    width: 160px;
  }
}
</style>
