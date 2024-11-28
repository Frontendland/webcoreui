<p>
    <a href="https://webcoreui.dev">
      <img
            alt="Webcore - Frontend components for Astro, Svelte, and React"
            src="https://raw.githubusercontent.com/Frontendland/webcoreui/main/public/img/banner.png"
        />
    </a>
</p>

<p align="center">
    <a href="https://github.com/Frontendland/webcoreui/releases">
        <img
            src="https://img.shields.io/npm/v/webcoreui.svg?label=Latest%20Release"
            alt="Latest Release"
        />
    </a>
    <a href="https://github.com/Frontendland/webcoreui/blob/main/LICENSE">
        <img
            src="https://img.shields.io/badge/license-MIT-blue"
            alt="License"
        />
    </a>
    <a href="https://github.com/Frontendland/webcoreui/actions">
        <img
            src="https://img.shields.io/github/actions/workflow/status/Frontendland/webcoreui/checks.yml"
            alt="Build"
        />
    </a>
</p>

> [!IMPORTANT]
> This library is still in early development. New changes can break existing functionality, and no functionality should be considered final at this stage. The library will be considered stable once it reaches v1.0.

---
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Documentation](#documentation)
- [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Using Components](#using-components)
- [Components](#components)

## Documentation

Full documentation available on [webcoreui.dev](https://webcoreui.dev).

## Getting Started

Webcore can be used as a standalone project, or it can be integrated into your existing Astro, Svelte, or React ecosystems. The easiest way to get started is to clone the repository and run `npm run dev` to start building your pages with the components available.

### Prerequisites

> [!NOTE]
> Before getting started, make sure you have a package manager installed, such as <a href="https://nodejs.org/en/" rel="noreferrer">Node</a>.

Webcore components use Sass for styling. To use the component library, you must have the following packages installed:

- [Sass](https://www.npmjs.com/package/sass) - `v1.80`
- [TypeScript](https://www.npmjs.com/package/typescript) - `v5.4`

Depending on your project setup, you'll also need the following packages:

- **For Astro projects**
    - [Astro](https://www.npmjs.com/package/astro) - `v4.16`
- **For Svelte projects**
    - [Svelte](https://www.npmjs.com/package/svelte) - `v4.2`
- **For React projects**
    - [React](https://www.npmjs.com/package/react) - `v18.3`
    - [React DOM](https://www.npmjs.com/package/react-dom) -`v18.3`

### Installation

Install Webcore as a dependency by running one of the following command:

```bash
# Using NPM
npm i webcoreui

# Using Yarn
yarn add webcoreui
```

### Setup

Create an empty [`webcore.config.scss`](https://webcoreui.dev/docs/css-configuration#webcoreconfigscss) file at the root of your project to setup CSS configurations. Setup default styles and fonts by calling the following in your global SCSS file:

```scss
@use 'webcoreui/styles' as *;
@include setup((
    // Define paths for your fonts
    fontRegular: '/fonts/Inter-Regular.woff2',
    fontBold: '/fonts/Inter-Bold.woff2'
));
```

> [!TIP]
> You can download the fonts Webcore uses from the [`public/fonts`](https://github.com/Frontendland/webcoreui/tree/main/public/fonts) directory.

The `Setup` mixin can also accept the following options:


| Property  | Default value | Purpose |
|-----------|---------------|---------|
| `includeResets` | `true` | Include reset styles. Set to `false` if you want to use your own CSS resets. |
| `includeUtilities` | `true` | Adds utility classes for CSS. Read more about the available utility classes [here](https://webcoreui.dev/docs/layout). |
| `includeTooltip` | `true` | Adds styles for using tooltips.
| `includeScrollbarStyles` | `true` | Adds styles for scrollbars.

Default component styles can be changed by overriding the following CSS variables:

```scss
html body {
    // Avatar component
    --w-avatar-border: var(--w-color-primary-70);

    // Banner component
    --w-banner-top: 0;

    // Checkbox component
    --w-checkbox-color: var(--w-color-primary);

    // Collapsible component
    --w-collapsible-initial-height: 0;
    --w-collapsible-max-height: 100%;

    // Masonry component
    --w-masonry-gap: 5px;

    // Progress component
    --w-progress-color: var(--w-color-primary);
    --w-progress-background: var(--w-color-primary-50);
    --w-progress-stripe-light: var(--w-color-primary);
    --w-progress-stripe-dark: var(--w-color-primary-10);

    // Radio component
    --w-radio-color: var(--w-color-primary);

    // Rating component
    --w-rating-color: var(--w-color-primary);
    --w-rating-empty-color: var(--w-color-primary);
    --w-rating-empty-background: var(--w-color-primary-70);
    --w-rating-size: 18px;

    // Ribbon component
    --w-ribbon-offset: 20px;
    --w-ribbon-folded-offset: 10px;

    // Scrollbars
    --w-scrollbar-bg: var(--w-color-primary-60);
    --w-scrollbar-fg: var(--w-color-primary-50);

    // Skeleton component
    --w-skeleton-color: var(--w-color-primary-60);
    --w-skeleton-wave-color: var(--w-color-primary-50);

    // Slider component
    --w-slider-background: var(--w-color-primary-50);
    --w-slider-color: var(--w-color-primary);
    --w-slider-thumb: var(--w-color-primary-50);

    // Spinner component
    --w-spinner-color: var(--w-color-primary);
    --w-spinner-width: 2px;
    --w-spinner-speed: 2s;
    --w-spinner-size: 30px;
    --w-spinner-dash: 8;

    // Spoiler component
    --w-spoiler-color: var(--w-color-primary);

    // Stepper component
    --w-stepper-color-border: var(--w-color-primary-50);
    --w-stepper-color-active: var(--w-color-info);
    --w-stepper-color-complete: var(--w-color-success);

    // Switch component
    --w-switch-off-color: var(--w-color-primary-50);
    --w-switch-on-color: var(--w-color-primary);

    // ThemeSwitcher component
    --w-theme-switcher-size: 20px;

    // Timeline component
    --w-timeline-color: var(--w-color-primary-50);
    --w-timeline-text-color: var(--w-color-primary);
    --w-timeline-counter: decimal;

    // Tooltips
    --w-tooltip-background: var(--w-color-primary);
    --w-tooltip-color: var(--w-color-primary-70);

    // Override border-radius
    --w-sm-radius: 2px;
    --w-md-radius: 5px;
    --w-lg-radius: 10px;
    --w-xl-radius: 15px;
}
```

### Using Components

Start using Webcore components in your code by importing them:

```astro
---
// Import the component relevant to your project
// How to import Astro components
import { Accordion } from 'webcoreui/astro'

// How to import Svelte components
import { Accordion } from 'webcoreui/svelte'

// How to import React components
import { Accordion } from 'webcoreui/react'
---

<Accordion items={[{ ... }]} />
```

## Components

- [Accordion](https://github.com/Frontendland/webcoreui/tree/main/src/components/Accordion)
- [Alert](https://github.com/Frontendland/webcoreui/tree/main/src/components/Alert)
- [AspectRatio](https://github.com/Frontendland/webcoreui/tree/main/src/components/AspectRatio)
- [Avatar](https://github.com/Frontendland/webcoreui/tree/main/src/components/Avatar)
- [Badge](https://github.com/Frontendland/webcoreui/tree/main/src/components/Badge)
- [Banner](https://github.com/Frontendland/webcoreui/tree/main/src/components/Banner)
- [Breadcrumb](https://github.com/Frontendland/webcoreui/tree/main/src/components/Breadcrumb)
- [Button](https://github.com/Frontendland/webcoreui/tree/main/src/components/Button)
- [Card](https://github.com/Frontendland/webcoreui/tree/main/src/components/Card)
- [Carousel](https://github.com/Frontendland/webcoreui/tree/main/src/components/Carousel)
- [Checkbox](https://github.com/Frontendland/webcoreui/tree/main/src/components/Checkbox)
- [Collapsible](https://github.com/Frontendland/webcoreui/tree/main/src/components/Collapsible)
- [ConditionalWrapper](https://github.com/Frontendland/webcoreui/tree/main/src/components/ConditionalWrapper)
- [Copy](https://github.com/Frontendland/webcoreui/tree/main/src/components/Copy)
- [DataTable](https://github.com/Frontendland/webcoreui/tree/main/src/components/DataTable)
- [Footer](https://github.com/Frontendland/webcoreui/tree/main/src/components/Footer)
- [Group](https://github.com/Frontendland/webcoreui/tree/main/src/components/Group)
- [Icon](https://github.com/Frontendland/webcoreui/tree/main/src/components/Icon)
- [Input](https://github.com/Frontendland/webcoreui/tree/main/src/components/Input)
- [Kbd](https://github.com/Frontendland/webcoreui/tree/main/src/components/Kbd)
- [List](https://github.com/Frontendland/webcoreui/tree/main/src/components/List)
- [Masonry](https://github.com/Frontendland/webcoreui/tree/main/src/components/Masonry)
- [Menu](https://github.com/Frontendland/webcoreui/tree/main/src/components/Menu)
- [Modal](https://github.com/Frontendland/webcoreui/tree/main/src/components/Modal)
- [Pagination](https://github.com/Frontendland/webcoreui/tree/main/src/components/Pagination)
- [Popover](https://github.com/Frontendland/webcoreui/tree/main/src/components/Popover)
- [Progress](https://github.com/Frontendland/webcoreui/tree/main/src/components/Progress)
- [Radio](https://github.com/Frontendland/webcoreui/tree/main/src/components/Radio)
- [Rating](https://github.com/Frontendland/webcoreui/tree/main/src/components/Rating)
- [Ribbon](https://github.com/Frontendland/webcoreui/tree/main/src/components/Ribbon)
- [Select](https://github.com/Frontendland/webcoreui/tree/main/src/components/Select)
- [Sheet](https://github.com/Frontendland/webcoreui/tree/main/src/components/Sheet)
- [Sidebar](https://github.com/Frontendland/webcoreui/tree/main/src/components/Sidebar)
- [Skeleton](https://github.com/Frontendland/webcoreui/tree/main/src/components/Skeleton)
- [Slider](https://github.com/Frontendland/webcoreui/tree/main/src/components/Slider)
- [Spinner](https://github.com/Frontendland/webcoreui/tree/main/src/components/Spinner)
- [Spoiler](https://github.com/Frontendland/webcoreui/tree/main/src/components/Spoiler)
- [Stepper](https://github.com/Frontendland/webcoreui/tree/main/src/components/Stepper)
- [Switch](https://github.com/Frontendland/webcoreui/tree/main/src/components/Switch)
- [Table](https://github.com/Frontendland/webcoreui/tree/main/src/components/Table)
- [Tabs](https://github.com/Frontendland/webcoreui/tree/main/src/components/Tabs)
- [Textarea](https://github.com/Frontendland/webcoreui/tree/main/src/components/Textarea)
- [ThemeSwitcher](https://github.com/Frontendland/webcoreui/tree/main/src/components/ThemeSwitcher)
- [Timeline](https://github.com/Frontendland/webcoreui/blob/main/src/pages/timeline.astro)
- [Toast](https://github.com/Frontendland/webcoreui/tree/main/src/components/Toast)
- [Tooltip](https://github.com/Frontendland/webcoreui/blob/main/src/pages/tooltip.astro)

## Blocks

- [BlogCard](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/BlogCard)
- [ErrorPage](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/ErrorPage)
- [FAQ](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/FAQ)
- [GridWithIcons](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/GridWithIcons)
- [Hero](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/Hero)
- [IconList](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/IconList)
- [SettingCard](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/SettingCard)
- [SignUp](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/SignUp)
- [SocialProof](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/SocialProof)
- [Tiles](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/Tiles)
- [User](https://github.com/Frontendland/webcoreui/tree/main/src/blocks/User)
