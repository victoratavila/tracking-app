import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RedirectingToResultsSoon = () => {
    return (

        toast('Buscando pacote...', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            })
    )
  
}


export default RedirectingToResultsSoon;