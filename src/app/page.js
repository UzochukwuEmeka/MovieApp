'use client'
import HomeComponet from './components/HomeComponet'
import Header from './components/Header'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './hooks/useAuth'

export default function Home() {
  return (
    <RecoilRoot>
  
        <Header />

        <main >

          <HomeComponet />


        </main>
     
    </RecoilRoot>


  )
}


