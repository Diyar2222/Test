import React, { useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSearchUsersQuery } from "../store/unistoryApi";
import { TableProps } from "../interfaces/interfaces";

export const Table = ({ newUser,userAdded,setUserAdded,showTable }: TableProps) => {
  const { data,isLoading } = useSearchUsersQuery(1); // дата с api, 1ая страница
  let accountWallet = '0xskd12j43j1hq3123uue3fdkk9gfr840394' //hard-code кошелек для отображения в таблице

  // удаление пользователя с таблицы
  function deleteUser(e: React.MouseEvent) {
    setUserAdded(false)
    localStorage.removeItem('userAdded')
    localStorage.removeItem('newUser')
  }
  useEffect(()=>{
    setUserAdded(Boolean(localStorage.getItem('userAdded')) || false)
  },[showTable])

  if(isLoading){
    return <h1 className='loading-text'>Loading...</h1>
  } else {
  return (
    (localStorage.getItem('showTable')) ? 
    <div className="body__bottom-right">
      <h2 className="title">
        Participation listing (Enable only for participants)
      </h2>
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
            <tr className={`added-user ${!userAdded ? 'none' : ''}`}>
              <td>{newUser.name}</td>
              <td>{newUser.email}</td>
              <td className="delete-td">
                {accountWallet.slice(0, 20) + "..."}
                <TiDeleteOutline
                  onClick={(e) => deleteUser(e)}
                  className="delete-icon"
                />
              </td>
            </tr>
            {data?.map((item) => {
              return (
                <tr key={item.id}>
                  <Link to={`/user/${item.id}`}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address?.slice(0, 25) + "..."}</td>
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div> : <div></div>
  )};
};
