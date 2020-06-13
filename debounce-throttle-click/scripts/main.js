const debounce = (fn, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(...args)
		}, delay)
	};
};

const throttle = (fn, delay) => {
	let last = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - last < delay) return;
		last = now;
		return fn(...args);
	};
};

document
	.getElementById("debounce")
	.addEventListener("click", debounce(event => {
		console.log("debounce")
	}, 100));

document
	.getElementById("throttle")
	.addEventListener("click", throttle(event => {
		console.log("throttle");
	}, 100))