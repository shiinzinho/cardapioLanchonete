import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ImageBackground } from "react-native";

interface Item {
    id: string,
    nome: string,
    price: string,
    ingredients: string,
    image: any
}

const dados: Item[] = [
    { id: '1', nome: 'Club sandwich', price: '$12', ingredients: 'Pão de forma, Peito de peru, Bacon, Alface, Tomate', image: require('./assets/images/ClubSandwich.jpg') },
    { id: '2', nome: 'Sanduíche de carne assada', price: '$12', ingredients: 'Carne bovina, Baguete, Cebola, Tomate, Alface', image: require('./assets/images/CarneAssada.jpg')},
    { id: '3', nome: 'Sanduíche de atum', price: '$10', ingredients: 'Pão de forma, Atum, Cebola, Aipo, Alface', image: require('./assets/images/Atum.jpg')},
    { id: '4', nome: 'Wrap vegetariano com homus', price: '$9', ingredients: 'Tortilhas de trigo integral, Alho, Azeite, Limão(suco), Tahine', image: require('./assets/images/Wrap.jpg')},
    { id: '5', nome: 'Sanduíche de salada de frango', price: '$14', ingredients: 'Baguete, Peito de frango, Aipo, Nozes, Alface', image: require('./assets/images/SaladaFrango.jpg')},
    { id: '6', nome: 'Sanduíche de pernil marinado', price: '$13', ingredients: 'Baguete, Lombo de porco, Alho, Páprica, Orégano', image: require('./assets/images/Pernil.jpg')},
    { id: '7', nome: 'Sanduíche de peito de peru', price: '$13', ingredients: 'Pão de forma, Peito de peru, Cebola roxa, Queijo mussarela, Tomate', image: require('./assets/images/Peru.jpg')},
    { id: '8', nome: 'Sanduíche de costela de porco com barbecue', price: '$14', ingredients: 'Pão de hambúrguer, Costela de porco, Repolho, Molho barbecue, Cebola', image: require('./assets/images/Barbecue.jpg')},
    { id: '9', nome: 'BLT', price: '$9', ingredients: 'Pão de forma, Bacon, Alface, Tomate, Pimenta', image: require('./assets/images/BLT.jpg')},
    { id: '10', nome: 'Sanduíche de frango grelhado', price: '$10', ingredients: 'Ciabatta, Peito de frango, Tomate, Alface, Cebola roxa', image: require('./assets/images/FrangoGrelhado.jpg')},
    { id: '11', nome: 'Sanduíche de abacate', price: '$10', ingredients: 'Pão de forma, Abacate, Alface, Queijo branco, Tomate', image: require('./assets/images/Abacate.jpg')},
    { id: '12', nome: 'Sanduíche de ovo e bacon', price: '$8', ingredients: 'Pão de hambúrguer, Ovo, Bacon, Queijo mussarela, Manteiga', image: require('./assets/images/OvoBacon.jpg')},
    { id: '13', nome: 'Cheeseburger', price: '$8', ingredients: 'Pão de hambúrguer, Quijo cheddar, Cebola roxa, Carne de hambúrguer, Picles', image: require('./assets/images/CheeseBurguer.jpg')},
    { id: '14', nome: 'Sanduíche de falafel', price: '$11', ingredients: 'Pão folha, Alface, Tomate, Pepino, Cebola roxa', image: require('./assets/images/Falafel.jpg')},
    { id: '15', nome: ' Sanduíche caprese', price: '$13', ingredients: 'Pão italiano, Mussarela de búfala, Tomate, Manjericão, Azeite', image: require('./assets/images/Caprese.jpg')},
];

const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Text1}>{item.nome}</Text>
        <Text style={styles.Text2}>{item.price}</Text>
        <Text style={styles.Text3}>{item.ingredients}</Text>
        <Image source={item.image} style={styles.ImageIcon}></Image>
    </TouchableOpacity>
);

function MenuList(): React.JSX.Element {
    return (
        
        <View style={styles.container}>
             <ImageBackground source={require('./assets/images/menu.png')} style={styles.imageBackground}>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Cardápio da Lanchonete Lacerda</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>
                        <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/home.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/orders.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/profile.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image 
                    source={require('./assets/images/menuIcon.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 25
    },
    header: {
        backgroundColor: 'red',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 15
    },
    Text1: {
        fontSize: 30,
        fontWeight: '700',
        color: 'red'
    },
    Text2: {
        fontSize: 20,
        fontWeight: '500',
        color: 'yellow'
    },
    Text3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    ImageIcon: {
        borderTopWidth: 0.2,
        width: 320,
        height: 150
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      },
}
);

export default MenuList;