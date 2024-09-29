import { createContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type KeywordType = {
  keyword: string|undefined|null,
  setKeyword: (value:string) => void
}

const KeywordContext = createContext<KeywordType>({
  keyword: '',
  setKeyword: (keyword:string) => keyword 
})

function KeywordProvider({ children } : Readonly<{ children: React.ReactNode }>) {

  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState<string|undefined|null>(searchParams.get('keyword'));

  return (
    <KeywordContext.Provider value={{keyword, setKeyword}}>
      {children}
    </KeywordContext.Provider>
  )
}

export { KeywordProvider, KeywordContext }