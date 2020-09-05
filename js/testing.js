// /* eslint-disable */


//  write uniqueConsonant

// const uniqueConsonant = (str) => {
//     return str.split('').reduce( (accum, char) => {
//         if (!'aeiou'.includes(char) && !accum.includes(char)) accum.push(char)
//         return accum
//     }, [])
// }




// const uniqueConsonant2 = (str) => {
//     const map = {}
//     str.split('').forEach( item => {
//         if (!'aeiou'.includes(item)) map[item] = 0
//     })
//     return Object.keys(map)
// }

//  console.log(uniqueConsonant2('abacub'));[ 'b', 'c' ]

//  write the rejectMeInCaps function

// const rejectMeInCaps = (str) => {
//   return new Promise((resolve, reject) => {
//     reject(str.toUpperCase())
//   })
// }

//  rejectMeInCaps('foo')
//    .catch( result => console.log(result));FOO

//  rejectMeInCaps('bar')
//    .catch( result => console.log(result));BAR

// const onlyEven = (num) => {
//   if (num % 2 === 0) return Promise.resolve(num)
//   else return Promise.reject(num)
// }

//  onlyEven(2)
//    .then(num=> console.log(`resolved with ${num}`));

//  onlyEven(3)
//    .catch(num=> console.log(`rejected with ${num}`));
//   /*
//   resolved with 2
//   rejected with 3
//   */


//   write onlyNumbers

// const xonlyNumbers = (num) => {
//   if (typeof num === 'number') return Promise.resolve(num)
//   else return Promise.reject(num)
// }

//   onlyNumbers(2)
//     .then(num=> console.log(`resolved with ${num}`));
 
//   onlyNumbers('two')
//     .catch(num=> console.log(`rejected with ${num}`));
//   onlyNumbers('3')
//     .catch(num=> console.log(`rejected with ${num}`));
//    /*
//    resolved with 2
//    rejected with two
//    rejected with 3
//    */

//    let count = 0
//     const everyOther = async() => {
//      return new Promise ((resolve, reject) => {
//        if (count % 2 === 0) {
//          count ++
//          return resolve()
//        } else {
//          count ++
//          return reject()
//        }
//      })
//     }


//    everyOther()
//    .then(()=> console.log('yup'));

//  everyOther()
//    .catch(()=> console.log('nope'));
//  everyOther()
//    .then(()=> console.log('yes again'));

//  everyOther()
//    .catch(()=> console.log('no again'));
// /*
// yup
// nope
// yes again
// no again
// */

//  write everyNTimes

// const everyNTimes = (times) => {
//   let count = 1
//   return function(str) {
//     if (count % times === 0) {
//       count ++
//       return Promise.resolve(str)
//     } else {
//       count ++
//       return Promise.reject(str)
//     }
//   }
// }


//  const everyOther = everyNTimes(2);

//  everyOther('a').catch(r => console.log(`NO ${r}`));
//  everyOther('b').then(r => console.log(`YES ${r}`));
//  everyOther('c').catch(r => console.log(`NO ${r}`));
//  everyOther('d').then(r => console.log(`YES ${r}`));
//  const everyThree = everyNTimes(3);
//  everyThree('1').catch(r => console.log(`NO ${r}`));
//  everyThree('2').catch(r => console.log(`NO ${r}`));
//  everyThree('3').then(r => console.log(`YES ${r}`));
//  everyThree('4').catch(r => console.log(`NO ${r}`));
//  everyThree('5').catch(r => console.log(`NO ${r}`));
//  everyThree('6').then(r => console.log(`YES ${r}`));
//   /*
//  NO a
//  YES b
//  NO c
//  YES d
//  NO 1
//  NO 2
//  YES 3
//  NO 4
//  NO 5
//  YES 6
//  */

//  write delayInSeconds

// const now = new Date();

// const elapsed = ()=> {
//   console.log(`${ (new Date() - now) /1000} elapsed seconds`);
// };

// const delayInSeconds = (delay, str) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res(str), delay * 1000)
//   })
// }

//  delayInSeconds(.6, 'second')
//    .then( d => {
//      console.log(d)
//      elapsed();
//    });
//  delayInSeconds(.7, 'third')
//    .then( d => {
//      console.log(d)
//      elapsed();
//    });
//  delayInSeconds(.5, 'first')
//    .then( d => {
//      console.log(d)
//      elapsed();
//    });

//   times might differ slightly
// /*
// first
// .503 elapsed seconds
// second
// .601 elapsed seconds
// third
// .706 elapsed seconds
// */

