import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const invalidTrackingCode = () => {
    return (
        toast.warning("Código inválido, tente novamente", {
            autoClose: 3000,
            pauseOnHover: true,
            hideProgressBar: true,
        })
    )
  
}

export default invalidTrackingCode;