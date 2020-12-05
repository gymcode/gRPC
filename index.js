// imports 
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync("todo.proto", {}); // TODO: Package definition
const grpcObject = grpc.loadPackageDefinition(packageDef); // TODO: loading the package as an object
const todoPackage = grpcObject.todoPackage; // TODO getting the todopackage finally to get access to everything

// TODO creating a grpc server
const server = new grpc.Server();
server.bind('0.0.0.0:7000', grpc.ServerCredentials.createInsecure());

// TODO giving your server a service 
server.addService(todoPackage.Todo.service, 
    {
        "createTodo": createTodo,
        "getAllTodos": getAllTodos
    });

// TODO starting the server
server.start();

// TODO creating individual functions for each rpc service 

function createTodo(call, callback){
    console.log(call);
}

function getAllTodos(call, callback){

}

