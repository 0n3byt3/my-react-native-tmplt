//external dependencies
import {configureStore, ConfigureStoreOptions} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { MMKV } from 'react-native-mmkv';
//external types dependencies
//internal dependencies
//import { apiErrToast, $api } from './api';
import {configSlice} from './slice';
//internal types dependencies

let _storage: MMKV | undefined;
export const getStorage = () => {
  if (!_storage)
    _storage = new MMKV();
  return _storage;
};

export const createStore = () =>
  configureStore({
    reducer: {
      //[$api.reducerPath]: $api.reducer,
      config: configSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat($api.middleware).concat(apiErrToast),
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
