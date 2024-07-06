import { LightningElement, api } from 'lwc';
import getContactRoles from '@salesforce/apex/OpportunityContactRoleController.getContactRoles';


export default class ContactRoleGrid extends LightningElement {

    @api recordId;
    contactRoles = [];

    connectedCallback() {
        this.fetchContactRoles();
    }

    fetchContactRoles() {
        getContactRoles({ opportunityId: this.recordId })
           .then(result => {
                this.contactRoles = result;
            })
           .catch(error => {
                console.error('Error fetching contact roles:', error);
            });
    }
}