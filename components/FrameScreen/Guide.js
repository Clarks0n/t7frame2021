import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, Row , Rows } from 'react-native-table-component';

const Guide = (props) => {
    const data = props.route.params.data;
    
    const KeyMovesLayout = ({title, data}) => {
        let moves = data;

        return (
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <View style={styles.cardContent}>
                    {moves.map((item,i) => {
                        return (
                            <Text key={i} style={styles.txtContent}>
                                {item}
                            </Text>
                        )
                    })}
                </View>
            </View>
        )
    };

    const StandPunishLayout = ({title, data}) => {
        let tableHead = ['Startup', 'Combo'];
        let tableData = data;
        const widthArr = [70,110,110,100];

        return (
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <View style={styles.tableContainer}>
                    <Table >
                        <Row data={tableHead} textStyle={styles.txtTableHeadPunish} widthArr={widthArr} />
                        <Rows data={tableData} textStyle={styles.txtTableContent} widthArr={widthArr} />
                    </Table>
                </View>
            </View>
        )
    };

    const ComboLayout = ({title, data}) => {
        let combo = data.map((item) => {
            return item[0];
        });

        let starter = data.map((item) => {
            return (
                item.filter((value, i) => {
                    if(i !== 0) return value;     
                })
            )
        });

        let starterArrJoin = [];
        for (let i = 0; i < starter.length; i++) {
            starterArrJoin.push(starter[i].join())
        };
 
        let tableHead = ['Startup', 'Combo'];
        let tableData = [];

        for ( let i = 0; i < starterArrJoin.length; i++ ) {
            tableData.push( [ starterArrJoin[i], combo[i] ] );
        };

        return (
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <View style={styles.tableContainer}>
                    <Table borderStyle={styles.tableBorder}>
                        <Row data={tableHead} textStyle={styles.txtTableHead}/>
                        <Rows data={tableData} textStyle={styles.txtTableContent}/>
                    </Table>
                </View>
            </View>
        )
    };

    const WallComboLayout = ({title, data}) => {
        // Find max length of child element in 2d array
        /*
        const dimensions = [
            data.length,
            data.reduce((x, y) => Math.max(x, y.length), 0)
        ];
        */
    
        const tableData = data;
        const widthArr = [80,100,100,100];

        return (
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <View style={styles.tableContainer}>
                    <Table>
                        <Rows data={tableData} textStyle={styles.txtTableContentAlt} widthArr={widthArr} />
                    </Table>
                </View>
            </View>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <KeyMovesLayout title="Key Moves" data={data.keyMoves} />
                <StandPunishLayout title="Standing Punishers" data={data.standingPunishers} />
                <StandPunishLayout title="Crouching Punishers" data={data.crouchingPunishers} />
                <KeyMovesLayout title="Whiff Punishers" data={data.whiffPunishers} />
                <ComboLayout title="Standard Combos" data={data.standardCombos} />
                <ComboLayout title="Small Combos" data={data.smallCombos} />
                <WallComboLayout title="Combo Enders" data={data.comboEnders} />
                <WallComboLayout title="Wall Combos" data={data.wallCombos} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        flexGrow : 1
    },
    card: {
        flex: 1,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#424242',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: { 
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: '424242',
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRow:{
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    flexWrap:{
        flexWrap: "wrap",
    },
    title: {
        color: '#ffff33',
        marginHorizontal: 12,
        marginTop: 12,
        fontFamily: 'PatrickHand',
        fontSize: 20
    },
    punishTitle: {
        color: '#ffff33',
        marginHorizontal: 12,
        marginTop: 12,
        fontFamily: 'PatrickHand',
        fontSize: 17
    },
    txtContent: {
        borderRadius: 12,
        elevation: 3,
        padding: 9,
        backgroundColor: '#616161',
        color:'#ffff33',
        marginHorizontal: 6,
        marginVertical: 10,
        fontFamily: 'ZenKurenaido'
    },
    txtStandard: {
        color:'#ffff33',
        marginHorizontal: 12,
        marginVertical: 7,
        marginLeft:27,
        fontFamily: 'ZenKurenaido'
    },
    txtEnders : {
        color:'#ffff33',
        fontFamily: 'ZenKurenaido',
        marginVertical: 6,
        marginHorizontal: 5,
    },
    txtTableHead: {
        color: '#ffff33',
        fontFamily: 'PatrickHand',
        fontSize: 17,
        textAlign: 'center'
    },
    txtTableHeadPunish: {
        color: '#ffff33',
        fontFamily: 'PatrickHand',
        fontSize: 17,
        marginLeft: 5
    },
    txtTableContent : {
        color: '#ffff33',
        fontFamily: 'ZenKurenaido',
        marginHorizontal: 5,
        marginVertical: 5
    },
    txtTableContentAlt: {
        color: '#ffff33',
        fontFamily: 'ZenKurenaido',
        marginHorizontal: 8,
        marginVertical: 8
    },
    tableContainer: { 
        flex: 1, 
        padding: 5, 
        paddingBottom: 7,
        backgroundColor: '#424242' 
    },
    tableHead: { 
        height: 40, 
        backgroundColor: '#f1f8ff',
    },
    tableBorder : {
        borderWidth: 1, 
        borderColor: '#c8e1ff'
    }
   
  
});


export default Guide


/*
const ComboLayout = ({title, data}) => {
 
    return (
        <>
        <View style={styles.card}> 
            <Text style={styles.title}> 
                {title}
            </Text>
            <View style={styles.cardContent}>
                <View style={styles.flexColumn}>
                    <Text style={styles.punishTitle}>Starter</Text>
                    {data.map((item,i) => {
                        return (
                            <Text style={styles.txtStandard}>
                                {item[0]}
                            </Text>
                        )
                    })}
                </View>
                <View style={styles.flexColumn}>
                    <Text style={styles.punishTitle}>Combo</Text>
                    {data.map((item,i) => {
                        return (
                            <Text style={styles.txtStandard}>
                                {item[0]}
                            </Text>
                        )
                    })}
                </View>
            </View>
        </View>
        </> 
    )
};  
*/


 /*                  
    {data.map((item,i) => {
        // console.log(i)
        return (
            item.map((value,j) => {
            
                return (
                    <Col size={30}>
                     <Text style={styles.txtEnders}>{value}</Text>
                     </Col>
                )
               
            })
        
        )
    })} */

/* <Col size={25}>
    {data.map((item,i) => {
        return (
            <Text style={styles.txtEnders}>{item[1]}</Text>
        
        )
    })}
</Col> */

/* 
<Col size={55}>
    {data.map((item,i) => {
        return (
            <Text style={styles.txtEnders}>{item[2]}</Text>
        
        )
    })}
</Col>  */

/*
const StandPunishLayout = ({title, data}) => {

    return (
        <>
        <View style={styles.card}> 
            <Text style={styles.title}> 
                {title}
            </Text>
            <View style={styles.flexColumn}>
                <View style={styles.flexRow}>
                    <Text style={styles.punishTitle}>Startup</Text>
                    <Text style={styles.punishTitle}>Command</Text>
                </View>
               {data.map((item) => {
                        return (
                            <View style={styles.flexRow}>
                                {item.map((value,i) => {
                                   return (
                                    <Text key={i} style={styles.txtStandard}>{value}</Text>
                                   )
                                })}
                           </View>
                        )
                   })
               }
            </View>
        </View>
        </> 
    )
};
*/

/* old layout need react native easy grid
const WallComboLayout = ({title, data}) => {
    const dimensions = [
        data.length,
        data.reduce((x, y) => Math.max(x, y.length), 0)
    ];

    const display = () => {
        let div = [];
        for(var i = 0; i < dimensions[1]; i++) {
            let size = null;
            switch(i) {
                case 0: 
                    size = 30;
                    break;
                case 1:
                    size = 25;
                    break;
                case 2:
                    size = 45;
                    break;
                default:
            }

            div.push(
                <Col size={size}>
                    {data.map((item) => {
                        return (
                            <Text key={item} style={styles.txtEnders}>
                                {item[i]}
                            </Text>
                        )
                    })}
                </Col>
            )
        }
        return div;
    };
    
    return (
        <>
        <View style={styles.card}> 
            <Text style={styles.title}> 
                {title}
            </Text>
            <Grid>
                {display()}
            </Grid>
        </View>
       </>
    )
};

const ComboEnderLayout = ({title, data}) => {
        let leftData = data.map((item) => {
            return item[0];
        });

        let rightData = data.map((item) => {
            return (
                item.filter((value, i) => {
                    if(i !== 0) return value;     
                })
            )
        });

        //-- Same as below but functions
        const dimensions = (arr) => {
            return (
                [arr.length,
                arr.reduce((x, y) => Math.max(x, y.length), 0)]
            )
        };
        

       const dimensions = [
        rightData.length,
        rightData.reduce((x, y) => Math.max(x, y.length), 0)
    ];

    const display = () => {
        let div = [];
        for(var i = 0; i < dimensions[1]; i++) {
            div.push(
                <Col size={23}>
                    {rightData.map((item,i) => {
                        return (
                            <Text key={i} style={styles.txtEnders}>
                                {item[i]}
                            </Text>
                        )
                    })}
                </Col>
            )
        }
        return div;
    };
   
    return (
        <View style={styles.card}> 
            <Text style={styles.title}> 
                {title}
            </Text>
            <Grid>
                <Col size={30}>
                    {leftData.map((item,i) => {
                        return (
                            <Text key={i} style={styles.txtEnders}>
                                {item}
                            </Text>
                        )
                    })}
                </Col> 

                {display()}
                
            </Grid>
        </View>
    )
};
*/