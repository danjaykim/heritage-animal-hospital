export const navLinks = [
    { title: 'Home', path: '/' },
    {
        title: 'About',
        path: '/about',
        hasDropdown: true,
        dropdownLinks: [
            { title: 'Our Team', path: '/about#our-team' },
            { title: 'Our Mission', path: '/about#our-mission' },
        ],
    },
    {
        title: 'Services',
        path: '/services',
        hasDropdown: true,
        dropdownLinks: [
            { title: 'Small Animal', path: '/services#small-animal' },
            {
                title: 'Equine / Live Stock',
                path: '/services#equine-livestock',
            },
        ],
    },
    {
        title: 'Resources',
        path: '/resources',
        hasDropdown: true,
        dropdownLinks: [
            {
                title: 'Appointments',
                path: '/resources/appointment',
            },
            { title: 'FAQ', path: '/resources/faq' },
        ],
    },
    { title: 'Contact', path: '/' },
]
