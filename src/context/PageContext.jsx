import { createContext } from 'react'

const PageContext = createContext({
  currentPage: 'home',
  setCurrentPage: () => {}
})

export default PageContext
