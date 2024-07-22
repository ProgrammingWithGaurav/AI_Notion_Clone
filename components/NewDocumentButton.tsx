"use client";
import React, { useTransition } from "react";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

export default function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = async () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };
  return (
    <Button
      onClick={handleCreateNewDocument}
      disabled={isPending}
      variant={"default"}
    >
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}
