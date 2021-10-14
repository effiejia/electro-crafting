
const loadDemon1Images = (demon1Img) => {
    const demon1Images = Array.from({length: 12}, (el, i) => {
        return demon1Img.get( i * 96, 0, 96, 96)
    })

    return demon1Images 
}


const loadLucyImages = (lucyImg) => {

    const lucyImages = Array.from({length: 32}, (el, i) => {
        return lucyImg.get( i * 96, 0, 96, 96)
    })

    return lucyImages
}


