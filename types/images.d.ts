import { ImageSourcePropType } from "react-native";

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: ImageSourcePropTyp | undefined;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
