import { Model } from 'mongoose';

export type IOrder = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  quantity: string;
  roadHouse: string;
  policeStation: string;
  district: string;
  zipCode: string;
  info?: string;
  price: string;
  payment: string;
  status: string;
};

export type OrdersModal = Model<IOrder, unknown>;

export type IOrdersFilterRequest = {
  searchTerm?: string;
  lastName?: string;
  phone?: string;
  price?: string;
  email?: string;
};
