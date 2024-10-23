// // src/hooks/useFetchSurah.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useFetchSurah = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.alquran.cloud/v1/surah');
//                 setData(response.data.data);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { data, loading, error };
// };

// export default useFetchSurah;


//upadte this according to own say gpt useFetchSurah.js

// src/hooks/useFetchSurah.js

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useFetchSurah = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Check AsyncStorage first
//                 const storedData = await AsyncStorage.getItem('surahData');
//                 if (storedData) {
//                     setData(JSON.parse(storedData));
//                     setLoading(false);
//                 }

//                 const response = await axios.get('https://api.alquran.cloud/v1/surah');
//                 setData(response.data.data);
//                 await AsyncStorage.setItem('surahData', JSON.stringify(response.data.data));
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { data, loading, error };
// };

// export default useFetchSurah;


// hooks/useFetchSurahs.js

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useFetchSurahs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);

  const fetchSurahs = async () => {
    try {
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const result = await response.json();
      await AsyncStorage.setItem('surahs', JSON.stringify(result.data));
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
