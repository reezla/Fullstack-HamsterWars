import { useState } from 'react'


// add new hamster to the list 
const AddHamsters = () => {

    const [ newHamsterName, setNewHamsterName ] = useState<string>('')
    const [ newHamsterAge, setNewHamsterAge ] = useState<number>(0)
    const [ newHamsterFavFood, setNewHamsterFavFood ] = useState<string>('')
    const [ newHamsterLoves, setNewHamsterLoves ] = useState<string>('')
    const [ newHamsterImgName, setNewHamsterImgName ] = useState<string>('')


    const handleNameChange = (e: string | any) => setNewHamsterName(e.target.value)
    const handleAgeChange = (e: number | any) => {
        if (e.target.valueAsNumber)
        setNewHamsterAge(e.target.valueAsNumber)
    }
    const handleFavFoodChange = (e: string | any ) => setNewHamsterFavFood(e.target.value)
    const handleLovesChange = (e: string | any ) => setNewHamsterLoves(e.target.value);
    const handleImgNameChange = (e: string | any ) => setNewHamsterImgName(e.target.value);


    const data = { 
        name: newHamsterName,
        age: newHamsterAge,
        favFood: newHamsterFavFood,
        loves: newHamsterLoves,
        imgName: newHamsterImgName,
        wins: 0,
        defeats: 0,
        games: 0
    }

    const newHamster = () => {
        fetch("/hamsters", { 
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify(data),
        })
   
        .then((response) => response.json())
        .then((data) => {
            console.log("This is:", data)
        })
         .catch((error) => {
             console.log("Error:", error)
         })
    }

    return (
        <>
            <form >
                <input type="text" placeholder="Hamster name" value={newHamsterName} onChange={handleNameChange} />
                <input type="number" placeholder="Age" value={newHamsterAge} onChange={handleAgeChange} />
                <input type="text" placeholder="Food" value={newHamsterFavFood} onChange={handleFavFoodChange} />
                <input type="text" placeholder="Loves" value={newHamsterLoves} onChange={handleLovesChange} />
                <input type="text" placeholder="Picture" value={newHamsterImgName} onChange={handleImgNameChange} />
                <button type="submit" onClick={() => newHamster()}> add </button>
            </form>
        </>
    )
    

   /* const newHamster = { name, age, favFood, loves  }
    const newHamsterArray = [ ...ourHamster, newHamster ]
    setOurHamster(newHamsterArray) 
    */
}

export default AddHamsters; 