const Footer = () => {
  return (
    <div className="border border-solid shadow-2xl text-black py-6">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Foody</h1>
        <p className="text-sm mb-2">Delicious food delivered to your doorstep!</p>
        <p className="text-sm mb-2">Made with love by Shraddha</p>
        <div className="flex justify-center mt-4">
          <a href="https://github.com/Shraddhachandel" target="_blank" rel="noopener noreferrer" className="text-blue-50-400 hover:text-blue mx-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shraddha-chandel/" target="_blank" rel="noopener noreferrer" className="text-black-400 hover:text-blue mx-2">
            LinkedIn
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
