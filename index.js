// imports 
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync("proto/todo.proto", {}); // TODO: Package definition
const grpcObject = grpc.loadPackageDefinition(packageDef); // TODO: loading the package as an object
const todoPackage = grpc.todoPackage; // TODO getting the todopackage finally to get access to everything

TODO // creating a grpc server
const server = new grpc.Server();
server.bind('0.0.0.0:7000', grpc.ServerCredentials.createInsecure());


