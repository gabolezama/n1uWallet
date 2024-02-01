import { getVehicleDitails, useSwapi } from "../Gateway/appGateway"
import { IItemDetailEntity } from "./ItemDetailEntity"

export const getAllVehicles = (endpoint:string): any[] =>{
    const swapiResponse: any[] = useSwapi(endpoint)
    
    /* if(swapiResponse.length > 0){
        return swapiResponse.map((item)=>{
            return new ItemDetailEntity(

            )
        })
    } */
    
    return swapiResponse
}