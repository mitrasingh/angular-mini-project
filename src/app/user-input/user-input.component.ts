import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
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
    this.userInitialInvestment = '0';
    this.userAnnualInvestment = '0';
    this.userExpectedReturn = '0';
    this.userDuration = '0';
  }
}
