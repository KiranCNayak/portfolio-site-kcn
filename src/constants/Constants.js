import jsLogoImg from '../../static/js.png';
import gitLogoImg from '../../static/git.png';
import css3LogoImg from '../../static/css3.png';
import reactLogoImg from '../../static/react.png';
import html5LogoImg from '../../static/html5.png';
import vscodeLogoImg from '../../static/vscode.png';
import nextJSLogoImg from '../../static/nextjs.png';
import tailwindCSSLogoImg from '../../static/tailwindcss.png';

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

export const MOBILE_MOCKUP_SIZES = {
  extraSmall: { key: 'extraSmall', height: '180px', width: '90px' },
  small: { key: 'small', height: '210px', width: '105px' },
  medium: { key: 'medium', height: '240px', width: '120px' },
  large: { key: 'large', height: '270px', width: '135px' },
  xl: { key: 'xl', height: '300px', width: '150px' },
  '2xl': { key: '2xl', height: '330px', width: '165px' },
  '3xl': { key: '3xl', height: '360px', width: '180px' },
  '4xl': { key: '4xl', height: '390px', width: '195px' },
  '5xl': { key: '5xl', height: '420px', width: '210px' },
};

export const KNOWN_FRAMEWORKS_AND_TOOLS = [
  { id: 'HTML', alt: 'HTML Icon', src: html5LogoImg, toolTipText: 'HTML5' },
  { id: 'CSS', alt: 'CSS ICON', src: css3LogoImg, toolTipText: 'CSS3' },
  { id: 'JS', alt: 'JS ICON', src: jsLogoImg, toolTipText: 'Javascript' },
  { id: 'REACT', alt: 'REACT ICON', src: reactLogoImg, toolTipText: 'React' },
  {
    id: 'NEXTJS',
    alt: 'NEXTJS ICON',
    src: nextJSLogoImg,
    toolTipText: 'Next JS',
  },
  {
    id: 'TAILWINDCSS',
    alt: 'TAILWINDCSS ICON',
    src: tailwindCSSLogoImg,
    toolTipText: 'Tailwind CSS',
  },
  { id: 'GIT', alt: 'GIT ICON', src: gitLogoImg, toolTipText: 'Git' },
  {
    id: 'VSCODE',
    alt: 'VSCODE ICON',
    src: vscodeLogoImg,
    toolTipText: 'VSCode',
  },
];

export const LIPSUM_P1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit, turpis eu imperdiet vestibulum, purus velit hendrerit risus, eget blandit erat lacus ultrices ex. Fusce suscipit enim gravida, scelerisque odio eu, tempor justo. In ac dapibus est. Donec sapien metus, dapibus sed auctor facilisis, lacinia eget leo. Maecenas justo ante, mollis vitae convallis a, ornare ac libero. Phasellus ultricies tellus sed ornare cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vestibulum elit mauris, ut convallis risus pulvinar ac. Aliquam eu tincidunt mauris, id gravida velit. Duis at nisl in neque mollis blandit.';
export const LIPSUM_P2 =
  'Quisque ullamcorper sed mauris id porta. Praesent at ante varius, aliquam sapien sit amet, euismod urna. Curabitur vel sagittis quam. Sed venenatis lorem efficitur, gravida diam nec, scelerisque leo. Quisque sit amet leo mi. Donec et bibendum leo. Nam ullamcorper ligula vel erat fringilla interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas feugiat erat lacus, et volutpat orci mollis eu. In gravida facilisis tempus. Maecenas molestie, turpis at dictum vestibulum, dui tellus dignissim nunc, non suscipit tortor lectus a orci. Fusce ultrices in odio non luctus. Donec est nisi, aliquet ut nibh in, luctus viverra lorem. Sed sed nisl eget nisl euismod egestas nec a nulla. Nullam suscipit, purus vitae elementum pulvinar, sapien metus aliquam urna, ac pretium dolor enim a dui. Proin luctus purus sit amet nisl congue efficitur. ';
