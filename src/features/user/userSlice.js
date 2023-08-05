import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
    isAuth: false,
    cart: [],
    fullCartPrice: 0,
    favorites: [],
    searchInputVal: ''
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => {
        return id === payload.id;
      })
      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      } else {
        newCart.push({ ...payload, quantity: 1 })
      }
      state.cart = newCart;
    },
    remItemFromCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => {
        return id === payload.id;
      })
      if (found.quantity <= 1) {
        newCart = state.cart.filter(({ id }) => id !== payload.id);
      } else {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity <= 0 ? item.quantity = 0 : item.quantity - 1 }
            : item;
        })
      }
      state.cart = newCart;
    },
    remItemAllFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload.id);
    },
    addFullIPrice: (state, { payload }) => {
      const { fullIPrice, id } = payload;
      let newCart = [...state.cart];
      newCart = newCart.map(item => {
        return item.id === id
          && { ...item, fullIPrice: item.fullIPrice = fullIPrice }
      })
    },
    setSearchInputVal: (state, { payload }) => {
      state.searchInputVal = payload;
    },
    toggleFavorites: (state, { payload }) => {
      let newFavList = [...state.favorites];
      const found = state.favorites.find(({ id }) => {
        return id === payload.id;
      })
      if (found) {
        newFavList = state.favorites.filter(({ id }) => id !== payload.id);
      } else {
        newFavList.push({ ...payload });
      }
      state.favorites = newFavList;
    },
    setUser(state, { payload }) {
      state.currentUser = payload;
      state.isAuth = true;
    },
    removeUser(state) {
      state.currentUser = null;
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