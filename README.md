# cl-mono

An [Nx Monorepo](https://nx.dev) for my personal website and components used to build it.

## Start the application

Run `npx nx serve portfolio` to start the development server. Happy coding!

## Build for production

Run `npx nx build portfolio` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```
