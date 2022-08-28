import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Appearance, FlatList, StyleSheet, Pressable, Vibration } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ONE_SECOND = 1000

const colorScheme = Appearance.getColorScheme();
console.log(colorScheme);


/*
    Swap takes an array and two elements and swaps their places.
*/ 
const SWAP = (array, x, y) => {

    console.log(`array: ${array}, x: ${array[x]}, y: ${array[y]}`);

    let prev; 
    prev = array[x]

    console.log(`prev: ${prev}`);
    console.log("replacing x with y...");

    array.splice(x, 1, array[y])

    console.log(`old array: ${array}, new array: ${array}`);
    console.log("replacing y with prev...");

    array.splice(y, 1, prev)

    console.log(`new array: ${array}`);

    return array
}

const SEND_TO_BOTTOM = (array, x) =>  {
    let prev; 
    prev = array[x]

    array.splice(x, 1)
    array.push(prev)
    return array
}

const SEND_TO_TOP = (array, x) => {
    console.log(array);
    console.log(array[x]);
    let prev;
    let new_array;
    prev = array[x];
    new_array = []

    console.log(prev);

    new_array.push(prev)
    array.splice(x, 1)
    new_array.push(array)

    console.log(new_array);
    return new_array
}

export const Task = ({index, finished, item, name, info, setListOfHabits, changeHabitFinishedState, updateListOrder, lastUnfinished}) => {
    return (
        <View style={styles.habitBox}>
            <Text style={styles.habitText}>{name}</Text>
            <Pressable onPress={() => {updateListOrder(index); setListOfHabits(changeHabitFinishedState(item, index))}} >
                <View style={finished ? ([styles.circle, styles.green]) : ([styles.circle, styles.red])}>
                </View> 
            </Pressable>
        </View>
    )
}



const HabitsScreen = () => {


    const [initialList, setInitialList] = useState([
        {name: "Wake up early", info: "Wake up early", finished: false, selfMade: false }, 
        {name: "Drink Water", info: "Drink more water daily", finished: false, selfMade: false }, 
        {name: "Go to the gym", info: "Go JIM!", finished: false, selfMade: false }, 
        {name: "Read book", info: "Read more books", finished: false, selfMade: false },
    ])
    const test_list = [1,2,3,4,5,6,7,8,9]
    const [numberOfFinished, setNumberOfFinished] = useState(0)
    const [isHabitsFinished, setIsHabitsFinished] = useState(false)
    const [lastUnfinished, setLastUnfinished] = useState(initialList.length)

    const updateListOrder = (x, y) => {
        console.log(`last unfinished: ${lastUnfinished}`);
        let new_array = SEND_TO_TOP(initialList, x)
        setInitialList(new_array)
    }



    useEffect(() => {
        const countFinished = () => {
            setNumberOfFinished(0)

            initialList.forEach((habit) =>  {
                if (habit.finished) {
                    setNumberOfFinished(val => val + 1)
                }
            })

        }
        countFinished()

        if (numberOfFinished === initialList.length) {
            setIsHabitsFinished(true)
        }
        else {
            setIsHabitsFinished(false)
        }
    }, [initialList, numberOfFinished])

    const changeHabitFinishedState = (item, index) => {
        return initialList.map((item, i) => {
                    if (item.finished === false){
                        setLastUnfinished(i)
                    }
                    if (index === i) {
                        item.finished ? item.finished = false : item.finished = true
                        return item
                    }
                    return item
            })
        }
    

  return (
    <View style={styles.container} >
        <View style={styles.amountView}>
            { isHabitsFinished ? 
            <Text style={styles.amountText}>You have finished all the habits! Well done!</Text>
             : 
             numberOfFinished === 0 
             ?
            <Text style={styles.amountText}>Lets start doing your daily habits</Text>
              :
            <Text style={styles.amountText}>You have finished {numberOfFinished} / {initialList.length}! keep going!</Text>}
        </View>
        <FlatList data={initialList} renderItem={({item, index}) => {return (
            <View>
                {<Task index={index} updateListOrder={updateListOrder} finished={item.finished ? true : false} item={item} name={item.name} info={item.info} setListOfHabits={setInitialList} changeHabitFinishedState={changeHabitFinishedState} lastUnfinished={lastUnfinished} />}
            </View>
        )}} />
    </View> 

  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    habitBox: {
        margin: 10,
        width: 350,
        height: 80,
        flexDirection: "row",
         /*
        borderColor: "black",
        borderWidth: "2px",
        */
        borderRadius: "8px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    habitText: {
        margin: 20,
        color: "black"
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: "50px", 
        marginHorizontal: 20
    },
    green: {
        backgroundColor: "green"
    },
    red: {
        backgroundColor: "red"

    },
    finishedCircle: {        
        width: 50,
        height: 50,
        borderColor: "white",
        borderWidth: "2px",
        borderRadius: "50px", 
        marginHorizontal: 20,
        backgroundColor: "green"
    },

    unfinishedCircle: {        
        width: 50,
        height: 50,
        borderColor: "white",
        borderWidth: "2px",
        borderRadius: "50px",
        marginHorizontal: 20,
        backgroundColor: "red"
    },
    amountView: {
        height: 90,
        width: "100%",
        zIndex: 999,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    amountText: {
        fontSize: "20rem"
    }
})

export default HabitsScreen;












