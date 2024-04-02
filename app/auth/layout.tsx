const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center  bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
            {children}
        </div>
    );
}

export default AuthLayout;