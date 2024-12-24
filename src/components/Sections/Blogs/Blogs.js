import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import emergency from "../../../assets/emergency_room.png";
import MentalHealth from "../../../assets/mental_health.png";
import health from "../../../assets/regular_health.png";

export default function Blogs() {
    const cardsData = [
        {
            id: 1,
            image: MentalHealth,
            title: "6 Tips To Protect Your Mental Health When You're Sick",
            created: "Medical | March 31, 2024",
            createdBy: "Amit Vishen",
        },
        {
            id: 2,
            image: emergency,
            title: "Understanding When to Visit Urgent Care vs. the Emergency Room",
            created: "Medical | July 28, 2024",
            createdBy: "Amit Vishen",
        },
        {
            id: 3,
            image: health,
            title: "The Importance of Regular Health Check-Ups",
            created: "Medical | November 30, 2024",
            createdBy: "Amit Vishen",
        },
    ];

    return (
        <Box py={6}>
            <Container>
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Blog & News
                </Typography>
                <Typography textAlign="center" variant="h2" mb={2}>
                    Read Our Latest News
                </Typography>

                {/* Grid container for blog cards */}
                <Grid container spacing={4}>
                    {cardsData.map((card) => (
                        <Grid item xs={12} sm={6} md={4} key={card.id}>
                            <BlogCard data={[card]} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
