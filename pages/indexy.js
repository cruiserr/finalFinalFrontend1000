import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const router = useRouter();

  const itemId = 1;
  const sellerId = 15;
  


  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        
      {/* Your existing content */}
      <button onClick={() => router.push(`/orders/${itemId}/${sellerId}`)}>Order</button>
    </div>
      
      
      

    </>
  )
}
