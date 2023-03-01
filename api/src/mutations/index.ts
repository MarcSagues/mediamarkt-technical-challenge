import { OrderType } from '../types';
import { CONSTANTS } from '../utils/constants';
import { orders } from '../data/orders';

export const mutation = {
  /**
   *
   * @param line_items - items to be added to the order
   * @returns the order object added if no errors occurred
   */
  addOrder: async ({ line_items }: { line_items: string[] }) => {
    const order: OrderType = {
      id: orders.length + 1,
      current_state: CONSTANTS.state.OPEN,
      creation: Date.now().toString(),
      last_update: Date.now().toString(),
      line_items,
    };
    orders.push(order);
    return {
      data: order,
      ok: true,
      error: 'Error creating order',
    };
  },

  /**
   *
   * @param id - the id of the order to be updated
   * @returns the order object mutaded if no errors occurred
   */
  changeOrderState: async ({ id }: { id: number }) => {
    const order = orders.find((order) => order.id === id);

    if (!order) return { ok: false, error: 'Order not found' };

    let newState = CONSTANTS.state.IN_PROGRESS;

    if (order.current_state === CONSTANTS.state.IN_PROGRESS) {
      newState = CONSTANTS.state.COMPLETE;
    } else if (order.current_state === CONSTANTS.state.OPEN) {
      /* If order is already open, we generate a random number simulating a customer id */
      order.customer_id = Math.floor(Math.random() * 10) + 1;
    }

    order.current_state = newState;
    order.last_update = Date.now().toString();

    return {
      data: order,
      ok: true,
      error: 'Error changing order state',
    };
  },
};
