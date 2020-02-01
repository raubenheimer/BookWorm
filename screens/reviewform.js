import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string().required(),
    body: yup.string().required(),
    author: yup.string().required(),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
        return parseInt(Val) < 6 && parseInt(val) > 0;
    })
})

//The new book  review component
export default function ReviewFrom({ addReview }) {
    return (
        <View style={globalStyles.container}>
            {/* The Formik form used for input */}
            <Formik
                style={styles.form}
                initialValues={{ title: '', body: '', author: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    < View >
                        < TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <Text>{props.touched.title && props.errors.title}yo</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <Text>{props.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='author'
                            onChangeText={props.handleChange('author')}
                            value={props.values.author}
                        />
                        <Text>{props.errors.author}</Text>
                
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text>{props.errors.rating}</Text>

                        <MaterialIcons
                            name='add'
                            size={24}
                            onPress={props.handleSubmit}
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
})


