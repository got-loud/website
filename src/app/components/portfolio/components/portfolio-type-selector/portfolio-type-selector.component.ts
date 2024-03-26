import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PortfolioViewOptionEnum} from "../../models/portfolio-view-option.enum";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-portfolio-type-selector',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './portfolio-type-selector.component.html',
  styleUrl: './portfolio-type-selector.component.scss'
})
export class PortfolioTypeSelectorComponent {
  @Input({ required: true }) option!: PortfolioViewOptionEnum;
  @Input({ required: true }) currentSelection!: PortfolioViewOptionEnum;
  @Output() onSelect = new EventEmitter<PortfolioViewOptionEnum>();

  protected readonly portfolioViewOptions = PortfolioViewOptionEnum;
}
