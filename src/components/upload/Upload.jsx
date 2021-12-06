import React from 'react'
import { Input } from '@mui/material'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Upload = () => {
    const metadata = {
        // contentType: 'image/jpeg',
        // contentType: 'audio/mpeg',
        // contentType: 'video/mp4',
    };

    const upFile = (e) => {
        const file = e.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log(error.code);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    return (
        <>
            <p>upload</p>
            <Input type="file" onChange={upFile} />
        </>
    )
}

export default Upload
