//external dependencies
import {memo, useCallback, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
//external types dependencies
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
//internal dependencies
import {Spinner} from '@comp/core';
import {useAppDispatch, useTypedSelector} from '@store';
import {loadStoredConfig, setLang, setLoaded} from '@store/slice';
import {useLang} from '@src/hook';
import {startupDict} from './startup.dict';
//internal types dependencies
import type {TRootNavParamList} from '@comp/nav';

type TScreenProps = NativeStackScreenProps<TRootNavParamList, 'Startup'>;

export const StartupScreen = memo(({navigation}: TScreenProps) => {
  const dispatch = useAppDispatch();
  const lang = useLang();
  const loaded = useTypedSelector(s => s.config.loaded);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(loadStoredConfig());
  }, []);

  useEffect(() => {
    if (loaded) navigation.replace('Home');
  }, [loaded]);

  const onEn = useCallback(() => {
    dispatch(setLang('en'));
  }, []);
  const onFa = useCallback(() => {
    dispatch(setLang('fa'));
  }, []);
  const onLogin = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setLoaded(true));
    }, 5000);
  }, []);

  return (
    <View className="h-full flex-1 items-center justify-center bg-blue-400">
      {isLoading && <Spinner />}
      <Text className="font-yekan font-regular text-center text-2xl mt-5 text-white">
        {startupDict[lang].selLang}
      </Text>
      <View className="">
        <View className="flex-row justify-center items-center mt-5">
          <Pressable
            className="bg-gray-300/70 border border-gray-100 px-3 py-2 rounded-lg"
            onPress={onEn}>
            <Text className="font-yekan font-regular text-center text-lg leading-none">
              English
            </Text>
          </Pressable>
          <Pressable
            className="bg-gray-300/70 border border-gray-100 px-3 py-2 rounded-lg ml-3"
            onPress={onFa}>
            <Text className="font-yekan font-regular text-center text-lg leading-none">
              فارسی
            </Text>
          </Pressable>
        </View>
        <Pressable
          className={`bg-orange-300/70 border border-orange-100 px-3 py-2 rounded-lg mt-5 ${
            isLoading ? 'opacity-40' : ''
          }`}
          onPress={onLogin}
          disabled={isLoading}>
          <Text className="font-yekan font-regular text-center text-lg leading-none">
            {startupDict[lang].login}
          </Text>
        </Pressable>
      </View>
    </View>
  );
});
