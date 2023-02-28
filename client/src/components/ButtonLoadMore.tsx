import React from 'react'
import '../components/components.css';

interface TypeButtonLoadMore {
  classbtnType: string,
  contentButton: string,
  handleButton: () => void;
}

export default function ButtonLoadMore(props: TypeButtonLoadMore) {
  return (
    <>
      <div style={{marginTop:'50px'}} className='box-btn-card-body-home'>
        <div className={props.classbtnType} onClick={props.handleButton}>
          <p>{props.contentButton}</p >
        </div>
      </div>
    </>
  )
}





// import React from 'react'
// /* import library */
// import { styled } from '@mui/system';
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import Button from '@mui/material/Button';


// const MyButtonStyle = {
//   500: '#fff',
//   600: 'rgb(166, 219, 67)',
//   700: '0059B2',
// };

// const CustomButton = styled(ButtonUnstyled)`
//   font-family: IBM Plex Sans, sans-serif;
//   font-weight: bold;
//   font-size: 0.875rem;
//   background-color: ${MyButtonStyle[500]};
//   width: 250px;
//   height: 40px;
//   color: #000;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: 1px solid #000;
//   margin-left: 40%;


//   &:hover {
//     background-color: ${MyButtonStyle[600]};
//   }

//   &.${buttonUnstyledClasses.active} {
//     background-color: ${MyButtonStyle[700]};
//   }

//   &.${buttonUnstyledClasses.focusVisible} {
//     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
//     outline: none;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// export default function ButtonLoadMore() {
//   return (
//     <div>
//       <CustomButton>Button</CustomButton>
//     </div>
//   )
// }

