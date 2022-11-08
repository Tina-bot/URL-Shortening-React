import { useState } from "react"

const ShortLinkList = ({ props }) => {
    const [copy, setCopy] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(props.shortLink)
        setCopy(!copy)
    }
    return (
        <div>
            <div
                className="flex justify-center bg-white px-4 py-3 text-teal-600 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 max-sm:flex-col"
            >
                <p className="text-center font-semibold	 sm:text-left">
                    {props.url}

                </p>
                <p className="text-center font-medium sm:text-center">

                    {props.shortLink}

                </p>

                <button className="flex items-center rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 max-sm:justify-center"
                    onClick={handleCopy} >
                    <span className="text-sm font-medium"> {copy ? "Copied!" : "Copy"} </span>
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
                </button>
            </div>
            <hr />
        </div>
    )
}

export default ShortLinkList