import DocumentTitle from "react-document-title";
import Sidebar from '../../../components/shared/Sidebar';
import Navbar from '../../../components/shared/Navbar';
import Footer from '../../../components/shared/Footer';

const BackendLayout = ({ children, title }) => {
    return (
        <>
            <DocumentTitle title={title + " | Smart Stock"} />
            <div className="wrapper">
                <Sidebar />
                <div className="main">
                    <Navbar />
                    <main className="content">
                        <div className="container-fluid" p-0>
                            {children}
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default BackendLayout;
