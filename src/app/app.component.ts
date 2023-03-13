import { Component } from '@angular/core';
import { WebSocketService } from 'src/services/web-socket-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private webSocketService: WebSocketService){
    
  }

  async ngOnInit(){
    this.webSocketService.connect();
		this.webSocketService.emit('join');

    console.log(this.webSocketService);

    this.webSocketService.callback.subscribe(res => {
      console.log("update", res);
    });

    this.webSocketService.on('connect', (error, callback) => {
			console.log('\x1b[36m%s\x1b[0m', "=========== Connected succesfully ============");
      console.log(this);
		});

    this.webSocketService.on('reconnect', (error, callback) => {
      console.log('\x1b[36m%s\x1b[0m', "=========== Reconnected succesfully ============");
      console.log(this);
			this.webSocketService.connect();
			this.webSocketService.emit('join');
		});

		this.webSocketService.on('connect_error', (error, callback) => {
      console.log('\x1b[36m%s\x1b[0m', "=========== Error with socket ============");
      console.log(error);
		});

    this.handleSocketConnections();
  }

  emitComplete(id: string){
    /* Receives id as string, you can edit this if necessary */
    this.webSocketService.emit('completeTask', id);
  }

  emitDelete(id: string){
    /* Receives id as string, you can edit this if necessary */
    this.webSocketService.emit('deleteTask', id);
  }

  emitCreate(){
    let newTask = {
      /* Your task schema */
    }

    this.webSocketService.emit('createTask', newTask);
  }

  emitEdit(id: string){
    /* Receives id as string, you can edit this if necessary */
    let data = {
      id: id,
      editedTask: {
        /* Your task schema */
      }
    }

    this.webSocketService.emit('editTask', data);
  }

  getCurrentClients(){
    this.webSocketService.emit('getClients');
  }

  /* == Socket == */
  handleSocketConnections() {
    /* Subscribes to all types of socket events, in order to print them on console. You can edit this if necessary. */
    this.newClient().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= New Client ==========");
      console.log(data);
		});


    this.disconnectedClient().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Disconnected Client ==========");
      console.log(data);
		});

    this.getClients().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Clients ==========");
      console.log(data);
		});

    this.completeTask().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Complete Task ==========");
      console.log(data);
		});

    this.deleteTask().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Delete Task ==========");
      console.log(data);
		});

    this.createTask().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Create Task ==========");
      console.log(data);
		});

    this.editTask().subscribe(data => {
			console.log('\x1b[36m%s\x1b[0m', "============= Edit Task ==========");
      console.log(data);
		});
  }

  newClient() {
		return this.webSocketService.fromEvent<any>('newClient');
	}

  disconnectedClient() {
		return this.webSocketService.fromEvent<any>('disconnectedClient');
	}

  getClients() {
		return this.webSocketService.fromEvent<any>('getClients');
	}

  completeTask() {
		return this.webSocketService.fromEvent<any>('completeTask');
	}

  deleteTask() {
		return this.webSocketService.fromEvent<any>('deleteTask');
	}

  createTask() {
		return this.webSocketService.fromEvent<any>('createTask');
	}

  editTask() {
		return this.webSocketService.fromEvent<any>('editTask');
	}
}
