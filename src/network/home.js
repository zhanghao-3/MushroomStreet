import {request} from './request'

export const getHomeMultidata = () => {
  return request({
    url:'data/home/multidata/multidata.json',
  })
}


export const getHomeGoods = (type,page) => {
  return request({
    url:'data/home/data/' + type + '/' + page + '.json'
  })
}