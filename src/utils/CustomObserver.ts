export function customObserver(className: string, elements: NodeListOf<Element>, threshold = 0.3) {
    const observer = new IntersectionObserver(entries => {
        if (entries.some((entry) => entry.isIntersecting)) {
            entries[0].target.classList.add(className)
        }
    }, {
        threshold
    })

    Array.from(elements).forEach(element => {
        observer.observe(element)
    })

    return observer
}

export function disposeObserver(observers: Array<IntersectionObserver>) {
    observers.map(observer => observer.disconnect())
}