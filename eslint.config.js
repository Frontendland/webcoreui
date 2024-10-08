import svelteParser from 'svelte-eslint-parser'

import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import astroParser from 'astro-eslint-parser'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import eslintPluginTypeScript from 'typescript-eslint'

export default [
    js.configs.recommended,
    eslintPluginReact.configs.flat.recommended,
    ...eslintPluginSvelte.configs['flat/recommended'],
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginTypeScript.configs.recommended,
    {
        plugins: {
            'simple-import-sort': eslintPluginSimpleImportSort
        },
        rules: {
            'array-bracket-spacing': ['error', 'never'],
            'array-callback-return': 'error',
            'arrow-spacing': 'error',
            'block-scoped-var': 'error',
            'block-spacing': 'error',
            'brace-style': 'error',
            'comma-dangle': 'error',
            'comma-style': 'error',
            'complexity': 'error',
            'curly': 'error',
            'dot-location': ['error', 'property'],
            'dot-notation': 'error',
            'eol-last': 'error',
            'eqeqeq': 'error',
            'for-direction': 'error',
            'func-call-spacing': 'error',
            'indent': ['error', 4],
            'jsx-quotes': 'error',
            'key-spacing': 'error',
            'keyword-spacing': 'error',
            'max-depth': 'error',
            'max-len': ['error', { code: 120, tabWidth: 4 }],
            'max-lines': ['error'],
            'max-nested-callbacks': 'error',
            'max-params': ['error', 4],
            'max-statements-per-line': 'error',
            'no-alert': 'error',
            'no-bitwise': 'error',
            'no-console': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extend-native': 'error',
            'no-floating-decimal': 'error',
            'no-implicit-coercion': ['error', { allow: ['!!'] }],
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-mixed-operators': 'error',
            'no-multi-spaces': 'error',
            'no-native-reassign': 'error',
            'no-param-reassign': 'error',
            'no-script-url': 'error',
            'no-self-compare': 'error',
            'no-template-curly-in-string': 'error',
            'no-sequences': 'error',
            'no-spaced-func': 'error',
            'no-trailing-spaces': 'error',
            'no-undef-init': 'error',
            'no-unreachable-loop': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-return': 'error',
            'no-void': 'error',
            'no-warning-comments': 'error',
            'no-with': 'error',
            'object-curly-spacing': ['error', 'always'],
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'operator-linebreak': ['error', 'before', {
                overrides: { '=': 'after' }
            }],
            'prefer-const': 'error',
            'prefer-template': 'error',
            'quotes': ['error', 'single', { avoidEscape: true }],
            'quote-props': ['error', 'consistent'],
            'react/jsx-curly-brace-presence': ['error', 'never'],
            'react/jsx-fragments': ['error', 'element'],
            'react/jsx-no-useless-fragment': ['error', {
                allowExpressions: true
            }],
            'react/jsx-tag-spacing': ['error'],
            'react/no-unused-prop-types': 'error',
            'radix': 'error',
            'semi': ['error', 'never'],
            'simple-import-sort/imports': ['error', {
                groups: [
                    [
                        '^react',
                        '^svelte',
                        '^\\./'
                    ],
                    ['@static'],
                    ['@components'],
                    [
                        '^.+\\.astro',
                        '^.+\\.svelte',
                        '^.+\\.tsx'
                    ],
                    ['utils'],
                    ['^.+\\.svg'],
                    ['^.+\\.scss']
                ]
            }],
            'space-infix-ops': 'error',
            'space-before-blocks': 'error',
            'space-before-function-paren': ['error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }],
            'spaced-comment': 'error',
            'vars-on-top': 'error',
            'wrap-iife': 'error',
            'yoda': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-expressions': ['error', {
                allowTernary: true
            }],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        ignores: ['dist/**/*']
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser
            }
        },
        rules: {
            'react/jsx-key': 'off',
            'react/jsx-no-undef': 'off',
            'react/jsx-no-useless-fragment': 'off',
            'react/no-unescaped-entities': 'off',
            'react/no-unknown-property': 'off',
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-empty-object-type': 'off'
        }
    },
    {
        files: ['src/static/*.astro', 'src/pages/*.astro'],
        rules: {
            'max-len': 'off',
            'max-lines': 'off',
            'simple-import-sort/imports': ['error', {
                groups: [
                    ['@static'],
                    ['@components'],
                    ['^.+\\.svg'],
                    ['@helpers', '@data']
                ]
            }]
        }
    },
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: tsParser
            }
        },
        rules: {
            'svelte/no-at-html-tags': 'off',
            'no-undef': 'off'
        }
    },
    {
        files: ['scripts/**/*'],
        rules: {
            'no-console': 'off',
            'no-undef': 'off',
            'prefer-template': 'off',
            'max-len': 'off',
            'indent': 'off'
        }
    },
    {
        files: ['dist/**/*'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
]
