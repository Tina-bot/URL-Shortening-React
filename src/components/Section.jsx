const Section = () => {
    return (
        <section className="bg-gray-900 text-white ">
            <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="https://storyset.com/images/attribution/1.svg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Boost your links</h2>

                        <p className="mt-4 text-gray-600"  id="shorter">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                            veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <a
                            href="#shorter"
                            className="mt-8 inline-flex items-center rounded border border-teal-600 bg-teal-600 px-8 py-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            <span className="text-sm font-medium"> Get Started </span>

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
                </div>
            </div>
        </section>

    )
}

export default Section