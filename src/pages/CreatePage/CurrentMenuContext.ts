import { createContext } from 'react'

// but maybe we actually just have one file for all our contexts, so no default export?
export const CurrentMenuContext = createContext((_x: string) => {})
