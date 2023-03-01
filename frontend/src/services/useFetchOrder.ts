import { useEffect, useState } from 'react';
import { OrderType } from '../types';
export const useFetchOrder = () => {
  const [order, setOrder] = useState<OrderType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, []);

  /**
   * @function fetchOrder -  fetch order from API and set the state
   */

  const fetchOrder = async () => {
    await fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
			order {
				id current_state customer_id  line_items creation last_update
		  		}
			}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res) setOrder(res.data);
      });
  };
  return { order, loading };
};
