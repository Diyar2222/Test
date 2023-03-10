import {useEffect, useState} from 'react';
import { Formik,FormikHelpers } from "formik";
import * as Yup from "yup";
import { InputFormProps, INewUser} from '../interfaces/interfaces'
import { useAppSelector } from '../store/store';

export const InputForm = ({userAdded, setUserAdded,newUser,setNewUser,setShowTable }: InputFormProps) => {
  const login = useAppSelector(state=>state.login.loggedIn)
  const [userLogged,setUserLogged] = useState(true)
  const initialValues = { //начальные данные пользователя для Formik формы
    name: "",
    email: "",
  };
  // Валидация формы
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  // функция для того чтобы добавить пользователя после заполнения формы
  const handleSubmit = (values: INewUser,{ resetForm }: FormikHelpers<INewUser>) => {
    if(login){
      setNewUser(values);
      localStorage.setItem('newUser',JSON.stringify(values))
      setUserAdded(true);
      localStorage.setItem('userAdded','true')
      setShowTable(true)
      localStorage.setItem('showTable','true')
      resetForm()
      setUserLogged(true)
    } else {
      setUserLogged(false)
    }
      
  };
  useEffect(()=>{
    setUserAdded(Boolean(localStorage.getItem('userAdded')))
    setNewUser(JSON.parse(localStorage.getItem('newUser')||'{}'))
  },[])
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name:</label>
          {userAdded ? (
            <h1 className='user-name'>{newUser.name}</h1>
          ) : (
            <input
              type="text"
              id="name"
              name="name"
              placeholder="We will display your name in participation list"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          )}
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="email">Email:</label>
          {userAdded ? (
            <h1 className='user-email'>{newUser.email}</h1>
          ) : (
            <input
              type="email"
              id="email"
              name="email"
              placeholder="We will display your email in participation list"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          )}
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <button
            className={`button ${!userAdded ? "disabled" : ""}`}
            type="submit"
            disabled={userAdded ? true : false}
          >
            Get early access
          </button>
          {!userLogged && <p className='error'>Connect to account</p>}
        </form>
      )}
    </Formik>
  );
};
