import chokidar from 'chokidar';
import path from 'path';
import { run } from '@mermaid-js/mermaid-cli';
import fs from 'fs';

const root_folder = path.resolve();

const mermaidInputPath = path.join(root_folder, 'docs', 'mermaid');
const mermaidOutputPath = path.join(root_folder, 'docs', 'public', 'mermaid');

const generateMermaidGraph = async (inputPath) => {
  const fileName = path.parse(inputPath).name;

  const outputPath = path.join(mermaidOutputPath, `${fileName}.svg`);

  console.log(`Generating ${outputPath}`);

  await run(inputPath, outputPath, {
    outputFormat: 'svg',
  });

  console.log(`Generated ${outputPath}`);
};

if (process.argv[2] && process.argv[2] === '-d') {
  // watch for changes in the mermaid input folder
  console.log(`Watching ${mermaidInputPath}`);

  const watcher = chokidar.watch(mermaidInputPath, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });

  watcher.on('add', async (path) => {
    console.log(`File ${path} has been added`);

    await generateMermaidGraph(path);
  });

  watcher.on('change', async (path) => {
    console.log(`File ${path} has been changed`);

    await generateMermaidGraph(path);

    // trigger a reload of the page
    if (import.meta.hot) {
      import.meta.hot.send('reload');
    }
  });
} else {
  // loop through all files in the mermaid input folder

  fs.readdirSync(mermaidInputPath).forEach(async (file) => {
    const inputPath = path.join(mermaidInputPath, file);

    await generateMermaidGraph(inputPath);
  });
}
