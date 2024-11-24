// routes
import Router from '../src/routes';
// theme
import ThemeProvider from '../src/theme';
// locales
import ThemeLocalization from '../src/locales';
// components
import { StyledChart } from '../src/components/chart';
import SnackbarProvider from '../src/components/snackbar';
import { ThemeSettings } from '../src/components/settings';
import { MotionLazyContainer } from '../src/components/animate';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <ThemeLocalization>
            <SnackbarProvider>
              <StyledChart />
              <Router />
            </SnackbarProvider>
          </ThemeLocalization>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
