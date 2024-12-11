import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard'
import icon1 from '../../../assets/refered.png'
import icon5 from '../../../assets/online-consultant.png'
import icon6 from '../../../assets/home-visit.png'
import icon7 from '../../../assets/genuine-treatment.png'
import assessmentIcon from "../../../assets/assessment.png";
import transportationIcon from "../../../assets/transportation.png";
import trainingIcon from "../../../assets/training.png";
import checkupIcon from "../../../assets/checkups.png";

export default function Specialization() {

    const data = [
        { icon: checkupIcon, title: 'Routine Health Checkups' },
        { icon: assessmentIcon, title: 'Emergency Assessments' },
        { icon: trainingIcon, title: 'Health Education' },
        { icon: transportationIcon, title: 'Safe Patient Transportation' },
        { icon: icon5, title: 'Online Consultant' },
        { icon: icon6, title: 'Home Visit' },
        { icon: icon1, title: 'Refered Cases' },
        { icon: icon7, title: 'Genuine Treatment' }
    ]

    return (
        <Box py={6} sx={{ background: '#FFFFFF' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h2" mb={4}>
                    Our Services
                </Typography>

                <Grid 
                container 
                spacing={{ xs: 1, md: 3 }} 
                rowSpacing={{xs:2}}
                mb={5} 
                justifyContent={'center'}>

                    {data.map(item => (
                        <Grid item xs={12} md={3} key={item.title}>
                            <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}

                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                >
                    View All
                </Button>

            </Container>
        </Box>
    )
}