import HeroMobile from "../components/HeroMobile"
import Showcase from "../components/Showcase"

export default function Home() {

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
    </>
  )
}
