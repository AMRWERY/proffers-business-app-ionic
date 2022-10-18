import RequestMaker from "../common/requestMaker";
import TokenService from "../../utils/TokenService"


export default class Offer {
    async getOfferStatus(params){
        let business_id = await TokenService.getBusinessID()
        let endpoint = "offer/status/".concat(business_id);
        if (params){
            let response = await new RequestMaker().GET(endpoint,params);
            return response;
        } else {
            let response = await new RequestMaker().GET(endpoint);
            return response;
        }
    }

    async createOffer(data){
        let business_id = await TokenService.getBusinessID()
        data.business = business_id 
        
        // temp. fix for date time
        data.valid_from = data.valid_from.concat("T00:00")
        data.valid_until = data.valid_until.concat("T00:00")

        let endpoint = "offer/create/";
        let response = await new RequestMaker().POST(data, endpoint);
        return response;
    }

    async unpublishOffer(offerId){
        
        let endpoint = "offer/unpublish/".concat(offerId);
        let response = await new RequestMaker().GET(endpoint);
        return response
    }
}