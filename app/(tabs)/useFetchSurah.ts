// // app/(tabs)/useFetchSurah.ts
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
//                 const storedData = await AsyncStorage.getItem('surahData');
//                 if (storedData) {
//                     setData(JSON.parse(storedData));
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

