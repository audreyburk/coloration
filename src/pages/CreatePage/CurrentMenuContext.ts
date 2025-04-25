import { createContext, Dispatch, SetStateAction } from 'react'

// but maybe we actually just have one file for all our contexts, so no default export?
export const CurrentMenuContext = createContext<Dispatch<SetStateAction<string>> | null>(null)
