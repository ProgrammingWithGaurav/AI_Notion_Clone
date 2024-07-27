"use client";
import React from "react";
import { LiveblocksProvider } "@liveblocks/react/suspense";

export default function LiveBlocksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error("Missing NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY");
  }
  return <LiveblocksProvider throttle={16} authEndpoint={'/auth-endpoint'}>{children}</LiveblocksProvider>;
}
