import triangleGenerator from '../assets/triangle-generator.svg';
import gradientGenerator from '../assets/gradient-generator.svg';
import svgCompression from '../assets/svg-compression.svg';
import svg2jsx from '../assets/svg-to-jsx.svg';
import symbolsCollection from '../assets/symbols-collection.svg';
import curvedDividers from '../assets/curved-dividers.svg';

export default [
  {
    link: '/triangle-generator',
    name: 'Triangle generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    icon: triangleGenerator,
  },

  {
    link: '/css-gradient',
    name: 'Gradients generator',
    description: 'Generate linear and radial gradients, includes ready to use gradients library',
    icon: gradientGenerator,
  },

  {
    link: '/svg-compressor',
    name: 'SVG compressor',
    description:
      'Compress svg images with svgo tool, convert to react component immediately after if needed',
    icon: svgCompression,
  },

  {
    link: '/svg-to-jsx',
    name: 'SVG → JSX',
    description:
      'Convert svg icons and illustrations to react components (or components for other libraries with jsx support)',
    icon: svg2jsx,
  },

  {
    link: '/html-symbols',
    name: 'Symbols collection',
    description:
      'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    icon: symbolsCollection,
  },

  {
    link: '/pages-dividers',
    name: 'Curved page dividers',
    description: 'Tool to generate curved page dividers with css and svg images',
    icon: curvedDividers,
  },
];
