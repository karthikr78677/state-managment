import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { remove, incrementQuantity, decrementQuantity } from '../store/cartSlice';

const Cart = () => {
  const productCart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const increaseQty = (id) => { 
    dispatch(incrementQuantity(id));
  };

  const decreaseQty = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div>
      {productCart.map(product => (
        <Card key={product.id} style={{ width: '18rem', marginBottom: "40px" }}>
          <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Button onClick={() => decreaseQty(product.id)}>-</Button>
              <Button variant="light" disabled>{product.quantity}</Button>
              <Button onClick={() => increaseQty(product.id)}>+</Button>
            </div>
            <Card.Text style={{ marginTop: "30px" }}>
              INR {product.price * product.quantity}
            </Card.Text>
            <Button variant='danger' onClick={() => removeFromCart(product.id)}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
