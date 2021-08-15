import { IPredicationService } from "../contracts/PredictionService";

export class PredictionService implements IPredicationService {
  private url: string;

  constructor(apiUrl: string = "http://90da9df70518.ngrok.io") {
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
      fetch("http://dev57.pythonanywhere.com/predict", requestOptions)
        .then((res) => res.json())
        .then((response: any) => {
          return resolve(response);
        })
        .catch((error) => reject(error));
    });
  }
}
