import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValues) => {
  return useStorage(key, defaultValues, window.localStorage);
};

export const useSessionStorage = (key, defaultValues) => {
  return useStorage(key, defaultValues, window.sessionStorage);
};

const useStorage = (key, defaultValues, storageObject) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return defaultValues();
    } else {
      return defaultValues;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);
  return [value, setValue, remove];
};
