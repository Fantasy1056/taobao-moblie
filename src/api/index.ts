import { http } from './axios'

export const reqGetIconList = () => http.get('/iconlist')

export const reqGetGongeList = () => http.get('/gongelist')

export const reqGetFooterList = () => http.get('/footerlist')
