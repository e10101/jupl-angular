import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  cards = [
    {
      title: 'Anim minim ',
      content: `Deserunt velit id labore incididunt.
      Nostrud in non veniam eu irure. Ad aute minim
      ut id. Laborum adipisicing amet nisi ullamco
      consequat est enim proident. Nostrud aliqua
      adipisicing reprehenderit nulla.`
    },
    {
      title: 'Exercitation',
      content: `Deserunt velit id labore incididunt.
       Nostrud in non veniam eu irure. Ad aute minim ut id.
        Laborum adipisicing amet nisi ullamco consequat est
        enim proident. Nostrud aliqua adipisicing reprehenderit
        nulla.`
    },
    {
      title: 'Ad anim laborum fugi',
      content: `Officia irure adipisicing consectetur quis.
      Tempor dolor culpa velit non. Enim incididunt sunt ad
      fugiat tempor. Nulla quis ipsum in consequat exercitati
      on laboris anim nostrud laborum magna ullamco dolore id.
       Irure aliqua minim proident nulla anim occaecat.`
    },
    {
      title: 'Futeur.',
      content: `Esse aliquip laborum magna id. Sint sunt
       dolore aute culpa proident consequat. Minim excepteur
        magna laboris ipsum non ipsum.ia dolor anim consectetur
           culpa laboris fugiat sit nostrud. Ex pariatur sint ex
            mollit.`
    },
    {
      title: 'Fucepteur.',
      content: `Lorem occaecat est cillum adipisicing labore
       in incididunt reprehenderit ad aliquip veniam. Consequat
        adipisicing culpa laborum qui duis. Dolore Lorem enim
         eiusmod incididunt. Sint  Lorem tempor voluptate Lorem velit.`
    },
    {
      title: 'Culpa culpa ',
      content: `Non aliqua irure qui in ex.
       Ullamco sit irure laborum quis veniam
        aliquip duis. Est reprehenderit excepteur
         tempor dolor ea ex nisi velit. In deserunt quis in velit
          fugiat velit consectetur ipsum qui Lorem aute occaecat.`
    },
  ];
}
