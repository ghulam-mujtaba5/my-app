// // src/screens/SurahList.js
// import React from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import useFetchSurah from '../hooks/useFetchSurah';

// const SurahList = () => {
//     const { data, loading, error } = useFetchSurah();

//     if (loading) {
//         return <ActivityIndicator size="large" color="#0000ff" />;
//     }

//     if (error) {
//         return <Text>Error: {error.message}</Text>;
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data}
//                 keyExtractor={(item) => item.number.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.item}>
//                         <Text style={styles.surahName}>{item.englishName} - {item.name}</Text>
//                         <Text style={styles.ayahs}>Ayahs: {item.numberOfAyahs}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     item: {
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//     },
//     surahName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     ayahs: {
//         fontSize: 14,
//         color: '#888',
//     },
// });

// export default SurahList;
