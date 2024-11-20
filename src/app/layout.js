import './styles/globals.css';
import './styles/styles.css';
import './styles/theme.css';
import './styles/generique.css';
import './fonts/fonts.css';
import LayoutStructure from './layouts/LayoutStructure';
import ConfigureAmplifyClientSide from './components/ConfigureAmplifyClientSide';

export const metadata = {
  metadataBase: new URL('https://www.ronanscotet.com'),
  title: 'Ronan Scotet - devops developer and lead developer',
  description: 'Hey im Ronan, come to see my portfolio made with love :D. I manage web applications from A to Z, throughout the devops cycle.',
  openGraph: {
    title: 'Ronan Scotet - devops developer and lead developer',
    description: 'Hey im Ronan, come to see my portfolio made with love :D. I manage web applications from A to Z, throughout the devops cycle.',
    images: [
      {
        url: '/images/ronanscotet_website.png',
        alt: 'Aperçu de Ronan Scotet Portfolio',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ConfigureAmplifyClientSide />
      <body data-theme="dark">
        <LayoutStructure>
          {children}
        </LayoutStructure>
      </body>
    </html>
  );
}
