import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper
} from '@mui/material'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Card as BootstrapCard, Button as BootstrapButton, Row, Col } from 'react-bootstrap'

const theme = createTheme({
  palette: {
    primary: { main: '#6366f1' },      // Indigo
    secondary: { main: '#ec4899' },    // Pink
    success: { main: '#10b981' },      // Emerald
    warning: { main: '#f59e0b' },      // Amber
    info: { main: '#0ea5e9' }          // Sky Blue
  },
  typography: {
    fontFamily: '\"Inter\", \"Segoe UI\", sans-serif'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)' }}>
        <AppBar position="static" sx={{ width: '100%', py: 2, background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)' }}>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', letterSpacing: '0.5px' }}>
              UI Framework Showcase
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2}>
            {/* LEFT SIDE - MATERIAL UI */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Paper elevation={0} sx={{ p: 1.5, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)', mb: 1.5, border: '2px solid #6366f1', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: '600', textAlign: 'center', color: '#4f46e5' }}>
                    Material UI Collection
                  </Typography>
                  <Typography variant="caption" sx={{ textAlign: 'center', mt: 0.5, fontWeight: '500', display: 'block', color: '#6b7280' }}>
                    Modern Components with Advanced Features
                  </Typography>
                </Paper>

                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: '0 4px 15px rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: 2,
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(99, 102, 241, 0.2)',
                        borderColor: '#6366f1'
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center', background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }}>
                        <Typography variant="h6" sx={{ fontWeight: '600', mb: 1, color: '#6366f1' }}>
                          Users
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
                          1,234
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: '0 4px 15px rgba(236, 72, 153, 0.1)',
                      border: '1px solid rgba(236, 72, 153, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: 2,
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(236, 72, 153, 0.2)',
                        borderColor: '#ec4899'
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center', background: 'linear-gradient(180deg, #fff5f9 0%, #ffffff 100%)' }}>
                        <Typography variant="h6" sx={{ fontWeight: '600', mb: 1, color: '#ec4899' }}>
                          Revenue
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
                          ₹45,678
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={12}>
                    <Card sx={{ 
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: 2,
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(16, 185, 129, 0.2)',
                        borderColor: '#10b981'
                      }
                    }}>
                      <CardContent sx={{ p: 2, textAlign: 'center', background: 'linear-gradient(180deg, #f0fdf6 0%, #ffffff 100%)' }}>
                        <Typography variant="h6" sx={{ fontWeight: '600', mb: 1, color: '#10b981' }}>
                          Orders
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1f2937', mb: 1 }}>
                          567
                        </Typography>
                        <Button variant="contained" size="small" sx={{ px: 3, py: 0.5, fontSize: '0.9rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', textTransform: 'none', fontWeight: '600', '&:hover': { background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' } }}>
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Paper elevation={0} sx={{ p: 1, mt: 1.5, background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)', border: '2px solid #06b6d4', borderRadius: 1.5 }}>
                  <Typography variant="caption" sx={{ fontWeight: '600', color: '#0891b2', display: 'block' }}>
                    ✨ Features: Advanced Theming • Dynamic Styling • Smooth Transitions
                  </Typography>
                </Paper>
              </Box>
            </Grid>

            {/* RIGHT SIDE - BOOTSTRAP */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Paper elevation={0} sx={{ p: 1.5, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)', mb: 1.5, border: '2px solid #ec4899', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: '600', textAlign: 'center', color: '#be185d' }}>
                    Bootstrap Collection
                  </Typography>
                  <Typography variant="caption" sx={{ textAlign: 'center', mt: 0.5, fontWeight: '500', display: 'block', color: '#6b7280' }}>
                    Utility-First CSS Approach with Variants
                  </Typography>
                </Paper>

                <div>
                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Users
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                        1,234
                      </BootstrapCard.Text>
                    </BootstrapCard.Body>
                  </BootstrapCard>

                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Revenue
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                        ₹45,678
                      </BootstrapCard.Text>
                    </BootstrapCard.Body>
                  </BootstrapCard>

                  <BootstrapCard className="mb-2 shadow">
                    <BootstrapCard.Body style={{ padding: '1rem', textAlign: 'center' }}>
                      <BootstrapCard.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c00000' }}>
                        Orders
                      </BootstrapCard.Title>
                      <BootstrapCard.Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '0.8rem' }}>
                        567
                      </BootstrapCard.Text>
                      <BootstrapButton variant="danger" size="sm" style={{ padding: '6px 20px', fontSize: '0.9rem' }}>
                        View Details
                      </BootstrapButton>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </div>

                <Paper elevation={3} sx={{ p: 1, mt: 1.5, backgroundColor: '#fce4ec', border: '2px solid #e91e63' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#880e4f', display: 'block' }}>
                    🎯 Features: className utilities, Inline styles, Variant props
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          {/* COMPARISON BOX AT BOTTOM */}
          <Paper elevation={0} sx={{ p: 2, mt: 2, background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0.02) 100%)', border: '2px solid rgba(249, 115, 22, 0.3)', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 1.5 }}>
              🔍 Framework Comparison
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 100%)', borderRadius: 2, border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                  <Typography variant="body1" sx={{ fontWeight: '700', color: '#4f46e5', mb: 1 }}>
                    Material UI
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.8, color: '#374151', fontWeight: '500' }}>
                    ✓ sx prop for inline styling<br/>
                    ✓ Comprehensive theme system<br/>
                    ✓ Built-in animations & effects<br/>
                    ✓ Production-ready components
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.02) 100%)', borderRadius: 2, border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                  <Typography variant="body1" sx={{ fontWeight: '700', color: '#be185d', mb: 1 }}>
                    Bootstrap
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.8, color: '#374151', fontWeight: '500' }}>
                    ✓ className utility classes<br/>
                    ✓ Lightweight & familiar<br/>
                    ✓ Simple variant system<br/>
                    ✓ Utility-first methodology
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
