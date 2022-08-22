import { useState, useEffect } from "react";
import {
    collection,
    query,
    orderBy,
    limit,
    getDocs,
    where,
    startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(category, updateCounter, lastVisible) {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function getImages() {
            let q;
            if (lastVisible) {
                q = query(
                    collection(db, category),
                    orderBy("uploaded", "desc"),
                    startAfter(lastVisible),
                    limit(25)
                );
            } else {
                q = query(
                    collection(db, category),
                    orderBy("uploaded", "desc"),
                    limit(25)
                );
            }

            const docsSnap = await getDocs(q);
            let newImages = [];
            docsSnap.docs.forEach((doc, index) => {
                newImages = [...newImages, doc];
                // console.log(doc.data());
            });
            setImages(newImages);
        }

        getImages();
    }, [category, lastVisible, updateCounter]);
    return [images];
}

export default useGetImages;
