import StateMachine from 'javascript-state-machine';

export default class Order {
  constructor(items) {
    this.items = items;
    this.history = [];
    this._fsm(); // eslint-disable-line 
  }
  updateHistory(newWrite) {
    this.history = [...this.history, newWrite];
  }
}
Order.prototype = {
  onEnterState: (lifecycle) => {
    const obj = {
      state: lifecycle.state,
      createdAt: new Date(),
    };
    this.updateHistory(obj);
    // this.history = [...this.history, obj];
    // Order.prototype.history = [...Order.prototype.history, obj];
  },
};
StateMachine.factory(Order, {
  init: 'init',
  transitions: [
    // BEGIN (write your solution here)
    {
      name: 'accept',
      from: 'init',
      to: 'pending',
    },
    {
      name: 'ship',
      from: 'pending',
      to: 'shipped',
    },
    {
      name: 'complete',
      from: 'shipped',
      to: 'completed',
    },
    {
      name: 'cancel',
      from: ['init', 'pending'],
      to: 'canceled',
    },
    {
      name: 'refund',
      from: ['shipped', 'completed'],
      to: 'refunded',
    },
    // END
  ],
  methods: {
    // BEGIN (write your solution here)
    // onEnterState: (lifecycle) => {
    //   const obj = {
    //     state: lifecycle.to,
    //     createdAt: new Date(),
    //   };
    //   // Order.updateHistory(obj);
      
    //   console.log(this.Order.history);
      // Order.prototype = [...this.history, obj];
      // Order.prototype.history = [...Order.prototype.history, obj];
    // },
    // END
  },
});
