// //index.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Fetching Surahs using custom hook
// const useFetchSurahs = () => {
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

// export default function QuranApp() {
//   const { data, loading, offline } = useFetchSurahs();
//   const [expandedSurahs, setExpandedSurahs] = useState<{ [key: number]: boolean }>({});
//   const [ayahsData, setAyahsData] = useState<{ [key: number]: string[] }>({});

//   const fetchSurahDetails = async (surahNumber: number) => {
//     try {
//       const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
//       const result = await response.json();

//       if (result.code === 200) {
//         const ayahTexts = result.data.ayahs.map((ayah: any) => `${ayah.number}: ${ayah.text}`);
//         setAyahsData((prev) => ({ ...prev, [surahNumber]: ayahTexts }));
//       }
//     } catch (error) {
//       console.error("Failed to fetch Surah details.", error);
//     }
//   };

//   const handleSurahPress = (item: { number: number; englishName: string; numberOfAyahs: number }) => {
//     setExpandedSurahs((prev) => {
//       const isExpanded = prev[item.number];
//       if (!isExpanded) {
//         fetchSurahDetails(item.number); // Fetch details if not already expanded
//       }
//       return { ...prev, [item.number]: !isExpanded };
//     });
//   };

//   const renderSurahItem = ({ item }: { item: { englishName: string; numberOfAyahs: number; number: number } }) => (
//     <View style={styles.surahItem}>
//       <TouchableOpacity onPress={() => handleSurahPress(item)}>
//         <Text style={styles.surahName}>{item.englishName}</Text>
//         <Text style={styles.ayahCount}>{item.numberOfAyahs} Ayahs</Text>
//       </TouchableOpacity>
//       {expandedSurahs[item.number] && ayahsData[item.number] && (
//         <View style={styles.ayahsContainer}>
//           {ayahsData[item.number].map((ayahText, index) => (
//             <Text key={index} style={styles.ayahText}>{ayahText}</Text>
//           ))}
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://images.pexels.com/photos/16150245/pexels-photo-16150245/free-photo-of-unlocking-the-hidden-treasures-of-ramadan-through-quran-reading.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
//         style={styles.headerImage}
//       />
//       <Text style={styles.title}>Quran App</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#1D3D47" />
//       ) : (
//         <FlatList
//           data={data}
//           renderItem={renderSurahItem}
//           keyExtractor={(item) => item.number.toString()}
//           contentContainerStyle={styles.listContainer}
//         />
//       )}
//       {offline && <Text style={styles.offlineText}>You are viewing offline data</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 20,
//   },
//   headerImage: {
//     width: '100%',
//     height: 210,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#1D3D47',
//     marginVertical: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   surahItem: {
//     padding: 20,
//     marginVertical: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   surahName: {
//     fontSize: 18,
//     color: '#1D3D47',
//     fontWeight: 'bold',
//   },
//   ayahCount: {
//     fontSize: 14,
//     color: '#7D7D7D',
//   },
//   ayahsContainer: {
//     marginTop: 10,
//     paddingLeft: 10,
//     paddingVertical: 10,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 5,
//   },
//   ayahText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   offlineText: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#FF6347',
//   },
// });

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetchSurah from '../../hooks/useFetchSurah'; // Assuming the hook is in this path

export default function QuranApp() {
  const { data, loading, offline } = useFetchSurah();
  const [expandedSurahs, setExpandedSurahs] = useState<{ [key: number]: boolean }>({});
  const [ayahsData, setAyahsData] = useState<{ [key: number]: string[] }>({});

  const fetchSurahDetails = async (surahNumber: number) => {
    try {
      // Try to fetch from API
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
      const result = await response.json();

      if (result.code === 200) {
        const ayahTexts = result.data.ayahs.map((ayah: any) => `${ayah.number}: ${ayah.text}`);
        setAyahsData((prev) => ({ ...prev, [surahNumber]: ayahTexts }));
        await AsyncStorage.setItem(`surah_${surahNumber}_details`, JSON.stringify(ayahTexts)); // Store ayah details
      }
    } catch (error) {
      // If API fails, try to load cached data from AsyncStorage
      const cachedData = await AsyncStorage.getItem(`surah_${surahNumber}_details`);
      if (cachedData) {
        setAyahsData((prev) => ({ ...prev, [surahNumber]: JSON.parse(cachedData) }));
      } else {
        console.error('Failed to fetch Surah details and no cached data available.');
      }
    }
  };

  const handleSurahPress = (item: { number: number; englishName: string; numberOfAyahs: number }) => {
    setExpandedSurahs((prev) => {
      const isExpanded = prev[item.number];
      if (!isExpanded) {
        fetchSurahDetails(item.number); // Fetch details if not already expanded
      }
      return { ...prev, [item.number]: !isExpanded };
    });
  };

  const renderSurahItem = ({ item }: { item: { englishName: string; numberOfAyahs: number; number: number } }) => (
    <View style={styles.surahItem}>
      <TouchableOpacity onPress={() => handleSurahPress(item)}>
        <Text style={styles.surahName}>{item.englishName}</Text>
        <Text style={styles.ayahCount}>{item.numberOfAyahs} Ayahs</Text>
      </TouchableOpacity>
      {expandedSurahs[item.number] && ayahsData[item.number] && (
        <View style={styles.ayahsContainer}>
          {ayahsData[item.number].map((ayahText, index) => (
            <Text key={index} style={styles.ayahText}>{ayahText}</Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/16150245/pexels-photo-16150245/free-photo-of-unlocking-the-hidden-treasures-of-ramadan-through-quran-reading.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Quran App</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#1D3D47" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderSurahItem}
          keyExtractor={(item) => item.number.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
      {offline && <Text style={styles.offlineText}>You are viewing offline data</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  headerImage: {
    width: '100%',
    height: 210,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1D3D47',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  surahItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  surahName: {
    fontSize: 18,
    color: '#1D3D47',
    fontWeight: 'bold',
  },
  ayahCount: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  ayahsContainer: {
    marginTop: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
  },
  ayahText: {
    fontSize: 14,
    color: '#333',
  },
  offlineText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#FF6347',
  },
});
