import {request} from './request'

export const getHomeMultidata = () => {
  return request({
    url:'data/home/multidata/multidata.json',
  })
}