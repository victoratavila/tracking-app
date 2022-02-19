import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const packageNotFound = (code) => {
    return (
        toast.warning(`Pacote ${code} não localizado, tente novamente com um código diferente`, {
            autoClose: 5000,
            pauseOnHover: true,
            hideProgressBar: true,
        })
    )
  
}

export default packageNotFound;