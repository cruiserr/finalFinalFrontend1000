import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Item.module.css'
import Layout from '@/components/Layout'
import viewingdata from '@/data/viewingData'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    
    const router = useRouter();
    const id = router.query.id;
    const [itemById, setItemById] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(id)
    console.log("localhost:8082/item/"+id);

    useEffect(() => {
        setLoading(true);
        viewingdata.itemById(id)
            .then((data) => {
            setItemById(data);
            setLoading(false);
            console.log(data);
            })
            .catch((e) => console.log(e));
        }, []);


    if(loading)
        return(
            <>
                <Head>
                    <title>View Rentals</title>
                    <meta name="View items available to rent" content="Demop" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                </Layout>
                
            </>
        )
    
    else
        return (
            <>
            <Head>
                <title>{itemById.name}</title>
                <meta name="View items available to rent" content="Demop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
            <div className={styles.main}>
                <h1>{itemById.name}</h1>
                <h2>Price: ${itemById.price}</h2>
            

                <br />
                <p>{itemById.description}</p>

                <br />

                <Link href={`/orders/${id}`}>
                    <button>Place Order</button>
                </Link>
            </div>

        </Layout>
            
        </>
    )
}
