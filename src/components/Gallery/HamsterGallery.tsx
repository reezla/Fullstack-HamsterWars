import { Hamster } from '../../models/Hamster'
// import  hamsters  from '../../atoms/hamsters'
import { useEffect, useState } from 'react'
// import { useRecoilState } from 'recoil'


const HamsterGallery = () => {

    const [ ourHamster, setOurHamster ] = useState<null | Hamster[]>(null)

    useEffect(() => {
        async function send() {
           await getHamsters(setOurHamster)
        }
        
        send()
    }, [])


    console.log('this is:', ourHamster)
    return (
        <div>
            < section className="gallery"> 
               
               { ourHamster?
               ourHamster.map( hamster => (
                <div key={ hamster.id } >
                   <section className="galleryCard">
                        <img src={`/img/${hamster.imgName}`} alt='img'/>
                        <br/>
                        <p>{hamster.name}</p>
                        <button>Remove</button>
                    </section>
                </div>
               ))
               
               : 'Where are they'}

            </section>
        </div>
    )
         
    async function getHamsters(allHamsters:any){
        const url = 'http://localhost:1331/hamsters' // 'https://hamster-original.herokuapp.com/hamsters'                      
        const response = await fetch(url)
        const data = await response.json()
        allHamsters(data)
        
        

        
        
    }

}

export default HamsterGallery