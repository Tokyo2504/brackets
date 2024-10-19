module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const bracketsMap = new Map(bracketsConfig);

	for (let char of str) {
		if (bracketsMap.has(char)) {
			if (stack.length > 0 && stack[stack.length - 1] === char && bracketsMap.get(char) === char) {
				stack.pop();
			} else {
				stack.push(char);
			}
		} else {
			if (stack.length === 0 || bracketsMap.get(stack.pop()) !== char) {
				return false;
			}
		}
	}

	return stack.length === 0;
};
