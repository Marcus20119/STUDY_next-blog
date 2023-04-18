import { Post } from '@/models';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';

interface IPostCard {
  post: Post;
}

const PostCard: React.FC<IPostCard> = ({ post }) => {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {post.title}
          </Typography>

          <Stack direction="row" my={2}>
            <Typography variant="body1">
              {format(Number(post.publishedDate), 'dd MMM yyyy')}
            </Typography>

            <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

            <Typography variant="body1">{post.tagList.join(', ')}</Typography>
          </Stack>

          <Typography variant="body2">{post.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
