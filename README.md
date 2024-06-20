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
</p>

> [!IMPORTANT]
> This library is still in early development. New changes can break existing functionality, and no functionality should be considered final. The library will be considered stable once it reaches v1.0.

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

Full documentation coming soon on [webcoreui.dev/docs](https://webcoreui.dev/docs).

## Getting Started

Webcore can be used as a standalone project, or it can be integrated into your existing Astro, Svelte, or React ecosystems.

### Prerequisites

> [!NOTE]
> Before getting started, make sure you have a package manager installed, such as <a href="https://nodejs.org/en/" rel="noreferrer">Node</a>.

Webcore components use Sass for styling. To use the component library, you must have the following packages installed:

- [Sass](https://www.npmjs.com/package/sass) - `v1.77` and above
- [TypeScript](https://www.npmjs.com/package/typescript) - `v5.4` and above

Depending on your project setup, you'll also need the following packages:

- **For Astro projects**
    - [Astro](https://www.npmjs.com/package/astro) - `v4.10` and above
- **For Svelte projects**
    - [Svelte](https://www.npmjs.com/package/svelte) - `v4.2` and above
- **For React projects**
    - [React](https://www.npmjs.com/package/react) - `v18.3` and above
    - [React DOM](https://www.npmjs.com/package/react-dom) -`v18.3` and above

### Installation

Install Webcore as a dependency by running one of the following command:

```bash
# Using NPM
npm i webcoreui

# Using Yarn
yarn add webcoreui
```

### Setup

1. Add the following to your `tsconfig.json` to include TypeScript types:

```json
{
  "include": ["webcoreui"]
}
```

2. Setup default styles and fonts by calling the following in your global SCSS file:

```scss
@import 'webcoreui/styles';
@include Setup((
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
| `includeHelperClasses` | `true` | Adds global helper classes for CSS. All global helper classes are defined [here](https://github.com/Frontendland/webcoreui/tree/main/src/scss/global). |
| `includeElementStyles` | `true` | Adds styles for native HTML elements, such as `code`, `pre`, or `ul`.

Default component styles can also be changed by overriding the following CSS variables:

```css
:root {
    --w-avatar-border: #000;
    --w-rating-color: #FFF;
    --w-rating-empty-color: #BBB;
    --w-rating-size: 18px;
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
- [Avatar](https://github.com/Frontendland/webcoreui/tree/main/src/components/Avatar)
- [Badge](https://github.com/Frontendland/webcoreui/tree/main/src/components/Badge)
- [Button](https://github.com/Frontendland/webcoreui/tree/main/src/components/Button)
- [Card](https://github.com/Frontendland/webcoreui/tree/main/src/components/Card)
- [Checkbox](https://github.com/Frontendland/webcoreui/tree/main/src/components/Checkbox)
- [ConditionalWrapper](https://github.com/Frontendland/webcoreui/tree/main/src/components/ConditionalWrapper)
- [Icon](https://github.com/Frontendland/webcoreui/tree/main/src/components/Icon)
- [Radio](https://github.com/Frontendland/webcoreui/tree/main/src/components/Radio)
- [Rating](https://github.com/Frontendland/webcoreui/tree/main/src/components/Rating)
- [Switch](https://github.com/Frontendland/webcoreui/tree/main/src/components/Switch)
