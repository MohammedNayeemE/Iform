import { Card, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FaUserMd, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';

function SignUp() {
   
   const navigate = useNavigate();
   
    return (
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center" style={{height:'430px',}} >
            <div className="w-100" style={{ maxWidth: "430px" }}>
                <Card  style={{border:'none', }}>
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                    <img src='src/Login image.jpg' alt='image' className='w-50'/>
                    </div>
                
                    <Card.Body >
                    
                    
                            
                        <Button className='w-100 mb-2' variant='primary' onClick={()=> navigate('/patient')}>
                            <FaUser style={{ marginRight: '0.5em' }} /> Patient
                            </Button>
                            <div style={{ marginTop: '10px' }}>
                             <Button className='w-100 mb-2'variant='primary' onClick={()=> navigate('/success')}>
                                <FaUserMd style={{ marginRight: '0.5em' }} /> Doctor
                            </Button>
                        </div>
                   
                </Card.Body>
                </Card>
            </div>
        </Container>
        </>
    )
}

export default SignUp;
