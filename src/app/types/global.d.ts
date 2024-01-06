declare module '*.module.scss' {
  const classes: Record<string, string>
  export default classes
}
declare module '*.svg' {
  import type React from 'react'
  const svg: React.VFC<React.SVGProps<SVGElement>>
  export default svg
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare const __IS_DEV__: boolean
