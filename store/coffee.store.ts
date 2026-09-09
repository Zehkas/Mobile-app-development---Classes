
export interface Coffee{
    id:string,
    title:string,
    price:string,
    image:any,
    available:boolean,
    strong:boolean
}


export const DATA_COFFEES:Coffee[]=[
    {
        id:'1',
        title:'Long Black',
        price:'4.10',
        image:require('../assets/images/long.png'),
        available:true,
        strong: true
    },
    {
        id:'2',
        title:'Latte',
        price:'4.00',
        image:require('../assets/images/latte.png'),
        available:true,
        strong:false,

    },
    {
        id:'3',
        title:'Expresso',
        price:'4.40',
        image:require('../assets/images/expresso.png'),
        available:false,
        strong:true
    },
    {
        id:'4',
        title:'Iced Coffee',
        price:'5.00',
        image:require('../assets/images/ice.png'),
        available:true,
        strong:false
    },

]