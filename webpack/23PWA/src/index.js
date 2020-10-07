console.log('hello, this is dell');



if ('serviceWorker' in navigator) {//判断浏览器是否支持serviceWorker，
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('./service-worker.js')//应用serviceWorker，
		.then(registration => {
			console.log('service-worker registed')
		})
		.catch(err => {
			console.log('service-worker registed error')
		})
	})
}