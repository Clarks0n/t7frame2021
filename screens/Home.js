import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { charData }  from '../data';

const Home = ({navigation}) => {
	const num = 2;

	const renderItem = ({ item }) => {
		const Card = ({ item }) => (
			<View style={styles.cardStyle} >
				<TouchableOpacity 
					onPress={() => navigation.navigate('Details', { item, screenTitle: item.title})}
					style={styles.item}
				>
					<Text style={styles.title}>{item.title}</Text>
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
			<FlatList
				data={charData}
				renderItem={renderItem}
				numColumns={num}
				key={num}
				keyExtractor={(item) => item.title}
				ListFooterComponent={<View />}
				ListFooterComponentStyle={{height:20}}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#111111',
	},
	item: {
		padding: 6,
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
