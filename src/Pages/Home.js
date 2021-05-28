import React, { useState } from 'react'
import Gymcard from '../Components/Gymcard'
import ReactModal from 'react-modal'
import Showgym from '../Components/Showgym'
import { Route ,Link } from 'react-router-dom'



const stylemodal ={

modal :{
         background : "black"
           
}

} ;
const Home = ({ Gymobj }) => {
    const [ModalIsopen, setModalIsopen] = useState(false)
    return (

        
        <div id='about' className='home'>
            {
                Gymobj.map((user, i) => {
                    return (

                        <Link to={`/showgym/${Gymobj[i].id}`} onClick={() => setModalIsopen(true)}> <Gymcard
                            key={i}
                            id={Gymobj[i].id}
                            title={Gymobj[i].title}
                            rate={Gymobj[i].rate}
                            img_src={Gymobj[i].img_src}
                            description={Gymobj[i].description}
                        />
                        </Link>
                    )
                })


            }
            
            <div >
                <ReactModal className="Modal"
           overlayClassName="Overlay" isOpen={ModalIsopen}>
                   <Link to="/"><a href="#" class="close" onClick={() => setModalIsopen(false)} /></Link> 
                    
                    <Route path="/showgym/:id" render={({match}) => 
                              <Showgym {...Gymobj.find(item=>item.id == match.params.id)} />
                              
                     }/>
                        
                </ReactModal>
            </div>
        </div>

    )
}

export default Home
