import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href={`${ process.env.PUBLIC_URL || '' }`}
      className='link footer__link'
    >
      Tekijä Kristian Toivonen
    </a>
  </footer>
)

export default Footer
