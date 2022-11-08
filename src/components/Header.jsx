import './Header.css'
const Header = () => {
    return (
        <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 rounded-full border-b-2 border-gray-800	">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path fill="none" d="M15.131,8.29c-0.944,0-1.711,0.766-1.711,1.71s0.767,1.711,1.711,1.711s1.71-0.767,1.71-1.711S16.075,8.29,15.131,8.29 M15.131,10.855c-0.472,0-0.855-0.383-0.855-0.855s0.384-0.855,0.855-0.855S15.986,9.528,15.986,10S15.603,10.855,15.131,10.855 M12.993,15.131c-0.236,0-0.428,0.191-0.428,0.427c0,0.237,0.191,0.429,0.428,0.429c0.235,0,0.427-0.191,0.427-0.429C13.42,15.322,13.229,15.131,12.993,15.131 M4.87,10.855c-0.473,0-0.855,0.383-0.855,0.856c0,0.471,0.383,0.854,0.855,0.854c0.472,0,0.854-0.384,0.854-0.854C5.724,11.238,5.341,10.855,4.87,10.855 M8.717,12.565c-0.708,0-1.283,0.574-1.283,1.283c0,0.708,0.574,1.282,1.283,1.282S10,14.557,10,13.849C10,13.14,9.426,12.565,8.717,12.565M8.717,14.275c-0.236,0-0.427-0.191-0.427-0.427c0-0.236,0.191-0.429,0.427-0.429s0.427,0.192,0.427,0.429C9.145,14.084,8.953,14.275,8.717,14.275 M11.283,10c-0.236,0-0.428,0.191-0.428,0.428c0,0.236,0.191,0.427,0.428,0.427c0.235,0,0.427-0.191,0.427-0.427C11.71,10.191,11.519,10,11.283,10 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552c0-4.722,3.828-8.551,8.551-8.551S18.552,5.278,18.552,10C18.552,14.723,14.723,18.552,10,18.552M7.435,4.014c-1.417,0-2.565,1.149-2.565,2.565c0,1.417,1.148,2.565,2.565,2.565C8.851,9.145,10,7.997,10,6.58C10,5.164,8.851,4.014,7.435,4.014 M7.435,8.29c-0.944,0-1.71-0.766-1.71-1.71c0-0.945,0.766-1.71,1.71-1.71c0.945,0,1.71,0.765,1.71,1.71C9.145,7.524,8.379,8.29,7.435,8.29"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Careers
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                href="#"
                            >
                                Login
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Register
                                </a>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header