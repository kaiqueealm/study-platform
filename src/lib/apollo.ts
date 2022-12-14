import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4tw0rsp09v101un32gh2iyg/master',
  headers:{
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYzMzYyODIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHR3MHJzcDA5djEwMXVuMzJnaDJpeWcvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMmI1ZDBmMGMtMmYzNC00ZTBmLWEwOTQtNzUxODFjOGExNzg3IiwianRpIjoiY2w0d3J1dXM2MDdwbzAxdWpmZTJjaHo2eCJ9.blOrLihDeg9u3ypRfVcjY_d7Xk91QwL5EFPJeCWx7BEIhQn1pHFjTcIeTuG3NGXYZBvmuAJyTR1J5x-YcbNk0DVDcbRhm403B7ACEuGGdKWoTxuRVGVAJqXvwBuHBTuZUEqL2QsamOZZgg11QXfB0Vm0Mhtrkq1NoBR0LemexGZ0rk6vBF6LJCYR9mg8xXTlVrlxTXexJNGPzN3YYI3HuTK8a4ehoJ6uIba93IN1F0KfEZNdFeirpOVn0JWwCoKwmlQraI4fkQu6sgZucbKG3YNo28zfhsRCu3GUs-p1hQ5mVCvGiOG36hc1FBX_QqxXCyRZPnMI-RfpENxeuDWUktNPUAE9_Eu_1QpkRywi06WnPSisSIOi8iBtjSl42NdMZr9knFJpSeTZwTKj6nd0AYsyfp9Suhygb2Q7ElrWv4qbtQ1-ZCqAAezTfhQiNMsqJqkTs-jDV1h2kiYAMs1A28-JwEXaM-bLPHF9VQlbiM7CL1_JMeZjdAdp7Ba7uCSrrAHnjpsoF8_js-d-4E-2xFml2wDfq9CQzxsokH6UabrlhHaocWIQziVvCTJJKOUJrOCThkjJzpPzAixHj5L7DE36PVOZo2K6LWPrSxwFSJ6PLmpLdIzTVKHyVkCBvQDJ-5HyEJ2xcZF558ObsgdqjYXFNhuqV3k6pnu-5T7vNSg'
  },
  cache: new InMemoryCache()
})