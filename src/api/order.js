import request from '@/utils/request'
export function getOrderList({ pageNum, pageSize }) {
  return request({
    url: `manager/order/list/${pageNum}/${pageSize}`,
    method: 'post'
  })
}
