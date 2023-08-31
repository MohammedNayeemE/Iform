import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignUp from './signup';
import './custom.css';

function Page() {
    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
   

    return (
        <>
      
            
            <Modal show={true} aria-labelledby="contained-modal-title-vcenter" centered >
                
                <Modal.Header >
                    <Modal.Title>How do you wanna Login ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUp />
                </Modal.Body>
               
            </Modal>
        </>
    );
}

export default Page;
