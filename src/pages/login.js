import Base from "../components/base";
import { Card, CardBody,Form, CardHeader, Container, FormGroup, Label, Button ,Row ,Col } from "reactstrap";
const Login = ()=>{
    return (
        <Base>
        <Container>
        <Row>
            <Col sm= {{size:6 ,offset:3}} >
            <Card color="dark" inverse style={{marginTop:"60px"}}>
            <CardHeader>
                <h3> Fill Information to Login</h3>
            </CardHeader>
            <CardBody >
                <Form >
                    
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <input
                          type="text" 
                          placeholder="Enter Your Email"    
                          id="email"  
                          style={{width:"100%"} }                    
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <input type="text" 
                          placeholder="Enter Your Password"    
                          id="password"
                          style={{width:"100%"} }                       
                        />
                    </FormGroup>
                    <Container className="text-center">
                        <Button  outline color="primary">Login</Button>
                        <Button color="secondary" type="reset" className="ms-2">Reset</Button>
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
export default Login;