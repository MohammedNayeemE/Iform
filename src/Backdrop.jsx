
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Backdrop(){
    const navigate = useNavigate();
    return(
        <>
        <Modal show={true} aria-labelledby="contained-modal-title-vcenter" centered >
                
                
                <Modal.Body>
                    <h3>
                        Thankyou for submitting the form , we wish you good luck !
                    </h3>
                    <Button className="primary" onClick={() => navigate('/')}>GO back to login page</Button>
                </Modal.Body>

               
            </Modal>
        </>
    )
}

export default Backdrop;