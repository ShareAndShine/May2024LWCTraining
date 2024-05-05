import { LightningElement, track } from 'lwc';

export default class OpportunityCloseDateCounter extends LightningElement {

    /*  
    
    Every property in a class is trackable
    
    */
    // properties
    oppName = 'Salesforce Implementation';


    ShowOpportunityName() {
        this.oppName = 'Salesforce Implementation - Updated';
    }

    constructor()
    {
        console.log('Constructor Called');
        super();

    }
    // Adding life cycle hooks - Start 
    connectedCallback() {
        console.log('Component is connected');
    }

    disconnectedCallback() {
        console.log('Component is disconnected');
    }

    renderedCallback() {
        console.log('Component is rendered');
    }
    // Adding life cycle hooks - End

}