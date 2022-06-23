export {}
declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      submit: (e: any) => void
    }
  }
}
