import {Component} from '@angular/core';

@Component ({
    selector: 'assignment-detail',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.css']


})

export class AssignmentComponent {
    isHidden = true;
    clicks = [];
    

    showMessage(){
        //this.toggleMessage();
        this.isHidden = !this.isHidden;
         this.clicks.push(new Date() );
         //this.clicks.push(this.clicks.length +1);
         console.log(this.clicks);

    }
    getColor(){
        return this.clicks.length >=4 ? 'blue' : 'transparent';
    }

}
