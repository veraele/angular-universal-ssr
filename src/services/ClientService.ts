import { credentials } from "@grpc/grpc-js";
import config from "config";
import { v1 } from "src/proto/generated/v1/hello";


export default class ClientService {

    public static async callRESTService(body: any) {
        console.log('request service: ', body);
        const result = await fetch('http://127.0.0.1:3000/greeting', {
            body: JSON.stringify(body),
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8'}
        });
        const resultJson = await result.json();
        console.log('res service success', resultJson);
        return resultJson;
    }

    public static callGRPCService(body: any) {
        console.log('GRPCrequest service: ', body);
        const client = new v1.GreeterClient(
            config.grpcHost,
            credentials.createInsecure()
        );
        const rq = new v1.HelloRequest({name: body.text});
        return new Promise((resolve, reject) => {
            console.log('entra a llamar servicio');
            client.SayHello(rq, (error, response) => {
                console.log('respuesta grpc');
                if(error) {
					reject(error);
				} else {
                    resolve(response?.message);
                }
            });
        });
    }

}