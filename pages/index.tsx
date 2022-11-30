import { useEffect, useState } from 'react'
import Image from 'next/image'
import { TextField } from "../components"

async function saveEmail(email: string) {
    const response = await fetch('/api/emails', {
        method: 'POST',
        body: JSON.stringify({email})
    })

    if(!response.ok) {
        throw new Error(response.statusText)
    }
    
    return await response.json();
}

export default function Home() {
    const [email, setEmail] = useState('')
    const [thankYou, setShowThankYou] = useState(false)

    const storeEmail = () => {
        try {
            saveEmail(email).then(e => {
                setShowThankYou(true)
            })
        } catch(e) {

        }
    }

    useEffect(() => {
        if(thankYou)
            window.setTimeout(() => {
                setShowThankYou(false)
            }, 3000)
    }, [thankYou])
  return (
      <>
      <section className="bg-cover w-full h-screen px-2 flex flex-col justify-center" style={{backgroundImage: 'url(SGN_LA_CHIRIEGA_-3417.jpg)'}}>
        <div className="container mx-auto flex flex-col text-white text-center items-center">
          <picture className='mx-auto flex items-center justify-center'>
                <img className='md:w-2/3'src="1500w/ARTEFACTO.png" alt="artefacto"/>
          </picture>
        </div>

        <div className="flex flex-col text-white mx-auto px-8 md:px-0 mt-32">
            <div className="text-refrigerator uppercase text-3xl mb-4">our mezcal is coming soon. subscribe for more.</div>
            <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                label=''
                placeholder='Email...'
                name='email-prompt'
            />
      {email.length > 3 &&  <button onClick={storeEmail} className='my-4 border border-1 border-white bg-transparent text-white rounded-lg px-6 py-4'>Save</button>}
      {thankYou && 
              (
                  <div className="text-md text-white uppercase w-full text-center">Email saved!</div>
              )
      }
          </div>
      </section>

      <section className="w-full min-h-screen px-2 flex flex-col justify-center bg-white py-20 overflow-x-hidden">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center">
      <picture>
                <img className='w-20 md:w-40' src="1500w/oax-mx.png" alt="oax-mx"/>
      </picture>
      <picture>
                <img className='w-24 mx-12 md:mx-40 md:w-96' src="1500w/LOGO_ARTEFACTO.png" alt="oax-mx"/>
      </picture>
      <picture>
                <img className='w-20 md:w-40' src="1500w/cien_agave.png" alt="oax-mx"/>
      </picture>
          </div>

          <div className="text-bodoni text-4xl text-center mt-40">
            Artefacto deriva de la conjugación de las<br/>
            palabras latinas arte y factum que significa algo<br/>
            “hecho con arte”.
          </div>

        <div className="text-refrigerator text-3xl md:text-5xl uppercase my-52 text-center">Ensamble de agaves silvestres</div>
        
      <div className="flex flex-col md:flex-row items-center w-full justify-between w-3/4">
      <div className="my-8 flex flex-col items-center">
      <picture>
        <img className="w-52 h-40" src="1500w/espadin.png" alt=""/>
      </picture>
        <div className="text-bodoni italic text-center text-3xl">
            Espadín<br/>
            (a. angustifolia Haw.)
        </div>
      </div>
      <div className="my-8 flex flex-col items-center">
      <picture>
          <img className="w-52 h-40" src="1500w/tepeztate.png" alt=""/>
      </picture>
          <div className="text-bodoni italic text-center text-3xl">
            Tepeztate<br/>
            (a. marmorata Roezl )
          </div>
      </div>

      <div className="my-8 flex flex-col items-center">
      <picture>
          <img className="w-52 h-40" src="1500w/chuparrosa.png" alt=""/>
      </picture>
          <div className="text-bodoni italic text-center text-3xl">
            Chuparrosa<br/>
            (a. s.clasificación)
          </div>
      </div>
      </div>

        </div>

      </section>


      <section className='bg-cover w-full h-screen relative' style={{backgroundImage: 'url(SGN_LA_CHIRIEGA_-1446.png)'}}>
      <picture>
          <img className='w-24 md:w-80 absolute' alt="escudo" src="1500w/escudo.png" style={{left: '50%', bottom: '0', transform: 'translate(-50%, 30%)'}}/>
      </picture>
      </section>

      <footer className="flex flex-col md:flex-row text-center justify-between p-8 bg-black text-white py-32">
        <div className="text-3xl uppercase mb-12 md:mb-0">Mezcal Artefacto</div>
        <div className="text-3xl uppercase">IG @MEZCALARTEFACTO</div>
      </footer>
      </>
  )
}
