import React from 'react'
import {
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardBody,
    Button
} from "reactstrap";

const CartIteam=({product,addInCart})=>{
    return(
        <Card className="mt-2 mb-1">
        <CardImg top height="250" width="100%" src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">
                    Price:Rs{product.productPrice}
                </CardText>
                <Button
                color="success"
                onClick={()=>addInCart(product)}
                >Buy Now</Button>
            </CardBody>
    </Card>
    )

}

export default CartIteam;