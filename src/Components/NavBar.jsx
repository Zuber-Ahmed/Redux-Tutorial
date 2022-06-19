import { Grid,Card,CardContent } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'


export const NavBar=()=>{

    return(
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Link to='/8th'>
                    <Card>
                        <CardContent>
                        Class VIII
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Link to='/9th'>
                    <Card>
                        <CardContent>
                        Class IX
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Link to='/10th'>
                    <Card>
                        <CardContent>
                        Class X
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </Grid>
    )
}