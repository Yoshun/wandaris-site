<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-100 font-body film-grain">
    <!-- Skip to content (accessibility) -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-primary-100 focus:font-title focus:text-sm focus:uppercase focus:tracking-wider"
    >
      Aller au contenu principal
    </a>

    <SiteBanner />
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
