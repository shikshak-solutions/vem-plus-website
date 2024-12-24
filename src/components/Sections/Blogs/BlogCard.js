import { Box, Stack, Typography } from "@mui/material";
import person from '../../../assets/person.png'

export default function BlogCard({data}) {
    return (
        <>
        {data.map((data) => (
        <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2} key={data.id}>
            <Box
                component='img'
                src={data.image}
                width={1}
            />
            <Box p={2}>
                <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
                    {data.created}
                </Typography>
                <Typography component='h3' color='#262262' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
                    {data.title}
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={person}
                        height={32}
                        width={32}
                    />
                    <Typography color='#262262' fontSize={{ xs: 12, md: 16 }}>
                        {data.createdBy}
                    </Typography>
                </Stack>
            </Box>

        </Box>
        ))}
            </>
    )
}
