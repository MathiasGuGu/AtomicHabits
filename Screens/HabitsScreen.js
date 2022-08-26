import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, FlatList, StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const FinishedTask = ({index, item, name, info, setListOfHabits, changeHabitFinishedState}) => {
    return (
        <View style={styles.habitBox}>
            <Text style={styles.habitText}>{name}</Text>
            <Pressable onPress={() => setListOfHabits(changeHabitFinishedState(item, index))} >
                <View style={styles.finishedCircle}>
                    </View> 
            </Pressable>
        </View>
    )
}


export const UnfinishedTask = ({index, item, name, info, setListOfHabits, changeHabitFinishedState}) => {
    return (
        <View style={styles.habitBox}>
            <Text style={styles.habitText}>{name}</Text>
            <Pressable onPress={() => setListOfHabits(changeHabitFinishedState(item, index))} >
                <View style={styles.unfinishedCircle} />
            </Pressable>
        </View>
    )
}


const HabitsScreen = () => {


    const initialList = [
        {name: "Wake up early", info: "Wake up early", finished: false, selfMade: false }, 
        {name: "Drink Water", info: "Drink more water daily", finished: false, selfMade: false }, 
        {name: "Go to the gym", info: "Go JIM!", finished: false, selfMade: false }, 
        {name: "Read book", info: "Read more books", finished: false, selfMade: false },
        ]

    const [listOfHabits, setListOfHabits] = useState(initialList)
    const [numberOfFinished, setNumberOfFinished] = useState(0)
    const [isHabitsFinished, setIsHabitsFinished] = useState(false)

    useEffect(() => {
        const countFinished = () => {
            setNumberOfFinished(0)

            listOfHabits.forEach((habit) =>  {
                if (habit.finished) {
                    setNumberOfFinished(val => val + 1)
                }
            })

        }
        countFinished()

        if (numberOfFinished === listOfHabits.length) {
            setIsHabitsFinished(true)
        }
        else {
            setIsHabitsFinished(false)
        }
    }, [listOfHabits, numberOfFinished])

    const changeHabitFinishedState = (item, index) => {
        return listOfHabits.map((item, i) => {
                    if (index === i) {
                        item.finished ? item.finished = false : item.finished = true
                        return item
                    }
                    return item
            })
        }
    

  return (
    <View style={styles.container}>
        <View style={styles.amountView}>
            { isHabitsFinished ? 
            <Text style={styles.amountText}>You have finished all the habits! Well done!</Text>
             : 
             numberOfFinished === 0 
             ?
            <Text style={styles.amountText}>Lets start doing your daily habits</Text>
              :
            <Text style={styles.amountText}>You have finished {numberOfFinished} / {listOfHabits.length}! keep going!</Text>}
        </View>
        <FlatList data={listOfHabits} renderItem={({item, index}) => {return (
            <View>
                {item.finished ? <FinishedTask index={index} item={item} name={item.name} info={item.info} setListOfHabits={setListOfHabits} changeHabitFinishedState={changeHabitFinishedState} /> : <UnfinishedTask index={index} item={item} name={item.name} info={item.info} setListOfHabits={setListOfHabits} changeHabitFinishedState={changeHabitFinishedState} />}
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
        height: 100,
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












