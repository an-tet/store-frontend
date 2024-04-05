import { Grid, Typography } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.contrastText',
      }}
    >
      <Grid
        item
        xs={12}
        minWidth='35vw'
        sx={{ color: 'primary.main', padding: 3, borderRadius: 2 }}
      >
        <Typography
          variant='h3'
          sx={{ mb: 6, textAlign: 'center', color: 'primary.light' }}
        >
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
