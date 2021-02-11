/* eslint-disable no-unused-vars */
//debounce

function debouce (fn, time) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, time)
  }
}

