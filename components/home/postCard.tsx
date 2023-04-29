import { Post } from '@/models';
import { Card, CardContent } from '@mui/material';
import { PostItem } from '../blog';

interface IPostCard {
  post: Post;
}

const PostCard: React.FC<IPostCard> = ({ post }) => {
  if (!post) return null;
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
