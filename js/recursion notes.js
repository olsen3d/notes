/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */

// recursion notes 1


function factorial (num) {
    if (num === 0 || num === 1) return 1
    let result = num * factorial(num - 1)
    return result
  }
  
  // factorial (6)
  
  
  
  
  const adder = (nums) => {
    if (nums.length === 0) return 0
    let result = nums.shift() + adder(nums)
    return result
  } 
  
  let numbers = [21, 45, 67, 18, 22]
  
  // console.log (adder(numbers))
  
  
  
  
  const backwardString = (str) => {
    if (str.length === 0) {
      return
    }
    console.log(str[str.length - 1])
    let newStr = backwardString(str.slice (0, -1))
    return 
  }
  
  //console.log (backwardString('fun'))
  
  
  
  const sumNums = (num) => {
    if (num <= 0) {
      return 0
    }
    let result = num + sumNums(num - 1)
    return result
  }
  
  // sumNums(3); // => 6 (3 + 2 + 1)
  
  
  
  const sumDigits = (number) => {
  let numStr = String(number)
  if (numStr.length === 0) return 0
  let sum = Number(numStr[0]) + Number(sumDigits(numStr.slice(1)))
  return sum
  }
  
  // sumDigits(1234) // => 10
  
  
  
  
  function reverse(arr) {
    reversed = []
    while (arr.length) reversed.push(arr.pop())
    while (reversed.length) arr.push(reversed.shift())
    return arr
  }
  
  // let myArray = [1, 2, 3, 4];
  // console.log (myArray)
  // reverse(myArray);
  // console.log(myArray) // [4, 3, 2, 1]
  
  
  
  
  
  const isPalindrome = (str) => {
  if (str.length <= 1) return true
  if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) return isPalindrome(str.slice(1, -1))
  else return false
  }
  
  
  //isPalindrome('Kayak'); // => true
  //isPalindrome('NEVERODDOREVEN'); // => true
  // isPalindrome('Tacocat'); // => true
  // isPalindrome('SELFLESS'); // => false





//recursion 2

// Array Sum

const arraySum = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      if (Array.isArray(element)) {
        sum += arraySum(element)
      } else {
        sum += element
      }
    }
    return sum
  }
  
  // arraySum([1, [2, 3, [4]]]) // => 10
  
  
  
  
  // All Systems Go
  
  let systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };
  
  
  
  const allSystemsGo = (allSystems) => {
    for (const key in allSystems) {
      let system = allSystems[key]
      if (typeof system === 'object'){
        let subSystem = allSystemsGo(system)
        if (!subSystem) return false
        }
      if (!system) return false
      
    }
    return true
  }
  
  // allSystemsGo(systems); // => false
  
  
  // The Truth Counts
  
  const theTruthCounts = (array) => {
    let truthCount = 0
    for (let i = 0; i < array.length; i++) {
      let element = array[i]
      if (Array.isArray(element)) {
        truthCount += theTruthCounts(element) 
      }else {
        if (element) truthCount += 1
      }
    }
    return truthCount
  }
  
  // theTruthCounts([0, [true, ['yes']]]); // => 2
  
  
  
  // Get Longest Name
  
  let family = {
    'Beverly Marquez': {
      'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
      }
    }
  };
  
  function getLongestName (family) {
    let longestName = ''
    for (let person in family) {
      if (person.length > longestName.length) {
        longestName = person
      }
  
      //important part = this checks if the person has decendents
      if (family[person]) {
        let childName = getLongestName(family[person])
        if (childName.length > longestName.length) {
          longestName = childName
        }
      }
    }
    return longestName
  }
  
  // getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
  
  
  // Search Party
  
  let world = {
    Fullstack: {
      '11th floor': 'Marge',
      '25th floor': 'Francis'
    },
    Subway: ['Jackie', 'Grumio']
  };
  
  function searchParty(name, world) {
    for (let place in world) {
      if (typeof world[place] === 'string') {
        let person = world[place];
        if (person === name) {
          return [place];
        }
      }
      else if (Array.isArray(world[place])) {
        let people = world[place];
        if (people.includes(name)) {
          return [place];
        }
      }
      else {
        let nextObject = world[place];
        let resultFromNextObject = searchParty(name, nextObject);
        if (resultFromNextObject) {
          return [place].concat(resultFromNextObject);
        }
      }
    }
    return null;
  }
  
  // searchParty('Francis', world); // => ['Fullstack', '25th floor']
  


function collectOddValues (arr) {
  let newArr = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}


// console.log (collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))





