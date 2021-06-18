import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  children: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
