


export const initialState={

    basket:[],
user:null,
data:[]
};



 const reducer=(state,action)=>{
console.log(action)
switch(action.type){


case 'ADD_TO_BASKET':

return {

...state,
basket:[...state.basket,action.item],


};

case 'REMOVE_ITEM' :


const index=state.basket.findIndex((basketitem)=>

basketitem === action.id

)

let newBasket=[...state.basket]

if(index >=0){


    newBasket.splice(index,1)
}
return{
...state,
basket:newBasket


}

case 'BUY_NOW':



    return{
...state,

basket:[...state.basket,action.type],
    }


    case "SET_USER":
        return{



            ...state,
            user:action.user
        }


        case "IMG_CLICK":
            return{
    
                ...state,

                data:[...state.data,action.imgdata]
            }
    
    





default:return state;
}

};


 export default reducer;