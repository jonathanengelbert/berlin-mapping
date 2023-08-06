'use client'
import dynamic from 'next/dynamic'
import styles from '../page.module.css'
export default function MapPage() {
    const Map = dynamic(
        () => import('@/app/components/Map'),
        {ssr: false}
    )
    return (
        <main className={ styles.map }>
            <Map/>
        </main>
    )
}