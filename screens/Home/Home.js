import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../../components/Card/Card';
import { AKUMA, ALISA } from '../../dataFrame';

const Home = () => {
    // const [charData] = useState([
    //     {title: 'AKUMA', dataFrame: AKUMAFR, dataMeta:AKUMAME},
    //     {title}
    // ]);


    const charName = [
        'AKUMA','ALISA','ANNA','ARMOR KING','ASUKA','BOB','BRYAN','CLAUDIO','DEVIL JIN','DRAGUNOV','EDDY','ELIZA','FAHKUMRAM','FENG','GANRYU',
        'GEESE','GIGAS','HEIHACHI','HWOARANG','JACK-7','JIN','JOSIE','JULIA','KATARINA','KAZUMI','KAZUYA','KING','KUMA','KUNIMITSU','LARS','LAW',
        'LEE','LEI','LEO','LEROY','LIDIA','LILI','LUCKY CHLOE','MARDUK','MASTER RAVEN','MIGUEL','NEGAN','NINA','NOCTIS','PAUL','SHAHEEN','STEVE',
        'XIAOYU','YOSHIMITSU','ZAFINA'
    ];

    useEffect(() => {
        console.log(AKUMA)
        console.log(ALISA)
    },[])

    return (
        <View>
            <Card>
                <Text>Bloop!!!</Text>
            </Card>
            <Card>
                <Text>Bloop!!!</Text>
            </Card>
        </View>
    )
}

export default Home
