// // // // // import { Image, StyleSheet, Platform } from 'react-native';

// // // // // import { HelloWave } from '@/components/HelloWave';
// // // // // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // // // // import { ThemedText } from '@/components/ThemedText';
// // // // // import { ThemedView } from '@/components/ThemedView';

// // // // // export default function HomeScreen() {
// // // // //   return (
// // // // //     <ParallaxScrollView
// // // // //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// // // // //       headerImage={
// // // // //         <Image
// // // // //           source={require('@/assets/images/partial-react-logo.png')}
// // // // //           style={styles.reactLogo}
// // // // //         />
// // // // //       }>
// // // // //       <ThemedView style={styles.titleContainer}>
// // // // //         <ThemedText type="title">Welcome!</ThemedText>
// // // // //         <HelloWave />
// // // // //       </ThemedView>
// // // // //       <ThemedView style={styles.stepContainer}>
// // // // //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// // // // //         <ThemedText>
// // // // //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// // // // //           Press{' '}
// // // // //           <ThemedText type="defaultSemiBold">
// // // // //             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
// // // // //           </ThemedText>{' '}
// // // // //           to open developer tools.
// // // // //         </ThemedText>
// // // // //       </ThemedView>
// // // // //       <ThemedView style={styles.stepContainer}>
// // // // //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// // // // //         <ThemedText>
// // // // //           Tap the Explore tab to learn more about what's included in this starter app.
// // // // //         </ThemedText>
// // // // //       </ThemedView>
// // // // //       <ThemedView style={styles.stepContainer}>
// // // // //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// // // // //         <ThemedText>
// // // // //           When you're ready, run{' '}
// // // // //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// // // // //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// // // // //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// // // // //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// // // // //         </ThemedText>
// // // // //       </ThemedView>
// // // // //     </ParallaxScrollView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   titleContainer: {
// // // // //     flexDirection: 'row',
// // // // //     alignItems: 'center',
// // // // //     gap: 8,
// // // // //   },
// // // // //   stepContainer: {
// // // // //     gap: 8,
// // // // //     marginBottom: 8,
// // // // //   },
// // // // //   reactLogo: {
// // // // //     height: 178,
// // // // //     width: 290,
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     position: 'absolute',
// // // // //   },
// // // // // });

// // // // import { Image, StyleSheet, Platform } from 'react-native';
// // // // import { HelloWave } from '@/components/HelloWave';
// // // // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // // // import { ThemedText } from '@/components/ThemedText';
// // // // import { ThemedView } from '@/components/ThemedView';

// // // // export default function HomeScreen() {
// // // //   return (
// // // //     <ParallaxScrollView
// // // //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// // // //       headerImage={
// // // //         <Image
// // // //           source={require('@/assets/images/partial-react-logo.png')}
// // // //           style={styles.reactLogo}
// // // //         />
// // // //       }>
// // // //       {/* New Hello World Section */}
// // // //       <ThemedView style={styles.helloWorldContainer}>
// // // //         <ThemedText type="title" style={styles.helloWorldText}>
// // // //           Hello, umair!
// // // //         </ThemedText>
// // // //         <ThemedText style={styles.helloWorldSubtitle}>
// // // //           Welcome to your first React Native App
// // // //         </ThemedText>
// // // //       </ThemedView>

// // // //       {/* Existing Components */}
// // // //       <ThemedView style={styles.titleContainer}>
// // // //         <ThemedText type="title">Welcome!</ThemedText>
// // // //         <HelloWave />
// // // //       </ThemedView>
// // // //       <ThemedView style={styles.stepContainer}>
// // // //         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
// // // //         <ThemedText>
// // // //           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
// // // //           Press{' '}
// // // //           <ThemedText type="defaultSemiBold">
// // // //             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
// // // //           </ThemedText>{' '}
// // // //           to open developer tools.
// // // //         </ThemedText>
// // // //       </ThemedView>
// // // //       <ThemedView style={styles.stepContainer}>
// // // //         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
// // // //         <ThemedText>
// // // //           Tap the Explore tab to learn more about what's included in this starter app.
// // // //         </ThemedText>
// // // //       </ThemedView>
// // // //       <ThemedView style={styles.stepContainer}>
// // // //         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
// // // //         <ThemedText>
// // // //           When you're ready, run{' '}
// // // //           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
// // // //           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
// // // //           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
// // // //           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
// // // //         </ThemedText>
// // // //       </ThemedView>
// // // //     </ParallaxScrollView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   helloWorldContainer: {
// // // //     padding: 20,
// // // //     backgroundColor: '#A1CEDC',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     borderRadius: 8,
// // // //     margin: 16,
// // // //   },
// // // //   helloWorldText: {
// // // //     fontSize: 32,
// // // //     fontWeight: 'bold',
// // // //     color: '#1D3D47',
// // // //     marginBottom: 8,
// // // //   },
// // // //   helloWorldSubtitle: {
// // // //     fontSize: 18,
// // // //     color: '#1D3D47',
// // // //   },
// // // //   titleContainer: {
// // // //     flexDirection: 'row',
// // // //     alignItems: 'center',
// // // //     gap: 8,
// // // //   },
// // // //   stepContainer: {
// // // //     gap: 8,
// // // //     marginBottom: 8,
// // // //   },
// // // //   reactLogo: {
// // // //     height: 178,
// // // //     width: 290,
// // // //     bottom: 0,
// // // //     left: 0,
// // // //     position: 'absolute',
// // // //   },
// // // // });


