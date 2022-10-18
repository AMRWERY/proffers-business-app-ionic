import RequestMaker from "../common/requestMaker";
import TokenService from "../../utils/TokenService"


export default class Sale {
    async createSale(data){
        let business_id = await TokenService.getBusinessID()
        data.business = business_id
        let endpoint = "sale/direct-sale/";
        let response = await new RequestMaker().POST(data, endpoint);
        return response;
    }
    async getSaleList(){
        let endpoint = "sale/direct-sale/";
        let response = await new RequestMaker().GET(endpoint);
        return response;
    }
    async getSaleStatus(mobile_no){
        let endpoint = "business/customer/history/";
        // get business id
        let business_id = await TokenService.getBusinessID()

        let params = {"cus_mobile_no":mobile_no, "business_id":business_id};
        let response = await new RequestMaker().GET(endpoint, params);
        return response;
    }
    async searchCustomer(search_text){
        let endpoint = "business/customer/search/";
        let params = {"search":search_text};
        let response = await new RequestMaker().GET(endpoint, params);
        return response;
    }
}