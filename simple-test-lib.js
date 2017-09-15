var myTestFramework = {
	run: function(tests) {
		var numbOfFailures = 0;
		var testPassed;
		for (x in tests) {
			testPassed = tests[x];
			testDescription = x;
			try {
				testPassed.apply(myTestFramework);
				console.log('%c' + testDescription, 'color: green;');
			} catch(e) {
				numbOfFailures++;
				console.groupCollapsed('%c' + testDescription, 'color: red;');
				console.error(e.stack);
				console.groupEnd();
			}
		}
		setTimeout(function() {
			numbOfFailures === 0 ? document.bgColor = 'green' : document.bgColor = 'red';
		}, 0);
	},
	fail: function() {
		throw new Error('Forced Failed by Fail(); Method');
	},
	equality: function(a, b) {
		if (a !== b) {
			throw new Error('Equality Test Has Failed: ' + a + ' !== ' + b);
		}
	}
};
var tests = myTestFramework.run.bind(myTestFramework);
	fail  = myTestFramework.fail.bind(myTestFramework);
	eq    = myTestFramework.equality.bind(myTestFramework);