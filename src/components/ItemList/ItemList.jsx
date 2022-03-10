import { Item } from '../Item/Item'

export function ItemList( { products } ) {

       return (
           <div>
                { products.map( item => 
                <Item 
                    key={item.id}
                    item={item} 
                />                                             
               )}
           </div>
       )  
   }