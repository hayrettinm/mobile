import React, {Component} from "react";
import {View, TouchableOpacity, Dimensions} from "react-native";
import {connect} from "react-redux";
import BlankPage2 from "../blankPage2";
import Header from "../header";
import DrawBar from "../DrawBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window');

import {DrawerNavigator, NavigationActions} from "react-navigation";
import {
    Container,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    H3,
    Body,
    Right
} from "native-base";
import {Grid, Row} from "react-native-easy-grid";

import {setIndex} from "../../actions/list";
import {openDrawer} from "../../actions/drawer";
import styles from "./styles";

class GetStarted extends Component {
    static navigationOptions = {
        header: null
    };
    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };

    newPage(index) {
        this.props.setIndex(index);
        Actions.blankPage();
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(DrawNav, "786785786");
        return (
            <Container>
                <View style={styles.container}>

                    <View style={{
                        backgroundColor: '#373c40',
                        width: width,
                        height: 45,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',

                        zIndex: 25,
                        left: 0,
                        overflow: 'visible',
                        shadowColor: 'black',
                        shadowOpacity: .2,
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                    }}>
                        <View style={{width: 50, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                // this.props.navigation.navigate.pop();
                                this.props.navigation.navigate('DrawerOpen')
                            }} activeOpacity={0.8} style={{color: '#fff'}}>
                                <Icon
                                    name='ios-menu'
                                    style={{color: '#fff'}}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18
                            }}>ENDORSEVIEW</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>

                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#373c40',
                        }}>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <H3 style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 23,
                                }}>
                                    GREAT KNOWS GREAT
                                </H3>
                                <Text style={{
                                    color: 'white',
                                    marginHorizontal: 10,
                                    textAlign: 'center',
                                }}>
                                    A QUALITY ENDORSEMENT CAN BE THE
                                    DIFFERENCE BETWEEN GETTING HIRED AND
                                    GETTING OVERLOOKED. YOUR CURRENT ENDORSERS
                                    CAN BE VIEWED BELOW. IS ANYONE MISSING?
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <Button style={{
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    backgroundColor: '#c9d579',
                                }}
                                        onPress={() => {
                                            console.log("here");
                                            navigate('GetEndorsedDetail');
                                        }}>
                                    <Text>GET ENDORSED</Text>
                                </Button>
                            </View>

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            backgroundColor: '#f5f5f5',
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ebebeb',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    textAlign: 'center',
                                    backgroundColor: 'transparent',
                                    color: '#373d40',
                                }}>People asking for endorsement:</Text>
                                <Text style={{
                                    color: '#aaabac',
                                    textAlign: 'center',
                                    paddingTop: 15,
                                }}
                                >No one has asked you for an endorsement (yet!)</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#efefef',
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 19,
                                    textAlign: 'center',
                                    backgroundColor: 'transparent',
                                    color: '#373d40',
                                }}>People you asked for an endorsement:</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: '#aaabac',
                                    paddingTop: 15,
                                }}
                                >No one has asked you for an endorsement (yet!)</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignContent: 'flex-end',
                                    marginVertical: 15,
                                    left: 15,
                                }}>
                                    <View
                                        style={{
                                            height: 80,
                                            width: 80,
                                            backgroundColor: '#bccb53',
                                            borderRadius: 40,
                                            zIndex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            fontSize: 32,
                                            fontWeight: 'bold',
                                        }}>
                                            +
                                        </Text>
                                    </View>
                                    <View style={{
                                        position: 'relative',
                                        right: 45,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 80,
                                        width: 270,
                                        borderRadius: 10,
                                        backgroundColor: 'white',
                                    }}>
                                        <Text style={{color:'#bccb53',fontWeight:'bold',left:15}} >Get more endorsement</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({
    name: state.user.name,
    list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(GetStarted);
const DrawNav = DrawerNavigator(
    {
        Home: {screen: HomeSwagger},
        BlankPage2: {screen: BlankPage2}
    },
    {
        contentComponent: props => <DrawBar {...props} />
    }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({navigation}) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
