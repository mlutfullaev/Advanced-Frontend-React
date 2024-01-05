declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.svg" {
  import React from "react";
  const svg: React.VFC<React.SVGProps<SVGElement>>
  export default svg;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare const __IS_DEV__: boolean;
