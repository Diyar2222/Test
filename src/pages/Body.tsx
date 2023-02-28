import { Body_Bottom } from "../components/Body_Bottom"
import { Body_Top } from "../components/Body_Top"
import Modal from "../components/Modal"

export const Body = () => {
  return (
    <div className='body'>
        <Modal/>
        <Body_Top/>     
        <Body_Bottom/>
    </div>
  )
}
