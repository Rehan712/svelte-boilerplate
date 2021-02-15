import { writable } from 'svelte/store';

function createCountStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(0),
  };
}

function todoItems() {
  const { subscribe, set, update } = writable({
    data: [{ name: 'Rehan', status: 'Completed' }],
    error: null,
    isLoading: false,
  });
  return {
    subscribe,
    getItems: state => state.data,
    addItem: (item = {}) =>
      update(state => ({ ...state, data: state.data.concat(item) })),
    removeItem: index =>
      update(state => {
        let data = [...state.data];
        data.splice(index, 1);
        return {
          ...state,
          data,
        };
      }),
  };
}

export const count = createCountStore();

export const todo = todoItems();
