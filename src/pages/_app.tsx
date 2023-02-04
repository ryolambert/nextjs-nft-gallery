import React from 'react';
import { Rubik } from '@next/font/google';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

import BaseLayout from '~/layouts/BaseLayout';
import { cl } from '~/lib/utils';

import '~/styles/global.css';

const font = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Number.POSITIVE_INFINITY,
            retry: 1,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={cl('font-sans text-white antialiased', font.variable)}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </main>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
