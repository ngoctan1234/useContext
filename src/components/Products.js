import {Container,Row,Col, Card,CardImg,CardBody,CardSubtitle,CardTitle,Button,CardText} from 'reactstrap'
import shoe from './imgs/shoe.jpg'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function Products(){
     const {products,addCart}=useContext(AppContext)
    return (
        <Container>
            <Row>
                {
                     products.map((item,index) => (
                        <Col sm="4" lg="3" key={index}>
    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={shoe}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            {item.product_name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {item.price}
                        </CardSubtitle>
                        <CardText>
                            {item.detail}
                        </CardText>
                        <Button onClick={()=>addCart(item.id)}>
                            Buy now
                        </Button>
                        </CardBody>
                    </Card>
                        </Col>
                    ))
                }
               
                
            </Row>
           
        </Container>
    )
}