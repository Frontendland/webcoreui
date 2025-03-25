/* eslint-disable max-len */
/* eslint-disable max-lines */
import type { ButtonProps } from '@components/Button/button'

import Alert from '@components/Alert/Alert.astro'
import Box from '@static/Box.astro'
import SvelteAlert from '@components/Alert/Alert.svelte'
import SvelteBox from '@static/Box.svelte'
import ReactAlert from '@components/Alert/Alert.tsx'
import ReactBox from '@static/Box.tsx'

import logo from './assets/img/logo.svg?raw'
import alertIcon from './icons/alert.svg?raw'
import successIcon from './icons/circle-check.svg?raw'
import copyIcon from './icons/copy.svg?raw'
import gitHubIcon from './icons/github.svg?raw'
import homeIcon from './icons/home.svg?raw'
import infoIcon from './icons/info.svg?raw'
import moonIcon from './icons/moon.svg?raw'
import searchIcon from './icons/search.svg?raw'
import astroIcon from '@blocks/Icon/icons/astro.svg?raw'
import componentsIcon from '@blocks/Icon/icons/components.svg?raw'
import discordIcon from '@blocks/Icon/icons/discord.svg?raw'
import fileIcon from '@blocks/Icon/icons/file.svg?raw'
import rocketIcon from '@blocks/Icon/icons/rocket.svg?raw'
import terminalIcon from '@blocks/Icon/icons/terminal.svg?raw'

import type { TilesProps } from '@blocks/Tiles/tiles'
import type { PaginationProps } from 'webcoreui/astro'

export const accordionItems = [{
    title: 'Do you offer support?',
    content: 'We provide 30 days of support.'
}, {
    title: 'Can I request changes?',
    content: 'Yes!'
}, {
    title: 'Are there any refunds?',
    content: 'Hopefully.'
}]

export const avatarGroup = [
    '/img/avatar0.png',
    '/img/avatar1.png',
    '/img/avatar2.png',
    '/img/avatar3.png',
    '/img/avatar4.png'
]

export const avatarGroupAlt1 = [
    'avatar0',
    'avatar1',
    'avatar2',
    'avatar3',
    'avatar4'
]

export const avatarGroupAlt2 = [
    'Marcus',
    'Giuseppe',
    'Emily',
    'Frank',
    'Jonathan'
]

export const tabItemsExample = [{
    label: `${infoIcon} Intro`,
    value: 'intro',
    active: true
}, {
    label: `${gitHubIcon} Setup`,
    value: 'setup'
}]

export const tabItems = [{
    label: 'Introduction',
    value: 'intro',
    active: true
}, {
    label: 'Setup',
    value: 'setup'
}, {
    label: 'Conclusion',
    value: 'conclusion'
}]

export const tabsWithIcons = [
    { ...tabItems[0], label: `${infoIcon} Introduction` },
    { ...tabItems[1], label: `${gitHubIcon} Setup` },
    { ...tabItems[2], label: `${successIcon} Conclusion`, disabled: true }
]
export const inactiveTabs = tabItems.map(item => ({ ...item, active: false }))
export const disabledTabs = [
    { ...tabItems[0] },
    { ...tabItems[1] },
    { ...tabItems[2], disabled: true }
]

export const overflowTabs = Array(10).fill({
    label: '',
    value: 0
}).map((_, index) => ({
    label: `Tab ${index + 1}`,
    value: `tab-${index + 1}`
}))

export const menu = [
    { name: 'Home', href: '/' },
    { name: 'Docs', href: '/docs' }
]

export const menuLogo = {
    url: '/img/logo.png',
    width: 25,
    height: 25
}

export const themes = {
    '#252525': 'dark',
    '#FFF': 'light',
    '#415a77': 'midnight',
    '#d5bdaf': 'vintage',
    '#fCBA28': 'amber',
    '#9D2BD6': 'synthwave',
    '#9A1F40': 'velvet'
}

export const toggleThemes = {
    '#252525': 'dark',
    '#FFF': 'light'
}

