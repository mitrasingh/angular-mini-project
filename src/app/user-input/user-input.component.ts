import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userInitialInvestment = '0';
  userAnnualInvestment = '0';
  userExpectedReturn = '0';
  userDuration = '0';

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
