import { useEffect, useRef, useState} from "react";
import { InitialValueProps, onChangeArgs, Product } from "../interfaces/product.interfaces";

interface useProductArgs {
    product: Product,
    onChange?:(args:onChangeArgs) => void,
    value?:number;
    initialValues?:InitialValueProps;

}

export const useProduct = ({product,onChange,value=0,initialValues}:useProductArgs) => {
    console.log(initialValues?.count);

    const ref = useRef(false);

    const [counter,setCounter] = useState<number>(initialValues?.count || value);


    const increaseBy = (value : number) => {

      /*   if(initialValues?.maxCount && counter + value > initialValues.maxCount){
            return;
        } */
      
        let newValue=Math.max(counter + value, 0);
       // setCounter(e => Math.max(e + value, 0));
       if(initialValues?.maxCount){
              newValue = Math.min(newValue,initialValues.maxCount);
       }


        setCounter(newValue);
        onChange && onChange({product,count:newValue});

        /*
      este es lo mismo
      if(onChange){
            onChange();
        }
       */
    };

    const reset=()=>{
        setCounter(initialValues?.count || 0);
        onChange && onChange({product,count:0});
    };


    useEffect(() => {
        if(!ref.current) return;
        
        setCounter(value);
       
    }, [value]);


    useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        }
        
    }, []);



    return {
        counter,
        increaseBy,
        maxCount:initialValues?.maxCount,
        isMaxCountReached:!!initialValues?.count && initialValues.maxCount===counter,
        reset,

    };
}
