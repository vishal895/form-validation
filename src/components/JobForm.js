import { Formik, Form, Field, ErrorMessage } from "formik"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import "../App.css"
import * as yup from "yup"

const App = (props) => {

  const defaultvalue = {
    title: "",
    description: "",
    minExperience: "",
    maxExperience: "",
    location: "",
    category: "",
    fieldCategory: "",
    minGraduating: "",
    maxGraduating: "",
    tag: ""
  }

  const validationSchema = yup.object().shape({
    title: yup.string().required("please enter your title"),
    description: yup.string().required("please enter your description"),
    minExperience: yup.string().required("please enter your experience"),
    maxExperience: yup.string().required("please enter your experience"),
    location: yup.string().required("please enter your prefer location"),
    category: yup.string().required("please enter your category"),
    fieldCategory: yup.string().required("please enter your category"),
    minGraduating: yup.string().required("please enter your year"),
    maxGraduating: yup.string().required("please enter your year"),
    tag: yup.string().required("please enter your tag")
  })

  const handleSubmit = (values) => {
    console.log("values", values)
    props.history.push({
      pathname: '/v1jobs/job',
      values
    });

    const formData = {
      title: values?.title,
      description: values?.desciption,
      minExp: values?.minExperience
    }

    // we will call an api here by using these formData 


  }
  return (
    <>
      <div className="container">
        <div className="col-md-12  mt-5">
          <h6>Post Job</h6>
          <h2>Basic Details </h2>
          <Formik initialValues={defaultvalue}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <div className="col-md-12 mt-4">
                <h6>Job Title*</h6>
                <Field component="select" name="title" placeholder="enter your title" className="form-control">
                  <option value="" disabled>select position</option>
                  <option value="Full Stack developer Updated">Full Stack developer Updated</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="title" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <h6>Location*</h6>
                <Field component="select" name="location" placeholder="select your location" className="form-control">
                  <option value="" disabled>Add location</option>
                  <option value="pune">pune</option>
                  <option value="bangalore">bangalore</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="location" />
                </p>

              </div>
              <div className="col-md-12 mt-4">
                <div className="row">
                  <h6>Year of experience*</h6>
                  <div className="col-md-6">
                    <Field component="select" name="minExperience" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>select min</option>
                      <option value="5">+5</option>
                    </Field>
                  </div>
                  <div className="col-md-6">
                    <Field component="select" name="maxExperience" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>select max</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </Field>
                  </div>
                  <p className="text-danger">
                    <ErrorMessage name="maxExperience" />
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <h6>Job Description*</h6>
                <Field type="text" name="description" placeholder="Describe the role and responsibilities,skills required for the job and help the candidates understand the role better" className="des" />
                <p className="text-danger">
                  <ErrorMessage name="description" />
                </p>
              </div>
              <div className="col-md-12 mt-5">
                <h2>Targeting</h2>
              </div>
              <div className="col-md-12 mt-4">
                <div className="row">
                  <h6>Category*</h6>
                  <div className="col-md-6">
                    <Field component="select" name="category" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>select </option>
                      <option value="5">Software Dev</option>
                    </Field>
                  </div>
                  <div className="col-md-6">
                    <h6>Function Area*</h6>
                    <Field component="select" name="fieldCategory" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>select </option>
                      <option value="6">reactjs</option>
                    </Field>
                  </div>
                  <p className="text-danger">
                    <ErrorMessage name="fieldCategory" />
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <div className="row">
                  <h6>Graduating Year</h6>
                  <div className="col-md-6">
                    <Field component="select" name="minGraduating" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>min Batch</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                    </Field>
                  </div>
                  <div className="col-md-6">
                    <Field component="select" name="maxGraduating" placeholder="enter your experience" className="form-control">
                      <option value="" disabled>max batch</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>

                    </Field>
                  </div>
                  <p className="text-danger">
                    <ErrorMessage name="maxGraduating" />
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-4">
                <h6>Tags</h6>
                <Field component="select" name="tag" placeholder="enter your tittle" className="form-control">
                  <option value="" disabled>Add job tag</option>
                  <option value="5">Full Stack developer Updated</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="tag" />
                </p>
              </div>
              <div className="col-md-12 mb-5">
                <div className="row">

                  <div className="col-md-2">

                    <button className="btn btn-primary mt-5" type="submit">
                      post job
                    </button>

                  </div>
                  <div className="col-md-3">
                  <button className="btn btn-primary mt-5" type="submit">
                      Post Jon and Add Another job
                    </button>

                  </div>
                  <div className="col-md-2 mt-5">
                    <h6 className="h">click</h6>
                  </div>
                </div>
              </div>



            </Form>

          </Formik>
        </div>
      </div>
    </>
  )
}

export default App
