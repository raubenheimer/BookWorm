import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';

//The new book  review component
export default function ReviewFrom({ addReview }) {
    return (
        <View style={globalStyles.container}>
            {/* The Formik form used for input */}
            <Formik
                style={styles.form}
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    < View >
                        < TextInput
                            style={styles.test}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <MaterialIcons
                            name='add'
                            size={24}
                            onPress={props.handleSubmit}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        //keyboardType='numeric'
                        />
                    </View>
                )}
            </Formik>
        </View >
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        borderColor: '#ddd',
    },
    test: {
        color: '#fff',
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
    }
})


