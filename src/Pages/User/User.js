import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../App'
import { Switch, Route, Link } from 'react-router-dom'
import { getUserData } from '../../API/apiData'
import UserDashboard from "./Dashboard/UserDashboard"
import UserProfile from "./Profile/UserProfile"
export const UserContext = React.createContext()

export default function User() {
	const { handleLogout, BASE_URL } = useContext(DataContext)
	const [userData, setUserData] = useState({})


	useEffect(() => {
		const username = window.localStorage.getItem("username")
		const token = window.localStorage.getItem("token")
		const setData = async () => {
			const data = await getUserData(BASE_URL, username, token)
			setUserData({ ...data })
		}
		setData()
	}, [])

	if (userData.username === undefined) {
		return <h2>Loading</h2>
	} else {
		return (
			<div className="w-screen flex-col justify-start items-center tracking-widest">
				<nav className="py-3 px-8 w-full text-gray-50 bg-gradient-to-r from-darkBlue blue to-black flex justify-between items-center">
					<div className="flex justify-start items-center space-x-5">
						<svg width="28" height="35" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M16.7498 0.00353354C22.5898 0.00353354 27.3458 4.75953 27.3458 10.6055L27.3456 13.7587C30.896 14.9944 33.45 18.3744 33.45 22.3411V30.9191C33.45 35.9291 29.376 40.0031 24.366 40.0031H9.084C4.074 40.0031 0 35.9291 0 30.9191V22.3411C0 18.3751 2.55304 14.9956 6.10241 13.7594L6.1038 10.6055C6.1158 7.72553 7.2298 5.06753 9.2398 3.07553C11.2518 1.08153 13.9078 -0.0724665 16.7498 0.00353354ZM24.366 16.2571H9.084C5.728 16.2571 3 18.9851 3 22.3411V30.9191C3 34.2751 5.728 37.0031 9.084 37.0031H24.366C27.72 37.0031 30.45 34.2751 30.45 30.9191V22.3411C30.45 18.9851 27.72 16.2571 24.366 16.2571ZM16.7246 22.9087C17.5526 22.9087 18.2246 23.5807 18.2246 24.4087V28.8507C18.2246 29.6787 17.5526 30.3507 16.7246 30.3507C15.8966 30.3507 15.2246 29.6787 15.2246 28.8507V24.4087C15.2246 23.5807 15.8966 22.9087 16.7246 22.9087ZM16.7438 3.00353H16.7118C14.6858 3.00353 12.7878 3.78353 11.3538 5.20553C9.9098 6.63353 9.1118 8.53953 9.1038 10.5715L9.102 13.256H24.344L24.3458 10.6055C24.3458 6.41353 20.9358 3.00353 16.7438 3.00353Z" fill="white" />
						</svg>
						<h2 className="text-2xl font-bold uppercase"><span className="font-thin">{userData.firstName}'s</span> CODELOCKR</h2>
					</div>
					<div className="flex justify-start items-center space-x-5">
						<h3 className="text-sm font-thin uppercase">{userData.firstName} {userData.lastName}</h3>
						<svg className="" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d)">
								<path d="M13.1966 15.1512C8.23662 15.1512 4 15.9332 4 19.0613C4 22.1904 8.21017 23 13.1966 23C18.1566 23 22.3932 22.2192 22.3932 19.09C22.3932 15.9608 18.1842 15.1512 13.1966 15.1512Z" fill="white" />
								<path d="M13.1967 12.1717C16.5754 12.1717 19.2825 9.4634 19.2825 6.08583C19.2825 2.70826 16.5754 0 13.1967 0C9.8191 0 7.11084 2.70826 7.11084 6.08583C7.11084 9.4634 9.8191 12.1717 13.1967 12.1717Z" fill="url(#paint0_radial)" />
							</g>
							<defs>
								<filter id="filter0_d" x="0" y="0" width="26.3932" height="31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
								</filter>
								<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.1967 6.08583) rotate(90) scale(6.08583)">
									<stop stopColor="#DBDBDB" />
									<stop offset="1" stopColor="#CFCFCF" />
								</radialGradient>
							</defs>
						</svg>
					</div>
					<div className="absolute right-4 top-16 -mt-1 border border-gray-900 border-t-0 bg-gray-300 text-gray-900">
						<ul className="p-4 flex-col font-thin text-sm space-y-2">
							<li className="hover:text-darkBlue hover:underline">
								<Link to={`/user/${userData.username}/dashboard`}>Dashboard</Link>
							</li>
							<li className="hover:text-darkBlue hover:underline">
								<Link to={`/user/${userData.username}/profile`}>Profile</Link>
							</li>
							<li className="cursor-pointer hover:text-darkBlue hover:underline">
								<p onClick={handleLogout}>Logout</p>
							</li>
						</ul>
					</div>
				</nav>
				<main className="text-gray-900">
					<UserContext.Provider value={{ userData }}>
						<Switch>
							<Route path="/user/:username/profile" component={UserProfile} />
							<Route path="/user/:username/" component={UserDashboard} />
						</Switch>
					</UserContext.Provider>
				</main>
			</div >
		)
	}
}