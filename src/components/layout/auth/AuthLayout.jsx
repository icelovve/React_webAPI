import DocumentTitle from "react-document-title";

const AuthLayout = ({ children , title = "Home"}) => {
    return (
        <>
            <DocumentTitle title= { title +" | Smart Stock" }/>
            <div className='bg-secondary-emphasis'>
                <div className='d-flex align-items-center justify-content-center vh-100 rounded-2xl'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
