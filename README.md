# Habij

## Development

First, install the dependencies and the run the development server:

```bash
npm install # Install dependencies
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Get API Types

### Clone Your Project with Submodules

When cloning habij, use the `--recurse-submodules` flag to initialize the submodule as well:

```bash
git clone --recurse-submodules https://github.com/gethabij/habij.git
```

If you've already cloned the project, initialize and update the submodule like this:

```bash
git submodule init
git submodule update
```

### Pull Updates for the Submodule

To update the habij-types submodule to the latest version, run:

```bash
git submodule update --remote src/types/habij-types
```

This command fetches the latest commit from the default branch (main) of the submodule.
