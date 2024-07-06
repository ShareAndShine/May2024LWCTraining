import { LightningElement, api } from 'lwc';

export default class PromotionMailerSubscription extends LightningElement {


    // public properties that accept id and name from commerce cloud storefront
    @api userId;
    @api username;


    // properties to show id and name
    get IsUserInfoFound()
    {
        if(this.userId && this.username)
            return true;
        else   
            return false;
    }


    get inputVariables() {
        return [
            {
                name: 'v_in_userId',
                type: 'String',
                value: this.userId
            },
            {
                name: 'v_in_username',
                type: 'String',
                value: this.username
            }
        ];
    }
    
    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            // set behavior after a finished flow interview
        }
    }





}