import React from 'react';
import SmartPhone from './components/SmartPhone';
import Laptop from './components/Laptop';
import Fragrances from './components/Fragrances';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Tabs, 
  Tab, 
  ThemeProvider, createTheme, CssBaseline, Container, Button,
  PaletteMode,
  IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import All from './components/All';

function App() {
  const [tabValue, setTabValue] = React.useState(0);
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-sky-50 min-h-screen">
        <Container maxWidth="lg">       
          <div className="  mx-auto w-9/12 max-w-full">
            <AppBar className='mt-6 rounded-3xl' position="static" color="default">
              <Toolbar className=''>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   Products
                </Typography>
                <Button variant="contained" color="primary" size='small'
                  >LOGIN
                </Button>
                <IconButton color="primary">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="primary">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton color="primary">
                  <LogoutIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Typography variant="h2" align="center" sx={{ my: 4 }}>
              Products
            </Typography>

            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} centered>
              <Tab label="ALL"/>
              <Tab label="LAPTOP" />
              <Tab label="SMARTPHONES" />
              <Tab label="FRAGRANCES" />
            </Tabs>
              {tabValue === 0 && <All/>}
              {tabValue === 1 && <Laptop/>}
              {tabValue === 2 && <SmartPhone/>}
              {tabValue === 3 && <Fragrances/>}   
          </div> 
        </Container>
      </div>
    </ThemeProvider>
    
    
  )
}

export default App
