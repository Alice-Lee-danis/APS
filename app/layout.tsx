import 'normalize.css'
import './styles/index.scss'
import HeaderComponent from './component/header/headerComponent';

const RootLayout = ({children} : {children: React.ReactNode}) => {
    return (
      <html lang="en">
        <body>
          <HeaderComponent></HeaderComponent>
          <section className='section'> 
            {children}
          </section>
        </body>
      </html>
    );
}

export default RootLayout