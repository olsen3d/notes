function pipe(funcs) {
	return function(arg) {
		console.log('arg is ', arg)
		let result = arg
		for (const func of funcs) {
			console.log('func is ', func.toString())
			console.log('func arg is ', func.args)
			result = func(result)
		}
		return result
	}
}

const times = (y) =>  (x) => x * y

pipe([times(2), times(3)])(2) //12
console.log(pipe)

