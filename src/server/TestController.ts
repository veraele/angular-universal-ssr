import { Request, Response, Router } from "express";
import ClientService from "src/services/ClientService";
const TestController = Router();

TestController.post('/api/greeting', async (req: Request, res: Response) => {
    try {
        console.log('request: ', req.body);
        const result = await ClientService.callRESTService(req.body);
        const resultGrpc: any = await ClientService.callGRPCService(req.body);
        console.log('GRPC->', resultGrpc);
        const responses = {
            rest: result?.greeting,
            grpc: resultGrpc
        }
        res.status(200).send(responses);
    } catch (error) {
        console.log('error ocurrio', error);
        res.status(500).send(error);
    }
});

export default TestController;