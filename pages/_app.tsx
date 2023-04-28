import '../styles/globals.css'
import '../styles/general.css'
import type { AppProps } from 'next/app'
import MainLayout from '../src/components/layout/main-layout'

 function App({ Component, pageProps }: AppProps) {

  return (
  <>
  <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
  </>
  )
}
export default App;