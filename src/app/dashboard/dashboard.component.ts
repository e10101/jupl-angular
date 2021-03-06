import { Component } from '@angular/core';

import { MdSnackBar } from '@angular/material';

import { Card } from './card';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cards: Card[] = [
    {
      title: 'Anim minim ',
      subtitle: 'Excepteur dolor id anim ea pariatur ex dolore ea.',
      content: `Deserunt velit id labore incididunt.
      Nostrud in non veniam eu irure. Ad aute minim
      ut id. Laborum adipisicing amet nisi ullamco
      consequat est enim proident. Nostrud aliqua
      adipisicing reprehenderit nulla.`
    },
    {
      title: 'Exercitation',
      subtitle: 'Duis ex velit consectetur mollit reprehenderit.',
      content: `Deserunt velit id labore incididunt.
       Nostrud in non veniam eu irure. Ad aute minim ut id.
        Laborum adipisicing amet nisi ullamco consequat est
        enim proident. Nostrud aliqua adipisicing reprehenderit
        nulla.`
    },
    {
      title: 'Ad anim laborum fugi',
      subtitle: 'Consectetur irure enim deserunt cillum dolor.',
      content: `Officia irure adipisicing consectetur quis.
      Tempor dolor culpa velit non. Enim incididunt sunt ad
      fugiat tempor. Nulla quis anim nostrud laborum magna ullamco dolore id.
       Irure aliqua minim proident nulla anim occaecat.`
    },
    {
      title: 'Futeur.',
      subtitle: 'Sunt deserunt officia tempor fugiat tempor.',
      content: `Esse aliquip laborum magna id. Sint sunt
       dolore aute culpa proident consequat. Minim excepteur
        magna laboris ipsum non ipsum.ia dolor anim consectetur
           culpa laboris fugiat sit nostrud. Ex pariatur sint ex
            mollit.`
    },
    {
      title: 'Fucepteur.',
      subtitle: 'Ea nulla laboris amet eu ex culpa laborum duis.',
      content: `Lorem occaecat est cillum adipisicing labore
       in incididunt reprehenderit ad aliquip veniam. Consequat
        adipisicing culpa laborum qui duis. Dolore Lorem enim
         eiusmod incididunt. Sint  Lorem tempor voluptate Lorem velit.`
    },
    {
      title: 'Culpa culpa ',
      subtitle: 'Eiusmod irure qui sint id duis ad aliquip veniam.',
      content: `Non aliqua irure qui in ex.
       Ullamco sit irure laborum quis veniam
        aliquip duis. Est reprehenderit excepteur
         tempor dolor ea ex nisi velit. In deserunt quis in velit
          fugiat velit consectetur ipsum qui Lorem aute occaecat.`
    },
  ];

  constructor(
    public snackBar: MdSnackBar,
  ) { };

  cardClick(card: Card): void {
    this.snackBar.open(`Card <${card.title}> Clicked!`, null, {
      duration: 1000,
    });
  };
}
