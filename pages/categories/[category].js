import Link from "next/link"
import { useRouter } from "next/router"

import Card from "../../components/Card"
import Showcase from "../../components/Showcase"

export default function Category ({ data }) {
    const router = useRouter()

    const { category } = router.query

    return (
        <div className="w-full min-h-screen">
            <header className="w-full px-5 py-3 bg-primary">
                <h1 className="text-xl text-secondary uppercase tracking-widest font-semibold">
                    <Link href={'/'}>derailed</Link>
                </h1>
            </header>
            <Showcase items={data[category]} title={category} />
        </div>
    )
}


export function getServerSideProps() {

    const data = {
        chairs: [
            {
                name: 'chair 1',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'chair-cat.jpg',
            },
    
            {
                name: 'chair 2',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'sofas-cat.jpg',
            },
    
            {
                name: 'chair 3',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'tables-cat.jpg',
            },
        ],

        tables: [
            {
                name: 'table 1',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'chair-cat.jpg',
            },
    
            {
                name: 'table 2',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'sofas-cat.jpg',
            },
    
            {
                name: 'table 3',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'tables-cat.jpg',
            },
        ],

        sofas: [
            {
                name: 'sofa 1',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'chair-cat.jpg',
            },
    
            {
                name: 'sofa 2',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'sofas-cat.jpg',
            },
    
            {
                name: 'sofa 3',
                description: 'exquisitely handcrafted to combine comfort and style',
                image: 'tables-cat.jpg',
            },
        ]
    }

    return {
        props: {
            data
        }
    }
}