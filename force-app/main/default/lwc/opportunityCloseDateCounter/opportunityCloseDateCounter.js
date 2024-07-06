import { LightningElement, api, wire } from 'lwc';

// thru uiRecordAPI LWC can read from or write data into Salesforce object
// Helps when there is a need to deal with one record at a time
import { getRecord, createRecord, updateRecord, deleteRecord, getFieldValue } from 'lightning/uiRecordApi';
import CLOSEDATE from '@salesforce/schema/Opportunity.CloseDate';

export default class OpportunityCloseDateCounter extends LightningElement {

    /*  
    
    Every property in a class is trackable
    
    */
    // properties
    oppName = 'Salesforce Implementation';
    deadline;
    // For this component to work, we need opportunity ID from lightning record page
    @api recordId; // public property to hold opp. Id 

    ShowOpportunityName() {
        this.oppName = 'Salesforce Implementation - Updated';
    }


    // use record Id(opp.Id) to find close date
    @wire(getRecord, { recordId: '$recordId', fields: [CLOSEDATE] })
    readOutput({ data, error }) {
        if (data) {
            // Use get field value to read the value of close date 
            this.deadline = getFieldValue(data, CLOSEDATE);

            // write pure JS code to get timer ticked
        }
        else if (error) {
            console.log(JSON.stringify(error));
        }
    };





    constructor() {
        console.log('Constructor Called');

        super();

    }
    // Adding life cycle hooks - Start 
    connectedCallback() {
        console.log('Component is connected');
        console.log('Opportunity ID is: ' + this.recordId);
    }

    disconnectedCallback() {
        console.log('Component is disconnected');
    }

    renderedCallback() {
        console.log('Component is rendered');
        console.log('Opportunity ID is: ' + this.recordId);
    }
    // Adding life cycle hooks - End

}