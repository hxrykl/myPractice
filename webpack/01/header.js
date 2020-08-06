class Header  {
	constructor () {
		var dom = document.getElementById('root');
		let hearder = document.createElement('div');
		hearder.innerText = 'hearder';
		dom.append(hearder);
	}
}
export default Header;