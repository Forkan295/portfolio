import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import SideNav from "@/Components/backend/SideNav";
import Main from "@/Layouts/Main";
import DashboardContent from "@/Components/backend/dashboard/DashboardContent";

function Profile(props) {
    return (

    <Main title="Users Page">
        <div className="post d-flex flex-column-fluid">
            <div className="container" id="kt_content_container">
                <div className="row gy-5 g-xl-8">
                    <div className="col-12">
                        <h1>Any place in your app!</h1>
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    <Field type="email" name="email"/>
                                    <ErrorMessage name="email" component="div"/>
                                    <Field type="password" name="password"/>
                                    <ErrorMessage name="password" component="div"/>
                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </Main>

    );
}

export default Profile;
