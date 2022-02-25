import * as React from 'react';

import { Avatar, Box, Container } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies

function UserPage() {
  return (

    <Container>
      <div>
        <Box sx={{ width: '50%' }}>
          1
          <Box sx={{ width: '40%', height: '100%' }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </Box>

          <div>2</div>
        </Box>

      </div>

    </Container>

  );
}

export default UserPage;
