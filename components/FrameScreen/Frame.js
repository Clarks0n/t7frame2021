import React , {useEffect} from 'react';
import { View,StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row } from 'react-native-table-component';

const Frame = (props) => {
    
    const data = props.route.params.data;

    const headers = data.headers;
    const moves = data.moves;
    const widthArr = [120, 80, 80, 90, 90, 90, 90, 120];

    /*
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
    */
    return (
        <SafeAreaView>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={styles.borderStyle}>
                        <Row data={headers} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={styles.borderStyle}>
                            {
                            moves.map((rowData, index) => (
                                <Row
                                    key={index}
                                    data={rowData}
                                    widthArr={widthArr}
                                    style={styles.row}
                                    // style={[styles.row, index%2 && {backgroundColor: '#424242'}]}
                                    textStyle={styles.text}
                                />
                            ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    header: { 
        height: 50, 
        backgroundColor: '#303030'
     },
    text: { 
        textAlign: 'center', 
        fontWeight: '100' ,
        color : '#ffff33',
        fontFamily: "ZenKurenaido",
    },
    dataWrapper: { 
        marginTop: -1 
    },
    row: { 
        height: 40, 
        backgroundColor: '#424242' 
    },
    borderStyle : {
        borderWidth: 1,
        borderColor: '#C1C0B9'
    }
});


export default Frame


// checkIndexIsEven (n) {
//     return n % 2 == 0;
// }

// <View style={[styles.option, { borderRightWidth: this.checkIndexIsEven(this.props.index) ? 3 : 0}]}>
//     <Text>Item</Text>
// </View>
