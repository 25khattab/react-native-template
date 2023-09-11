import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const queryClient = new QueryClient();

export function APIProvider({children}: {children: React.ReactNode}) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
