export {}
declare global {
  interface MenuItem {
    label: string
    to: string
  }
   type MenuItems = MenuItem[]
}
