import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../firebase";




export const fetchProducts = createAsyncThunk(
    "products/fetch-all",
    async(args, thunkAPI) => {
        try {
            const productsRef = collection(firestoreDb, "products")
            const docsSnap = await getDocs(productsRef)
            let products = []
            docsSnap.forEach((doc)=>{
                const data = doc.data()
                products.push({id:doc.id,...data})
            });
            console.log(products);
            return {
                products,
            }
           
        } catch (error) {

            thunkAPI.rejectWithValue({
                error:error.message,
            })
            
        }
    }
);

export const addProducts = createAsyncThunk(
    "products/add-one",
    async(newProducts, thunkAPI) =>{
        try {
            const productsRef = collection(firestoreDb, "products")
            await addDoc(productsRef, newProducts);
            return {}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
            
        }
    }
)

const initialState = {
    products:[],
    loading: false,
    adding: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.loading= true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.products = action.payload.products;
            state.loading = false;
        });

        builder.addCase(addProducts.pending, (state, action)=>{
            state.loading = true;
        });

        builder.addCase(addProducts.fulfilled, (state, action)=>{
            state.loading = false
        })
    }
})

export default  productsSlice.reducer;