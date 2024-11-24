// Importamos las dependencias necesarias
import PropTypes from 'prop-types'; // Para definir los tipos de propiedades del componente
import { memo } from 'react'; // Para optimizar el componente mediante memoización
// @mui
import { Box } from '@mui/material'; // Componente Box de Material-UI
//
import { StyledRootScrollbar, StyledScrollbar } from './styles'; // Importamos los componentes estilizados para el scrollbar

// ----------------------------------------------------------------------

// Definimos las propiedades esperadas para el componente Scrollbar
Scrollbar.propTypes = {
  sx: PropTypes.object, // Propiedad para estilos adicionales
  children: PropTypes.node, // Propiedad para los nodos hijos que se renderizarán dentro del scrollbar
};

// Definimos el componente Scrollbar
function Scrollbar({ children, sx, ...other }) {
  // Detectamos el user agent para determinar si estamos en un entorno del lado del servidor (SSR) o en un navegador
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  // Verificamos si el dispositivo es móvil mediante una expresión regular que busca palabras clave en el user agent
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // Si el dispositivo es móvil, renderizamos un Box con overflow horizontal habilitado
  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  // Para dispositivos de escritorio, renderizamos el scrollbar estilizado
  return (
    <StyledRootScrollbar>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
}

// Exportamos el componente envuelto en memo para evitar re-renderizados innecesarios
export default memo(Scrollbar);