//  onlyNumbers Promise
//  write onlyNumbers

// const onlyNumbers = (num) => typeof num === 'number' ? Promise.resolve(num) : Promise.reject(num)

//  onlyNumbers(2)
//    .then(num=> console.log(`resolved with ${num}`));

//  onlyNumbers('two')
//    .catch(num=> console.log(`rejected with ${num}`));
//  onlyNumbers('3')
//    .catch(num=> console.log(`rejected with ${num}`));
//   /*
//   resolved with 2
//   rejected with two
//   rejected with 3
//   */
 
//   write groupByDataType

// const groupByDataType = (arr) => {
//   return arr.reduce( (acc, curr) => {
//       const prop = typeof curr
//       if (!acc[prop]) acc[prop] = [] 
//       acc[prop].push(curr)
//       return acc
//   }, {})
// }

//   console.log(groupByDataType([
//     1, 2, 3
//   ]));{ number: [ 1, 2, 3 ] }
//   console.log(groupByDataType([
//     1, 'a', 'b', true, false, [], new Date(), true, {}
//   ]));
 
//  /*
//    string: [ 'a', 'b' ],
//    boolean: [ true, false, true ],  object: [ [], 2020-03-03T20:54:30.720Z, {} ] }
//    */
//    date will be current date!

//     write the Notifier constructor / class


//  function Notifier() {
//    this.listeners = []
//  }
//  Notifier.prototype.listen = function(fn) {
//    this.listeners.push(fn)
//  }
//  Notifier.prototype.broadcast = function(message) {
//    this.listeners.forEach( listener => listener(message))
//  }

//  const n = new Notifier();
//  n.listen((message)=> console.log(message.toUpperCase()));
//  n.broadcast('hello');
//  n.broadcast('world');
//  n.listen((message)=> console.log(message.toLowerCase()));
//  n.broadcast('hello again!');
// /*
// HELLO
// WORLD
// HELLO AGAIN!
// hello again!
// */

//  class Notifier{
//    constructor(){
//      this.listeners = [];
//    }
//    listen(fn){
//      this.listeners.push(fn);
//      return ()=> {n.broadcast = () => null};
//    }
//    broadcast(message){
//      this.listeners.forEach( listener => listener(message));
//    }
//  }

//  const n = new Notifier();
//  const unsubscribe = n.listen((message)=> console.log(message.toUpperCase()));
//  n.broadcast('hello');
//  unsubscribe();
//  n.broadcast('world');
// /*
// HELLO
// */

//  Finish the notify me object
//  const notifier = {
//    listeners: {},

//    notifyMeAbout: function(topic, fn) {
//      this.listeners[topic] = fn
//    },
//    broadcast: function(topic, message) {
//      if (message.includes('Mets')) message = 'The Phillies Win'
//      if (this.listeners[topic]) this.listeners[topic](message)
//    }
//  };

//  notifier.notifyMeAbout('sports', (message)=> {
//    console.log(`sports ${message}`);
//  });

//  notifier.notifyMeAbout('cooking', (message)=> {
//    console.log(`cooking ${message}`);
//  });

//  notifier.broadcast('sports', 'The Mets Win');
//  notifier.broadcast('cooking', 'Here is new pasta recipe!');
//  notifier.broadcast('politics', 'The election results are in!');
// /*
// sports The Mets Win
// cooking Here is new pasta recipe!
// */

//  Fix the notifier so that a subscriber can subscribe to all messages
// const notifier = {
//   listeners: {},
//   subscribe: function(type, fn){
//     this.listeners[type] = this.listeners[type] || []; 
//     const list = this.listeners[type];
//     list.push(fn)
//   },
//   broadcast: function(type, message){
//     let list = this.listeners[type] || [];
//     list.forEach( fn => fn(message))
//     this.listeners.all.forEach( fn => fn(message))
//   },
//   subscribeAll: function(fn) {
//     this.listeners.all = []
//     this.listeners.all.push(fn)
//   }
// };
//  notifier.subscribe('SPORTS', (message)=> {
//    console.log(`SPORTS SUBSCRIBER-${message}`);
//  });

//  notifier.subscribeAll((message)=> console.log(`ALL SUSCRIBER- ${message}`));

//  notifier.broadcast('SPORTS', 'sports message')
//  notifier.broadcast('COOKING', 'cooking message')

// /*
// SPORTS SUBSCRIBER-sports message
// ALL SUSCRIBER- sports message
// ALL SUSCRIBER- cooking message
// */

