import { useEffect, useState } from "react"


export default function Contact () {

    const [ input, setInput ] = useState(null)
    const [ inputError, setInputError ] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input || input.length < 1) {
            setInputError(true)
            return
        }
        
        alert(input)
    }

    useEffect(() => {

        if (input && input.length > 0){
            setInputError(false)
        }

    }, [input])

    return (
        <div className="px-5 pt-10 pb-14 flex flex-col gap-10">
            <div className="w-3/4 h-[2px] bg-accent self-end"></div>
            <h2 className="text-5xl uppercase font-semibold text-primary">derailed</h2>
            <section className="leading-[200%] max-w-sm text-xl opacity-75">
                <p>
                unites most <span className="text-accent opacity-100 font-bold">passionate</span> masters of their instrument with a common goal of <span className="text-accent opacity-100 font-bold">delivering stylish</span> and affordable furniture into <span className="text-accent opacity-100 font-bold">everyone’s home</span>.
                </p>
            </section>
            <section className="leading-[200%] max-w-sm text-xl opacity-75">
                <p>
                we stand by <span className="text-accent opacity-100 font-bold">our standards</span> and make sure our product is at its <span className="text-accent opacity-100 font-bold">finest</span> before being brought to  <span className="text-accent opacity-100 font-bold">our clients</span>.
                </p>
            </section>
            <form onSubmit={handleSubmit} className="mt-10">
                <h3 className="text-3xl uppercase text-primary font-semibold mb-3">
                    Join our newsletter
                </h3>
                <p className="text-md opacity-75 max-w-xs mb-8">to get newest deals and latest updates weekly</p>
                <div>
                    <p className="text-lg uppercase text-accent">email</p>
                    <input name={'email'} onChange={handleInputChange} className="border-2 w-full h-14 p-4 focus-within:border-primary focus-visible:border-primary focus:border-primary" type={'email'}/>
                    {inputError && <p className="text-primary text-lg">this field is required</p>}
                    <button className="w-full h-14 bg-primary mt-3 text-white text-md uppercase">submit</button>
                </div>
            </form>
        </div>
    )
}