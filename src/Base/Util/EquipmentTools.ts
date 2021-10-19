import { isWeb as _isWeb, isNode as _isNode, isReactNative } from "./Equipment";

export function isRunWeb($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => _isWeb;
}

export function isRunNode($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => _isNode;
}

export function isRunRN($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => isReactNative();
}