//  fix the foo object so that foo.bar() logs 'quq'

// const foo = {
//   bar: function(){
//     console.log(this.bazz);
//   },
//   bazz: 'quq' 
// };

//  foo.bar();quq

//  write the EE object

// const EE = {
//   listeners: [],
//   listen: function(listener){
//     this.listeners.push(listener)
//     return () => this.listeners = this.listeners.filter( _listener => _listener !== listener)
//   },
//   broadcast: function(message) {
//     this.listeners.forEach(listener => listener(message))
//   }
// }

//  const unsubscribe1 = EE.listen((message)=> {
//    console.log(`listener 1 ${message}`)
//  });
//  const unsubscribe2 = EE.listen((message)=> {
//    console.log(`listener 2 ${message}`)
//  });
//  EE.broadcast('how ya doin?');
//  EE.broadcast('still listening?');
//  unsubscribe1();
//  EE.broadcast('how bout now?');
//  unsubscribe2();
//  EE.broadcast('anyone out there?');
// /*
// listener 1 how ya doin?l
// istener 2 how ya doin?
// listener 1 still listening?
// listener 2 still listening?
// listener 2 how bout now?
// */

//  write SlackChannel

// function SlackChannel (channel) {
//   console.log(`Welcome to ${channel} channel`)
//   this.listeners = []
//   this.listen = function (cb) {
//     this.listeners.push(cb)
//   }
//   this.broadcast = function (message) {
//     this.listeners.forEach( _listener => _listener(message))
//   }
//   this.broadcastLoud = function (message) {
//     this.listeners.forEach( _listener => _listener(message.toUpperCase()))
//   }
// }

//  const slackChannel = new SlackChannel('FSA');

//  slackChannel.listen((message)=> {
//    console.log(`Message: ${message}`);
//  });

//  slackChannel.broadcast('Here is a regular message');
//  slackChannel.broadcastLoud('loud message');
// /*
// Message: Welcome to FSA channel
// Message: Here is a regular message
// Message: LOUD MESSAGE
// */

//  write the Slack class/constructor

// class xSlack {
//   constructor(input) {
//     this.workspace = input.workspace
//     this.channels = {}
//   }
//   sub(channel, fn) {
//     this.channels[channel] = fn 
//   }
//   pub(channel, message) {
//     this.channels[channel](`${this.workspace} - ${channel} - ${message}`)
//   }
// }
//  const fsa = new Slack({ workspace: 'FSA'});
//  const google = new Slack({ workspace: 'Google'});

//  google.sub('#jokes', (message)=> console.log(message));

//  google.pub('#jokes', 'What do you call a grandfather clock? An old timer!')

//  fsa.sub('2001-FLEX', (message)=> {
//    console.log(message)
//  });

//  fsa.sub('#general', (message)=> {
//    console.log(message)
//  });

//  fsa.pub('2001-FLEX', 'stretch is open');
//  fsa.pub('#general', 'hello there!');
//  fsa.pub('#general', 'hello there again!!');

// /*
// Google - #jokes - What do you call a grandfather clock? An old timer!
// FSA - 2001-FLEX - stretch is open
// FSA - #general - hello there!
// FSA - #general - hello there again!!
// */

//  Fix the sub method so that a listener can unsubscribe
// class Slack{
//   constructor({ workspace }){
//     this.workspace = workspace;
//     this.listeners = {};
//   }
//   getChannel(type){
//     this.listeners[type] = this.listeners[type] || [];
//     return this.listeners[type];
//   }
//   sub(type, fn){
//     this.getChannel(type).push(fn);
//     return () => this.listeners[type] = null
//   }
//   pub(type, msg){
//     this.getChannel(type).forEach( listener => listener(`${this.workspace } - ${type} - ${msg}`))
//   }
// }

//  const fsa = new Slack({ workspace: 'FSA'});
//  const google = new Slack({ workspace: 'Google'});

//  google.sub('#jokes', (message)=> console.log(message));

//  google.pub('#jokes', 'What do you call a grandfather clock? An old timer!')

//  fsa.sub('2001-FLEX', (message)=> {
//    console.log(message)
//  });

//  const unsubscribe = fsa.sub('#general', (message)=> {
//    console.log(message)
//  });

//  fsa.pub('2001-FLEX', 'stretch is open');
//  fsa.pub('#general', 'hello there!');
//  unsubscribe();
//  fsa.pub('#general', 'hello there again!!');

