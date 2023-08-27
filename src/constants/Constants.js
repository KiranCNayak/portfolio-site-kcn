import jsLogoImg from '../assets/js.png';
import gitLogoImg from '../assets/git.png';
import css3LogoImg from '../assets/css3.png';
import reactLogoImg from '../assets/react.png';
import html5LogoImg from '../assets/html5.png';
import vscodeLogoImg from '../assets/vscode.png';
import nextJSLogoImg from '../assets/nextjs.png';
import tailwindCSSLogoImg from '../assets/tailwindcss.png';

export const IMAGE_SIZES = {
  extraSmall: { key: 'extraSmall', height: '24px', width: '24px' },
  small: { key: 'small', height: '36px', width: '36px' },
  medium: { key: 'medium', height: '48px', width: '48px' },
  large: { key: 'large', height: '60px', width: '60px' },
  xl: { key: 'xl', height: '72px', width: '72px' },
  '2xl': { key: '2xl', height: '96px', width: '96px' },
  '3xl': { key: '3xl', height: '120px', width: '120px' },
  '4xl': { key: '4xl', height: '144px', width: '144px' },
  '5xl': { key: '5xl', height: '180px', width: '180px' },
};

export const KNOWN_FRAMEWORKS_AND_TOOLS = [
  { id: 'HTML', alt: 'HTML Icon', src: html5LogoImg },
  { id: 'CSS', alt: 'CSS ICON', src: css3LogoImg },
  { id: 'JS', alt: 'JS ICON', src: jsLogoImg },
  { id: 'REACT', alt: 'REACT ICON', src: reactLogoImg },
  { id: 'NEXTJS', alt: 'NEXTJS ICON', src: nextJSLogoImg },
  { id: 'TAILWINDCSS', alt: 'TAILWINDCSS ICON', src: tailwindCSSLogoImg },
  { id: 'GIT', alt: 'GIT ICON', src: gitLogoImg },
  { id: 'VSCODE', alt: 'VSCODE ICON', src: vscodeLogoImg },
];
