import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Navbar';
import { useParams } from 'react-router-dom';
import api from '../../api/config';
import packageNotFound from '../Toasters/Warning/packageNotFound';
import './styles.css';
import ButtonRegisterPackage from '../Buttons/RegisterPackage';
import Timeline from '../Timeline';

const TrackingSearchResult = (props) => {

    const { code } = useParams();
    const [ trackingResults, setTrackignResults ] = useState(null);

    useEffect(() => {

        api.get(`/track/${code}`).then(result => {

            if(result.data[0].length >= 0){
                setTrackignResults(result.data[0]);

            } else {
                packageNotFound(code);
            }
            
        }).catch(err => {
            console.log(err);
        })

    }, []);

    return(
        <div>
            <NavbarComponent/>

            <div className='center'> <br/> <br/> <br/> 
               

               <div className='centralizer'>

               <h1 id = "package-details"> Pacote {code} </h1> <br/> 

                 <div className='centralizer2'>
                   <ButtonRegisterPackage/>
                 </div>
               
               </div>
            
            </div>

            
            <div style={{textAlign: 'left'}}>


            <br/> <br/>

            {trackingResults && (
                <Timeline elements = {trackingResults} />
            )}
            

            </div>
          
        </div>

        
    )
}

export default TrackingSearchResult;