import { Injectable, EventEmitter } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WebSocketService extends Socket {
  outEvent: EventEmitter<any> = new EventEmitter();
  callback: EventEmitter<any> = new EventEmitter();

  constructor() {
    super({
        url: 'https://stage.allrideapp.com/tech_interview', options: {
            transports: ['websocket'],
            query: {
                // @ts-ignore
                room: 'tu_room_personal'
            }
        }
    });

    this.listen();
  }

  listen = () => {
    this.ioSocket.on('join', (res: any) => {
      this.callback.emit(res);
      console.log("From server ", res);
    })
  };

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('join', payload);
  };
}
