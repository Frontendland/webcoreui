import React, { type FC } from 'react'
import { classNames } from 'webcoreui'
import {
    Accordion,
    Alert,
    AspectRatio,
    Avatar,
    Badge,
    Banner,
    Breadcrumb,
    Button,
    Card,
    Carousel,
    Checkbox,
    Collapsible,
    ConditionalWrapper,
    DataTable,
    Footer,
    Group,
    Icon,
    Input,
    Kbd,
    List,
    Masonry,
    Menu,
    Modal,
    Pagination,
    Popover,
    Progress,
    Radio,
    Rating,
    Ribbon,
    Select,
    Sheet,
    Sidebar,
    Skeleton,
    Slider,
    Spinner,
    Spoiler,
    Stepper,
    Switch,
    Table,
    Textarea,
    Timeline,
    TimelineItem,
    Toast
} from 'webcoreui/react'

import type { ComponentMapProps } from './componentMap'

import {
    BlogCard,
    ErrorPage,
    FAQ,
    GridWithIcons,
    Hero,
    IconList,
    SettingCard,
    SignUp,
    SocialProof,
    Tiles,
    User
} from '@blocks/react'

const blockMap: Record<string, FC<any>> = {
    BlogCard,
    ErrorPage,
    FAQ,
    GridWithIcons,
    Hero,
    IconList,
    SettingCard,
    SignUp,
    SocialProof,
    Tiles,
    User
}

const map: Record<string, FC<any>> = {
    Accordion,
    Alert,
    AspectRatio,
    Avatar,
    Badge,
    Banner,
    Breadcrumb,
    Button,
    Card,
    Carousel,
    Checkbox,
    Collapsible,
    ConditionalWrapper,
    DataTable,
    Footer,
    Group,
    Icon,
    Input,
    Kbd,
    List,
    Masonry,
    Menu,
    Modal,
    Pagination,
    Popover,
    Progress,
    Radio,
    Rating,
    Ribbon,
    Select,
    Sheet,
    Sidebar,
    Skeleton,
    Slider,
    Spinner,
    Spoiler,
    Stepper,
    Switch,
    Table,
    Textarea,
    Timeline,
    TimelineItem,
    Toast,
    ...blockMap
}

const ComponentMap = ({
    element = 'div',
    gap = 'default',
    components
}: ComponentMapProps) => {
    const Element = element as keyof JSX.IntrinsicElements

    return (
        <Element className={classNames(['flex column', gap])}>
            {components?.map((component, index) => {
                const Component = map[component.type]
                const ChildComponent = map[component.data?.children?.type]

                if (component.type === 'HTML') {
                    return <div dangerouslySetInnerHTML={{ __html: component.data?.children }} key={index} />
                }

                if (typeof Component === 'undefined') {
                    return (
                        <div key={index}>
                            Component <code>{component.type}</code> not found at index {index}.
                        </div>
                    )
                }

                return (
                    <Component {...component.data} key={index}>
                        {ChildComponent && (
                            <ChildComponent {...component.data?.children?.data} />
                        )}
                        {typeof component.data?.children === 'string' && (
                            <div dangerouslySetInnerHTML={{ __html: component.data?.children }} />
                        )}
                    </Component>
                )
            })}
        </Element>
    )
}

export default ComponentMap
