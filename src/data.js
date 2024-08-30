import successIcon from './icons/circle-check.svg?raw'
import gitHubIcon from './icons/github.svg?raw'
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
            { name: 'Switch theme', value: 'theme', icon: moonIcon }
        ]
    },
    {
        title: 'Settings',
        items: [
            { name: 'Profile', href: '#' },
            { name: 'Preferences', href: '#' },
            { name: 'Sign out', value: 'sign-out' }
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
