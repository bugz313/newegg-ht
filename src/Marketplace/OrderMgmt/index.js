'use strict';

export default class OrderMgmt {
  constructor(QueryWrapper) {
    this.QueryWrapper = QueryWrapper;
  }

  GetOrderStatus(ordernumber) {
    return this.QueryWrapper.query('GET', `/marketplace/ordermgmt/orderstatus/orders/${ordernumber}`, null);
  }
  UpdateOrder(ordernumber, data) {
    return this.QueryWrapper.query('PUT', `/marketplace/ordermgmt/orderstatus/orders/${ordernumber}`, data);
  }
  OrderConfirm(data) {
    return this.QueryWrapper.query('POST', '/marketplace/ordermgmt/orderstatus/orders/confirmation', data);
  }
  RemoveItem(ordernumber, data) {
    return this.QueryWrapper.query('PUT', `/marketplace/ordermgmt/killitem/orders/${ordernumber}`, data);
  }
  GetOrderInfo(data) {
    return this.QueryWrapper.query('PUT', '/marketplace/ordermgmt/order/orderinfo', data);
  }
  GetSBNOrderCancellationResponse(ordernumber) {
    return this.QueryWrapper.query('GET', `/marketplace/ordermgmt/sbnorder/cancellationresult/${ordernumber}`, null);
  }
}