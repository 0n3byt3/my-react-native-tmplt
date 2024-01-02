/// <reference types="nativewind/types" />

declare interface String {
  toIndiaDigit() : string;
  toEngDigit() : string;
}
declare interface Date {
  toFaString() : string;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}