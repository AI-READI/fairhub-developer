# Overview

Files in this folder are generated from the [mermaid](https://mermaid-js.github.io/mermaid/#/) files in the `docs\mermaid` folder.

To generate the files, run the following command from the root of the repository:

```bash
yarn generate:mermaid
```

The generated files use the same name as the input files. All files are created as SVG files.

## How to use

To use a generated file in a markdown file, use the following syntax:

```html
<div data-zoom-on-wheel data-pan-on-drag>
  <img src="/mermaid/filename.svg" alt="Akt Text" />
</div>
```

The `data-zoom-on-wheel` and `data-pan-on-drag` attributes are optional. They enable zooming and panning of the image.

---

You can also use the inbuilt mermaid renderer to write mermaid code directly in markdown files. This is useful for small diagrams that don't need to be in a separate file.
