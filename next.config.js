const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: process.env.NEXT_PUBLIC_LIVE_SITE ? '/temp-pattern-platform-prototype' : '',
};

module.exports = nextConfig;
