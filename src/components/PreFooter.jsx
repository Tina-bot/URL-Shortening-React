const PreFooter =()=>{
    return(
        <div
          className="flex flex-col items-center gap-4 
          bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600
          rounded-lg bg-teal-600 p-6 shadow-lg sm:flex-row sm:justify-between"
        >
          <strong className="text-xl text-white sm:text-xl">
            Make Your Next Link More Easy!
          </strong>
    
          <a
            className="inline-flex items-center rounded-full border border-white bg-white px-8 py-3 text-teal-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
            href="#shorter"
          >
            <span className="text-sm font-medium"> Let's Get Started </span>
    
            <svg
              className="ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
    )
}
export default PreFooter