# Setup

## Install dependencies

```shell
npm install
# or
npm ci
```

## Run the project locally

```shell
npm run dev
```


# Project Structure
```bash
├───node_modules
│   ├───.bin
│   ├───.vite
│   │   └───deps
│   ├───@babel
│   │   └───parser
│   │       ├───bin
│   │       ├───lib
│   │       └───typings
│   ├───@esbuild
│   ├───@eslint
│   │   └───eslintrc
│   │       ├───conf
│   │       ├───dist
│   │       └───lib
│   │           ├───config-array
│   │           └───shared
│   ├───@humanwhocodes
│   │   ├───config-array
│   │   ├───gitignore-to-minimatch
│   │   │   └───dist
│   │   ├───module-importer
│   │   │   ├───dist
│   │   │   └───src
│   │   └───object-schema
│   │       ├───.github
│   │       │   └───workflows
│   │       ├───src
│   │       └───tests
│   ├───@nodelib
│   │   ├───fs.scandir
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       ├───types
│   │   │       └───utils
│   │   ├───fs.stat
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       └───types
│   │   └───fs.walk
│   │       └───out
│   │           ├───providers
│   │           ├───readers
│   │           └───types
│   ├───@rushstack
│   │   └───eslint-patch
│   │       └───lib
│   ├───@types
│   │   ├───jquery
│   │   │   └───dist
│   │   └───sizzle
│   ├───@vitejs
│   │   └───plugin-vue
│   │       └───dist
│   ├───@vue
│   │   ├───compiler-core
│   │   │   └───dist
│   │   ├───compiler-dom
│   │   │   └───dist
│   │   ├───compiler-sfc
│   │   │   └───dist
│   │   ├───compiler-ssr
│   │   │   └───dist
│   │   ├───devtools-api
│   │   │   └───lib
│   │   │       ├───cjs
│   │   │       │   └───api
│   │   │       └───esm
│   │   │           └───api
│   │   ├───eslint-config-prettier
│   │   ├───reactivity
│   │   │   └───dist
│   │   ├───reactivity-transform
│   │   │   └───dist
│   │   ├───runtime-core
│   │   │   └───dist
│   │   ├───runtime-dom
│   │   │   └───dist
│   │   ├───server-renderer
│   │   │   └───dist
│   │   └───shared
│   │       └───dist
│   ├───acorn
│   │   ├───bin
│   │   └───dist
│   ├───acorn-jsx
│   ├───ajv
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───compile
│   │   │   ├───dot
│   │   │   ├───dotjs
│   │   │   └───refs
│   │   └───scripts
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───argparse
│   │   └───lib
│   ├───array-union
│   ├───asynckit
│   │   └───lib
│   ├───axios
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───esm
│   │   │   └───node
│   │   └───lib
│   │       ├───adapters
│   │       ├───cancel
│   │       ├───core
│   │       ├───defaults
│   │       ├───env
│   │       │   └───classes
│   │       ├───helpers
│   │       └───platform
│   │           ├───browser
│   │           │   └───classes
│   │           └───node
│   │               └───classes
│   ├───balanced-match
│   │   └───.github
│   ├───boolbase
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───callsites
│   ├───chalk
│   │   └───source
│   ├───color-convert
│   ├───color-name
│   ├───combined-stream
│   │   └───lib
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───cssesc
│   │   ├───bin
│   │   └───man
│   ├───csstype
│   ├───debug
│   │   └───src
│   ├───deep-is
│   │   ├───example
│   │   └───test
│   ├───delayed-stream
│   │   └───lib
│   ├───dir-glob
│   ├───doctrine
│   │   └───lib
│   ├───dom-walk
│   │   └───example
│   ├───emailjs-com
│   │   ├───cjs
│   │   │   ├───api
│   │   │   ├───methods
│   │   │   │   ├───init
│   │   │   │   ├───send
│   │   │   │   └───sendForm
│   │   │   ├───models
│   │   │   ├───store
│   │   │   └───utils
│   │   ├───dist
│   │   └───es
│   │       ├───api
│   │       ├───methods
│   │       │   ├───init
│   │       │   ├───send
│   │       │   └───sendForm
│   │       ├───models
│   │       ├───store
│   │       └───utils
│   ├───esbuild
│   │   ├───bin
│   │   └───lib
│   ├───esbuild-windows-64
│   │   └───bin
│   ├───escape-string-regexp
│   ├───eslint
│   │   ├───bin
│   │   ├───conf
│   │   ├───lib
│   │   │   ├───cli-engine
│   │   │   │   └───formatters
│   │   │   ├───config
│   │   │   ├───eslint
│   │   │   ├───linter
│   │   │   │   └───code-path-analysis
│   │   │   ├───rule-tester
│   │   │   ├───rules
│   │   │   │   └───utils
│   │   │   │       ├───patterns
│   │   │   │       └───unicode
│   │   │   ├───shared
│   │   │   └───source-code
│   │   │       └───token-store
│   │   └───messages
│   ├───eslint-config-prettier
│   │   └───bin
│   ├───eslint-plugin-prettier
│   ├───eslint-plugin-vue
│   │   └───lib
│   │       ├───configs
│   │       ├───rules
│   │       │   └───syntaxes
│   │       │       └───utils
│   │       └───utils
│   │           └───style-variables
│   ├───eslint-scope
│   │   ├───dist
│   │   └───lib
│   ├───eslint-utils
│   │   └───node_modules
│   │       └───eslint-visitor-keys
│   │           └───lib
│   ├───eslint-visitor-keys
│   │   ├───dist
│   │   └───lib
│   ├───espree
│   │   ├───dist
│   │   └───lib
│   ├───esquery
│   │   └───dist
│   ├───esrecurse
│   ├───estraverse
│   ├───estree-walker
│   │   ├───dist
│   │   │   ├───esm
│   │   │   └───umd
│   │   ├───src
│   │   └───types
│   ├───esutils
│   │   └───lib
│   ├───expose-loader
│   │   └───dist
│   │       └───runtime
│   ├───fast-deep-equal
│   │   └───es6
│   ├───fast-diff
│   ├───fast-glob
│   │   ├───node_modules
│   │   │   └───glob-parent
│   │   └───out
│   │       ├───managers
│   │       ├───providers
│   │       │   ├───filters
│   │       │   ├───matchers
│   │       │   └───transformers
│   │       ├───readers
│   │       ├───types
│   │       └───utils
│   ├───fast-json-stable-stringify
│   │   ├───.github
│   │   ├───benchmark
│   │   ├───example
│   │   └───test
│   ├───fast-levenshtein
│   ├───fastq
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───file-entry-cache
│   ├───fill-range
│   ├───find-up
│   ├───flat-cache
│   │   └───src
│   ├───flatted
│   │   ├───cjs
│   │   ├───esm
│   │   └───php
│   ├───follow-redirects
│   ├───form-data
│   │   └───lib
│   ├───fs.realpath
│   ├───function-bind
│   │   └───test
│   ├───glob
│   ├───glob-parent
│   ├───global
│   ├───globals
│   ├───globby
│   ├───grapheme-splitter
│   │   └───tests
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-flag
│   ├───ignore
│   ├───import-fresh
│   ├───imurmurhash
│   ├───inflight
│   ├───inherits
│   ├───is-core-module
│   │   └───test
│   ├───is-extglob
│   ├───is-glob
│   ├───is-number
│   ├───isexe
│   │   └───test
│   ├───jquery
│   │   ├───dist
│   │   ├───external
│   │   │   └───sizzle
│   │   │       └───dist
│   │   └───src
│   │       ├───ajax
│   │       │   └───var
│   │       ├───attributes
│   │       ├───core
│   │       │   └───var
│   │       ├───css
│   │       │   └───var
│   │       ├───data
│   │       │   └───var
│   │       ├───deferred
│   │       ├───deprecated
│   │       ├───effects
│   │       ├───event
│   │       ├───exports
│   │       ├───manipulation
│   │       │   └───var
│   │       ├───queue
│   │       ├───traversing
│   │       │   └───var
│   │       └───var
│   ├───js-sdsl
│   │   └───dist
│   │       ├───cjs
│   │       │   └───container
│   │       │       ├───ContainerBase
│   │       │       ├───HashContainer
│   │       │       │   └───Base
│   │       │       ├───OtherContainer
│   │       │       ├───SequentialContainer
│   │       │       │   └───Base
│   │       │       └───TreeContainer
│   │       │           └───Base
│   │       ├───esm
│   │       │   └───container
│   │       │       ├───ContainerBase
│   │       │       ├───HashContainer
│   │       │       │   └───Base
│   │       │       ├───OtherContainer
│   │       │       ├───SequentialContainer
│   │       │       │   └───Base
│   │       │       └───TreeContainer
│   │       │           └───Base
│   │       └───umd
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       ├───schema
│   │       └───type
│   ├───json-schema-traverse
│   │   └───spec
│   │       └───fixtures
│   ├───json-stable-stringify-without-jsonify
│   │   ├───example
│   │   └───test
│   ├───levn
│   │   └───lib
│   ├───locate-path
│   ├───lodash
│   │   └───fp
│   ├───lodash.merge
│   ├───lru-cache
│   ├───magic-string
│   │   └───dist
│   ├───merge2
│   ├───micromatch
│   ├───mime-db
│   ├───mime-types
│   ├───min-document
│   │   ├───event
│   │   └───test
│   │       └───static
│   ├───minimatch
│   ├───ms
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───natural-compare
│   ├───nth-check
│   │   └───lib
│   │       └───esm
│   ├───once
│   ├───optionator
│   │   └───lib
│   ├───p-limit
│   ├───p-locate
│   ├───parent-module
│   ├───path-exists
│   ├───path-is-absolute
│   ├───path-key
│   ├───path-parse
│   ├───path-type
│   ├───picocolors
│   ├───picomatch
│   │   └───lib
│   ├───postcss
│   │   └───lib
│   ├───postcss-selector-parser
│   │   └───dist
│   │       ├───selectors
│   │       └───util
│   ├───prelude-ls
│   │   └───lib
│   ├───prettier
│   │   └───esm
│   ├───prettier-linter-helpers
│   │   ├───.github
│   │   ├───.vscode
│   │   └───test
│   ├───process
│   ├───proxy-from-env
│   ├───punycode
│   ├───queue-microtask
│   ├───regenerator-runtime
│   ├───regexpp
│   ├───resolve
│   │   ├───.github
│   │   ├───bin
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───false_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───malformed_package_json
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-from
│   ├───reusify
│   │   └───benchmarks
│   ├───rimraf
│   ├───rollup
│   │   └───dist
│   │       ├───bin
│   │       ├───es
│   │       │   └───shared
│   │       └───shared
│   ├───run-parallel
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───shebang-command
│   ├───shebang-regex
│   ├───slash
│   ├───source-map
│   │   ├───dist
│   │   └───lib
│   ├───source-map-js
│   │   └───lib
│   ├───sourcemap-codec
│   │   └───dist
│   │       └───types
│   ├───strip-ansi
│   ├───strip-json-comments
│   ├───supports-color
│   ├───supports-preserve-symlinks-flag
│   │   ├───.github
│   │   └───test
│   ├───text-table
│   │   ├───example
│   │   └───test
│   ├───to-regex-range
│   ├───type-check
│   │   └───lib
│   ├───type-fest
│   │   ├───source
│   │   └───ts41
│   ├───uri-js
│   │   └───dist
│   │       ├───es5
│   │       └───esnext
│   │           └───schemes
│   ├───util-deprecate
│   ├───vite
│   │   ├───bin
│   │   ├───dist
│   │   │   ├───client
│   │   │   ├───node
│   │   │   │   └───chunks
│   │   │   └───node-cjs
│   │   ├───src
│   │   │   └───client
│   │   └───types
│   ├───vue
│   │   ├───compiler-sfc
│   │   ├───dist
│   │   └───server-renderer
│   ├───vue-axios
│   │   └───dist
│   ├───vue-carousel
│   │   ├───.github
│   │   │   └───ISSUE_TEMPLATE
│   │   ├───.idea
│   │   │   ├───codeStyles
│   │   │   ├───inspectionProfiles
│   │   │   └───markdown-navigator
│   │   ├───dist
│   │   ├───docs
│   │   │   ├───public
│   │   │   │   ├───2016
│   │   │   │   │   └───12
│   │   │   │   │       └───29
│   │   │   │   │           └───home
│   │   │   │   ├───api
│   │   │   │   ├───archives
│   │   │   │   │   └───2016
│   │   │   │   │       └───12
│   │   │   │   ├───css
│   │   │   │   ├───examples
│   │   │   │   ├───guide
│   │   │   │   ├───images
│   │   │   │   └───js
│   │   │   ├───scaffolds
│   │   │   ├───source
│   │   │   │   ├───api
│   │   │   │   ├───examples
│   │   │   │   ├───guide
│   │   │   │   └───_posts
│   │   │   └───themes
│   │   │       └───vue
│   │   │           ├───layout
│   │   │           │   └───partials
│   │   │           └───source
│   │   │               ├───css
│   │   │               ├───images
│   │   │               └───js
│   │   ├───node_modules
│   │   │   ├───@vue
│   │   │   │   └───compiler-sfc
│   │   │   │       └───dist
│   │   │   ├───csstype
│   │   │   └───vue
│   │   │       ├───compiler-sfc
│   │   │       ├───dist
│   │   │       ├───packages
│   │   │       │   └───compiler-sfc
│   │   │       │       ├───dist
│   │   │       │       ├───node_modules
│   │   │       │       │   └───.bin
│   │   │       │       ├───src
│   │   │       │       │   ├───stylePlugins
│   │   │       │       │   └───templateCompilerModules
│   │   │       │       └───test
│   │   │       │           └───__snapshots__
│   │   │       ├───src
│   │   │       │   ├───compiler
│   │   │       │   │   ├───codegen
│   │   │       │   │   ├───directives
│   │   │       │   │   └───parser
│   │   │       │   ├───core
│   │   │       │   │   ├───components
│   │   │       │   │   ├───global-api
│   │   │       │   │   ├───instance
│   │   │       │   │   │   └───render-helpers
│   │   │       │   │   ├───observer
│   │   │       │   │   ├───util
│   │   │       │   │   └───vdom
│   │   │       │   │       ├───helpers
│   │   │       │   │       └───modules
│   │   │       │   ├───platforms
│   │   │       │   │   └───web
│   │   │       │   │       ├───compiler
│   │   │       │   │       │   ├───directives
│   │   │       │   │       │   └───modules
│   │   │       │   │       ├───runtime
│   │   │       │   │       │   ├───components
│   │   │       │   │       │   ├───directives
│   │   │       │   │       │   └───modules
│   │   │       │   │       └───util
│   │   │       │   ├───shared
│   │   │       │   ├───types
│   │   │       │   └───v3
│   │   │       │       ├───reactivity
│   │   │       │       └───sfc-helpers
│   │   │       └───types
│   │   ├───play
│   │   ├───src
│   │   │   ├───mixins
│   │   │   └───utils
│   │   └───tests
│   │       ├───client
│   │       │   └───components
│   │       │       └───__snapshots__
│   │       └───functional
│   ├───vue-eslint-parser
│   ├───vue-router
│   │   ├───dist
│   │   └───vetur
│   ├───which
│   │   └───bin
│   ├───word-wrap
│   ├───wrappy
│   ├───xml-name-validator
│   │   └───lib
│   ├───yallist
│   └───yocto-queue
├───public
│   ├───doc
│   └───svg
└───src
    ├───assets
    │   ├───animation
    │   ├───css
    │   ├───doc
    │   ├───dump
    │   ├───fonts
    │   │   └───SharpSansNo1-Book
    │   │       └───@font-face
    │   ├───image
    │   └───svg
    ├───components
    │   └───logic
    ├───router
    └───views
```
