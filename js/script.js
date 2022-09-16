const navItems = document.querySelector('#nav__items');
const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');

const servicesSection = document.querySelector(".services__section");
const specialistsSection = document.querySelector(".specialists__section");
const testimonialsSection = document.querySelector(".testimonials__section")

openNav.addEventListener('click', () => {
    navItems.style.display = 'flex'
    openNav.style.display = 'none'
    closeNav.style.display = 'inline-block'
});

closeNav.addEventListener('click', () => {
    navItems.style.display = 'none'
    closeNav.style.display = 'none'
    openNav.style.display = 'inline-block'
})

/**
 * 
 * Services
 * 
 */
const services = [
    {
        title: 'Online Booking',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-book-content'></i>"  
    },
    {
        title: 'Qualified',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-trophy'></i>"  
    },
    {
        title: 'Private Support',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-support' ></i>"  
    },
    {
        title: 'Well Cared',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-donate-heart' ></i>"  
    },
    {
        title: 'Need Emergency',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-first-aid' ></i>"  
    },
    {
        title: '24 Hour service',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon: "<i class='bx bx-infinite' ></i>"  
    },
]

var templates = () => {
    const template = services.map((service, index) => (
        `
            <article>
                ${service.icon}
                <div>
                    <h4>${service.title}</h4>
                    <small>${service.content}</small>
                </div>
            </article>
        `
    ))
    return template.join('')
}

servicesSection.innerHTML = templates();

/**
 * 
 * Specialists
 * 
 */

const specialists = [
    {
        doctor: 'Dr. Kwadjo Nkansa',
        specialist: 'Surgery Specialist',
        img: "./assets/specialist1.jpg"  
    },
    {
        doctor: 'Dr. Fella Makafui',
        specialist: 'Anaesthetic Specialist',
        img: "./assets/specialist2.jpg"  
    },
    {
        doctor: 'Dr. Liza Apedo',
        specialist: 'Orthopedic Specialist',
        img: "./assets/specialist3.jpg"  
    },
    {
        doctor: 'Dr. Abigail Brown',
        specialist: 'Cardiology Specialist',
        img: "./assets/specialist4.jpg"  
    },
]

var templates = () => {
    const template = specialists.map((specialist, index) => (
        `
            <article>
                <div class="specialists__section-image">
                    <img src="${specialist.img}">
                </div>
                <div class="specialists__section-social-media">
                    <i class='bx bxl-linkedin' ></i>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-facebook' ></i>
                    <i class='bx bxl-instagram' ></i>
                </div>
                <div class="specialists__section-contact">
                    <a href='https://api.whatsapp.com/send?phone=+213' target='_blank'>
                        <i class='bx bxl-whatsapp' ></i>
                    </a>
                </div>
                <div class="specialists__section-content">
                    <h3>${specialist.doctor}</h3>
                    <small>${specialist.specialist}</small>
                </div>
            </article>
        `
    ))
    return template.join('')
}

specialistsSection.innerHTML = templates();

const testimonials = [
    {
        patient: 'avatar1',
        img: "./assets/avatar1.jpg"  
    },
    {
        patient: 'avatar2',
        img: "./assets/avatar2.jpg"  
    },
    {
        patient: 'avatar3',
        img: "./assets/avatar3.jpg"  
    },
    {
        patient: 'avatar4',
        img: "./assets/avatar4.jpg"  
    },
    {
        patient: 'avatar5',
        img: "./assets/avatar5.jpg"  
    },
    {
        patient: 'avatar6',
        img: "./assets/avatar6.jpg"  
    },
    {
        patient: 'avatar7',
        img: "./assets/avatar7.jpg"  
    },
]

var templates = () => {
    const template = testimonials.map((testimonial, index) => (
        `
            <article>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum reiciendis vero nulla deleniti pariatur aut, ex cum rem asperiores.
                </p>
                <div>
                    <img src="${testimonial.img}" width="100px" height="100px">
                    <div>
                        <h4>${testimonial.patient}</h4>
                        <small>Patient</small>
                    </div>
                </div>
            </article>
        `
    ))
    return template.join('')
}

testimonialsSection.innerHTML = templates();