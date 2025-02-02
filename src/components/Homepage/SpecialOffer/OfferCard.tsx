import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface OfferCardProps {
    image: string;
    title: string;
    description: string;
}

export default function OfferCard({
    image,
    title,
    description,
}: OfferCardProps) {
    return (
        <div style={{ filter: "drop-shadow(0.5rem 0.5rem 0.75rem #E1E1E1)" }}>
            <Card
                sx={{
                    width: { xs: "100%", sm: 500 },
                    height: { xs: "auto", sm: 500 },
                    flexShrink: 0,
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: { xs: "auto", sm: "75%", lg: '75%' },
                        objectFit: "contain",
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="left">
                        {description.length > 120
                            ? description.slice(0, 120).concat("...")
                            : description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
