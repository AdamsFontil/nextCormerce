'use client'
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function Providers({ children }) {
  const client = React.useMemo(
    () =>
      new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
    []
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
