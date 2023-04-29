import { Post } from '@/models';
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import PostCard from './postCard';

interface IRecentPostsSection {}

const RecentPostsSection: React.FC<IRecentPostsSection> = ({}) => {
  const postList: Post[] = [
    {
      id: 1,
      title: 'Making a design system from scratch',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: '2022-06-15T03:00:00Z',
      tagList: ['Design', 'Pattern'],
      slug: '',
    },
    {
      id: 2,
      title: 'Creating pixel perfect icons in Figma',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: '2022-06-15T03:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      slug: '',
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link passHref legacyBehavior href="/blog">
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{
            '> div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map(post => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default RecentPostsSection;
