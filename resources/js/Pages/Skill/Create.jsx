import React from 'react';
import Main from "@/Layouts/Main";
import {Field, Form, Formik} from "formik";

function Create(props) {
    return (
        <Main title="Users Page">
            <div className="row gy-5 g-xl-8">
                <div className="col-12">
                    <Formik
                        initialValues={{name: '', type: '', experience: ''}}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,}) => (
                            <div className="card">
                                <div className="card-header card-header-stretch overflow-auto">
                                    <div className="card-title">
                                        <h2>Create Skill</h2>
                                    </div>
                                </div>
                                <div className="card-body p-lg-17">
                                    <div className="d-flex flex-column flex-lg-row mb-17">
                                        <div className="flex-lg-row-fluid me-0 me-lg-20">
                                            <Form className="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework"  onSubmit={handleSubmit}>
                                                <div className="row mb-5">
                                                    <div
                                                        className="col-md-3 offset-md-3 fv-row fv-plugins-icon-container">
                                                        <label htmlFor=""
                                                               className="required fs-5 fw-semibold mb-2"> Name </label>
                                                        <Field type="text"
                                                               name="name"
                                                               onChange={handleChange}
                                                               value={values.name}
                                                               className="form-control form-control-solid"/>
                                                    </div>
                                                    <div className="col-md-3 fv-row fv-plugins-icon-container">
                                                        <label htmlFor=""
                                                               className="required fs-5 fw-semibold mb-2"> Experience </label>
                                                        <Field type="number"
                                                               name="experience"
                                                               onChange={handleChange}
                                                               value={values.experience}
                                                               className="form-control form-control-solid"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-5">
                                                    <div
                                                        className="col-md-3 offset-md-3 fv-row fv-plugins-icon-container">
                                                        <label htmlFor=""
                                                               className="required fs-5 fw-semibold mb-2"> Type </label>
                                                        <Field as="select"
                                                               name="type"
                                                               onChange={handleChange}
                                                               value={values.type}
                                                               className="form-control form-control-solid">
                                                            <option value="red">Red</option>
                                                            <option value="green">Green</option>
                                                            <option value="blue">Blue</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="row mb-5 mt-12">
                                                    <div
                                                        className="col-md-3 offset-md-3 fv-row fv-plugins-icon-container">
                                                        <button type="submit" className="btn btn-primary"
                                                                disabled={isSubmitting}
                                                                id="kt_file_manager_settings_submit">
                                                            <span className="indicator-label">Save</span>
                                                            <span className="indicator-progress">Please wait...
                                                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </Main>
    );
}

export default Create;
