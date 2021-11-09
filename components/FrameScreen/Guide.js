import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Col, Row, Grid } from "react-native-easy-grid";

const Guide = (props) => {
    const data = props.route.params.data;
    
    const KeyMovesLayout = ({title, data}) => {
        let moves = data;

        return (
            <>
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <View style={styles.cardContent}>
                    {moves.map((item,i) => {
                        return (
                            <Text style={styles.txtContent}>
                                {item}
                            </Text>
                        )
                    })}
                </View>
            </View>
            </>
        )
    };

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
                                        <Text style={styles.txtStandard}>{value}</Text>
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

        return (
            <>
            <View style={styles.card}> 
                <Text style={styles.title}> 
                    {title}
                </Text>
                <Grid>
                    <Col size={60}>
                        <Text style={styles.punishTitle}> Startup</Text>
                        {starter.map((item,i) => {
                            return (
                                <Row style={styles.flexWrap}>
                                    {/* <Text key={i} style={styles.txtEnders}>
                                        {item.join(' * ')}
                                    </Text> */}
                                    {item.map((value,j) => {
                                        return (
                                        <Text style={styles.txtStartup}>
                                            {value}
                                        </Text>
                                        )
                                    })}
                                </Row>
                            )
                        })}
                    </Col> 

                    <Col size={40}>
                        <Text style={styles.punishTitle}> Combo</Text>
                        {combo.map((item,i) => {
                            return (
                                <Row>
                                    <Text key={i} style={styles.txtCombo}>
                                        {item}
                                    </Text>
                                </Row>
                            )
                        })}
                    </Col> 

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

        /* -- Same as below but functions
        const dimensions = (arr) => {
            return (
                [arr.length,
                arr.reduce((x, y) => Math.max(x, y.length), 0)]
            )
        };
        */

        const dimensions = [
            rightData.length,
            rightData.reduce((x, y) => Math.max(x, y.length), 0)
        ];

        const display = () => {
            let div = [];
            for(var i = 0; i < dimensions[1]; i++) {
                div.push(
                    <Col size={23}>
                        {rightData.map((item) => {
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <KeyMovesLayout title="Key Moves" data={data.keyMoves} />
                <StandPunishLayout title="Standing Punishers" data={data.standingPunishers} />
                <StandPunishLayout title="Crouching Punishers" data={data.crouchingPunishers} />
                <KeyMovesLayout title="Whiff Punishers" data={data.whiffPunishers} />
                <ComboLayout title="Standard Combos" data={data.standardCombos} />
                <ComboLayout title="Small Combos" data={data.smallCombos} />
                <ComboEnderLayout title="Combo Enders" data={data.comboEnders} />
                <WallComboLayout title="Wall Combos" data={data.wallCombos} />
        
            </ScrollView>
        </SafeAreaView>
    
    )
}

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
    txtCombo : {
        color:'#ffff33',
        fontFamily: 'ZenKurenaido',
        marginVertical: 6,
        marginHorizontal: 7,
    },
    txtStartup: {
        color:'#ffff33',
        fontFamily: 'ZenKurenaido',
        marginTop: 6,
        marginLeft: 5,
    },
    txtEnders: {
        color:'#ffff33',
        marginHorizontal: 7,
        marginVertical: 7,
        fontFamily: 'ZenKurenaido',
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