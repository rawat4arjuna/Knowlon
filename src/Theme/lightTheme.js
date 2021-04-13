 const light = {
    palette: {
      type: "light",
      primaryBtn:{
        background: 'linear-gradient(230deg, #4568dc 30%, #b06ab3 60%)',
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
      },
      loginpaper:{
           margin:'auto',
          maxWidth:400,
          padding:20
      },
      griditems:{
        display:'flex',
        placeContent:'center',
        padding:10
        
      },
      inputbox:{
        '& > *': {
          margin: 0,
          width:300,
        },
        '&:hover fieldset': {
          // background: "#f00",
          borderColor: '#b06ab3 '

       },
          '& fieldset': {
            borderColor: '#4568dc',
            borderRadius:10,
           
          },
          '&:focus': {
            borderColor: '#b06ab3 ',
          },
          "& ::placeholder": {
            color: "#4568dc"
          }
        }

    },
  


  };
  export default light