var myTestFramework = {
	run: function(tests) {
		var numbOfFailures = 0;
		var testPassed;
		for (x in tests) {
			this.info['Number of tests']++;
			testPassed = tests[x];
			testDescription = x;
			try {
				testPassed.apply(myTestFramework);
				this.info['Number of successess']++;
				console.log('%c' + testDescription, 'color: green;');
			} catch(e) {
				numbOfFailures++;
				this.info['Number of failures']++;
				console.groupCollapsed('%c' + testDescription, 'color: red;');
				console.error(e.stack);
				console.groupEnd();
			}
		}
		setTimeout(function() {
			numbOfFailures === 0 ? document.bgColor = 'green' : document.bgColor = 'red';
			console.log("%cTests Resume Information:", "color: #BADA55; font-style: italic; font-size: 20px;");
			console.table(myTestFramework.info);
		}, 0);
	},
	fail: function() {
		throw new Error('Forced Failed by Fail(); Method');
	},
	equality: function(a, b) {
		if (a !== b) {
			throw new Error('Equality Test Has Failed: ' + a + ' !== ' + b);
		}
	},
	info: {
		'Number of failures': 0,
		'Number of successess': 0,
		'Number of tests': 0
	}
};
var tests = myTestFramework.run.bind(myTestFramework);
	fail  = myTestFramework.fail.bind(myTestFramework);
	eq    = myTestFramework.equality.bind(myTestFramework);