import React from 'react';


class OnionHater extends React.Component {
//  si en el harter hubiesemos usado "this" seria aconsejable poenr el contructor y lo se super para indicar que el valor de this es el que metemos el de la funcion no el general
hater (event) {
  const textito = event.target.value.toLowerCase;
  if( textito.includes('cebolla')){
    alert ('Odio la cebolla');
    }
  }
 
render() {
    
   return (
    <textarea onChange={this.hater}></textarea>
);
}
}

export default OnionHater;