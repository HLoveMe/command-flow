import { PlatformSelect } from "./Equipment";

/**
 * 获取引用
 * @param quote_name 
 * @param node 
 * @param rn 
 * @param electron 
 * @returns 
 * libraryQuote('fetch','node-fetch')
 */
export const libraryQuote = (quote_name: string, node?: string, rn?: string, electron?: string) => async () => {
  const result = await PlatformSelect({
    web: () => (global || window)[quote_name] || require(quote_name),
    node: () => {
      const a = fetch
      debugger
    },
    electron: () => require(electron || quote_name),
  })()
  return result
}