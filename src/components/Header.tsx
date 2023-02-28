import { Button } from './Button'
import { useEthers } from "@usedapp/core";

export const Header = () => {
  const {activateBrowserWallet,account,deactivate} = useEthers()

  return (
    <nav>
        <div className='logo'>Logo</div>
          {account 
          ? <div onClick={(deactivate)} className='wallet-address'>{account.slice(0,19)+'...'}</div>
          : <Button text='connect metamask' onClick={activateBrowserWallet}/>}
    </nav>
  )
}
