import { Component } from '@angular/core';
import {PortfolioItemComponent} from "./components/portfolio-item/portfolio-item.component";
import {PortfolioItemOptionsInterface} from "./models/portfolio-item-options.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PortfolioItemComponent,
    NgForOf
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items: PortfolioItemOptionsInterface[] = [
    {
      imageUrl: this.assetUrl('a.jpg'),
      imageAlt: 'Blunt Fiction Event',
      title: 'Blunt Fiction Event',
      description: 'Pulp Fiction Themed Event'
    },
    {
      imageUrl: this.assetUrl('b.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('c.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('d.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('e.jpg'),
      imageAlt: 'Blunt Fiction Event',
      title: 'Blunt Fiction Event',
      description: 'Pulp Fiction Themed Event'
    },
    {
      imageUrl: this.assetUrl('f.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('g.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('h.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('i.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('j.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('k.jpg'),
      imageAlt: 'Blunt Fiction Event',
      title: 'Blunt Fiction Event',
      description: 'Pulp Fiction Themed Event'
    },
    {
      imageUrl: this.assetUrl('l.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('m.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
    {
      imageUrl: this.assetUrl('n.jpg'),
      imageAlt: 'Loud Mouth Event',
      title: 'Loud Mouth Event',
      description: 'Get Loud & Bare Jokes Presents'
    },
  ]

  private assetUrl(nameAndExtension: string) {
    return `/assets/images/portfolio/${nameAndExtension}`;
  }
}
