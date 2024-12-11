import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img from '../../assets/home - Copy.png';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" pt={2}>
                    <Box>
                        <Typography variant="h3" component="h1">Welcome to</Typography>
                        <Typography variant="h1" component="h1" mb={1}>
                            <span style={{ color: '#262262' }}>VEM Plus</span>
                            <span style={{ color: '#ED1C24' }}>Urgent Care</span>
                        </Typography>
                        <Typography color="#262262" fontSize={{ md: 20 }} mb={3}>
                            Your trusted partner for instant, essential, and specialized care without appointments.
                        </Typography>
                        <Link to="/search">
                            <button className="button" disableElevation>
                                Explore Our Services
                            </button>
                        </Link>
                    </Box>
                    <Box
                        component="img"
                        src={img}
                        width={{ xs: 1, md: '50%' }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    );
}
