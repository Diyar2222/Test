import { Body_Bottom } from "../components/Body_Bottom"
import { Body_Top } from "../components/Body_Top"
import Modal from "../components/Modal"
import { useEthers } from "@usedapp/core";

export const Body = () => {
  const { account } = useEthers();
  return (
    <div className='body'>
        {!account && <Modal/>}
        <Body_Top/>     
        <Body_Bottom/>
    </div>
  )
}
