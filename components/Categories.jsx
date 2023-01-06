import Card from "./Card"





export default function Categories () {

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
        <div className="relative min-h-screen max-screen-sm py-14 z-0 overflow-x-hidden">
            <p className="absolute top-[20%] left-0 text-9xl uppercase rotate-90 z-10 text-primary">categories</p>
            <ul className="flex flex-col gap-8 w-5/6 ml-5 z-20 max-w-xs">
                {categories?.map((el, index) => (
                    <Card key={index} el={el} />
                ))}
            </ul>
        </div>
    )
}