import { useEthers } from "@usedapp/core";


export const Header = () => {
  const {activateBrowserWallet,account,deactivate} = useEthers()
  return (
    <header>
        <div className='logo'>Logo</div>
          {account 
          ? <div onClick={(deactivate)} className='wallet-address'>{account?.slice(0,19)+'...'}</div>
          : <button className='button' onClick={activateBrowserWallet}>connect metamask</button>}
    </header>
  )
}
