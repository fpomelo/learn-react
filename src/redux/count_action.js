import { INCREMENT, DECREMENT } from './constant';

export const decrement = data => ({type: DECREMENT, data})
export const increment = data => ({type: INCREMENT, data})