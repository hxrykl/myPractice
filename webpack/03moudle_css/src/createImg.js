import ns from './ns.jpg'

function createImg () {
	let imgs = new Image()
	imgs.src = ns
	let root = document.getElementById('root')
	root.append(imgs)
}

export default createImg
