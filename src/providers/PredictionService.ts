import { IPredicationService } from "../contracts/PredictionService";

export class PredictionService implements IPredicationService {
  public getPredictionResult(formData: any): Promise<any> {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
      crossDomain: true,
      body: JSON.stringify(formData),
    };
    const url: string = "http://8cd61701a35a.ngrok.io/predict";
    return new Promise<any>((resolve, reject) => {
      fetch(url, requestOptions)
        .then((res) => res.json())
        .then((response: any) => {
          return resolve(response);
        })
        .catch((error) => reject(error));
      // setTimeout(() => {
      //   resolve({ clv: 2000, statusCode: 200, suggestions: [] });
      // }, 2000);
    });
  }
}
