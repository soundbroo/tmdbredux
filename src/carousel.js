export const nextSimilar1 = (e) => {
    e.preventDefault()
    const first = this.carousel1.current.firstChild.cloneNode(true)
    this.carousel1.current.appendChild(first)
    this.carousel1.current.removeChild(this.carousel1.current.firstChild)
}

export const prevSimilar1 = (e) => {
    e.preventDefault()
    const last = this.carousel1.current.lastChild.cloneNode(true)
    this.carousel1.current.insertBefore(last, this.carousel1.current.firstChild)
    this.carousel1.current.removeChild(this.carousel1.current.lastChild)
}

export const nextSimilar2 = (e) => {
    e.preventDefault()
    const first = this.carousel2.current.firstChild.cloneNode(true)
    this.carousel2.current.appendChild(first)
    this.carousel2.current.removeChild(this.carousel2.current.firstChild)
}

export const prevSimilar2 = (e) => {
    e.preventDefault()
    const last = this.carousel2.current.lastChild.cloneNode(true)
    this.carousel2.current.insertBefore(last, this.carousel2.current.firstChild)
    this.carousel2.current.removeChild(this.carousel2.current.lastChild)
}

export const nextSimilar3 = (e) => {
    e.preventDefault()
    const first = this.carousel3.current.firstChild.cloneNode(true)
    this.carousel3.current.appendChild(first)
    this.carousel3.current.removeChild(this.carousel3.current.firstChild)
}

export const prevSimilar3 = (e) => {
    e.preventDefault()
    const last = this.carousel3.current.lastChild.cloneNode(true)
    this.carousel3.current.insertBefore(last, this.carousel3.current.firstChild)
    this.carousel3.current.removeChild(this.carousel3.current.lastChild)
}