import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon />
                    <Typography variant='h6'>Material UI Demo</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom
                        >
                            Photo Album
                        </Typography>
                        <Typography
                            variant='h6'
                            align='center'
                            color='textSecondary'
                            gutterBottom
                            paragraph
                        >
                            Hello this is Karthick, and I am learning how to use
                            MUI components on my react application.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained'>
                                        Main Call to Action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined'>
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    );
};

export default App;
