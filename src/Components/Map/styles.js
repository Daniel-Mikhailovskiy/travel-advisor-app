import { makeStyles } from '@material-ui/core/styles';
import { BorderColor } from '@material-ui/icons';

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%', marginTop: '30px', marginInline: '5px', xs: '6', borderRadius:'8px', overflow: 'hidden',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer', height:'100' ,width:'50', borderColor:'white', position: 'relative'
  },
  typography: {
    
  }
  // card: {
  //   height: 'auto', maxHeight: '250px', width: 'auto', maxWidth: '250px'

  // }
}));