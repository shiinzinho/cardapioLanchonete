import React from "react";
import { StyleSheet, View, ScrollView, Text, FlatList, Touchable, TouchableOpacity, StatusBar, Image, ImageBackground } from "react-native";

interface Item {
    id: string,
    qtd: string,
    nome: string,
    image: any
}

const dados: Item[] = [
    { id: '1', nome: '𝙲𝚕𝚞𝚋 𝚜𝚊𝚗𝚍𝚠𝚒𝚌𝚑', qtd: '1', image: require('../assets/images/ClubSandwich.jpg') },
    { id: '2', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚌𝚊𝚛𝚗𝚎 𝚊𝚜𝚜𝚊𝚍𝚊', qtd: '0', image: require('../assets/images/CarneAssada.jpg')},
    { id: '3', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚊𝚝𝚞𝚖', qtd: '0', image: require('../assets/images/Atum.jpg')},
    { id: '4', nome: '𝚆𝚛𝚊𝚙 𝚟𝚎𝚐𝚎𝚝𝚊𝚛𝚒𝚊𝚗𝚘 𝚌𝚘𝚖 𝚑𝚘𝚖𝚞𝚜', qtd: '0', image: require('../assets/images/Wrap.jpg')},
    { id: '5', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚜𝚊𝚕𝚊𝚍𝚊 𝚍𝚎 𝚏𝚛𝚊𝚗𝚐𝚘', qtd: '0', image: require('../assets/images/SaladaFrango.jpg')},
    { id: '6', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚙𝚎𝚛𝚗𝚒𝚕 𝚖𝚊𝚛𝚒𝚗𝚊𝚍𝚘', qtd: '0', image: require('../assets/images/Pernil.jpg')},
    { id: '7', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚙𝚎𝚒𝚝𝚘 𝚍𝚎 𝚙𝚎𝚛𝚞', qtd: '0', image: require('../assets/images/Peru.jpg')},
    { id: '8', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚌𝚘𝚜𝚝𝚎𝚕𝚊 𝚍𝚎 𝚙𝚘𝚛𝚌𝚘 𝚌𝚘𝚖 𝚋𝚊𝚛𝚋𝚎𝚌𝚞𝚎', qtd: '1', image: require('../assets/images/Barbecue.jpg')},
    { id: '9', nome: '𝙱𝙻𝚃', qtd: '0', image: require('../assets/images/BLT.jpg')},
    { id: '10', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚏𝚛𝚊𝚗𝚐𝚘 𝚐𝚛𝚎𝚕𝚑𝚊𝚍𝚘', qtd: '0', image: require('../assets/images/FrangoGrelhado.jpg')},
    { id: '11', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚊𝚋𝚊𝚌𝚊𝚝𝚎', qtd: '0', image: require('../assets/images/Abacate.jpg')},
    { id: '12', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚘𝚟𝚘 𝚎 𝚋𝚊𝚌𝚘𝚗', qtd: '0', image: require('../assets/images/OvoBacon.jpg')},
    { id: '13', nome: '𝙲𝚑𝚎𝚎𝚜𝚎𝚋𝚞𝚛𝚐𝚎𝚛', qtd: '0', image: require('../assets/images/CheeseBurguer.jpg')},
    { id: '14', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚍𝚎 𝚏𝚊𝚕𝚊𝚏𝚎𝚕', qtd: '0', image: require('../assets/images/Falafel.jpg')},
    { id: '15', nome: '𝚂𝚊𝚗𝚍𝚞í𝚌𝚑𝚎 𝚌𝚊𝚙𝚛𝚎𝚜𝚎', qtd: '0', image: require('../assets/images/Caprese.jpg')},
];

const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
        <Text style={styles.text1}>{item.nome}</Text>
        <Image source={item.image} style={styles.imageIcon}></Image>
        <TouchableOpacity><Image source={require('../assets/images/subtract.png')} style={styles.subtractIcon}></Image></TouchableOpacity>
        <Text style={styles.text2}>{item.qtd}</Text>
        <TouchableOpacity><Image source={require('../assets/images/addItem.png')} style={styles.addIcon}></Image></TouchableOpacity>

    </View>
);

function Cart(): React.JSX.Element {
    return (
        
        <View style={styles.container}>
            
             <ImageBackground source={require('../assets/images/menu.png')} style={styles.imageBackground}>
            <StatusBar backgroundColor='#ec3424' barStyle='light-content' />
            <View style={styles.header}>
                <Image source={require('../assets/images/lacerda.png')} style={styles.imageHeader}></Image>
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
                    source={require('../assets/images/home.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('../assets/images/orders.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={require('../assets/images/profile.png')}
                    style={styles.footerIcon}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image 
                    source={require('../assets/images/menuIcon.png')}
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
        borderRadius: 25,
        borderColor: 'red',
        borderWidth: 3,
    },
    header: {
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 1,
        paddingHorizontal: 40,
        borderBottomStartRadius:22,
        borderBottomEndRadius:22
    },
    text1: {
        fontSize: 25,
        fontWeight: '700',
        color: 'red',
        borderBottomWidth:2,
        borderBottomColor: 'red',
    },
    text2: {
        marginLeft: 147,
        marginTop:-28,
        fontSize: 20,
        fontWeight: '500',
        color: 'yellow',
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    subtractIcon: {
        width: 31,
        height: 31,
        marginLeft: 107,
        
    },
    addIcon: {
        width: 30,
        height: 30,
        marginLeft: 167,
        marginTop: -29.5
    },
    imageIcon: {
        marginTop: 15,
        width: 300,
        height: 160,
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 2,
        marginBottom:20
        
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      },
      imageHeader: {
        width: 320,
        height: 150,
      },
      footerIcon: {
        width: 30,
        height: 30
    },
}
);

export default Cart;