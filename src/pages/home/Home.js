import React from 'react';
import { useSnackbar } from 'notistack';
import Upload from '../../components/upload/Upload'
import Loading from '../../components/loading/Loading';
import { Button } from '@mui/material';


const Home = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const showMsg = () => {
        enqueueSnackbar("hallo");
    }

    return (
        <>
            <h1>Home</h1>
            <Upload />
            <Loading />

            <Button onClick={showMsg}>show</Button>

        </>
    )
}

export default Home
