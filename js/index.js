const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

        }
        else {

        }
    })
})

const elements = document.querySelectorAll('.element');

elements.forEach(el => observer.observe(el))