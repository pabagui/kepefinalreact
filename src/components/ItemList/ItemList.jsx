import { Item } from '../Item/Item'

export function ItemList( { products } ) {

       return (
           <div>
                { products.map( (item) => <Item item={item}/>                                             
               )}
           </div>
       )  
   }