import React, {useState} from 'react';
import Main from "@/Layouts/Main";
import {Field, Form, Formik} from "formik";


const TYPES = [
    'Frontend',
    'Backend',
    'Tools',
    'Design and Architecture'
];

function Create(props) {
    let [logoState,setLogoState] = useState({
        digital_signature:''
    });
    return (
        <Main title="Users Page">
            <div className="row gy-5 g-xl-8">
                <div className="col-12">
                    <Formik
                        initialValues={{name: '', type: '', experience: '', logo: null}}
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values)

                            const requestOptions = {
                                method: 'POST',
                                contentType: 'multipart/form-data',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(values)
                            };
                            fetch(route('skill.store'), requestOptions)
                                .then(res => res.json())
                                .then()
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              setFieldValue,
                              isSubmitting,
                          }) => (
                            <div className="card">
                                <div className="card-header card-header-stretch overflow-auto">
                                    <div className="card-title">
                                        <h2>Create Skill</h2>
                                    </div>
                                </div>
                                <div className="card-body p-lg-17">
                                    <div className="d-flex flex-column flex-lg-row mb-17">
                                        <div className="flex-lg-row-fluid me-0 me-lg-20">
                                            <Form className="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework"
                                                  onSubmit={handleSubmit}>
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
                                                            {TYPES.map(function (type) {
                                                                return (<option key={type} value={type}>{type}</option>)
                                                            })}
                                                        </Field>
                                                    </div>
                                                    <div className="col-md-3 fv-row fv-plugins-icon-container">
                                                        <label htmlFor=""
                                                               className="required fs-5 fw-semibold mb-2"> Logo </label>
                                                        <Field type="file"
                                                               name="logo"
                                                               value={''}
                                                               onChange={(event) => {
                                                                   const fileReader = new FileReader();
                                                                   fileReader.onload = () => {
                                                                       if (fileReader.readyState === 2) {
                                                                           setFieldValue("logo", fileReader.result);
                                                                       }
                                                                   };
                                                                   fileReader.readAsDataURL(event.target.files[0]);
                                                               }}
                                                               className="form-control form-control-solid"/>
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
                                                                <span
                                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
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
