import { products } from './productosArray'

export const getProducts = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(products)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )
