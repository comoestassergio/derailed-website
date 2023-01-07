import HeroMobile from "../components/HeroMobile"
import Showcase from "../components/Showcase"
import Contact from "../components/Contact"
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const categories = [
    {
        name: 'chairs',
        description: 'exquisitely handcrafted to combine comfort and style',
        image: 'chair-cat.jpg',
    },

    {
        name: 'sofas',
        description: 'exquisitely handcrafted to combine comfort and style',
        image: 'sofas-cat.jpg',
    },

    {
        name: 'tables',
        description: 'exquisitely handcrafted to combine comfort and style',
        image: 'tables-cat.jpg',
    },
  ]


  return (
    <>
      <HeroMobile />
      <Showcase items={categories} />
      <Contact />
    </>
  )
}
