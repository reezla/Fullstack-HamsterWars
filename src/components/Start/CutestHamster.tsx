import { useState, useEffect} from 'react'
import { Hamster } from '../../models/Hamster'


const CutestHamster = () => {

const [ cutestHamster, setCutestHamster ] = useState<null | Hamster[]>(null);
 
useEffect(() => {
    async function send() {
        await getCutest(setCutestHamster)
    }
    send()
}, [])


// gives us a winner if we have hamsters with same score
if( cutestHamster && cutestHamster?.length > 1 ) {
    const giveUsWinner:Hamster = cutestHamster[Math.floor(Math.random()*cutestHamster.length)]
    setCutestHamster([giveUsWinner])
}

console.log('the cutest is: ', cutestHamster)

return (
    <div>
   
   < section> 
      { cutestHamster?
      cutestHamster.map( hamster => (
 
          <section key={ hamster.id } className="galleryCard">
               <img 
                   src={`/img/${hamster.imgName}`} 
                   alt={hamster.name} 
                   key={hamster.id}/>
               <br/>
               <p>{hamster.name}</p>
               <p>His score is: {`${hamster.wins - hamster.defeats}`} (wins - defeats) </p>
           </section>
      
      ))
      
      : 'Humsters are taking some rest... apparently'
      }
     
   </section>
</div>
)




async function getCutest(theCutestHamster:any){
   try { 
    const url = ''                   
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(response.statusText)
    } else {
        const data = await response.json()
        getCutest(data)
        
    }
} catch (error) {
    console.log('There is an error:', error);
    
}
}


}

export default CutestHamster