// /*
// Google - #jokes - What do you call a grandfather clock? An old timer!
// FSA - 2001-FLEX - stretch is open
// FSA - #general - hello there!
// */

//  write StateHolder
//  class StateHolder {
//  constructor(init) {
//    this.state = init
//  }
//  sub(fn) {
//    fn(this.state)
//  }
//  increase(num) {
//    this.state += num
//  }
//  getState(){
//    return this.state
//  }

//  }


//  const stateHolder = new StateHolder(2);

//  stateHolder.sub((state)=> {
//    console.log(state);
//  })
//  stateHolder.increase(7);
//  stateHolder.increase(2);

//  console.log(stateHolder.getState());
// /*
// 9
// 11
// 11
// */

//  add the decrease method to StateHolder
//  class StateHolder{
//    constructor(start){
//      this.state = start;
//      this.listeners = [];
//    }
//    getState(){
//      return this.state;
//    }
//    sub(listener){
//      this.listeners.push(listener);
//    }
//    increase(value){
//      this.state += value; 
//      this.listeners.forEach( listener => listener(this.state));
//    }
//    decrease(value) {
//      this.state -= value
//      this.listeners.forEach( listener => listener(this.state))
//    }
//  }
//  const stateHolder = new StateHolder(2);

//  stateHolder.sub((state)=> {
//    console.log(state);
//  })
//  stateHolder.increase(7);
//  stateHolder.decrease(3);
//  stateHolder.decrease(6);
//  stateHolder.increase(2);

//  console.log(stateHolder.getState());
// /*
// 9
// 6
// 0
// 2
// 2
// */

// class StateHolder{
//   constructor(start){
//     this.state = start;
//     this.listeners = [];
//   }
//   getState(){
//     return this.state;
//   }
//   sub(listener){
//     this.listeners.push(listener);
//   }
//   increase(value){
//     this.state += value; 
//     this.broadcast()
//   }
//   decrease(value){
//     this.state -= value
//     this.broadcast()
//   }
//   broadcast() {
//     this.listeners.forEach( listener => listener(this.state));
//   }
// }
// const stateHolder = new StateHolder(2);

// stateHolder.sub((state)=> {
//   console.log(state);
// })
// stateHolder.increase(7);
// stateHolder.decrease(3);
// stateHolder.decrease(6);
// stateHolder.increase(2);

// console.log(stateHolder.getState());
/*
9
6
0
2
2
*/

// allow a subscriber to unsubscribe
class StateHolder{
  constructor(start){
    this.state = start;
    this.listeners = [];
  }
  getState(){
    return this.state;
  }
  sub(listener){
    this.listeners.push(listener);
    return () => {
      this.listeners.filter( _listener => _listener !== listener )
    }
  }
  broadcast(){
    this.listeners.forEach( listener => listener(this.state));
  }
  increase(value){
    this.state += value;
    this.broadcast();
  }
  decrease(value){
    this.state -= value;
    this.broadcast();
  }
}
// const stateHolder = new StateHolder(2);

// const unsub = stateHolder.sub((state)=> {
//   console.log(state);
// })
// stateHolder.increase(7);
// stateHolder.decrease(3);
// stateHolder.decrease(6);
// unsub();
// stateHolder.increase(2);


/*
9
6
0
*/

// write the Chat contructor

function Chat () {
  this.listeners = {}
  this.join = function (name, fn) {
    this.listeners[name] = fn
    Object.keys(this.listeners).forEach( key => {
      if (name !== key) {
        this.listeners[key](`${name} has joined the chat!`)
      }
    })
    return {
        name,
        talk: (message) => {
          Object.keys(this.listeners).forEach( key => {
            if (name !== key) {
              this.listeners[key](`${name} says ${message}`)
            }
          })
        }
      }
    }
  }


const chat = new Chat();
const prof = chat.join('prof', (message)=> {
  console.log(`TO PROF: ${message}`);
});

const lucy = chat.join('lucy', (message)=> {
  console.log(`TO LUCY: ${message}`);
});

const curly = chat.join('curly', (message)=> {
  console.log(`TO CURLY: ${message}`);
});

prof.talk('hi');
lucy.talk('hello');
curly.talk('whats up!');

/*
TO PROF: lucy has joined chat!
TO PROF: curly has joined chat!
TO LUCY: curly has joined chat!
TO LUCY: prof says hi
TO CURLY: prof says hi
TO PROF: lucy says hello
TO CURLY: lucy says hello
TO PROF: curly says whats up!
TO LUCY: curly says whats up!
*/
