import { useState, useEffect } from "react";
import ShortLinkList from "./ShortLinkList";
import './Shorter.css'

const Shooter = () => {
	const [url, setUrl] = useState('')
	const [listUrl, setListUrl] = useState([])

	const handleChange = (e) => {
		e.preventDefault();
		let urlUser = e.target.value;

		if (urlUser.includes("instagram")) {
			setUrl(urlUser.replace(/.com\//, ".com\\"))
		}
		else {
			setUrl(urlUser)
		}

	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (url) {
			const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
			const data = await res.json()
			setListUrl(prevState =>
				[...prevState, { url: url, shortLink: data.result.short_link }]
			)
		}
	}

	useEffect(() => {
		console.log(listUrl)
	}, [listUrl])



	return (
		<div
			className=" rounded-lg 
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            p-6 shadow-lg sm:justify-between my-24 px-4 py-10 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit}>
				<label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Link</label>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</div>
					<input type="text" id="search"
						className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Shorten a link here..."
						pattern="[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
						onChange={handleChange}
					/>

					<button type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"> Shorter in</button>
				</div>
			</form>

			<div className="list-short">
				{
					listUrl.map(res => (
						<ShortLinkList key={res.length} props={res} />
					)
					)
				}
			</div>
		</div>
	)
}
export default Shooter