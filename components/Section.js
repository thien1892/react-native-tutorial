import { View, Text, SectionList, StyleSheet } from "react-native";

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Item = ({name, price}) => {
    return(
        <View style={menuItemSectionStyles.innerContainer}>
            <Text style={menuItemSectionStyles.itemText}>{name}</Text>
            <Text style={menuItemSectionStyles.itemText}>{price}</Text>
        </View>
    );
};

const separator = () => <View style={menuItemSectionStyles.separator}/>;

const header = () => {
    return(
        <Text style={menuItemSectionStyles.innerHeader}>
            Menu
        </Text>
    );
};

const footer = () =>{
    return(
        <Text style={menuItemSectionStyles.innerFooter}>
            You read all menu items!
        </Text>
    );
};

const MenuItemSections = () => {
    const rederItem = ({item}) => <Item name={item.name} price={item.price}/>;

    const renderSectionHeader = ({section: {title}}) => {
        return(
            <Text style={menuItemSectionStyles.sectionHeader}>
                {title}
            </Text>
        );
    };

    return(
        <View>
            <SectionList
                keyExtractor={(item, index) => item+index}
                sections={menuItemsToDisplay}
                renderItem={rederItem}
                renderSectionHeader={renderSectionHeader}
                // renderSectionFooter={footer}
                ListHeaderComponent={header}
                ListFooterComponent={footer}
                ItemSeparatorComponent={separator}
            />
        </View>
    );
};

const menuItemSectionStyles = StyleSheet.create({
    container : {
        flex: 0.8,
        // paddingHorizontal: 50,
        // paddingVertical: 30,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal:20,
    },
    itemText: {
        fontSize: 20,
        color: '#F4CE14',
    },
    innerHeader: {
        fontSize: 30,
        color: '#F4CE14',
        textAlign:'center',
        // fontStyle:'italic',
        paddingVertical:5,
    },
    innerFooter: {
        fontSize: 18,
        color: '#F4CE14',
        textAlign:'center',
        fontStyle:'italic',
        paddingVertical:10,
    },
    sectionHeader: {
        fontSize: 25,
        color: '#333333',
        textAlign:'center',
        backgroundColor: '#F4CE14',
        // fontWeight:'bold',
    },
    separator: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
});

export default MenuItemSections;