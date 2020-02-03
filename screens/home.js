import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewform';

//The Home Screen
export default function Home({ navigation }) {

    //The States used: A state for the Modal(bolean) and a state for the list of books(objects)
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Catch 22', rating: 5, author: 'Joseph Heller', body: 'During the second half of World War II, a soldier named Yossarian is stationed with his Air Force squadron on the island of Pianosa, near the Italian coast in the Mediterranean Sea. Yossarian and his friends endure a nightmarish, absurd existence defined by bureaucracy and violence: they are inhuman resources in the eyes of their blindly ambitious superior officers. The squadron is thrown thoughtlessly into brutal combat situations and bombing runs in which it is more important for the squadron members to capture good aerial photographs of explosions than to destroy their targets. Their colonels continually raise the number of missions that they are required to fly before being sent home, so that no one is ever sent home. Still, no one but Yossarian seems to realize that there is a war going on; everyone thinks he is crazy when he insists that millions of people are trying to kill him.', key: '1' },
        { title: 'The Old Man and the Sea', author: 'Ernest Hemingway', rating: 4, body: 'The Old Man and the Sea is the story of an epic struggle between an old, seasoned fisherman and the greatest catch of his life. For eighty-four days, Santiago, an aged Cuban fisherman, has set out to sea and returned empty-handed. So conspicuously unlucky is he that the parents of his young, devoted apprentice and friend, Manolin, have forced the boy to leave the old man in order to fish in a more prosperous boat. Nevertheless, the boy continues to care for the old man upon his return each night. He helps the old man tote his gear to his ramshackle hut, secures food for him, and discusses the latest developments in American baseball, especially the trials of the old man’s hero, Joe DiMaggio. Santiago is confident that his unproductive streak will soon come to an end, and he resolves to sail out farther than usual the following day.', key: '2' },
        { title: '12 Rules for Life', rating: 3, author: 'Jordan Peterson', body: 'Over the years, (former) Harvard and (current) University of Toronto professor and clinical psychologist Dr. Jordan B. Peterson has developed what he believes to be a definitive set of rules for leading a successful and fulfilling life. Originally conceived of with 40 rules, Peterson has condensed them into a well thought out, manageable list of 12 total rules that he shares in this book.', key: '3' },
    ])

    //Function that adds a new review to the reviews state
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [...currentReviews, review]
        });
        setModalOpen(false);
    }

    //Function that navigates to the Review Details Screen
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }

    //The Home Screen layout
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

            <Button
                title='Add a Review'
                color='black'
                onPress={() => setModalOpen(true)}
            />

        </View>
    )
}

//Local Styles
const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#ff0000',
        overflow: "hidden",
        marginTop: 40,
        marginBottom: 0,
    },
})
