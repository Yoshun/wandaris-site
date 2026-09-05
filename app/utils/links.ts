// Canaux officiels — seule source de vérité côté site.
// Mêmes valeurs dans l'app mobile (app/config.ts) ; canaux documentés dans GDD.md §15.
export const SITE_URL = 'https://wandaris.com'
export const CONTACT_EMAIL = 'contact@wandaris.com'
export const DISCORD_URL = 'https://discord.gg/Cacq5xYX6Z'
export const SOCIAL_HANDLE = 'wandaris_app'

export interface SocialLink {
  name: string
  icon: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Discord', icon: 'i-simple-icons-discord', href: DISCORD_URL },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', href: `https://www.instagram.com/${SOCIAL_HANDLE}` },
  { name: 'TikTok', icon: 'i-simple-icons-tiktok', href: `https://www.tiktok.com/@${SOCIAL_HANDLE}` },
  { name: 'X', icon: 'i-simple-icons-x', href: `https://x.com/${SOCIAL_HANDLE}` },
]
