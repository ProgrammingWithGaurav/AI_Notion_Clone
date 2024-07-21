'use server';

import { adminDb } from "@/firebaes-admin";
import { auth } from "@clerk/nextjs/server";


export async function createNewDocument() {
    auth().protect();

    const { sessionClaims } = await auth();
    const docCollectionRef = adminDb.collection("documents");
    const newRef = await docCollectionRef.add({
        title: "New Doc"
    });

    await adminDb.collection('users').doc(sessionClaims?.email!);

}