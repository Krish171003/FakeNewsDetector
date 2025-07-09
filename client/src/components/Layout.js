const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;
