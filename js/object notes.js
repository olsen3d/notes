/* eslint-disable */
//objects notes

//lastFridayNight
sumTransactions = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]['amount']
    }
    return total
  }
  
  let transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];
  
  sumTransactions(transactions) // => 10512
  
  
  
  // Compare Objects
  
  compareObjects = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
      for (let key in obj2) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }
  
  compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
  
  
  // Leet Translator
  
  let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
  
  leetTranslator = (str) => {
    let leetCodex = {}
    let leetStr = ''
    
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      leetCodex[letter] = leetChars[i]
    }
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        leetStr += (leetCodex[char])
    }
      return leetStr
  }
  
  leetTranslator('Fullstack')    // => 'ph|_|115+@(|<'
  
  // Frequency Analysis
  
  const frequencyAnalysis = (letters) => {
    let freqObj = {}
    for (let i = 0; i < letters.length; i++){
      let char = letters[i]
      if (char in freqObj) {
        freqObj[char] += 1
      }else {
        freqObj[char] = 1
      }
    }
  return freqObj
  }
  
  frequencyAnalysis('abccccca'); // => {a: 2, b: 1, c: 1}
  
  
  // Say My Name
  // Define an object, me, that has a name property and a getGreeting method. getGreeting should return a greeting.
  
  me = {
    name: 'mike',
    getGreeting: function () {
      return `Hi, my name is ${me.name}.`
    },
  }
  
  console.log(me.name); // 'Kat'
  me.getGreeting(); // => 'Hi, my name is Kat.'
  
  // Say Your Name
  // Create a new object, me2. Expand the myGreeting method from me so it accepts another object with a name property. The returned greeting should now greet the other object by name.
  
  you = {
    name: 'Alyssa',
    getGreeting: function () {
      return `Hi ${you.name}, my name is ${me2.name}.`
    },
  }
  
  me2 = {
    name: 'Tarana',
    getGreeting: function (arg) {
      return `Hi ${arg.name}, my name is ${me2.name}.`
    },
  }
  
  console.log(me2.name); // 'Tarana'
  console.log(you.name); // 'Alyssa'
  me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
  
  