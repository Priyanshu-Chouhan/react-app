import { Card, CardBody,Form, CardHeader, Container, FormGroup, Label, Button ,Row ,Col } from "reactstrap";
import Base from "../components/base";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Signup = ()=>{
    const[data,setData]= useState({

        name: ' ',
        email: ' ',
        password: ' ',
        about:' ',


    })
    const [error ,setError]=useState({
        errors:{},
        isError:false
    })

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const handleChange=(event,property)=>{
       
        setData({...data,[property]:event.target.value})
    }

    const resetData=()=>{
        setData({
        name: ' ',
        email: ' ',
        password: ' ',
        about:' ',


    })
}

const submitForm=(event)=>{
    event.preventDefault()
    
    // data validate
    // call server api for sendinmg data
    if(error.isError){
        toast.error("Form data is invalid ")
        return;
    }
    console.log(data);
}
Signup(data)
.then((resp)=>{
    console.log(resp);
console.log("success log");
toast.success("user is signup successfully");
setData({
    name: ' ',
    email: ' ',
    password: ' ',
    about:' ',


});
})
.catch((error)=>{
    console.log(error);
    console.log("Error log");
    setError({
        errors:error,
        isError:true
    })
});


    return (
        <Base>
    <Container>
        <Row>
            <Col sm= {{size:6 ,offset:3}} >
            <Card color="dark" inverse style={{marginTop:"60px"}}>
            <CardHeader>
                <h3> Fill Information to SignUp</h3>
            </CardHeader>
            <CardBody >
                <Form onSubmit={submitForm} >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <input 
                          type="text" 
                          placeholder="Enter Your Name"    
                          id="name" 
                          onChange={(e)=>handleChange(e,'name')}
                          value={data.name}
                          invalid={true}
                          style={{width:"100%"} }                   
                        />
                     </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <input
                          type="text" 
                          placeholder="Enter Your Email"    
                          id="email"  
                          onChange={(e)=>handleChange(e,'email')}
                          value={data.email}
                          style={{width:"100%"} }                    
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <input type="text" 
                          placeholder="Enter Your Password"    
                          id="password"
                          onChange={(e)=>handleChange(e,'password')}
                          value={data.password}
                          style={{width:"100%"} }                       
                        />
                    </FormGroup>
                    <Container className="text-center">
                        <Button  outline color="primary">SignUp</Button>
                        <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>            
            </Col>
        </Row>
    </Container>
        </Base>
       
       
    
    );
};
export default Signup;