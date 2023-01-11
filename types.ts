export {}
declare global {
  interface MenuItem {
    label: string
    to: string
  }

  type MenuItems = MenuItem[]

  interface SocialIconLink {
    icon: `i-${string}`
    to: string
  }
}
