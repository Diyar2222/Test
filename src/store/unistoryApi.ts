import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser, ServerResponse } from '../models/models'

export const unistoryApi = createApi({
    reducerPath:'unistory',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://new-backend.unistory.app/'
    }),
    endpoints:build=>({
        searchUsers:build.query<IUser[], number>({
            query:(pageNum:number)=>({
                url:'api/data',
                params:{
                    page:pageNum,
                    perPage:30
                }
            }),
            transformResponse:(response:ServerResponse)=>response.items
        }),
        searchUserById:build.query<IUser,number>({
            query:(id:number)=>({
                url:`api/data/id/${id}`
            })
        })
    })
})
export const {useSearchUsersQuery,useSearchUserByIdQuery} = unistoryApi