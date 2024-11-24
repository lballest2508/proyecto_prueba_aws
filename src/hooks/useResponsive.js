// Importamos los hooks y funciones necesarias de Material-UI (MUI)
import { useTheme } from '@mui/material/styles'; // Hook para acceder al tema actual de MUI
import useMediaQuery from '@mui/material/useMediaQuery'; // Hook para manejar consultas de medios (media queries)

// ----------------------------------------------------------------------

// Definimos un hook personalizado llamado useResponsive
export default function useResponsive(query, start, end) {
  // Obtenemos el tema actual utilizando el hook useTheme
  const theme = useTheme();

  // Creamos una consulta para verificar si el ancho de la pantalla es mayor o igual al breakpoint 'start'
  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  // Creamos una consulta para verificar si el ancho de la pantalla es menor o igual al breakpoint 'start'
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  // Creamos una consulta para verificar si el ancho de la pantalla está entre los breakpoints 'start' y 'end'
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  // Creamos una consulta para verificar si el ancho de la pantalla es exactamente igual al breakpoint 'start'
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  // Dependiendo del valor del parámetro 'query', retornamos el resultado de la consulta correspondiente
  if (query === 'up') {
    return mediaUp; // Retorna true si la pantalla es mayor o igual al breakpoint 'start'
  }

  if (query === 'down') {
    return mediaDown; // Retorna true si la pantalla es menor o igual al breakpoint 'start'
  }

  if (query === 'between') {
    return mediaBetween; // Retorna true si la pantalla está entre los breakpoints 'start' y 'end'
  }

  return mediaOnly; // Retorna true si la pantalla es exactamente igual al breakpoint 'start'
}

// ----------------------------------------------------------------------

// Definimos otro hook personalizado llamado useWidth
export function useWidth() {
  // Obtenemos el tema actual utilizando el hook useTheme
  const theme = useTheme();

  // Obtenemos las claves de los breakpoints y las invertimos para empezar desde el más grande
  const keys = [...theme.breakpoints.keys].reverse();

  // Utilizamos reduce para encontrar el primer breakpoint que coincide con la media query
  return (
    keys.reduce((output, key) => {
      // Aplicamos useMediaQuery para verificar si el ancho de la pantalla es mayor o igual al breakpoint actual
      // NOTA: Se utiliza un comentario para desactivar la regla de hooks de React aquí, ya que este es un patrón común
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      // Si no hay un output y la consulta coincide, retornamos el breakpoint actual
      return !output && matches ? key : output;
    }, null) || 'xs' // Si no hay coincidencias, retornamos 'xs' como valor por defecto
  );
}