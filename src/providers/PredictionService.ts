import { IPredicationService } from "../contracts/PredictionService";

export class PredictionService implements IPredicationService {
  private url: string;

  constructor(apiUrl: string = "http://27ed17b5b746.ngrok.io") {
    this.url = apiUrl + "/predict";
  }

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
    return new Promise<any>((resolve, reject) => {
      fetch(this.url, requestOptions)
        .then((res) => res.json())
        .then((response: any) => {
          return resolve(response);
        })
        .catch((error) => reject(error));
    });
  }
}
