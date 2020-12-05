// imports 
var proto_path = require('./proto/todo.proto')
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync("proto/todo.proto", {}); // TODO: Package definition
const grpcObject = grpc.loadPackageDefinition(packageDef); // TODO: loading the package as an object
// TODO using a different approach
const todoPackage = grpcObject.TodoPackage; // TODO getting the todopackage finally to get access to everything

// TODO creating a grpc server
const server = new grpc.Server();

// TODO adding services 
server.addService(todoPackage.Todo.service, {
    "createTodo": createTodo, 
    "getAllTodos": getAllTodos,
});

server.bind('0.0.0.0:7000', grpc.ServerCredentials.createInsecure());
server.start();


TODO // functions for services
function createTodo(call, callback){

}

function getAllTodos(call, callback){

}


