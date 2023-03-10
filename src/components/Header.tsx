import { accountAction } from "../store/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const Header = () => {
  const dispatch = useAppDispatch()
  const login = useAppSelector(state=>state.login.loggedIn)
  return (
    <header>
        <div className='logo'>Logo</div>
          {login
          ? <button className='button' onClick={()=>dispatch(accountAction.login())}>Log Out</button>
          : <button className='button' onClick={()=>dispatch(accountAction.login())}>Log In</button>}
    </header>
  )
}
