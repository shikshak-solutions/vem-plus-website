import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ContactUs from "./ContactUs";

export default function Contact() {

    return (
        <>
            <Box py={6} sx={{ background: '#FFFFFF' }}>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography color='primary.main' fontWeight={600} textAlign='center'>
                        Get in Touch
                    </Typography>
                    <Typography variant="h2" mb={4}>
                        Contact Us
                    </Typography>
                </Container>
                <ContactUs/>

            </Box>
            <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)'  }}>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography color='primary.main' fontWeight={600} textAlign='center'>
                        Reach Us
                    </Typography>
                    <Typography variant="h2" mb={4}>
                        Our Location
                    </Typography>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.443504630633!2d77.0657238121329!3d28.40587157568828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22689d145c33%3A0xb70c9f69827b3!2sEmerald%20Plaza!5e0!3m2!1sen!2sin!4v1732531414953!5m2!1sen!2sin" width="100%" height="300" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0">
                        </iframe>
                </Container>


            </Box>
        </>



    )
}
