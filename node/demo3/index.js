let events = require('events') // 引入events模块、
let eventsEmitter = new events.EventEmitter() // 创建EventEmitter对象

eventsEmitter.on('connection1', function() {
    console.log('数据开始建立连接...')
    eventsEmitter.emit('data_received')
})

eventsEmitter.on('data_received', function() {
    console.log('接收成功...')
})

eventsEmitter.emit('connection1')

console.log('程序执行完毕!')


eventsEmitter.on('eventname', function(arg1, arg2) {
    console.log('listener1', arg1, arg2)
})

eventsEmitter.on('eventname', function(arg1, arg2) {
    console.log('listener2', arg1, arg2)
})

eventsEmitter.emit('eventname', 'arg1 参数', 'arg2 参数')


let listener1 = function() {
    console.log('添加listener1监听器')
}

let listener2 = function() {
    console.log('添加listener2监听器')
}

// 绑定 connection 事件，处理函数为 listener1 
eventsEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventsEmitter.on('connection', listener2);

let eventListeners = events.EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventsEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventsEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventsEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventsEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");