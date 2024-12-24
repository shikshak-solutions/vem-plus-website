import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg'
import CustomizedAccordions from "../../Accordion/Accordion";

export default function FAQs() {

    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'At Vem Plus Urgent Care, we provide comprehensive, convenient, and compassionate medical services for your entire family. Our experienced professionals are dedicated to delivering personalized care in a state-of-the-art facility, ensuring your family health is our top priority.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'At VEM Plus Urgent Care, we stand out by offering immediate, comprehensive medical services without the need for appointments. Our experienced team provides personalized care in a state-of-the-art facility, ensuring prompt attention to your health needs. We are committed to promoting well-being within our community through health education and preventive care initiatives.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'At VEM Plus Urgent Care, we are dedicated to providing trusted and experienced senior care with compassion and love. Our team of skilled healthcare professionals offers personalized attention to meet the unique needs of each senior patient. We prioritize creating a welcoming environment where seniors feel valued and cared for, ensuring their health and well-being are our top priorities.'
        },
        {
            question: 'No appointment for emergency cases?',
            answer: 'At VEM Plus Urgent Care, we understand that emergencies require immediate attention. That\'s why we offer walk-in services for urgent medical needs—no appointment necessary. Our experienced healthcare professionals are ready to provide prompt and compassionate care when you need it most.'
        }
    ]

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>
                <Grid container alignItems='center' spacing={5}>

                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
