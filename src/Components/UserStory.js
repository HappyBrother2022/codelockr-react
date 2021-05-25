export default function UserStory({ story }) {
	return (
		<div className="flex items-center space-x-8 pl-4 xl:pr-12 xl:w-5/12">
			<svg className="text-red-500 fill-current flex-shrink-0" width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.4211 25.9412C22.6611 25.9412 27.3684 21.1762 27.3684 14.8599C27.3684 8.54363 22.6611 3.7787 16.4211 3.7787C10.1811 3.7787 5.47368 8.54363 5.47368 14.8599C5.47368 21.1762 10.1811 25.9412 16.4211 25.9412ZM16.4211 9.31932C19.6451 9.31932 21.8947 11.5965 21.8947 14.8599C21.8947 18.1234 19.6451 20.4006 16.4211 20.4006C13.1971 20.4006 10.9474 18.1234 10.9474 14.8599C10.9474 11.5965 13.1971 9.31932 16.4211 9.31932ZM19.1579 28.7115H13.6842C6.13874 28.7115 0 34.9253 0 42.563V45.3333H5.47368V42.563C5.47368 37.9809 9.15747 34.2521 13.6842 34.2521H19.1579C23.6846 34.2521 27.3684 37.9809 27.3684 42.563V45.3333H32.8421V42.563C32.8421 34.9253 26.7034 28.7115 19.1579 28.7115ZM44.7857 0L40.9158 3.91722C44.5312 7.58234 46.5263 12.4525 46.5263 17.6302C46.5263 22.808 44.5312 27.6782 40.9158 31.3433L44.7857 35.2605C49.4383 30.5482 52 24.2873 52 17.6302C52 10.9732 49.4383 4.7123 44.7857 0V0Z" />
				<path d="M37.2626 8L33.3335 11.7376C34.909 13.2289 35.776 15.2164 35.776 17.3333C35.776 19.4502 34.909 21.4378 33.3335 22.9291L37.2626 26.6667C39.8858 24.175 41.3335 20.8624 41.3335 17.3333C41.3335 13.8043 39.8858 10.4917 37.2626 8Z" />
			</svg>
			<div>
				{story.link ?
					<a className="hover:text-red-600 underline" href={story.link} target="_blank" rel="noopener noreferrer"><h1 className="text-lg font-normal sm:text-xl">{story.name}</h1></a>
					: <h1 className="text-lg font-normal sm:text-xl">{story.name}</h1>}
				<p className="font-thin font-widest text-md sm:text-lg">{story.review}</p>
			</div>
		</div>
	)
}
