import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestoreDb } from "../firebase";

export const fetchCartProductsAction = createAsyncThunk(
    "fetchCarts/products-one",
    async(args, thunkAPI) =>{
        try {
            //getting dat from the firebase
            const cartRef = collection(firestoreDb, "cart")
            console.log(cartRef)
            const docsSnap = await getDocs(cartRef)
            console.log(docsSnap)
            let cart = []
            //converting the sata to readable form and attaching the data to its id
            docsSnap.forEach((doc)=>{
                const data = doc.data()
                cart.push({id:doc.id, ...data})
            })
            
            return{
                cart
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
            
        }
    }
    
);

export const addCartProductAction = createAsyncThunk(
    "add/products/cart",
    async(newCartProduct, thunkAPI)=>{
        try {
            const cartRef = collection(firestoreDb, "cart")
            await addDoc(cartRef, newCartProduct)
            return {}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
            
        }
    }
    
)

export const deleteCartProductsAction = createAsyncThunk(
    "deleteCard/products",
    async(deleteCart, thunkAPI)=>{
        try {
            const cartRef= doc(firestoreDb, "cart", deleteCart.id)
            await deleteDoc(cartRef, deleteCart)
            console.log(deleteCart);
            return
        } catch (error) {
            thunkAPI.rejectWithValue(
                {
                    error: error.message
                }
            )
        }
    }
)



const initialState= {
    cart: [],
    status: "",
    loading: false
}

const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCartProductsAction.pending, (state, action)=>{
            state.loading= true
        });

        builder.addCase(fetchCartProductsAction.fulfilled, (state, action)=>{
            state.cart = action.payload.cart
            state.loading = false
        });

        builder.addCase( addCartProductAction.pending, (state,action)=>{
            state.loading= true
        });

        builder.addCase(addCartProductAction.fulfilled, (state, action)=>{
            state.loading = false
        })
        builder.addCase(deleteCartProductsAction.pending, (state, action)=>{
            state.loading=true 
        })
        builder.addCase(deleteCartProductsAction.fulfilled, (state, action)=>{
            console.log(action)
            state.cart= action.payload
            state.loading = false
        })
    }
})

export default cartSlice.reducer