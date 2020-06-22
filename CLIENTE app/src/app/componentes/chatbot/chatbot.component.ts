import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(chat) {
    if (chat.style.animationName == 'muestraChat') {
      chat.style.animationName = 'ocultaChat';
    } else if (chat.style.animationName == 'ocultaChat' || chat.style.animationName == '') {
      chat.style.animationName = 'muestraChat';
    }

    console.log(chat.style.animationName);
  }

}
