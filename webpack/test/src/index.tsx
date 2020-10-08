import * as _ from 'lodash';
class Greeter {
	greeting: string;//定义了String的类型后，只能赋值String类型
	constructor(message: string) {
		this.greeting = message;
	}
	greet () {
		return _.join(["hello", '', this.greeting], '');
	 	// return "hello," + this.greeting;
	}
}

let greeter = new Greeter("world");

alert(greeter.greet())