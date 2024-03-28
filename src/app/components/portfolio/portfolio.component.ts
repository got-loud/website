import {Component, OnDestroy, OnInit} from '@angular/core';
import {PortfolioItemComponent} from "./components/portfolio-item/portfolio-item.component";
import {PortfolioItemOptionsInterface} from "./models/portfolio-item-options.interface";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PortfolioViewOptionEnum} from "./models/portfolio-view-option.enum";
import {PortfolioTypeSelectorComponent} from "./components/portfolio-type-selector/portfolio-type-selector.component";
import {BehaviorSubject, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PortfolioItemComponent,
    NgForOf,
    NgIf,
    PortfolioTypeSelectorComponent,
    AsyncPipe
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  private _subscriptions = new Subscription();
  selectedOptionSubject = new BehaviorSubject<PortfolioViewOptionEnum>(PortfolioViewOptionEnum.All);
  portfolioViewOptions = PortfolioViewOptionEnum;

  items: PortfolioItemOptionsInterface[] = [
    {
      imageUrl: this.assetUrl('a.jpg'),
      imageAlt: 'Blunt Fiction Event',
      title: 'Blunt Fiction Event',
      description: 'Pulp Fiction Themed Event',
      date: new Date('2024-04-20')
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
  ];

  filteredItems: PortfolioItemOptionsInterface[] = [];


  ngOnInit() {
    this._subscriptions.add(
      this.selectedOptionSubject.pipe(
        tap(selectedOption => {
          switch (selectedOption) {
            case PortfolioViewOptionEnum.All:
              this.filteredItems = this.items;
              break;
            case PortfolioViewOptionEnum.Current:
              this.filteredItems = [ this.items[0] ];
              break;
            case PortfolioViewOptionEnum.Past:
              this.filteredItems = this.items.slice(1);
              break;
          }
        })
      ).subscribe()
    );
  }

  ngOnDestroy() {

  }

  private assetUrl(nameAndExtension: string) {
    return `assets/images/portfolio/${nameAndExtension}`;
  }
}
