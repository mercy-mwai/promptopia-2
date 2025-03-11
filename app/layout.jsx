/*import '../styles/globals.css'; // Use relative path


export const metaData ={
    title: "Promptopia",
    decription:"Discover & share AI prompts"
}
const RootLayout = ({children}) => {
  return (
  <html lang='en'>
    <div className='main'>
        <div className='gradient' />
    </div>
    
    <main className='app'>
        {children}
    </main>
  </html>
  )
}

export default RootLayout;*/
import '../styles/globals.css'; // Use relative path

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

        <main className="app">{children}</main>
      </body>
    </html> // Remove the extra space or newline here
  );
};

export default RootLayout;