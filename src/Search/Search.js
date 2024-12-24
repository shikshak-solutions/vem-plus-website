import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../assets/home_img.png'
import publications from '../assets/publications.png'
import certifications from '../assets/certifications.png'
import about_2 from '../assets/about_2.png'
export default function AboutPage() {
    return (
        <>
            <Box py={6} sx={{ background: '#FFFFFF' }}>
                <Container>
                    <Grid container spacing={6} alignItems='center'>

                        <Grid item xs={12} md={6}>
                            <Typography
                                fontWeight={600}
                                color="primary.main"
                            >
                            </Typography>
                            <Typography variant="h2" mb={1}>
                                About <Box component='span' color='primary.main'>Us</Box>
                            </Typography>
                            <Typography color='#77829D' lineHeight={1.8}>
                                VEM Plus Urgent Care is dedicated to providing exceptional healthcare services for all ages. Our mission is to offer quick, accessible, and quality medical attention without the hassle of appointments or long wait times. We are staffed with experienced healthcare professionals and state-of-the-art equipment to ensure accurate diagnosis and effective treatment.
                                <br/>
                                At VEM Plus Urgent Care, we believe in creating a compassionate and welcoming environment for everyone. Our focus is on personalized care that meets the unique needs of each patient. We’re committed to promoting health and well-being within our community through education and preventive healthcare initiatives.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component='img'
                                src={about_2}
                                width={1}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
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
                                Doctor's <Box component='span' color='primary.main'>Profile</Box>
                            </Typography>
                            <Typography color='#77829D' lineHeight={1.8}>
                               Dr. Amit Vishen, With Over 12 years of growing Experience in Emergency Medicine, Achieved Emergency Physician of year award 2019(in Asian conference of Emergency Medicine) through Clinical excellence, Administrative and communication skills which are core strength of learnings. Worked with Central govt., state Govt. and corporate Hospital and SEMI. Experienced in establishing Emergency Department, training, develops and improvise process to ensure high Quality clinical care and safety of patient with vision to excel.
                                <br/>
                            </Typography>

                            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Speciality : Emergency Medicine'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Degree : MBBS(China), MEM, FMGE'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Experience : 12+ Years'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                            </List>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box py={6} sx={{ background: '#FFFFFF' }}>
                <Container>
                    <Grid container spacing={6} alignItems='center'>

                        <Grid item xs={12} md={6}>
                            <Typography
                                fontWeight={600}
                                color="primary.main"
                            >
                            </Typography>
                            <Typography variant="h2" mb={1}>
                                Publications : <Box component='span' color='primary.main'></Box>
                            </Typography>
                            <Typography color='#77829D' lineHeight={1.8}>
                                1. Verma A, Chitransh V, Jaiswal S, Vishen A, Sheikh WR, Haldar M, et al. Guidewire Entrapped in the Right Ventricle: A Rare Complication of Hemodialysis Catheter Insertion. Indian J Crit Care Med 2020;24(1):80-81.
                                <br/>
                                2. Verma A, Jaiswal S, Vishen A, Sheikh WR, Haldar M, Ahuja R, et al. Reply to in Response to Guidewire Entrapped in the Right Ventricle. Indian J Crit Care Med2020;24(7):608.
                                <br/>
                                3. Verma A, Vishen A, Jaiswal S, Sheikh WR, Haldar M, Ahuja R, Khatai AA. A rare case of acute onset fatal venous gangrene. 2021 June; 10(6)
                                <br/>
                                4. Mallick T, Verma A, Jaiswal S, Haldar M, Sheikh WR, Vishen A, Snehy A, Ahuja R Comparison of the time to successful intubation using Macintosh laryngoscope or KingVision video laryngoscope in the emergency department: A prospective observational study. Turk J Emerg Med 2020;20:22-7
                                <br/>
                                5. Verma A, Snehy A, Vishen A, Sheikh WR, Haldar M, Jaiswal S. Ketamine Use Allows Noninvasive Ventilation in Distressed Patients with Acute Decompensated Heart Failure. Indian J Crit Care Med 2019;23(4):191-192

                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component='img'
                                src={publications}
                                width={1}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
                <Container>
                    <Grid container spacing={6} alignItems='center'>

                        <Grid item xs={12} md={6}>
                            <Box
                                component='img'
                                src={certifications}
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
                                Certificates : <Box component='span' color='primary.main'></Box>
                            </Typography>
                            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Advance trauma management course-2021, from Harvard Medical School, USA.'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Basic Life Support and Advance Life Support Provider Course- 2022'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='Neonatal Resuscitation Program- December 2022'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                                <ListItem disableGutters>
                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                        <Box component='img' src={tick} height={22} width={22} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary='BLS and ACLS Instructor course 2023, through Max healthcare, Saket Delhi'
                                        primaryTypographyProps={{ fontSize: { xs: 14, md: 18 }, fontWeight: 500, color: '#262262' }}
                                    />
                                </ListItem>
                            </List>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>

    )
}

import tick from '../assets/arrow_right red.png';
