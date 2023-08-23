import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk('user/createUser',
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  })

interface ICurentUser {
  email?: string
  id?: string
  token?: string
}

export interface IProduct {
  id: number
  title?: string
  author?: string
  genre?: string
  image?: string
  price?: number
  description?: string
  fullIPrice?: number
  quantity?: number
}

interface IInitialState {
  currentUser: ICurentUser
  isAuth: boolean
  cart: IProduct[]
  fullCartPrice: number
  favorites: IProduct[]
  searchInputVal: string
}

const initialState: IInitialState = {
  currentUser: {},
  isAuth: false,
  cart: [],
  fullCartPrice: 0,
  favorites: [],
  searchInputVal: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IProduct>) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => {
        return id === action.payload.id;
      })
      if (found) {
        newCart = newCart.map(item => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity && item.quantity + 1 }
            : item;
        })
      } else {
        newCart.push({ ...action.payload, quantity: 1 })
      }
      state.cart = newCart;
    },
    remItemFromCart: (state, action: PayloadAction<IProduct>) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => {
        return id === action.payload.id;
      })
      if (found?.quantity) {
        if (found.quantity <= 1) {
          newCart = state.cart.filter(({ id }) => id !== action.payload.id);
        } else {
          newCart = newCart.map(item => {
            return item.id === action.payload.id
              ? { ...item, quantity: item.quantity && item.quantity <= 0 ? item.quantity = 0 : item.quantity && item.quantity - 1 }
              : item;
          })
        }
        state.cart = newCart;
      }
    },
    remItemAllFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload.id);
    },
    addFullIPrice: (state, action: PayloadAction<IProduct>) => {
      const { fullIPrice, id } = action.payload;
      let newCart = [...state.cart];
      newCart.map(item => {
        return item.id === id
          && { ...item, fullIPrice: item.fullIPrice = fullIPrice }
      })
    },
    setSearchInputVal: (state, action: PayloadAction<string>) => {
      state.searchInputVal = action.payload;
    },
    toggleFavorites: (state, action: PayloadAction<IProduct>) => {
      let newFavList = [...state.favorites];
      const found = state.favorites.find(({ id }) => {
        return id === action.payload.id;
      })
      if (found) {
        newFavList = state.favorites.filter(({ id }) => id !== action.payload.id);
      } else {
        newFavList.push({ ...action.payload });
      }
      state.favorites = newFavList;
    },
    setUser(state, action: PayloadAction<object>) {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    removeUser(state) {
      state.currentUser = {};
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    })
  }
})

export const {
  addItemToCart,
  remItemFromCart,
  setSearchInputVal,
  addFullIPrice,
  remItemAllFromCart,
  toggleFavorites,
  setUser,
  removeUser
} = userSlice.actions;
export default userSlice.reducer;