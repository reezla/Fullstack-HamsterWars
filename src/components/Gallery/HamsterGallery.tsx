import { Hamster } from '../../models/Hamster'
import { useEffect, useState } from 'react'
import AddHamsters from './AddHamster'

// import hamsters from '../../atoms/hamsters'

// import { useRecoilState } from 'recoil'


const HamsterGallery = () => {

    const [ ourHamster, setOurHamster ] = useState<null | Hamster[]>(null)


    useEffect(() => {
        async function send() {
           await getHamsters(setOurHamster)
        }
        
        send()
    }, [])


    // remove one hamster from the list
    const removeHamster = (id: string ): void => {       // funkcija gde uzimamo (id) i radimo nesto sa tim
            const newList = ourHamster? ourHamster.filter( hamster => hamster.id !== id) : null
            setOurHamster(newList) 
            removeFromDb(id)
        }      

     async function removeFromDb(id:any) {
            await fetch(`/hamsters/${id}`, {
                method: 'delete',
                headers: { "Content-Type": "application/json" },
            });
    }

    console.log('this is:', ourHamster)
    return (
        <div>
             <AddHamsters/>
            < section className="gallery" > 
              
              

               { ourHamster?
               ourHamster.map( hamster => (
             
                   <section key={ hamster.id } className="galleryCard">
                        <img 
                            src={`/img/${hamster.imgName}`} 
                            alt={hamster.name} 
                            key={hamster.id}/>
                        <br/>
                        <p>{hamster.name}</p>
                        <button onClick={() => removeHamster(hamster.id)}>Remove</button>
                    </section>
               
               ))
               
               : 'Where are they'}
              
            </section>
        </div>
    )
         
    async function getHamsters(allHamsters:any){
        const url = 'http://localhost:1337/hamsters' // 'https://hamster-original.herokuapp.com/hamsters'                      
        const response = await fetch(url)
        const data = await response.json()
        allHamsters(data)
    }

}

export default HamsterGallery