import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/antd-overrides.css";
import { SWRConfig } from "swr";
import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: true,
                dedupingInterval: 10000,
                shouldRetryOnError: true,
                errorRetryCount: 2,
            }}
        >
            <ConfigProvider>
                <Component {...pageProps} />
            </ConfigProvider>
        </SWRConfig>
    );
}

export default MyApp;
