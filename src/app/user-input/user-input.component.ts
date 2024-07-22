import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output event emitter for onSubmit of values to parent
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();
  userInitialInvestment = '0';
  userAnnualInvestment = '0';
  userExpectedReturn = '0';
  userDuration = '0';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.userInitialInvestment,
      duration: +this.userDuration,
      expectedReturn: +this.userExpectedReturn,
      annualInvestment: +this.userAnnualInvestment,
    });
  }
}
