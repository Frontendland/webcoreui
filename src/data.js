import successIcon from './icons/circle-check.svg?raw'
import componentsIcon from './icons/components.svg?raw'
import fileIcon from './icons/file.svg?raw'
import gitHubIcon from './icons/github.svg?raw'
import homeIcon from './icons/home.svg?raw'
import infoIcon from './icons/info.svg?raw'
import moonIcon from './icons/moon.svg?raw'

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
    { name: 'Home', url: '/' },
    { name: 'Docs', url: '/docs' }
]

export const menuLogo = {
    url: '/img/logo.png',
    width: 25,
    height: 25
}

export const themes = {
    '#252525': 'dark',
    '#DDD': 'light',
    '#415a77': 'midnight',
    '#d5bdaf': 'vintage',
    '#fCBA28': 'amber',
    '#9D2BD6': 'synthwave'
}

export const toggleThemes = {
    '#252525': 'dark',
    '#DDD': 'light'
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
