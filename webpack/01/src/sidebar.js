class Sidebar {
	constructor () {
		var dom = document.getElementById('root');
		let sidebar = document.createElement('div');
		sidebar.innerText = 'sidebar';
		dom.append(sidebar);
	}
}
module.exports = Sidebar;