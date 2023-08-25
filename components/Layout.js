// components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import {excludedUrls, secondaryHeaderUrls} from '../source/configs/customLayoutConfig'
import {useRouter} from 'next/router'

const Layout = ({ children }) => {

    const router = useRouter();

    const renderNavFooter = {
        header: !excludedUrls.header.includes(router.pathname),
        footer: !excludedUrls.footer.includes(router.pathname),
        both: !excludedUrls.both.includes(router.pathname),
    };
    
  return (
    <div className="layout">
      {renderNavFooter.header && <Navbar />}
        <main>{children}</main>
      {renderNavFooter.footer && <Footer />}
    </div>
  );
};

export default Layout;