// // // import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

// // // export default function QuranApp() {
// // //   return (
// // //     <ScrollView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <Image source={require('../../assets/images/quran-logo.png')} style={styles.logo} />
// // //         <Text style={styles.headerText}>Quran App</Text>
// // //       </View>

// // //       {/* Surah List */}
// // //       <View style={styles.surahList}>
// // //         <Text style={styles.surahTitle}>Surahs</Text>
// // //         {Array.from({ length: 114 }).map((_, index) => (
// // //           <View key={index} style={styles.surahItem}>
// // //             <Text style={styles.surahName}>Surah {index + 1}</Text>
// // //             <Text style={styles.surahDetails}>Details about Surah {index + 1}</Text>
// // //           </View>
// // //         ))}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#F5F5F5',
// // //   },
// // //   header: {
// // //     backgroundColor: '#4CAF50',
// // //     padding: 20,
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   logo: {
// // //     width: 50,
// // //     height: 50,
// // //     marginRight: 10,
// // //   },
// // //   headerText: {
// // //     fontSize: 24,
// // //     color: '#FFFFFF',
// // //     fontWeight: 'bold',
// // //   },
// // //   surahList: {
// // //     padding: 20,
// // //   },
// // //   surahTitle: {
// // //     fontSize: 22,
// // //     fontWeight: 'bold',
// // //     marginBottom: 10,
// // //   },
// // //   surahItem: {
// // //     backgroundColor: '#FFFFFF',
// // //     padding: 15,
// // //     borderRadius: 8,
// // //     marginBottom: 10,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 8,
// // //     elevation: 2,
// // //   },
// // //   surahName: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   surahDetails: {
// // //     fontSize: 14,
// // //     color: '#757575',
// // //   },
// // // });

// // import React from 'react';
// // import { Image, StyleSheet, Platform, Text, View } from 'react-native';

// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // export default function HomeScreen() {
// //   return (
// //     <ParallaxScrollView
// //       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
// //       headerImage={
// //         <Image
// //           source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Quran3.JPG' }}
// //           style={styles.headerImage}
// //         />
// //       }
// //     >
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Hello, umair!</Text>
// //         <Text style={styles.subtitle}>Welcome to your first React Native App</Text>

// //         {/* Steps Section */}
// //         <View style={styles.stepContainer}>
// //           <Text style={styles.stepTitle}>Step 1: Try it</Text>
// //           <Text style={styles.stepText}>
// //             Edit <Text style={styles.bold}>app/(tabs)/index.tsx</Text> to see changes. Press{' '}
// //             <Text style={styles.bold}>
// //               {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
// //             </Text>{' '}
// //             to open developer tools.
// //           </Text>
// //         </View>

// //         <View style={styles.stepContainer}>
// //           <Text style={styles.stepTitle}>Step 2: Explore</Text>
// //           <Text style={styles.stepText}>
// //             Tap the Explore tab to learn more about what's included in this starter app.
// //           </Text>
// //         </View>

// //         <View style={styles.stepContainer}>
// //           <Text style={styles.stepTitle}>Step 3: Get a fresh start</Text>
// //           <Text style={styles.stepText}>
// //             When you're ready, run <Text style={styles.bold}>npm run reset-project</Text> to get a
// //             fresh <Text style={styles.bold}>app</Text> directory. This will move the current{' '}
// //             <Text style={styles.bold}>app</Text> to <Text style={styles.bold}>app-example</Text>.
// //           </Text>
// //         </View>
// //       </View>
// //     </ParallaxScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   header: {
// //     height: 250,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   headerImage: {
// //     height: 150,
// //     width: 150,
// //     borderRadius: 75,
// //   },
// //   headerTitle: {
// //     marginTop: 10,
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#FFFFFF',
// //   },
// //   container: {
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     color: '#1D3D47',
// //     marginBottom: 8,
// //     textAlign: 'center',
// //   },
// //   subtitle: {
// //     fontSize: 18,
// //     color: '#1D3D47',
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   stepContainer: {
// //     marginBottom: 20,
// //   },
// //   stepTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#1D3D47',
// //     marginBottom: 8,
// //   },
// //   stepText: {
// //     fontSize: 16,
// //     color: '#1D3D47',
// //   },
// //   bold: {
// //     fontWeight: 'bold',
// //   },
// // });

// // //app\(tabs)\index.tsx

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';


// // // Fetching Surahs using custom hook
// // const useFetchSurahs = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [offline, setOffline] = useState(false);

// //   const fetchSurahs = async () => {
// //     try {
// //       const response = await fetch('https://api.alquran.cloud/v1/surah');
// //       const result = await response.json();
// //       await AsyncStorage.setItem('surahs', JSON.stringify(result.data));
// //       setData(result.data);
// //       setOffline(false);
// //     } catch (error) {
// //       const cachedData = await AsyncStorage.getItem('surahs');
// //       if (cachedData) {
// //         setData(JSON.parse(cachedData));
// //         setOffline(true);
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchSurahs();
// //   }, []);

// //   return { data, loading, offline };
// // };

// // export default function QuranApp() {
// //   const { data, loading, offline } = useFetchSurahs();

// //   const renderSurahItem = ({ item }: { item: { englishName: string; numberOfAyahs: number; number: number } }) => (
// //     <View style={styles.surahItem}>
// //       <Text style={styles.surahName}>{item.englishName}</Text>
// //       <Text style={styles.ayahCount}>{item.numberOfAyahs} Ayahs</Text>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: 'https://www.pexels.com/photo/unlocking-the-hidden-treasures-of-ramadan-through-quran-reading-16150245/' }}
// //         style={styles.headerImage}
// //       />
// //       <Text style={styles.title}>Quran App</Text>
// //       {loading ? (
// //         <ActivityIndicator size="large" color="#1D3D47" />
// //       ) : (
// //         <FlatList
// //           data={data}
// //           renderItem={renderSurahItem}
// //           keyExtractor={(item) => item.number.toString()}
// //           contentContainerStyle={styles.listContainer}
// //         />
// //       )}
// //       {offline && <Text style={styles.offlineText}>You are viewing offline data</Text>}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //     paddingHorizontal: 20,
// //   },
// //   headerImage: {
// //     width: '100%',
// //     height: 200,
// //     borderRadius: 10,
// //     marginTop: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     color: '#1D3D47',
// //     marginVertical: 20,
// //   },
// //   listContainer: {
// //     paddingBottom: 20,
// //   },
// //   surahItem: {
// //     padding: 20,
// //     marginVertical: 8,
// //     backgroundColor: '#fff',
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //     elevation: 5,
// //   },

// //   surahName: {
// //     fontSize: 18,
// //     color: '#1D3D47',
// //     fontWeight: 'bold',
// //   },
// //   ayahCount: {
// //     fontSize: 14,
// //     color: '#7D7D7D',
// //   },
// //   offlineText: {
// //     textAlign: 'center',
// //     marginTop: 10,
// //     fontSize: 16,
// //     color: '#FF6347',
// //   },
// // });

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // // Fetching Surahs using custom hook
// // const useFetchSurahs = () => {
// //   const [data, setData] = useState<any[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [offline, setOffline] = useState<boolean>(false);

// //   const fetchSurahs = async () => {
// //     try {
// //       const response = await fetch('https://api.alquran.cloud/v1/surah');
// //       const result = await response.json();
// //       await AsyncStorage.setItem('surahs', JSON.stringify(result.data));
// //       setData(result.data);
// //       setOffline(false);
// //     } catch (error) {
// //       const cachedData = await AsyncStorage.getItem('surahs');
// //       if (cachedData) {
// //         setData(JSON.parse(cachedData));
// //         setOffline(true);
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchSurahs();
// //   }, []);

// //   return { data, loading, offline };
// // };

// // export default function QuranApp() {
// //   const { data, loading, offline } = useFetchSurahs();

// //   const handleSurahPress = (item: { englishName: string; numberOfAyahs: number; number: number }) => {
// //     // Show an alert with Surah details
// //     Alert.alert(
// //       item.englishName,
// //       `This Surah has ${item.numberOfAyahs} Ayahs.`,
// //       [{ text: 'OK' }]
// //     );
// //   };

// //   const renderSurahItem = ({ item }: { item: { englishName: string; numberOfAyahs: number; number: number } }) => (
// //     <TouchableOpacity onPress={() => handleSurahPress(item)} style={styles.surahItem}>
// //       <Text style={styles.surahName}>{item.englishName}</Text>
// //       <Text style={styles.ayahCount}>{item.numberOfAyahs} Ayahs</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: 'https://images.pexels.com/photos/16150245/pexels-photo-16150245/free-photo-of-unlocking-the-hidden-treasures-of-ramadan-through-quran-reading.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
// //         style={styles.headerImage}
// //       />
// //       <Text style={styles.title}>Quran App</Text>
// //       {loading ? (
// //         <ActivityIndicator size="large" color="#1D3D47" />
// //       ) : (
// //         <FlatList
// //           data={data}
// //           renderItem={renderSurahItem}
// //           keyExtractor={(item) => item.number.toString()}
// //           contentContainerStyle={styles.listContainer}
// //         />
// //       )}
// //       {offline && <Text style={styles.offlineText}>You are viewing offline data</Text>}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //     paddingHorizontal: 20,
// //   },
// //   headerImage: {
// //     width: '100%',
// //     height: 210,
// //     borderRadius: 10,
// //     marginTop: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     color: '#1D3D47',
// //     marginVertical: 20,
// //   },
// //   listContainer: {
// //     paddingBottom: 20,
// //   },
// //   surahItem: {
// //     padding: 20,
// //     marginVertical: 8,
// //     backgroundColor: '#fff',
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowRadius: 5,
// //     elevation: 5,
// //   },
// //   surahName: {
// //     fontSize: 18,
// //     color: '#1D3D47',
// //     fontWeight: 'bold',
// //   },
// //   ayahCount: {
// //     fontSize: 14,
// //     color: '#7D7D7D',
// //   },
// //   offlineText: {
// //     textAlign: 'center',
// //     marginTop: 10,
// //     fontSize: 16,
// //     color: '#FF6347',
// //   },
// // });
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
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

//   const fetchSurahDetails = async (surahNumber: number) => {
//     try {
//       const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
//       const result = await response.json();

//       if (result.code === 200) {
//         const ayahTexts = result.data.ayahs.map((ayah: any) => `${ayah.number}: ${ayah.text}`).join('\n');
//         Alert.alert(result.data.name, ayahTexts, [{ text: 'OK' }]);
//       }
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch Surah details.");
//     }
//   };

//   const handleSurahPress = (item: { number: number; englishName: string; numberOfAyahs: number }) => {
//     fetchSurahDetails(item.number);
//   };

//   const renderSurahItem = ({ item }: { item: { englishName: string; numberOfAyahs: number; number: number } }) => (
//     <TouchableOpacity onPress={() => handleSurahPress(item)} style={styles.surahItem}>
//       <Text style={styles.surahName}>{item.englishName}</Text>
//       <Text style={styles.ayahCount}>{item.numberOfAyahs} Ayahs</Text>
//     </TouchableOpacity>
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
//   offlineText: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#FF6347',
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Fetching Surahs using custom hook
const useFetchSurahs = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [offline, setOffline] = useState<boolean>(false);

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

export default function QuranApp() {
  const { data, loading, offline } = useFetchSurahs();
  const [expandedSurahs, setExpandedSurahs] = useState<{ [key: number]: boolean }>({});
  const [ayahsData, setAyahsData] = useState<{ [key: number]: string[] }>({});

  const fetchSurahDetails = async (surahNumber: number) => {
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
      const result = await response.json();

      if (result.code === 200) {
        const ayahTexts = result.data.ayahs.map((ayah: any) => `${ayah.number}: ${ayah.text}`);
        setAyahsData((prev) => ({ ...prev, [surahNumber]: ayahTexts }));
      }
    } catch (error) {
      console.error("Failed to fetch Surah details.", error);
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
