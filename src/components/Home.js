import React, { useState } from 'react'
import Slide from './Slide'

// Jesus Urueta Creacion del componente home con lista y hook

export default function Home () {

        const content = [
            {
                title: "Today's workout plan",
                text: "We're gonna do 3 fundamental exercises." 
            },
            {
                title: "First, 10 push-ups",
                text: "Do 10 reps. Remenber about full range of motion. Don't rush." 
            },
            {
                title: "Next, 20 squats",
                text: "Squats are important. Remenber to keep your back straight." 
            },
            {
                title: "Finally, 15 sit-ups",
                text: "Slightly bend your knees. Remenber about full range of motion." 
            },
            {
                title: "Great job!",
                text: "You made it, have a nice day and see you next time!" 
            },
        ];

        // Jesus Urueta Creacion de hook que se realizara la posicion
        const [position, setPosition] = useState(0)

        document.title = `You are in the diapo ${position}`
        
        return (
           <React.Fragment>
               <div className="container">
                   <div className="row d-flex justify-content-center pt-5 mt-5 mb-5">
                       <div className="px-4">
                            <button className="btn bg-white-button white px-4 py-1 font-weight-bold disable-white" onClick={() => setPosition(0)} disabled={position == 0} >Restart</button>
                       </div>
                       <div className="px-4">
                            <button className="btn bg-boton white px-4 py-1 shadow-1 font-weight-bold" onClick={() => setPosition(position - 1)} disabled={position == 0}>Prev</button>
                       </div>
                       <div className="px-4">
                            <button className="btn bg-boton white px-4 py-1 shadow-1 font-weight-bold" onClick={() => setPosition(position + 1)  } disabled={ position == content.length-1 } >Next</button>
                       </div>
                   </div>

                    <Slide title={content[position].title} text={content[position].text} />
               </div>

           </React.Fragment>
        )

}