export const listPreview = [{
    items: [
        { name: 'Switch theme', value: 'theme', icon: moonIcon }
    ]
}]

export const list = [{
    items: [
        { name: 'Create issue', value: 'new' },
        { name: 'Knowledge base', href: '#' },
        { name: 'Switch theme', value: 'theme' }
    ]
}]

export const listWithIcons = [{
    items: [
        { name: 'Create issue', value: 'new', icon: gitHubIcon },
        { name: 'Knowledge base', href: '#', icon: infoIcon },
        { name: 'Switch theme', value: 'theme', icon: moonIcon }
    ]
}]

export const listWithSubText = [{
    items: [
        {
            name: 'Create issue',
            value: 'new',
            icon: gitHubIcon,
            subText: '(GitHub)'
        },
        {
            name: 'Knowledge base',
            href: '#',
            icon: infoIcon,
            subText: 'Learn more'
        },
        { name: 'Switch theme', value: 'theme', icon: moonIcon }
    ]
}]

export const listWithGroups = [
    {
        title: 'Suggestions',
        items: [
            {
                name: 'Create issue',
                value: 'new',
                icon: gitHubIcon,
                subText: '(GitHub)'
            },
            {
                name: 'Knowledge base',
                href: '#',
                icon: infoIcon,
                subText: 'Learn more'
            },
            { name: 'Switch theme', href: '#', icon: moonIcon }
        ]
    },
    {
        title: 'Settings',
        items: [
            { name: 'Profile', href: '#' },
            { name: 'Preferences', href: '#', subText: 'Update styles' },
            { name: 'Sign out', value: 'sign-out', subText: 'Save your work' }
        ]
    }
]

export const listWithStates = [
    {
        title: listWithGroups[0].title,
        items: [
            {
                ...listWithGroups[0].items[0],
                subText: 'Issue creation disabled',
                disabled: true
            },
            {
                ...listWithGroups[0].items[1],
                selected: true
            },
            listWithGroups[0].items[2]
        ]
    },
    listWithGroups[1]
]

export const pages = [
    { label: 1 },
    { label: 2, active: true },
    { label: 3 }
]

export const manyPages = [
    { label: 1 },
    { label: 2, active: true },
    { label: 3 },
    { label: 4 },
    { label: 5 },
    { label: 6 }
]

export const pagesWithCustomLabels = [
    { label: 'Latest' },
    { label: 'Trending', active: true }
]

export const headings = [
    { name: 'User ID', toggleable: true, sortable: true, filterable: true },
    { name: 'Score', toggleable: true, sortable: true, filterable: true },
    'Status'
]

export const toggleableHeadings = [
    { name: 'User ID', toggleable: true },
    { name: 'Score', toggleable: true },
    'Status'
]

export const filterableHeadings = [
    { name: 'User ID', toggleable: true, filterable: true },
    { name: 'Score', toggleable: true, filterable: true },
    'Status'
]

export const dataTableEntries = [
    ['#1', '47', 'suspended'],
    ['#2', '195', 'inactive'],
    ['#3', '177', 'inactive'],
    ['#4', '4', 'inactive'],
    ['#5', '145', 'active'],
    ['#6', '299', 'suspended'],
    ['#7', '150', 'active'],
    ['#8', '23', 'active'],
    ['#9', '92', 'active'],
    ['#10', '68', 'inactive'],
    ['#11', '121', 'inactive'],
    ['#12', '160', 'inactive']
]

export const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' }
]

