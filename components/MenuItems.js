import { FlatList, View, Text, StyleSheet } from "react-native";

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];

const separator = () => <View style={menuItemStyles.separator} />

const header = () => {
    return(
        <View>
            <Text style={menuItemStyles.itemTextHeader}>Menu</Text>
        </View>
    )
}

const footer = () => {
    return(
        <View>
            <Text style={menuItemStyles.itemTextFooter}>You read all menu items!</Text>
        </View>
    )
}

const Item = ({name, price}) => {
    return(
        <View style={menuItemStyles.innerContainer}>
            {/* <Text numberOfLines={1} style={menuItemStyles.itemInnerContainer}> */}
                <Text style={menuItemStyles.itemNameText} >
                    {name}
                </Text>
                <Text style={menuItemStyles.itemPriceText}>
                    {price}
                </Text>
            {/* </Text> */}
        </View>
    );
};

const MenuItems = () => {
    const renderItem = ({item}) => <Item name = {item.name} price={item.price}/>;

    return(
        <View style={menuItemStyles.container}>
            {/* <Text style={menuItemStyles.header}>Menu Items</Text> */}
            <FlatList
            data={menuItemsToDisplay}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={separator}
            ListHeaderComponent={header}
            ListFooterComponent={footer}
            >
            </FlatList>
        </View>
    );
};


const menuItemStyles = StyleSheet.create(
    {
        container: {
            flex:1,
            paddingHorizontal:10,
            paddingVertical:10,
        },
        header: {
            fontSize:30,
            fontWeight: 'bold',
            color: 'yellow',
            textAlign:'center',
        },
        itemNameText: {
            // textAlign: 'left',
            fontSize:20,
            color:'yellow',
        },
        innerContainer: {
            paddingVertical:10,
            paddingHorizontal:5,
            flexDirection:'row',
            justifyContent:'space-between'
        },
        itemPriceText: {
            // textAlign: "right",
            fontSize: 20,
            color:'yellow',
        },
        // itemInnerContainer: {
        //     paddingVertical:5,
        // }
        separator: {
            borderBottomWidth:4,
            borderBottomColor:'white',
        },
        itemTextHeader: {
            color: 'yellow',
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        itemTextFooter: {
            color: 'yellow',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic',
        }
    }
)

export default MenuItems;