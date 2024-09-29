"use client"

import { KeywordProvider } from "./KeywordProvider";

export default function Providers({ children } : Readonly<{ children: React.ReactNode }>) {

  return (
    <KeywordProvider>
      {children}
    </KeywordProvider>
  )
}