function task3(value) {
	let newValue = value.split("");
	for (let i = 0; i < newValue.length; i++) {
		if (!isNaN(newValue[i])) {
			console.log(newValue[i]);
		}
	}
}

task3("9.86-A5.321");
