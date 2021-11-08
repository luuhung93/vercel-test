import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'

import 'tailwindcss/tailwind.css'

import * as gtag from '../utils/gtag'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return <>
		{/* Global Site Tag (gtag.js) - Google Analytics */}
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
		/>
		<Script
			id="gtag-init"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${gtag.GA_TRACKING_ID}', {
				page_path: window.location.pathname,
				});
			`,
			}}
		/>
		<Script
			strategy="afterInteractive"
			src={`//static.getclicky.com/101068026.js`}
		/>

		<Script
			id="adthrive-init"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
				(function(w, d) {
					w.adthrive = w.adthrive || {};
					w.adthrive.cmd = w.adthrive.cmd || [];
					w.adthrive.plugin = 'adthrive-ads-manual';
					w.adthrive.host = 'ads.adthrive.com';
				   
					var s = d.createElement('script');
					s.async = true;
					s.referrerpolicy='no-referrer-when-downgrade';
					s.src = 'https://' + w.adthrive.host + '/sites/5c471c4cae016d01cdef36f8/ads.min.js?referrer=' + w.encodeURIComponent(w.location.href) + '&cb=' + (Math.floor(Math.random() * 100) + 1);
					var n = d.getElementsByTagName('script')[0];
					n.parentNode.insertBefore(s, n);
				})(window, document);
			`,
			}}
		/>
		<Component {...pageProps} />
	</>
}
export default App
