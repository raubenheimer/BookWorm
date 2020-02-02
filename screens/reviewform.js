import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

const reviewSchema = Yup.object({
    title: Yup.string()
        .required('Title is a required field')
        .min(5, 'Too Short'),
    body: Yup.string()
        .required('Body is a required field')
        .min(10, 'Too Short'),
    author: Yup.string()
        .required('Author is a required field')
        .min(5, 'Too Short'),
    rating: Yup.string()
        .required('Rating is a required field')
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
})

//The new book  review component
export default function ReviewFrom({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
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
                            placeholderTextColor='#ccc'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <Text  style={globalStyles.required}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            placeholderTextColor='#ccc'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <Text  style={globalStyles.required}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Author'
                            placeholderTextColor='#ccc'
                            onChangeText={props.handleChange('author')}
                            value={props.values.author}
                        />
                        <Text  style={globalStyles.required}>{props.touched.author && props.errors.author}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            placeholderTextColor='#ccc'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text  style={globalStyles.required}>{props.touched.rating && props.errors.rating}</Text>

                        <MaterialIcons
                        style={styles.submit}
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
    submit: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#5cb85c',
        overflow: "hidden"
    },
    
})


