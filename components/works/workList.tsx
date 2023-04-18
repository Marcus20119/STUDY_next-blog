import { Work } from '@/models';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { WorkCard } from './workCard';

interface IWorkList {
  workList: Work[];
}

const WorkList: React.FC<IWorkList> = ({ workList }) => {
  if (workList.length === 0) return null;

  return (
    <Box>
      {workList.map(work => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
};

export { WorkList };
