import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/order
import Layout from 'src/pages/layout';
import 'src/styles/globals.css';

// TODO: ページごとにヘッダーのテキストを分ける

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
