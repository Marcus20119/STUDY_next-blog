import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = ({}) => {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 8 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={5}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 12px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image
              src="/images/Ellipse_1.png"
              alt="Ellipse"
              width={240}
              height={240}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export { HeroSection };
