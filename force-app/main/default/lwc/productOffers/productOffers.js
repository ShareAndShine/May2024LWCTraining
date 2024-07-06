import { LightningElement, api } from 'lwc';

export default class ProductOffers extends LightningElement {


    // expose a public property that will receive data from exp. cloud page
    @api prod_id;

    // property to check if prod id is available or not
    get IsProdIdFound() 
    {
        if(this.prod_id)
        {
            return true;
        }    
        else
        {
            return false;
        }
    }


    get IsOfferfound()
    {
        // TODO: make a call to APEX imperatively with the product id
        // to retrive list of offers

        if(this.prod_id == '01t5j00000BV3iOAAT')
            return true;
        else   
            return false;
    }

}