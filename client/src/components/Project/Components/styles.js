import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    fieldLabel: {
      color: 'black',
      fontWeight: '600',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    requiredTag: {
      width: 'fit-content',
      padding: '5px 10px 5px 10px',
      fontSize: '10px',
      fontWeight: 600,
      margin: '0px 5px 0px 10px',
      backgroundColor: '#DE9E48',
      color: 'white',
    },
    desc: {
      width: '60%',
      marginTop: '3px',
      fontSize: 12,
      fontWeight: 600,
      color: '#656565',
    },
    labelContainer: {
      display: 'inline-flex',
      flexDirection: 'row',
    },
    addedTag: {
      backgroundColor: theme.buttons.primary.main,
      color: 'white',
      margin: '10px 10px 10px 10px',
      '&:hover': {
      backgroundColor: theme.buttons.primary.tertiary,
      },
      fontWeight: 700,
      fontSize: 10,
    },
    notAddedTag: {
      backgroundColor: theme.buttons.primary.secondary,
      color: 'white',
      height: '30px',
      margin: '10px 10px 10px 10px',
      '&:hover': {
        backgroundColor: theme.buttons.primary.tertiary,
      },
      fontWeight: 700,
      fontSize: 10,
    },
    tagsContainer: {

    },
    addedTagsContainer: {
      minHeight: '50px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 'fit-content',
      flexGrow: 1,
      flexWrap: 'wrap',
      border: '1px solid rgba(0,0,0,0.2)',
      borderRadius: '15px',
    },
    tagsBank: {
      minHeight: '50px',
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      height: 'fit-content',
      flexGrow: 1,
      flexWrap: 'wrap',
      border: '1px solid rgba(0,0,0,0.2)',
      borderRadius: '15px',
    }
  }));