import './styles/globals.css';
import './styles/styles.css';
import './styles/theme.css';
import './fonts/fonts.css';
import LayoutStructure from './layouts/LayoutStructure';
import { MenuProvider } from './contexts/MenuContext';

export const metadata = {
  title: 'Ronan Scotet - devops developer and lead developer',
  description: 'Hey im Ronan, come to see my portfolio made with love :D. I manage web applications from A to Z, throughout the devops cycle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-theme="dark">
        <MenuProvider>
          <LayoutStructure>
            {children}
          </LayoutStructure>
        </MenuProvider>
      </body>
    </html>
  );
}
