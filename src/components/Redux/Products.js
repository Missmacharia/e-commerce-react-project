
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { firestoreDb, storage } from "../firebase";




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
);

export const upLoadImagesAction  = createAsyncThunk(
    "upload/images", 
    async(imageUpload, thunkAPI)=>{
        try {
            if(imageUpload=== null) return
            const imageRef = ref(storage, `images/${imageUpload.name}`)
            uploadBytes(imageRef, imageUpload)
            return {
                imageUpload
            }
        } catch (error) {

            thunkAPI.rejectWithValue({
                error:error.message
            })
            
        }
    }
);

export const deleteProductsAction = createAsyncThunk(
    "delete/products",
    async(deleteProducts, thunkAPI)=>{
        try {
            const productsRef= doc(firestoreDb, "products")
            deleteDoc(productsRef, deleteProducts)
            return "delete successfully"
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
)

const initialState = {
    products:[],
    images:[],
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
        });
        builder.addCase(deleteProductsAction.pending, (state, action)=>{
            state.loading= true;
        });
        builder.addCase(deleteProductsAction.fulfilled, (state, action)=>{
            state.products = action.payload.products
            state.loading= false;
        })
        builder.addCase(upLoadImagesAction.pending, (state, action)=>{
            state.loading = true
        });
        builder.addCase(upLoadImagesAction.fulfilled, (state, action)=>{
            state.images= action.payload.images;
            state.loading = false
        });
        
    }
})

export default  productsSlice.reducer;