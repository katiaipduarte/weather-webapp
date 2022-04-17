/** @type {import('next').NextConfig} */
const nextConfig = {
	//needs to be false because the new strict mode since React 18 default behaviors rusn twice.
	// See more: https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
	reactStrictMode: false,
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
