export type OrderType = {
  id: number;
  current_state: string;
  line_items: string[];
  creation: string;
  last_update: string;
  customer_id?: CustomerType['id'];
};

export type CustomerType = {
  id: number;
  name: string;
};
