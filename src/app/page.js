'use client'
import HomeComponet from './components/HomeComponet'
import Header from './components/Header'
import { RecoilRoot } from 'recoil'
import { AuthProvider } from './hooks/useAuth'

export default function Home() {
  return (
    <RecoilRoot>
  
        <Header />

        <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>

          <HomeComponet />


        </main>
     
    </RecoilRoot>


  )
}


