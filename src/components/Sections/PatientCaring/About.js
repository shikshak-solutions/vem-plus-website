import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../../assets/about.png'
import tick from '../../../assets/tick-blue - Copy.png';

export default function About() {
    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container spacing={6} alignItems='center'>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                        </Typography>
                        <Typography variant="h2" mb={1}>
                        <span style={{ color: '#262262' }}>About</span>
                        <span style={{ color: '#ED1C24' }}>Us</span>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                        VEM Plus Urgent Care is dedicated to providing exceptional healthcare services for all ages. Our mission is to offer quick, accessible, and quality medical attention without the hassle of appointments or long wait times. We are staffed with experienced healthcare professionals and state-of-the-art equipment to ensure accurate diagnosis and effective treatment.
                        <br/>
                        At VEM Plus Urgent Care, we believe in creating a compassionate and welcoming environment for everyone. Our focus is on personalized care that meets the unique needs of each patient. We’re committed to promoting health and well-being within our community through education and preventive healthcare initiatives.
                        </Typography>

                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                />
                            </ListItem>
                        </List>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
