import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout({children, items}) {
    return (
        <>
            <Header items={items} />
            <main className="container mt-5 pt-5 mb-5 pb-5">
                {children}
            </main>
            <Footer />
        </> 
     );
}

export default RootLayout;