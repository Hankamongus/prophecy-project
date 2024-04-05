import { EventEmitter } from 'events'
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
    console.log('yum')
})
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
