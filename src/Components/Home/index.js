import React, { useState } from 'react';
import './styles.css';
import NavbarComponent from '../Navbar'
import ButtonRegisterPackage from '../Buttons/RegisterPackage';
import { useNavigate } from 'react-router-dom';
import invalidTrackingCode  from '../Toasters/Warning/invalidTrackingCode';
import RedirectToResultsSoon  from '../Toasters/Success/RedirectingToResultsSoon';

const Home = () => {

    const [ code_to_track, set_code_to_track ] = useState(null);
    const navigate = useNavigate();

    // Verify if code informed is valid  
    const validateTrackingCode = (code) => {

        if(code.length < 13){
            console.log('Code is incomplete, expected legth is 13')
        } else {

            const first_digits = code.substring(0,2);
            const between_digits = code.substring(3,11);
            const last_digits = code.substring(11, 13);

            const isnum = /^\d+$/.test(between_digits);
          
            if(/^[a-zA-Z]+$/.test(first_digits) && /^[a-zA-Z]+$/.test(last_digits) && last_digits === 'BR' && isnum === true){
                set_code_to_track(code);

                RedirectToResultsSoon();
                
                setTimeout(() => {
                    navigate(`/buscar/${code}`);
                }, 2000)

                

            } else {
                invalidTrackingCode();
                set_code_to_track(null);
            }
        }
    }

    // Get typed package code
    const handleKeyPress = (ev) => {

        if(ev.target.value.length === 13){
            validateTrackingCode(ev.target.value);
        }
    }

    // Get package code in case was pasted instead of typed
    const handlePaste = (ev) => {

        if(ev.clipboardData.getData('text').length === 13){
            validateTrackingCode(ev.clipboardData.getData('text'));
        }
        
    }
    
    return (

        <div>
            <NavbarComponent/>
            <div className='center'> <br/> <br/> <br/> <br/>
                <h1 id = "home-title">Rastrear encomenda</h1>

                <br/> 
                <input onPaste = {handlePaste} onKeyPress = {handleKeyPress} maxLength={13} className='input-package-code' placeholder='Ex: AA123456789BR'></input>
                <br/> <br/> <br/> <br/>

                <div className='centralizer'>
                    <h5 id = 'none-package-registered-alert'>Nenhum pacote registrado ainda... </h5>
                </div> <br/>

                <div className='centralizer'>
                   <ButtonRegisterPackage/>
                </div>

              

                

            </div>
        </div> 

    )
}

export default Home;