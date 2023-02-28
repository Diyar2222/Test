import React from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import { PlanetCircle } from '../components/PlanetCircle'
import { useSearchUserByIdQuery } from '../store/unistoryApi'
import planetImg from '../image/planet.png'
import ErrorPage from './ErrorPage'
export const UserPage = () => {
    const {id} = useParams() // id для fetching даты из бэкенда
    const {data,isLoading,isError} = useSearchUserByIdQuery(Number(id)) // fetch запрос по id
    if(isError){
        return <ErrorPage/>
    }
    if(isLoading){
        return <Loading/>
    } else {
        return (
            <>
            <div className='user-page'>
                <h2 className='user-page-title'>Personal Data</h2>
                <h4>Name</h4>
                <h3 className='user-page-data'>{data?.username}</h3>
                <h4>Name</h4>
                <h3 className='user-page-data'>{data?.email}</h3>
                <h4>Wallet</h4>
                <h3 className='user-page-data'>{data?.address}</h3>
            </div>
            <div className='user-page-planet'>
              <div className="circle line-4">
                <div className='planet-svg'>
                  <svg width='500' height='500'>
                    <path className='motion-path'
                    d="M250,40 A100,100 0 0,1 250,460" stroke="#E75626" fill="none" stroke-width="1"/>
                      <circle className='first-circle' cx="250" cy="40" r="5" fill="#E75626"/>
                      <circle cx="460" cy="250" r="5" fill="#E75626"/>
                      <circle cx="250" cy="460" r="5" fill="#E75626"/>
                  </svg>
                </div>
              <div className="circle line-3">
            <div className="circle line-2">
          <div className="circle line-1">
        <img
          className="circle planet-img"
          src={planetImg}
          alt="planet"/>
        </div>
      </div>
    </div>
  </div>
</div>
            </>
          )
    }
 
}
