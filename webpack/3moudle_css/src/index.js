import ns from './ns.jpg'
import indexscss from './index.scss'


let imgs = new Image()
imgs.src = ns
imgs.classList.add(indexscss.imgs)
let root = document.getElementById('root')
root.append(imgs)

import createImg from './createImg'

createImg()

