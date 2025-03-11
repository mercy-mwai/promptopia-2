import '../styles/globals.css'; // Use relative path
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metaData = {
  title: 'Promptopia',
  decription: 'Discover & share AI prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}</main>
      </body>
    </html> // Remove the extra space or newline here
  );
};

export default RootLayout;