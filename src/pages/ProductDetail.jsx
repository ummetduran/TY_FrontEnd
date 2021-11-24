
import { Button, Card, Image } from 'semantic-ui-react'
import { useParams } from 'react-router'
import React, {useState, useEffect} from 'react'
import ProductService from '../services/productService'
export default function ProductDetail() {
    let {id} = useParams()

    const [product, setProduct] = useState({})

    useEffect(()=> {
        let productService  = new ProductService()
        productService.getProductById(id).then(result => setProduct(result.data))
    }, [])

    return (
        <div>
            <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>{product.productName}</Card.Header>
        <Card.Meta>Fiyat : {product.price}</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Sepete Ekle
          </Button>
          <Button basic color='red'>
            Favorilere Ekle
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
        </div>
    )
}
