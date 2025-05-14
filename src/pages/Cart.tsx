import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <Box>
      <Typography variant="h4">Náš košík</Typography>
      {cart.length === 0 ? (
        <Typography>Košík je prázdný</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell align="right">Cena</TableCell>
                <TableCell align="right">Množství</TableCell>
                <TableCell align="right">Celkem</TableCell>
                <TableCell align="right">Akce</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="right">{item.price} Kč</TableCell>
                  <TableCell align="right">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: parseInt(e.target.value) },
                        })
                      }
                    />
                  </TableCell>
                  <TableCell align="right">{(item.price * item.quantity).toFixed(2)} Kč</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box>
        <Typography>Mezisoučet: {subtotal.toFixed(2)} Kč</Typography>
        <Typography>DPH: {tax.toFixed(2)} Kč</Typography>
        <Typography>Celkem: {total.toFixed(2)} Kč</Typography>
      </Box>
    </Box>
  );
};

export default Cart;