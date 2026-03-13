import Header from "@/components/header";
import Footer from "@/components/footer";
import Logo from "@/components/logo"
import Navigation from "@/components/navigation"

const Layout = ({ outlet }) => {
  return (
    <div>
      <Header branding={<Logo />} navigation={<Navigation />} darkVariant />
      <main>{outlet}</main>
      <Footer branding={<Logo />} copyrightNotice="&copy; 2026" />
    </div>
  );
};

export default Layout;
