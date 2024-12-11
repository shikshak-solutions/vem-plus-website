import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.footer" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={2}
          mb={3}
        >VEM Plus Urgent Care is committed to providing exceptional healthcare services for our community. Our team ensures quick and reliable care with a focus on your well-being. </Typography>
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
          <Typography
              fontWeight={600}
              color="#fff"
              fontSize={18}
              pt={2}
              mb={3}
          >Quick Links</Typography>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
          <Typography
              fontWeight={600}
              color="#fff"
              fontSize={18}
              pt={2}
              mb={3}
          >Services</Typography>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
          <Typography
          fontWeight={600}
          color="#fff"
          fontSize={18}
          pt={2}
          mb={3}
        >Contact Us</Typography>
            <Stack spacing={2}>
              <FooterLink>73, Ground Floor, Emerald Plaza, 65 Gurgaon</FooterLink>
              <FooterLink>+91 9716467981</FooterLink>
              <FooterLink>amit.vishen@vemplusurgentcare.com</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2024 VEM Plus Urgent Care. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
