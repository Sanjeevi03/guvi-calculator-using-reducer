import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useReducer } from "react";
import { ReducerData } from "./ReducerData";

function Calculator() {
   const [state,dispatch] = useReducer(ReducerData,[]);
   return (
    <>
      <h2>Calculator Using useReducer</h2>
      <Box className="cal-box" sx={{p:2,m:3,backgroundColor:'#f0f4f5',borderRadius:'5px',width:'340px'}}>
        <div>
         <Box sx={{backgroundColor:'#c9c9c9',height:20,p:2,textAlign:'right',m:1,fontSize:'20px',fontWeight:'600',letterSpacing:'1.1px',fontFamily:'arial',borderRadius:'5px'}}>
            {state}
         </Box>
        </div>
        <div>
          <Button variant="contained" sx={{m:1}} color="error" onClick={()=>dispatch({type:'clear'})}>C</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num0'})}>0</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num00'})}>00</Button>
          <Button variant="contained" color="success" sx={{m:1}} onClick={()=>dispatch({type:'add'})}>+</Button>
        </div>
        <div>
          <Button variant="contained"  onClick={()=>dispatch({type:'num9'})} sx={{m:1}}>9</Button>
          <Button variant="contained"  onClick={()=>dispatch({type:'num8'})} sx={{m:1}}>8</Button>
          <Button variant="contained"  onClick={()=>dispatch({type:'num7'})} sx={{m:1}}>7</Button>
          <Button variant="contained" color="success" onClick={()=>dispatch({type:'sub'})}  sx={{m:1}}>-</Button>
        </div>
        <div>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num6'})} >6</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num5'})} >5</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num4'})} >4</Button>
          <Button variant="contained" color="success" onClick={()=>dispatch({type:'mul'})} sx={{m:1}} >x</Button>
        </div>
        <div>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num3'})}>3</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num2'})}>2</Button>
          <Button variant="contained" sx={{m:1}} onClick={()=>dispatch({type:'num1'})}>1</Button>
          <Button variant="contained" color="success" onClick={()=>dispatch({type:'div'})} sx={{m:1}} >/</Button>
        </div>
        <div>
           <Button variant="contained" color='error' onClick={()=>dispatch({type:'ans'})} sx={{m:1,ml:9 ,width:'55%'}} >=</Button>
        </div>
      </Box>
    </>
  );

}

export default Calculator;