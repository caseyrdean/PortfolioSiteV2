import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from './firebaseConfig';

export const uploadPhoto = async (file: File) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
};

export const fetchPhotoURL = async (fileName: string) => {
    const storageRef = ref(storage, `images/${fileName}`);
    const url = await getDownloadURL(storageRef);
    return url;
};
