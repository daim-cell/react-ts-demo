import { AppDispatch } from ".";
import { CartState, cartActions, uu } from "./cart-slice";
import { UIActions } from "./ui-slice";
import supabase from '../client';

let firstRender:boolean = true;

export const sendCart=(cart:CartState) =>{
    return async (dispatch:AppDispatch) =>{
        if (firstRender){
            firstRender =false
            return;
        }
        dispatch(UIActions.showNot({
            open:true,
            message: 'Sending request',
            type:'warning'
          }))

          const shipCart = async()=>{
    
            try{
                const { error } = await supabase
                    .from('cart')
                    .upsert([cart],{onConflict:'UUID'})
                    .eq('UUID',cart.UUID )
            
                if (error) {
                    console.error('Error inserting cart:', error.message);
                    dispatch(UIActions.showNot({
                        open:true,
                        message: 'Sending request failed',
                        type:'error'
                    }))
                }
                else{
                    dispatch(UIActions.showNot({
                        open:true,
                        message: 'Sending request',
                        type:'success'
                    }))
                }
            }
            catch(err:unknown){
                console.error('Error:', err);
                dispatch(UIActions.showNot({
                    open: true,
                    message: err,
                    type: 'error'
                }));
            }
            
          
        }
        
        await shipCart()
        console.log('ship called')
    }
}

export const fetchCart=() =>{
    return async (dispatch:AppDispatch) =>{
          const getCart = async()=>{
    
            try{
                const { data, error } = await supabase
                    .from('cart')
                    .select('*')
                    .eq('UUID',uu )
                console.log(data)
                if (error) {
                    console.error('Error getting cart:', error.message);
                    dispatch(UIActions.showNot({
                        open:true,
                        message: 'Sending request failed',
                        type:'error'
                    }))
                }
                else{
                    if (data.length !==0)
                    {dispatch(cartActions.replaceCart(data[0]));}
                }
            } 
            catch(err:unknown){
                console.error('Error:', err);
                dispatch(UIActions.showNot({
                    open: true,
                    message: err,
                    type: 'error'
                }));
            }
            
          
        }
        
        await getCart()
        console.log('get called')
    }
}