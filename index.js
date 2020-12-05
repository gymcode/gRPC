const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader. loadSync("proto/todo.proto", {keepCase: true, defaults: true}); 
const grpcObject = grpc.loadPackageDefinition(packageDef); 

const todoPackage = grpcObject.todoPackage; 


const server = new grpc.Server();


server.addService(todoPackage.Todo.service, {
    "createTodo": createTodo, 
    "getAllTodos": getAllTodos,
});

server.bind('0.0.0.0:7000', grpc.ServerCredentials.createInsecure());
server.start();


function createTodo(call, callback){

}

function getAllTodos(call, callback){

}


