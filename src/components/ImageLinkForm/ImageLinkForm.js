import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onSubmit}) =>{

return(

<div>

    <p className='f3'>
    {'this magic brain will detect faces in your pictures'}
    </p>
        <div className='center'>
              <div className='center form pa4 br3 shadow-5'>
                  <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                  <button
                    className='w-30 f4 grow ph3 pv dib white bg-light-purple'
                    onClick={onSubmit}
                    >Detect</button>
             </div>
        </div>
</div>

);

}


export default ImageLinkForm;
