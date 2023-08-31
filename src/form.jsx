import { Container, Form, Button, ProgressBar } from 'react-bootstrap';

import { useState } from 'react';

import './custom.css';


function MedicalForm() {
    
    const formComponents = [
      {
        id:"name" , label : "Name" , type:"text", gif:'id' , placeholder :'your name',
        id1:"occupation" , label1 : "Occupation" , type1:"text" , gif1:'job-seeking' , placeholder1 :'your work',
        id2:"status" , label2 : "MarriedStatus" , type2:"text" , gif2:'heart' , placeholder2 :'status'
      },
      {
        id:"height" , label : "Height" , type:"text", gif:'height', placeholder:'in cm',
        id1:"weight" , label1 : "Weight" , type1:"text" , gif1:'weight-scale', placeholder1:'in kg',
        id2:"age" , label2 : "Age" , type2:"text" , gif2:'aging' , placeholder2:'your age'
  
      },
      {
        id:"address" , label : "Address" , type:"text", gif:'home', placeholder:'country,state,city',
        id1:"phone" , label1 : "Phone" , type1:"text" , gif1:'calling', placeholder1:'+cc ',
        id2:"healthgoals" , label2 : "HealthGoals" , type2:"text" , gif2:'target' , placeholder2:'eg. i want to be fit'
      }
    ]

    const [Now , setNow ] = useState(0);
    const [border , setBorder] = useState('none');
    const [currentStep , setCurrentStep] = useState(0);
    const [text , setText] = useState('');
    const [text1 , setText1] = useState('');
    const [text2 , setText2] = useState('');
    const [data , setdata] = useState([]);

    const totalsteps = formComponents.length;
    
    

    function handleInput(a , e){
        {(a<=100 && e.target.value != '') ? (setNow(Now+a)) : ((Now > 0 ? setNow(Now-a) : setNow(0)))}
        //setText(e.target.value);
        

    }

    function handlepreviousClick(e){
      e.preventDefault();
      
      if(currentStep > 0){
        setCurrentStep(currentStep - 1);
      }

      setText('');
      setText1('');
      setText2('');
    
    
      
      //console.log(currentStep);
    }
    function handleNextStep(e){
       e.preventDefault();
       if(text == '' || text1 == '' || text2 == ''){
        
        setBorder('2px solid red');
        return;
      }
      if(currentStep == totalsteps-2) e.target.textContent = 'Submit';
      if(currentStep == totalsteps-1){
        
        setCurrentStep(0);
        //console.log(currentStep);
      }
      else{
        setCurrentStep(currentStep + 1);
       // console.log(currentStep);
      }
      
      const updateddata = [...data];
      updateddata[currentStep] = {
        text , text1 , text2
      }

      setdata(updateddata);


      setText('');
      setText1('');
      setText2('');
      setBorder('none');
    

      
    }
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
  return (
    <>
    
      
      <Container className="d-flex flex-column justify-content-center align-items-center " style={{ height: '100vh' }}>
       
      <ProgressBar now={(currentStep + 1) / totalsteps * 100}  style={{width:'50%'  }} animated striped variant='info' />
      <br/>
      <br/>

        <div className='w-100 border rounded p-4' style={{ maxWidth: "430px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
        
        
       
          <Form>
            <Form.Group controlId={formComponents[currentStep].id} className='m-2'>
              <Form.Label>
                {formComponents[currentStep].label}
              </Form.Label>
              <div className='d-flex align-items-center'>
              <Form.Control type='text' placeholder= {formComponents[currentStep].placeholder} onBlur={(e)=> handleInput(33 , e)} onInput={(e)=> setText(e.target.value)}  value={text} style={{border:`${border}`}}
              className='inputtext'/>
              <img src={`src/icons/${formComponents[currentStep].gif}.gif`} alt="Icon" className="gif-icon" />
              </div>
            </Form.Group>

            <Form.Group controlId={formComponents[currentStep].id1} className='m-2'>
              <Form.Label>
                {formComponents[currentStep].label1}
              </Form.Label>
              <div className='d-flex align-items-center'>
              <Form.Control type='text' placeholder= {formComponents[currentStep].placeholder1} onBlur={(e)=> handleInput(33 , e)} onInput={(e)=> setText1(e.target.value)} value={text1} style={{border:`${border}`}}className='input'/>
              <img src= {`src/icons/${formComponents[currentStep].gif1}.gif`} alt="Icon" className="gif-icon" />
              </div>
            </Form.Group>

            <Form.Group controlId={formComponents[currentStep].id2} className='m-2'>
              <Form.Label>
                {formComponents[currentStep].label2}
              </Form.Label>
              <div className='d-flex align-items-center'>
              <Form.Control type='text' placeholder= {formComponents[currentStep].placeholder2} onBlur={(e)=> handleInput(34 , e)} onInput={(e)=>setText2(e.target.value) } value={text2} style={{border:`${border}`}} className='input'/>
              <img src= {`src/icons/${formComponents[currentStep].gif2}.gif`} alt="Icon" className="gif-icon" />
             </div>
            </Form.Group>

            
             
            <div className='d-flex justify-content-around'>
              <Button type='submit' className='' onClick={handlepreviousClick} disabled = {currentStep == 0}>
                Previous
              </Button>
              <Button type='submit' className='' onClick={handleNextStep}>
                Next
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  )
}

//<ProgressBar now={Now} variant='success' />
export default MedicalForm;



















/*


*/







