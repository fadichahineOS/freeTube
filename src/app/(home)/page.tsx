import { trpc } from "@/trpc/server"
import { PageClient } from "@/app/(home)/client";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
export default async function Home() {

    void trpc.hello.prefetch({ text: "Fadi" }  )

    return (
      <HydrateClient>
          <Suspense fallback={<p>Loading</p>}>
              <ErrorBoundary fallback={<p>Error</p>}>
                <PageClient/>
              </ErrorBoundary>
          </Suspense>
      </HydrateClient>
  );

}
