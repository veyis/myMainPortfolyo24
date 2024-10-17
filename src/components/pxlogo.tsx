const Pxlogo = ({ className = "" }) => {
    return (
      <div className={`relative flex items-center space-x-0.5 ${className}`}>
        <span
          className="relative text-4xl lg:text-5xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          pxl
          {/* Dot on top of the "x" */}
          <span
            className="absolute top-2.5 left-[58%] transform -translate-y-full -translate-x-1/2 w-2 h-2 bg-white rounded-full"
          ></span>
        </span>
        <span
          className="text-4xl lg:text-5xl font-bold text- tracking-normal"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          peak
        </span>
      </div>
    );
  };
  
  export default Pxlogo;
  
