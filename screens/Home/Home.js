import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
    // const [charData] = useState([
    //     {title: 'AKUMA' },
    //     {title: 'ALISA' },
    //     {title: 'ANNA' },
    //     {title: 'ARMOR KING' }
    // ]);

    const num = 2;

    const charName = [
        'AKUMA','ALISA','ANNA','ARMOR KING','ASUKA','BOB','BRYAN','CLAUDIO','DEVIL JIN','DRAGUNOV','EDDY','ELIZA','FAHKUMRAM','FENG','GANRYU',
        'GEESE','GIGAS','HEIHACHI','HWOARANG','JACK-7','JIN','JOSIE','JULIA','KATARINA','KAZUMI','KAZUYA','KING','KUMA','KUNIMITSU','LARS','LAW',
        'LEE','LEI','LEO','LEROY','LIDIA','LILI','LUCKY CHLOE','MARDUK','MASTER RAVEN','MIGUEL','NEGAN','NINA','NOCTIS','PAUL','SHAHEEN','STEVE',
        'XIAOYU','YOSHIMITSU','ZAFINA'
    ];

    const renderItem = ({ item }) => {
        const Card = ({ item }) => (
            <View style={styles.cardStyle} >
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Details', { screenTitle: item})}
                    style={[styles.item]}
                >
                    <Text style={[styles.title]}>{item}</Text>
                </TouchableOpacity>
            </View>
        );
    
        return (
          <Card
            item={item}
          />
        );
    };

    return (
        <SafeAreaView 
            style={styles.container}
        >
            {/* <Header /> */}
            <FlatList
                data={charName}
                renderItem={renderItem}
                numColumns={num}
                key={num}
                keyExtractor={(item) => item}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{height:125}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111111',
      },
      item: {
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 6,
        // transform: [{ skewX: '20deg' }] 
      },
      cardStyle: {
        flex: 1,
        marginVertical: 6,
        marginHorizontal: 6,
        backgroundColor: '#989898',
        borderRadius: 6,
      },
      title: {
        fontSize: 18,
        color: '#ffff33',
        alignSelf: 'center',
        fontFamily: "PatrickHand",
      },
});

export default Home
