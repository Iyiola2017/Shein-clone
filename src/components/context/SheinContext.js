import { useState, createContext, useEffect } from "react";


export const SheinContext = createContext();

function CartProvider(props) {
    const [cart, setCart] = useState([]);

    let localStorageCart = localStorage.getItem("social-cart");

    let GrandTotalPrice = [...cart]
        .map(({ totalPrice }) => totalPrice)
        .reduce((total, initial) => {
            return total + initial;
        }, 0);

    useEffect(() => {
        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }
    }, []);

    const addToCart = (product) => {
        let cartData = [...cart];
        let checkDataIfExist = cartData.find((data) => {
            return data._id === product._id;
        },);
        if (checkDataIfExist) {
            alert("Data already in cart");
            return;
        }
        alert("Product Added to Cart")
        let newProduct = { ...product, qty: 1, totalPrice: product.price };
        cartData.push(newProduct);
        setCart(cartData);
        localStorage.setItem("social-cart", JSON.stringify(cartData));
    };
    const increaseCartQty = (product) => {
        let cartData = [...cart];
        cartData.find((cartProduct) => {
            if (cartProduct._id === product._id) {
                product.qty += 1;
                product.totalPrice = product.qty * product.price;
            }
        });
        setCart(cartData);
        localStorage.setItem("social-cart", JSON.stringify(cartData));
    }
    const decreaseCartQty = (product) => {
        let cartData = [...cart];
        cartData.find((cartProduct) => {
            if (cartProduct._id === product._id) {
                if (product.qty > 1) {
                    product.qty -= 1;
                    product.totalPrice = product.qty * product.price;
                }
            }
        });
        setCart(cartData);
        localStorage.setItem("social-cart", JSON.stringify(cartData));
    }
    const deleteCartItem = (product) => {
        let cartData = [...cart];
        let cartItems = cartData.filter((cartProduct) => {
            return cartProduct._id !== product._id;
        });
        setCart(cartItems);
        localStorage.setItem("social-cart", JSON.stringify(cartData));
    };
    return (
        <SheinContext.Provider value={{ cart, setCart, addToCart, increaseCartQty, decreaseCartQty, deleteCartItem, GrandTotalPrice }}>
            {props.children}
        </SheinContext.Provider>
    )
}
export default CartProvider;