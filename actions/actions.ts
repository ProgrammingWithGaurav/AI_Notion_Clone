'use server';

import { adminDb } from "@/firebaes-admin";
import { auth } from "@clerk/nextjs/server";


export async function createNewDocument() {
    auth().protect();

    const { sessionClaims } = await auth();
    console.log(sessionClaims);
    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    });
    
    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email,
        createdAt: new Date(),
        role: 'owner',
        roomId: docRef.id
    });

    return {
        docId: docRef.id
    }
}