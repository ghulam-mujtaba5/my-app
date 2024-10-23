// //hooks\useFetchSurah.ts
// import { useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useFetchSurah = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [offline, setOffline] = useState<boolean>(false);

//   const fetchSurahs = async () => {
//     try {
//       const response = await fetch('https://api.alquran.cloud/v1/surah');
//       const result = await response.json();
//       await AsyncStorage.setItem('surahs', JSON.stringify(result.data));
//       setData(result.data);
//       setOffline(false);
//     } catch (error) {
//       const cachedData = await AsyncStorage.getItem('surahs');
//       if (cachedData) {
//         setData(JSON.parse(cachedData));
//         setOffline(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSurahs();
//   }, []);

//   return { data, loading, offline };
// };

// export default useFetchSurah;

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetchSurah = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offline, setOffline] = useState<boolean>(false);

  const fetchSurahs = async () => {
    try {
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const result = await response.json();
      await AsyncStorage.setItem('surahs', JSON.stringify(result.data)); // Store surah list
      setData(result.data);
      setOffline(false);
    } catch (error) {
      const cachedData = await AsyncStorage.getItem('surahs');
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setOffline(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurahs();
  }, []);

  return { data, loading, offline };
};

export default useFetchSurah;
