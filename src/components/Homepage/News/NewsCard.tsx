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
        <Card
            sx={{
                width: { xs: "100%", sm: 400 },
                height: { xs: "auto", sm: 450 },
                flexShrink: 0,
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width: "100%",
                    height: { xs: "auto", sm: "55%" },
                    objectFit: "cover",
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" align="center">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                    {date}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {description.length > 120
                        ? description.slice(0, 120).concat("...")
                        : description}
                </Typography>
            </CardContent>
        </Card>
    );
}
