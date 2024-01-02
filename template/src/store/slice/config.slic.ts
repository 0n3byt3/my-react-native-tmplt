//external dependencies
import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
//external types dependencies
//internal dependencies
import { $log } from "@util";
import { getStorage } from "../store";
//internal types dependencies

//TODO: add async storage or ...(storage related)

interface TConfigState {
  lang: 'en' | 'fa';
  loaded: boolean;
}

const initialState: TConfigState = {
  lang: 'fa',
  loaded: false,
}
export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    //load stored config
    loadStoredConfig: (
      state, 
      {payload}: PayloadAction<void>
    ) => {
      const storage = getStorage();
      const jsonStrg = storage.getString('config');
      if(jsonStrg) {
        const strg: TConfigState = JSON.parse(jsonStrg);
        state.lang = strg?.lang || 'fa';
        $log('Config Loaded: ', strg);
      } else
        $log.warn('No Config founded!');
    },
    //set user language
    setLang: (
      state, 
      {payload}: PayloadAction<TConfigState['lang']>
    ) => {
      state.lang = payload;
      storeConfig(current(state));
    },
    //set Loaded state
    setLoaded: (
      state, 
      {payload}: PayloadAction<TConfigState['loaded']>
    ) => {
      state.loaded = payload;
    },
  }
});

const storeConfig = (config: TConfigState) => {
  try {
    const jsonConfig = JSON.stringify(config);
    const storage = getStorage();
    storage.set('config', jsonConfig);
    $log('Config saved: ', config);
  } catch (e) {
    // saving error
    $log.err('Error saving config: ', e);
  }
};

export const {
  loadStoredConfig,
  setLang,
  setLoaded,
} = configSlice.actions;
