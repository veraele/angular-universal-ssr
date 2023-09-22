// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_v1_hello_pb = require('../../../src/proto/v1/hello_pb.js');

function serialize_v1_HelloReply(arg) {
  if (!(arg instanceof src_proto_v1_hello_pb.HelloReply)) {
    throw new Error('Expected argument of type v1.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_HelloReply(buffer_arg) {
  return src_proto_v1_hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1_HelloRequest(arg) {
  if (!(arg instanceof src_proto_v1_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type v1.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1_HelloRequest(buffer_arg) {
  return src_proto_v1_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/v1.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_v1_hello_pb.HelloRequest,
    responseType: src_proto_v1_hello_pb.HelloReply,
    requestSerialize: serialize_v1_HelloRequest,
    requestDeserialize: deserialize_v1_HelloRequest,
    responseSerialize: serialize_v1_HelloReply,
    responseDeserialize: deserialize_v1_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
