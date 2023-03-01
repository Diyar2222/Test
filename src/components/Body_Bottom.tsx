import {useState} from 'react'
import {Table} from './Table'
import { InputForm } from './InputForm';


export const Body_Bottom = () => {
  const [newUser,setNewUser] = useState({name:'',email:''}) //данные для отображения имени и почты 
  const [userAdded, setUserAdded] = useState(false) // проверка добавлен ли пользователь чтобы отобразить таблицу
  return (
    <div className='body__bottom'>
        <div className='body__bottom-left'>
            <h1 className='body__bottom-left-title'>Beta test registration</h1>
            <p className='body__bottom-left-info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facilis 
                quas, impedit magnam, nisi alias error quidem explicabo libero, assumenda 
                cupiditate ad ducimus accusantium. Hic dignissimos nulla officia alias sed?
            </p>
            <InputForm
            userAdded={userAdded}
            setUserAdded={setUserAdded}
            setNewUser={setNewUser}
            newUser={newUser}
            />
        </div>
        {userAdded && <Table name={newUser.name} email={newUser.email}/>} 
    </div>
  )
}
