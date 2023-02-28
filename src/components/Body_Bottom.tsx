import React, {useState} from 'react'
import { useSearchUsersQuery } from '../store/unistoryApi'
import * as Yup from 'yup';
import { Formik,FormikHelpers } from 'formik';
import {TiDeleteOutline} from 'react-icons/ti'
import { Link } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

type User = {
  name:string,
  email:string,
  address?:string,
  id?:number
}
export const Body_Bottom = () => {
  const {data} = useSearchUsersQuery(1) // дата с api, 1ая страница
  const {account} = useEthers() // кошелек для отображения в таблице

  const [newUser,setNewUser] = useState<User>() //данные для отображения имени и почти будут храниться тут
  const [userAdded, setUserAdded] = useState(false) // проверка добавлен ли пользователь чтобы отобразить таблицу
  const initialValues = {
    name: '',
    email: ''
  };
type FormProps = {
  name:string,
  email:string
}
// Валидация формы
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
});
// функция для удаления пользователя с таблицы
function deleteUser(e:React.MouseEvent<SVGElement, MouseEvent>){
  document.querySelector('.added-user')?.remove()
}
// функция для того чтобы добавить пользователя после заполнения формы
const handleSubmit = (values:FormProps,{ resetForm }: FormikHelpers<FormProps>) => {
  setNewUser(values)
  setUserAdded(true)
  resetForm()
};

  return (
    <div className='body__bottom'>
        <div className='body__bottom-left'>
            <h1>Beta test registration</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facilis 
                quas, impedit magnam, nisi alias error quidem explicabo libero, assumenda 
                cupiditate ad ducimus accusantium. Hic dignissimos nulla officia alias sed?
            </p>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
  {(formik) => (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      {userAdded ? <h1>{newUser?.name}</h1> : 
      <input
        type="text"
        id="name"
        name="name"
        placeholder='We will display your name in participation list'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />}
      {formik.touched.name && formik.errors.name ? (
        <div className='error'>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Email:</label>
      {userAdded ? <h1>{newUser?.email}</h1> :
      <input
        type="email"
        id="email"
        name="email"
        placeholder='We will display your email in participation list'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />}
      {formik.touched.email && formik.errors.email ? (
        <div className='error'>{formik.errors.email}</div>
      ) : null}
      <button 
      className={userAdded ? 'disabled' : ''} 
      type="submit"
      disabled={userAdded ? true : false}
      >Get early access</button>
    </form>
  )}
</Formik>
        </div>
        {userAdded && 
        <div className="body__bottom-right">
          <h2 className='title'>Participation listing (Enable only for participants)</h2>  
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Wallet</th>
                </tr>
              </thead>
              <tbody>
                <tr className='added-user'>
                  <td>{newUser?.name}</td>
                  <td>{newUser?.email}</td>
                  <td className='delete-td'>
                    {account?.slice(0,25)+'...'} <TiDeleteOutline onClick={(e)=>deleteUser(e)} className='delete-icon'/>
                    </td>
                </tr>
                {data?.map(item=>{
                      return <tr key={item.id}>
                        <Link to={`/user/${item.id}`}>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.address?.slice(0,25)+'...'}</td>
                        </Link>
                      </tr>
                    })}
                </tbody>
              </table>
          </div>
      </div>}
        </div>
  )
}
