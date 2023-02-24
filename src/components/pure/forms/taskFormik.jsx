import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {LEVELS} from '../../../models/levels.enum'
import '../../../styles/taskFormik.scss';


const TaskFormik = () => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const addTaskSchema = Yup.object().shape(
        {
            name: Yup.string().required('The name of task is required'),
            description: Yup.string().max(20,"description is too long").required(),
            level: Yup.string()
                .oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'Invalid option')
                .required()
        }
    )

    return (
        <div className='primary-box'>
            <h4>Add Task</h4>
            <Formik
            initialValues= { initialValues }
            validationSchema = { addTaskSchema }
            onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form className='allItems'>
                            <label htmlFor="name">Task Name</label>
                            <Field id="name" type="text" name="name" placeholder="Task Name" />
                            
                            {/* TaskName Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div' className="error"></ErrorMessage>
                                )
                            }
                            <label htmlFor="description">Task description</label>
                            <Field id="description" as='textarea' type="text" name="description" placeholder="Task description" />
                            
                            {/* Username Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div' className='error'></ErrorMessage>
                                )
                            }
                            <Field
                            as={FormControl}
                            margin="normal"
                            className = 'fiel_primary'
                            >
                            <InputLabel id="level-label">level</InputLabel>
                            <Field
                                as={Select}
                                name="level"
                                labelId="level-label"
                                label="Level"
                            >
                                <MenuItem value={LEVELS.BLOCKING}>Blocking</MenuItem>
                                <MenuItem value={LEVELS.NORMAL}>Normal</MenuItem>
                                <MenuItem value={LEVELS.URGENT}>Urgent</MenuItem>
                            </Field>
                            </Field>
                            <ErrorMessage name="level" />

                            <button
                                type='submit'
                                variant = 'contained'
                                color='primary'
                                disabled = {isSubmitting}
                            >
                                {isSubmitting ? 'Submitting' : 'submit'}
                            </button>
                        </Form>
                    )
                    }

            </Formik>
            
        </div>
    );
}

export default TaskFormik;
