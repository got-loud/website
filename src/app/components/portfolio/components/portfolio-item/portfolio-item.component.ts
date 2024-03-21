import {Component, Input} from '@angular/core';
import {PortfolioItemOptionsInterface} from "../../models/portfolio-item-options.interface";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss'
})
export class PortfolioItemComponent {
  @Input({ required: true }) options!: PortfolioItemOptionsInterface;
}
