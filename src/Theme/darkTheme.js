const dark = {
  palette: {
    type: "dark",
    primaryBtn:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          margin: 'auto',
          width: '100%',
          height: '100%',
        }
      }
  },
};
export default dark;
