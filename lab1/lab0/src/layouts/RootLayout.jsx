import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout({children, items}) {
    return (
        <>
            <Header items={items} />
            {children}
            <Footer />
        </> 
     );
}

export default RootLayout;