export const breadcrumbsWithIcon = [
    { icon: homeIcon, href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' }
]

export const breadcrumbsWithIcons = [
    { icon: homeIcon, label: 'Home', href: '/' },
    { icon: fileIcon, label: 'Docs', href: '/docs' },
    { icon: componentsIcon, label: 'Components', href: '/docs/components' }
]

export const breadcrumbsWithIconsOnly = [
    { icon: homeIcon, href: '/' },
    { icon: fileIcon, href: '/docs' },
    { icon: componentsIcon, href: '/docs/components' }
]

export const itemGroup1 = [{
    items: [
        { name: 'Home', href: '#' },
        { name: 'Docs', href: '#' },
        { name: 'Component', href: '#' }
    ]
}]

export const itemGroup2 = [{
    items: [
        { name: 'CSS Config', href: '#' },
        { name: 'Styles', href: '#' },
        { name: 'Utilities', href: '#' }
    ]
}]

export const itemGroups = [
    { items: itemGroup1[0].items },
    { items: itemGroup2[0].items }
]

export const itemGroupsWithTitle = [
    {
        title: 'SITEMAP',
        items: itemGroup1[0].items
    },
    {
        title: 'THEMES',
        items: itemGroup2[0].items
    }
]

export const itemGroupsWithBadges = [
    {
        title: 'SITEMAP',
        items: [
            { name: 'Home', href: '#' },
            { name: 'Docs', href: '#', badge: 'updated', badgeTheme: 'info' as ButtonProps['theme'] },
            { name: 'Component', href: '#', badge: 'new components' }
        ]
    },
    {
        title: 'THEMES',
        items: itemGroup2[0].items
    }
]

export const itemGroupsWithIcons = [
    {
        title: 'SITEMAP',
        items: [
            { name: 'Home', href: '#', icon: gitHubIcon, target: '_blank' as any },
            { name: 'Docs', href: '#', badge: 'updated', badgeTheme: 'info' as ButtonProps['theme'], icon: fileIcon },
            { name: 'Component', href: '#', badge: 'new components', icon: componentsIcon, active: true }
        ]
    },
    {
        title: 'THEMES',
        items: itemGroup2[0].items
    }
]

export const masonryItems = [
    { component: Box, props: { height: 100 }, children: 1 },
    { component: Box, props: { height: 50 }, children: 2 },
    { component: Box, props: { height: 70 }, children: 3 },
    { component: Box, props: { height: 90 }, children: 4 },
    { component: Box, props: { height: 140 }, children: 5 },
    { component: Box, props: { height: 120 }, children: 6 }
]

export const masonryComponentItems = [
    { component: Alert, children: 1 },
    { component: Alert, props: { theme: 'info' }, children: 2 },
    { component: Alert, children: 3 },
    { component: Alert, props: { theme: 'success' }, children: 4 },
    { component: Alert, props: { height: 140 }, children: 5 },
    { component: Alert, props: { theme: 'warning' }, children: 6 }
]

export const svelteMasonryItems = masonryItems.map(item => ({
    ...item,
    component: SvelteBox
}))

export const svelteMasonryComponentItems = masonryComponentItems.map(item => ({
    ...item,
    component: SvelteAlert
}))

export const reactMasonryItems = masonryItems.map(item => ({
    ...item,
    component: ReactBox
}))

export const reactMasonryComponentItems = masonryComponentItems.map(item => ({
    ...item,
    component: ReactAlert
}))

export const stepper = [
    { title: 'Setup' },
    { title: 'Configure' },
    { title: 'Finish' }
]

export const stepperWithSubTitle = [
    { title: 'Setup', subTitle: 'Get ready' },
    { title: 'Configure', subTitle: 'Preferences' },
    { title: 'Finish', subTitle: 'Final steps' }
]

export const completedStepper = [
    { title: 'Setup', subTitle: 'Get ready', completed: true },
    { title: 'Configure', subTitle: 'Preferences' },
    { title: 'Finish', subTitle: 'Final steps' }
]

export const activeStepper = [
    { title: 'Setup', subTitle: 'Get ready', completed: true },
    { title: 'Configure', subTitle: 'Preferences', active: true },
    { title: 'Finish', subTitle: 'Final steps' }
]

export const stepperWithIcons = [
    { title: 'Setup', subTitle: 'Get ready', completed: true, icon: successIcon },
    { title: 'Configure', subTitle: 'Preferences', active: true, icon: gitHubIcon },
    { title: 'Finish', subTitle: 'Final steps' }
]

export const gridWithIconsItems = [{
    icon: componentsIcon,
    title: 'Grid with Icons',
    text: 'Use the <code>GridWithIcons</code> block to organize your list into a grid with icons to enhance clarity and visual appeal.'
}, {
    icon: alertIcon,
    title: 'Configurable',
    text: 'You can create as many items as necessary with icons and an optional title. You can also configure the number of columns.'
}, {
    icon: successIcon,
    title: 'Supports formatting',
    text: 'The <code>text</code> prop also supports formatting through <b>HTML</b> tags to help you customize the appearance of the element.'
}, {
    title: 'Graceful degradation',
    text: 'If the <code>items</code> prop is not defined, nothing will be rendered. Grid items can be rendered without icons or titles too.'
}, {
    text: 'This last item is created without an icon or title, meaning you can also use this block to create simple text in a grid layout.'
}]

export const bottomNavigationItems = [
    {
        icon: homeIcon,
        name: 'Home'
    },
    {
        icon: componentsIcon,
        name: 'Components'
    },
    {
        icon: gitHubIcon,
        name: 'GitHub'
    }
]

export const getProductPageTemplateData = (theme = 'success') => ({
    layout: {
        seo: {
            title: 'Product Page Template - Webcore',
            url: 'https://webcoreui.dev/',
            description: 'A customizable and easy to use template for products.',
            faviconUrl: '/logo.svg'
        },
        menu: {
            logo: {
                html: logo
            }
        },
        footer: {
            logo: {
                html: logo
            },
            columns: [
                {
                    title: 'Sitemap',
                    items: [
                        { href: '/', name: 'Home' }
                    ]
                }
            ],
            subText: `© ${new Date().getFullYear()} Webcore. All Rights Reserved.`
        }
    },
    images: Array
        .from({ length: 3 }, (_, i) => i + 1)
        .map(i => ({
            src: `/img/placeholder-hd${i}.png`,
            alt: 'img',
            width: 1200,
            height: 250
        })),
    carousel: {
        pagination: {
            type: 'dots' as PaginationProps['type']
        }
    },
    recommended: {
        items: Array
            .from({ length: 3 }, (_, i) => i + 5)
            .map(i => ({
                href: '#',
                img: {
                    src: `/img/placeholder${i}.png`,
                    alt: 'img',
                    width: 500,
                    height: 250
                },
                title: `Recommended Card #${i - 4}`,
                text: 'You can also pass <b>HTML</b> tags to your recommended cards.'
            }))
    },
    buttons: [
        { text: 'Get Started ->', theme: theme as ButtonProps['theme'] },
        { text: 'Demo', theme: 'secondary' as ButtonProps['theme'] }
    ],
    features: [
        'Easily configure your menu and footer',
        'Add carousel for preview images',
        'Define your main content the way you want',
        'Customize your call to actions',
        'List features',
        'Add recommendations'
    ].map(feature => ({
        icon: successIcon,
        color: `var(--w-color-${theme})`,
        text: feature
    }))
})

export const getPortfolioTemplateData = (theme = 'success') => ({
    layout: {
        seo: {
            title: 'Portfolio Template - Webcore',
            url: 'https://webcoreui.dev/',
            description: 'A customizable and easy to use template for portfolios.',
            faviconUrl: '/logo.svg'
        },
        menu: {
            logo: {
                html: logo
            },
            items: [
                { name: '<- Back to templates', href: '/templates' }
            ]
        },
        footer: {
            logo: {
                html: logo
            },
            columns: [
                {
                    title: 'Contacts',
                    items: [
                        { href: 'mailto:josh@example.com', name: 'john@example.com' },
                        { href: 'tel:+1 234 5678', name: '+1 234 5678' }
                    ]
                }
            ]
        }
    },
    hero: {
        heading: 'Hey, I\'m Josh 👋',
        subHeading: 'Senior React Developer based in Oregon',
        buttons: [
            { text: 'Call Me', theme: theme as ButtonProps['theme'] },
            { text: 'Send an Email', theme: 'outline' as ButtonProps['theme'] }
        ],
        badge: {
            rounded: true,
            theme: 'outline' as ButtonProps['theme'],
            text: '⭐ Top rated developer'
        },
        image: {
            src: '/img/placeholder-hd1.png',
            alt: 'Banner',
            width: 500,
            height: 300
        }
    },
    aboutMe: {
        title: 'More About Me',
        text: 'Description about the person, including previous work experiences, studies, and relevant projects. Anything that can establish credibility, experience, and expertise should be listed here to instill trustworthiness in the visitor. This field can also handle <code>HTML</code> tags for further formatting.',
        img: {
            src: '/img/avatar0-hd.png',
            alt: 'About me',
            width: 250,
            height: 250
        },
        services: [
            'List of services provided by the person',
            'Broken into two columns on larger screens',
            'Define a list of ratings',
            'Create CTAs between blocks',
            'Add your previous work',
            'Provide a list of services'
        ].map(feature => ({
            icon: successIcon,
            color: `var(--w-color-${theme})`,
            text: feature
        }))
    },
    ratings: [
        {
            score: 5,
            showText: true,
            text: 'Rated for result',
            feedback: '"He did an excellent job. The end result is what we wanted."'
        },
        {
            score: 5,
            showText: true,
            text: 'Rated for design',
            feedback: '"A thorough, reliable, precise professional who is demanding in his work! I can only recommend him!"'
        },
        {
            score: 5,
            showText: true,
            text: 'Rated for communication',
            feedback: '"Thank you for your work! It turned out very nice!"'
        }
    ],
    ratingCta: { text: 'More reviews', theme: 'secondary' as ButtonProps['theme'] },
    myWork: {
        title: 'My Most Recent Work',
        items: Array
            .from({ length: 3 }, (_, i) => i + 3)
            .map(i => ({
                href: '#',
                img: {
                    src: `/img/placeholder${i}.png`,
                    alt: 'img',
                    width: 500,
                    height: 250
                },
                title: `My Work #${i - 2}`,
                text: 'You can also pass <b>HTML</b> tags to your cards.'
            }))
    },
    servicesCta: { text: 'Call Me', theme: theme as ButtonProps['theme'] },
    services: {
        secondary: true,
        items: [
            {
                icon: componentsIcon,
                title: 'List of services',
                text: 'Use the <code>GridWithIcons</code> block to organize your list into a grid with icons to enhance clarity and visual appeal.'
            }, {
                icon: alertIcon,
                title: 'Configurable',
                text: 'You can create as many items as necessary with icons and an optional title. You can also configure the number of columns.'
            }, {
                icon: successIcon,
                title: 'Supports formatting',
                text: 'The <code>text</code> prop also supports formatting through <b>HTML</b> tags to help you customize the appearance of the element.'
            }
        ]
    }
})

export const getBlogTemplateData = (theme = 'success') => ({
    layout: {
        seo: {
            title: 'Blog Template - Webcore',
            url: 'https://webcoreui.dev/',
            description: 'A versatile and easy to use template for blogs.',
            faviconUrl: '/logo.svg'
        },
        menu: {
            logo: {
                html: logo
            },
            items: [
                { name: '<- Back to templates', href: '/templates' }
            ]
        },
        footer: {
            logo: {
                html: logo
            },
            columns: [
                {
                    title: 'Sitemap',
                    items: [
                        { name: 'Latest', href: '' },
                        { name: 'Contact', href: '' },
                        { name: 'RSS', href: '' }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        { name: 'LinkedIn', href: '' },
                        { name: 'Medium', href: '' },
                        { name: 'X', href: '' }
                    ]
                }
            ],
            subText: `© ${new Date().getFullYear()} Webcore. All Rights Reserved.`
        }
    },
    hero: {
        heading: 'Brand New Array Methods',
        subHeading: 'What\'s new in the latest version of JavaScript',
        buttons: [{ text: 'Read More' }],
        badge: {
            rounded: true,
            theme: theme as ButtonProps['theme'],
            text: 'in JavaScript'
        },
        image: {
            src: '/img/placeholder-hd1.png',
            alt: 'Banner',
            width: 500,
            height: 300
        }
    },
    tiles: {
        columns: 3 as TilesProps['columns'],
        items: [
            { icon: astroIcon, label: 'Roadmaps', href: '#' },
            { icon: copyIcon, label: 'Categories', href: '#' },
            { icon: gitHubIcon, label: 'Projects', href: '#' },
            { icon: rocketIcon, label: 'Product launches', href: '#' },
            { icon: terminalIcon, label: 'Playgrounds', href: '#' },
            { icon: discordIcon, label: 'Community', href: '#' }
        ]
    },
    posts: Array
        .from({ length: 6 }, (_, i) => i + 2)
        .map(i => ({
            href: '#',
            img: {
                src: `/img/placeholder${i}.png`,
                alt: 'img',
                width: 200,
                height: 150
            },
            title: `Latest Post #${i}`,
            text: `Jan 01, ${new Date().getFullYear()} • ${i} min read`
        })),
    recommended: Array
        .from({ length: 3 }, (_, i) => i + 9)
        .map(i => ({
            href: '#',
            img: {
                src: `/img/placeholder${i}.png`,
                alt: 'img',
                width: 200,
                height: 150
            },
            title: `Recommended Post #${i - 8}`,
            text: `Jan 01, ${new Date().getFullYear()} • ${i} min read<br />Add a short description to cards to improve engagement.`,
            secondary: true
        })),
    author: {
        img: {
            src: '/img/avatar1.png',
            alt: 'avatar',
            size: 50
        },
        name: 'Jake Brown',
        role: 'Astro developer',
        description: 'A short description about the author. Should be concise yet engaging, giving readers a quick insight into who you are and why they should trust your content. For example: <i>"Frontend developer passionate about building fast, accessible web experiences. Sharing insights on React, Astro, and web performance."</i>',
        secondary: true,
        socials: {
            links: [
                'https://linkedin.com',
                'https://medium.com',
                'https://twitter.com'
            ]
        }
    }
})

export const speedDialItems = [
    {
        icon: gitHubIcon,
        href: ''
    },
    {
        icon: copyIcon,
        href: ''
    },
    {
        icon: searchIcon,
        href: ''
    }
]

export const speedDialItemsWithTooltip = [
    {
        icon: gitHubIcon,
        tooltip: 'GitHub',
        href: ''
    },
    {
        icon: copyIcon,
        tooltip: 'Docs',
        href: ''
    },
    {
        icon: searchIcon,
        tooltip: 'Search',
        href: ''
    }
]

export const members = [
    {
        img: '/img/avatar2.png',
        name: 'Alice Johnson',
        role: 'Frontend Developer',
        description: 'Alice is our creative frontend developer with a passion for building user-friendly, responsive interfaces using React.'
    },
    {
        img: '/img/avatar1.png',
        name: 'Bob Smith',
        role: 'Backend Developer',
        description: 'Bob is our backend expert specializing in Node.js and database management, ensuring seamless data flow and efficient server-side operations.'
    },
    {
        img: '/img/avatar0.png',
        name: 'Charlie Davis',
        role: 'UI/UX Designer',
        description: 'Charlie brings intuitive design concepts to life with a focus on user experience and accessibility, always striving for clean and modern visuals.'
    },
    {
        img: '/img/avatar4.png',
        name: 'Daniel Lee',
        role: 'Project Manager',
        description: 'Daniel leads the team with excellent communication skills and organizational expertise, ensuring deadlines are met and projects are completed on time.'
    },
    {
        img: '/img/avatar3.png',
        name: 'Ethan Brown',
        role: 'QA Engineer',
        description: 'Ethan is our detail-oriented QA engineer who ensures every feature is tested thoroughly for quality and functionality before release.'
    },
    {
        img: '/img/avatar5.png',
        name: 'Fiona Green',
        role: 'DevOps Engineer',
        description: 'Fiona manages the deployment pipelines and cloud infrastructure, making sure our applications are scalable, secure, and run smoothly.'
    }
]
