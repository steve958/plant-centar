import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface NewsCardProps {
    image: string;
    title: string;
    description: string;
    date: string;
}

export default function NewsCard({
    image,
    title,
    description,
    date
}: NewsCardProps) {
    return (
        <div style={{ filter: 'drop-shadow(0.5rem 0.5rem 0.75rem #E1E1E1)' }}>
            <Card
                sx={{
                    width: { xs: '100%', sm: 400, lg: 400 },
                    height: { xs: 'auto', sm: 450, lg: 450 },
                    flexShrink: 0,
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        width: { lg: '120%', sm: '100%' },
                        position: 'relative',
                        right: { lg: "50px" },
                        height: { xs: 'auto', sm: '55%' },
                        objectFit: 'cover',
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        padding='10px'
                    >
                        {date}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                    >
                        {description.length > 120
                            ? description.slice(0, 120).concat('...')
                            : description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
