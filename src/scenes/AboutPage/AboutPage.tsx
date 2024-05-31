import { Container, Stack, Typography } from '@mui/material';
import heroImg from '../../assets/Me1.jpg';

function AboutPage() {
    const aboutMe = [
        'CompSci Student',
        'Born in Ventura, CA',
        'Loves Cats',
        'Has GMMK Pro Keeb',
    ];
    return (
        <>
            <Stack direction={'row'} spacing={2}>
                <Container>
                    <img src={heroImg} height={400} />
                </Container>
                <Container>
                    <Typography variant='h2'>About Maria Zavala</Typography>
                    <ul>
                        {aboutMe.map((info) => (
                            <Typography variant='subtitle1'>{info}</Typography>
                        ))}
                    </ul>
                </Container>
            </Stack>
        </>
    );
}

export default AboutPage;
