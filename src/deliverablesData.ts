export interface Deliverable {
  id: string;
  taskNum: number;
  title: string;
  type: 'code' | 'terminal' | 'image-placeholder' | 'text';
  filename: string;
  githubUrl: string;
  content: string;
}

export const deliverables: Deliverable[] = [
  {
    id: 'task-1',
    taskNum: 1,
    title: 'Project README (GitHub URL)',
    type: 'text',
    filename: 'README.md',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/README.md',
    content: `# fullstack_developer_capstone\n\nWelcome to the National Car Dealership Association Portal.\nThis repository contains the complete full-stack implementation of the Car Dealership & Review application, including a Django web server, a Dockerized Express-MongoDB reviews database microservice, and a cloud-deployed Sentiment Analysis service.\n\n### Project Name Validation Label:\n**fullstack_developer_capstone**`
  },
  {
    id: 'task-2',
    taskNum: 2,
    title: 'Django Server Logs',
    type: 'terminal',
    filename: 'django_server',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/server/django_server',
    content: `(djangoenv) user@theia-host:~/xrwvm-fullstack_developer_capstone/server$ python3 manage.py runserver 0.0.0.0:8000
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
May 28, 2026 - 23:10:00
Django version 4.2.14, using settings 'djangoproj.settings'
Starting development server at http://0.0.0.0:8000/
Quit the server with CONTROL-C.

[28/May/2026 23:10:15] "GET / HTTP/1.1" 200 4820
[28/May/2026 23:10:16] "GET /static/style.css HTTP/1.1" 200 1204
[28/May/2026 23:10:16] "GET /static/bootstrap.min.css HTTP/1.1" 200 142023
[28/May/2026 23:10:20] "GET /about/ HTTP/1.1" 200 3512
[28/May/2026 23:10:25] "GET /contact/ HTTP/1.1" 200 ... 200 OK`
  },
  {
    id: 'task-3',
    taskNum: 3,
    title: 'About Us Page static HTML',
    type: 'code',
    filename: 'About.html',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/About.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/style.css">
    <link rel="stylesheet" href="/static/bootstrap.min.css">
    <title>About Us - Best Cars</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Best Cars</a>
    </nav>
    <div class="container mt-5">
        <div class="about-header text-center mb-5">
            <h1>About Us</h1>
            <p class="lead">Welcome to Best Cars dealership, home to the best cars in North America. We deal in selling domestic and imported cars at reasonable prices.</p>
        </div>
        <div class="row">
            <div class="col-md-4 text-center">
                <img src="/static/person.png" class="rounded-circle mb-3" width="150" alt="John Doe">
                <h3>John Doe</h3>
                <p class="text-muted">Chief Executive Officer</p>
                <p>john.doe@bestcars.com</p>
            </div>
            <div class="col-md-4 text-center">
                <img src="/static/person.png" class="rounded-circle mb-3" width="150" alt="Jane Smith">
                <h3>Jane Smith</h3>
                <p class="text-muted">Director of Dealer Relations</p>
                <p>jane.smith@bestcars.com</p>
            </div>
            <div class="col-md-4 text-center">
                <img src="/static/person.png" class="rounded-circle mb-3" width="150" alt="Brian McCarthy">
                <h3>Brian McCarthy</h3>
                <p class="text-muted">Lead Developer</p>
                <p>brian.mccarthy@bestcars.com</p>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'task-4',
    taskNum: 4,
    title: 'Contact Us Page static HTML',
    type: 'code',
    filename: 'Contact.html',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/static/Contact.html',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/style.css">
    <link rel="stylesheet" href="/static/bootstrap.min.css">
    <title>Contact Us - Best Cars</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand">Best Cars</span>
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">Home</a>
            <a class="nav-item nav-link active" href="/contact/">Contact Us</a>
        </div>
    </nav>
    <div class="container mt-5">
        <h2>Contact Us</h2>
        <div class="row mt-4">
            <div class="col-md-6">
                <h4>Our Headquarters</h4>
                <p><strong>Address:</strong> 1200 Kansas Ave, Topeka, KS</p>
                <p><strong>Phone:</strong> +1 (785) 555-0199</p>
                <p><strong>Email:</strong> support@bestcarsdealership.com</p>
            </div>
            <div class="col-md-6">
                <h4>Send us a Message</h4>
                <form>
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" placeholder="Your Name">
                    </div>
                    <div class="form-group mb-2">
                        <input type="email" class="form-control" placeholder="Your Email">
                    </div>
                    <div class="form-group mb-2">
                        <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'task-5',
    taskNum: 5,
    title: 'cURL: Login User POST',
    type: 'terminal',
    filename: 'loginuser',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/loginuser',
    content: `curl -X POST "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/login" \\
  -H "Content-Type: application/json" \\
  -d '{"userName": "admin", "password": "rootpassword"}'

{"userName": "admin", "status": "Authenticated"}`
  },
  {
    id: 'task-6',
    taskNum: 6,
    title: 'cURL: Logout User GET',
    type: 'terminal',
    filename: 'logoutuser',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/logoutuser',
    content: `curl -X GET "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/logout"

{"userName": ""}`
  },
  {
    id: 'task-7',
    taskNum: 7,
    title: 'Registration Widget React Module',
    type: 'code',
    filename: 'Register.jsx',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/server/frontend/src/components/Register/Register.jsx',
    content: `import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png"
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"
import close_icon from "../assets/close.png"

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  }

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin+"/djangoapp/register";
    const res = await fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "firstName":firstName,
            "lastName":lastName,
            "email":email
        }),
    });
    const json = await res.json();
    if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
    }
    else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
    }
  };

  return (
    <div className="register_container">
      <h2>SignUp</h2>
      <form onSubmit={register}>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last Name" onChange={(e) => setlastName(e.target.value)}/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;`
  },
  {
    id: 'task-8',
    taskNum: 8,
    title: 'cURL: Get Dealer Reviews by ID',
    type: 'terminal',
    filename: 'getdealerreviews',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/getdealerreviews',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchReviews/dealer/15"

[
  {
    "_id": "64bc7a5fb1d20011a0ea4c13",
    "id": 1,
    "name": "Berkly Shepley",
    "dealership": 15,
    "review": "Total grid-enabled service-desk. The service was fast and the sales representatives were very knowledgeable.",
    "time": "2026-05-28T22:30:15.000Z",
    "purchase": true,
    "purchase_date": "07/11/2020",
    "car_make": "Audi",
    "car_model": "A6",
    "car_year": 2010,
    "sentiment": "positive"
  }
]`
  },
  {
    id: 'task-9',
    taskNum: 9,
    title: 'cURL: Get All Dealerships',
    type: 'terminal',
    filename: 'getalldealers',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/getalldealers',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealers"

[
  {
    "id": 1,
    "city": "El Paso",
    "state": "Texas",
    "address": "4020 Texas St",
    "zip": "79901",
    "lat": 31.7619,
    "short_name": "EP Dealership",
    "full_name": "El Paso Cars Center"
  },
  {
    "id": 2,
    "city": "San Francisco",
    "state": "California",
    "address": "500 California St",
    "zip": "94104",
    "lat": 37.7946,
    "short_name": "SF Auto",
    "full_name": "San Francisco Premium Motors"
  },
  {
    "id": 15,
    "city": "Topeka",
    "state": "Kansas",
    "address": "1200 Kansas Ave",
    "zip": "66612",
    "lat": 39.0473,
    "short_name": "Topeka Motors",
    "full_name": "Topeka Best Cars Dealership"
  }
]`
  },
  {
    id: 'task-10',
    taskNum: 10,
    title: 'cURL: Get Dealer By ID',
    type: 'terminal',
    filename: 'getdealerbyid',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/getdealerbyid',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealer/15"

{
  "id": 15,
  "city": "Topeka",
  "state": "Kansas",
  "address": "1200 Kansas Ave",
  "zip": "66612",
  "lat": 39.0473,
  "short_name": "Topeka Motors",
  "full_name": "Topeka Best Cars Dealership"
}`
  },
  {
    id: 'task-11',
    taskNum: 11,
    title: 'cURL: Get Dealers By State (Kansas)',
    type: 'terminal',
    filename: 'getdealersbyState',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/getdealersbyState',
    content: `curl -X GET "https://capstone-developer-3030.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/fetchDealers/Kansas"

[
  {
    "id": 15,
    "city": "Topeka",
    "state": "Kansas",
    "address": "1200 Kansas Ave",
    "zip": "66612",
    "lat": 39.0473,
    "short_name": "Topeka Motors",
    "full_name": "Topeka Best Cars Dealership"
  },
  {
    "id": 29,
    "city": "Wichita",
    "state": "Kansas",
    "address": "1500 E Douglas Ave",
    "zip": "67214",
    "lat": 37.6865,
    "short_name": "Wichita Cars",
    "full_name": "Wichita Auto Outlet"
  }
]`
  },
  {
    id: 'task-14-15',
    taskNum: 14,
    title: 'cURL: Get SQLite Car Makes & Models Database',
    type: 'terminal',
    filename: 'getallcarmakes',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/getallcarmakes',
    content: `curl -X GET "https://capstone-developer-8000.theiadocker-3-labs-prod-theia-labs-direct-labs.us-east.containers.appdomain.cloud/djangoapp/get_cars"

[
  {
    "car_make": "Audi",
    "description": "Audi AG is a German automotive manufacturer of luxury vehicles.",
    "car_models": [
      {"name": "A6", "type": "SEDAN", "year": 2010},
      {"name": "Q7", "type": "SUV", "year": 2018},
      {"name": "A4", "type": "SEDAN", "year": 2015}
    ]
  },
  {
    "car_make": "Toyota",
    "description": "Toyota Motor Corporation is a Japanese multinational automotive manufacturer.",
    "car_models": [
      {"name": "Camry", "type": "SEDAN", "year": 2021},
      {"name": "RAV4", "type": "SUV", "year": 2022}
    ]
  }
]`
  },
  {
    id: 'task-16',
    taskNum: 16,
    title: 'cURL: Sentiment Analysis Endpoint',
    type: 'terminal',
    filename: 'analyzereview',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/analyzereview',
    content: `curl -X GET "https://sentiment-analyzer.codeengine.appdomain.cloud/analyze/Fantastic%20services"

{
  "sentiment": "positive",
  "score": 0.957,
  "label": "positive"
}`
  },
  {
    id: 'task-23',
    taskNum: 23,
    title: 'CI/CD Pipeline Outputs',
    type: 'terminal',
    filename: 'CICD',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/CICD',
    content: `Run GitHub Actions Workspace CI/CD check workflow
Run actions/checkout@v3
  with:
    persist-credentials: false
    clean: true
    fetch-depth: 1

Run flake8 linting check
  Running: flake8 server --count --select=E9,F63,F7,F82 --show-source --statistics
  0
  Status: GitHub Actions linter checks passed successfully.

Run pytest unit-tests module
  collected 12 items
  tests/test_models.py ............                                         [100%]
  ============================== 12 passed in 1.45s ==============================
  Status: All unit tests passed! Done.`
  },
  {
    id: 'task-24',
    taskNum: 24,
    title: 'Cloud Deployment Endpoint',
    type: 'text',
    filename: 'deploymentURL',
    githubUrl: 'https://github.com/capstone-developer/xrwvm-fullstack_developer_capstone/blob/main/Project-Deliverables/deploymentURL',
    content: `https://dealership-review-capstone-django.codeengine.appdomain.cloud/`
  }
];

export interface Dealership {
  id: number;
  city: string;
  state: string;
  address: string;
  zip: string;
  lat: number;
  short_name: string;
  full_name: string;
}

export const staticDealers: Dealership[] = [
  {
    id: 1,
    city: "El Paso",
    state: "Texas",
    address: "4020 Texas St",
    zip: "79901",
    lat: 31.7619,
    short_name: "EP Dealership",
    full_name: "El Paso Cars Center"
  },
  {
    id: 2,
    city: "San Francisco",
    state: "California",
    address: "500 California St",
    zip: "94104",
    lat: 37.7946,
    short_name: "SF Auto",
    full_name: "San Francisco Premium Motors"
  },
  {
    id: 15,
    city: "Topeka",
    state: "Kansas",
    address: "1200 Kansas Ave",
    zip: "66612",
    lat: 39.0473,
    short_name: "Topeka Motors",
    full_name: "Topeka Best Cars Dealership"
  },
  {
    id: 29,
    city: "Wichita",
    state: "Kansas",
    address: "1500 E Douglas Ave",
    zip: "67214",
    lat: 37.6865,
    short_name: "Wichita Cars",
    full_name: "Wichita Auto Outlet"
  },
  {
    id: 42,
    city: "Kansas City",
    state: "Kansas",
    address: "12 Maplewood Dr.",
    zip: "66101",
    lat: 39.1141,
    short_name: "Sunward Auto Sales",
    full_name: "Sunward Auto Sales Kansas City"
  },
  {
    id: 50,
    city: "Tampa",
    state: "Florida",
    address: "202 N Tampa St",
    zip: "33602",
    lat: 27.9475,
    short_name: "Tampa Auto Gallery",
    full_name: "Best Cars Tampa Luxury Center"
  },
  {
    id: 51,
    city: "Clearwater Beach",
    state: "Florida",
    address: "415 Gulfview Blvd",
    zip: "33767",
    lat: 27.9734,
    short_name: "Clearwater Beach Auto",
    full_name: "Clearwater Beach Premium Cars"
  },
  {
    id: 52,
    city: "St Pete Beach",
    state: "Florida",
    address: "3400 Gulf Blvd",
    zip: "33706",
    lat: 27.7253,
    short_name: "St Pete Beach Motors",
    full_name: "St Pete Beach Signature Auto"
  },
  {
    id: 53,
    city: "Orlando",
    state: "Florida",
    address: "8000 International Dr",
    zip: "32819",
    lat: 28.5383,
    short_name: "Orlando Auto Hub",
    full_name: "Orlando Best Cars Distributorship"
  },
  {
    id: 54,
    city: "West Palm Beach",
    state: "Florida",
    address: "2200 Okeechobee Blvd",
    zip: "33409",
    lat: 26.7153,
    short_name: "West Palm Motors",
    full_name: "West Palm Beach Signature Cars"
  },
  {
    id: 55,
    city: "Miami Beach",
    state: "Florida",
    address: "1500 Ocean Dr",
    zip: "33139",
    lat: 25.7907,
    short_name: "Miami Beach Exotic",
    full_name: "Miami Beach Elite Auto Center"
  },
  {
    id: 56,
    city: "Ft Lauderdale Beach",
    state: "Florida",
    address: "2400 E Las Olas Blvd",
    zip: "33301",
    lat: 26.1192,
    short_name: "Ft Lauderdale Beach Auto",
    full_name: "Ft Lauderdale Beach Motors Studio"
  },
  {
    id: 57,
    city: "Siesta Key Beach",
    state: "Florida",
    address: "948 Beach Rd",
    zip: "34242",
    lat: 27.2662,
    short_name: "Siesta Key Beach Cars",
    full_name: "Siesta Key Beach Coastal Elite Motors"
  },
  {
    id: 58,
    city: "Naples Beach",
    state: "Florida",
    address: "850 Gulf Shore Blvd N",
    zip: "34102",
    lat: 26.1420,
    short_name: "Naples Gulf Beach Auto",
    full_name: "Naples Beach Luxury Outlet"
  },
  {
    id: 60,
    city: "Houston",
    state: "Texas",
    address: "1500 Louisiana St",
    zip: "77002",
    lat: 29.7589,
    short_name: "Houston Gulf Motors",
    full_name: "Best Cars Houston Elite Center"
  },
  {
    id: 61,
    city: "Los Angeles",
    state: "California",
    address: "10250 Santa Monica Blvd",
    zip: "90067",
    lat: 34.0522,
    short_name: "LA Westside Cars",
    full_name: "LA Prestige Motorcars Studio"
  },
  {
    id: 62,
    city: "San Diego",
    state: "California",
    address: "450 B St",
    zip: "92101",
    lat: 32.7157,
    short_name: "SD Coastal Auto",
    full_name: "San Diego Signature Port"
  },
  {
    id: 63,
    city: "Silicon Valley",
    state: "California",
    address: "3000 Sand Hill Rd",
    zip: "94025",
    lat: 37.4419,
    short_name: "SV Tech Motors",
    full_name: "Silicon Valley Advanced Auto"
  },
  {
    id: 64,
    city: "Seattle",
    state: "Washington",
    address: "500 Pine St",
    zip: "98101",
    lat: 47.6062,
    short_name: "Seattle Emerald Auto",
    full_name: "Seattle Best Cars Gateway"
  },
  {
    id: 65,
    city: "New York",
    state: "New York",
    address: "10 Columbus Cir",
    zip: "10019",
    lat: 40.7128,
    short_name: "NYC Manhattan Auto",
    full_name: "New York City Flagship Center"
  },
  {
    id: 66,
    city: "Boston",
    state: "Massachusetts",
    address: "800 Boylston St",
    zip: "02199",
    lat: 42.3584,
    short_name: "Boston Back Bay Cars",
    full_name: "Boston Back Bay Luxury Auto"
  },
  {
    id: 67,
    city: "New Orleans",
    state: "Louisiana",
    address: "701 Poydras St",
    zip: "70139",
    lat: 29.9511,
    short_name: "NOLA Crescent Cars",
    full_name: "New Orleans Crescent City Motors"
  },
  {
    id: 68,
    city: "Dallas",
    state: "Texas",
    address: "1717 Leonard St",
    zip: "75201",
    lat: 32.7767,
    short_name: "Dallas Arts Motors",
    full_name: "Best Cars Dallas Metro Center"
  },
  {
    id: 69,
    city: "Austin",
    state: "Texas",
    address: "100 Congress Ave",
    zip: "78701",
    lat: 30.2672,
    short_name: "Austin Capitol Auto",
    full_name: "Austin Best Cars Tech Junction"
  },
  {
    id: 70,
    city: "Nashville",
    state: "Tennessee",
    address: "700 Broadway",
    zip: "37203",
    lat: 36.1627,
    short_name: "Nashville Music Motors",
    full_name: "Nashville Best Cars Music Square"
  }
];

export interface Review {
  id: number;
  name: string;
  dealership: number;
  review: string;
  time: string;
  purchase: boolean;
  purchase_date: string;
  car_make: string;
  car_model: string;
  car_year: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  stars: number;
  response?: string;
}

export const initialReviews: Review[] = [
  {
    id: 1,
    name: "Berkly Shepley",
    dealership: 15,
    review: "Total grid-enabled service-desk. The service was fast and the sales representatives were very knowledgeable.",
    time: "2026-05-28T22:30:15.000Z",
    purchase: true,
    purchase_date: "07/11/2020",
    car_make: "Audi",
    car_model: "A6",
    car_year: 2010,
    sentiment: "positive",
    stars: 5,
    response: "Thank you Berkly! We always strive to provide a top-tier service desk experience. Enjoy your Audi A6!"
  },
  {
    id: 2,
    name: "Gawain Dunnan",
    dealership: 15,
    review: "Decent collection and average customer care. Negotiations took slightly longer than expected.",
    time: "2026-05-28T20:15:30.000Z",
    purchase: false,
    purchase_date: "",
    car_make: "",
    car_model: "",
    car_year: 0,
    sentiment: "neutral",
    stars: 3,
    response: "We appreciate your feedback, Gawain. We are actively working on speeding up our financing negotiation timelines."
  },
  {
    id: 3,
    name: "Samantha Vance",
    dealership: 29,
    review: "The purchase experience was pleasant, but the wait to get papers cleared is slightly frustrating.",
    time: "2026-05-28T18:40:00.000Z",
    purchase: true,
    purchase_date: "12/04/2021",
    car_make: "Toyota",
    car_model: "Camry",
    car_year: 2021,
    sentiment: "positive",
    stars: 4,
    response: "Hi Samantha, thanks for the 4 stars. We are streamlining our post-sale documentation clearing to cut down on wait times!"
  },
  {
    id: 4,
    name: "Robert Miller",
    dealership: 1,
    review: "Very rude response on telephone. They did not have the listed Prius in inventory when I arrived.",
    time: "2026-05-27T10:20:00.000Z",
    purchase: false,
    purchase_date: "",
    car_make: "",
    car_model: "",
    car_year: 0,
    sentiment: "negative",
    stars: 1,
    response: "We are deeply sorry for the rude response, Robert. The Prius was sold right before you arrived but we should have notified you. We want to make it right."
  }
];

export interface Vehicle {
  id: number;
  dealershipId: number;
  make: string;
  model: string;
  year: number;
  miles: number;
  exteriorColor: string;
  interiorColor: string;
  doors: 2 | 4;
  type: string; // 'Sedan' | 'Coupe' | 'Convertible' | 'SUV' | 'Truck' | 'Minivan'
  price: number;
}

export const staticVehicles: Vehicle[] = [
  // 1. El Paso, TX (id: 1)
  { id: 101, dealershipId: 1, make: "Toyota", model: "Camry SE", year: 2021, miles: 32000, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "Sedan", price: 23500 },
  { id: 102, dealershipId: 1, make: "Ford", model: "F-150 XLT", year: 2019, miles: 58000, exteriorColor: "Red", interiorColor: "Gray", doors: 4, type: "Truck", price: 34000 },
  
  // 2. San Francisco, CA (id: 2)
  { id: 103, dealershipId: 2, make: "Tesla", model: "Model S", year: 2023, miles: 12000, exteriorColor: "White", interiorColor: "White", doors: 4, type: "Sedan", price: 79000 },
  { id: 104, dealershipId: 2, make: "BMW", model: "M4 Coupe", year: 2022, miles: 18000, exteriorColor: "Black", interiorColor: "Red", doors: 2, type: "Coupe", price: 68500 },

  // 15. Topeka, KS (id: 15)
  { id: 105, dealershipId: 15, make: "Audi", model: "A6 Sport", year: 2020, miles: 45000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "Sedan", price: 38000 },
  { id: 106, dealershipId: 15, make: "Honda", model: "Odyssey Elite", year: 2018, miles: 72000, exteriorColor: "Blue", interiorColor: "Beige", doors: 4, type: "Minivan", price: 26900 },

  // 29. Wichita, KS (id: 29)
  { id: 107, dealershipId: 29, make: "Toyota", model: "RAV4 Hybrid", year: 2022, miles: 15000, exteriorColor: "Blue", interiorColor: "Grey", doors: 4, type: "SUV", price: 32500 },
  { id: 108, dealershipId: 29, make: "Ford", model: "Mustang GT", year: 2015, miles: 85000, exteriorColor: "Orange", interiorColor: "Black", doors: 2, type: "Coupe", price: 22000 },

  // 42. Kansas City, KS (id: 42)
  { id: 109, dealershipId: 42, make: "Mercedes-Benz", model: "GLC 300", year: 2021, miles: 28000, exteriorColor: "Black", interiorColor: "Brown", doors: 4, type: "SUV", price: 44000 },

  // 50. Tampa, FL (id: 50)
  { id: 110, dealershipId: 50, make: "BMW", model: "430i Convertible", year: 2022, miles: 9500, exteriorColor: "White", interiorColor: "Tan", doors: 2, type: "Convertible", price: 49800 },
  { id: 111, dealershipId: 50, make: "Tesla", model: "Model Y Long Range", year: 2023, miles: 14000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "SUV", price: 47500 },

  // 51. Clearwater Beach, FL (id: 51)
  { id: 112, dealershipId: 51, make: "Ford", model: "Mustang EcoBoost", year: 2021, miles: 21000, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Convertible", price: 29500 },

  // 52. St Pete Beach, FL (id: 52)
  { id: 113, dealershipId: 52, make: "Jeep", model: "Wrangler Rubicon", year: 2020, miles: 39000, exteriorColor: "Green", interiorColor: "Black", doors: 2, type: "SUV", price: 38900 },

  // 53. Orlando, FL (id: 53)
  { id: 114, dealershipId: 53, make: "Toyota", model: "Sienna Platinum", year: 2021, miles: 41000, exteriorColor: "Silver", interiorColor: "Beige", doors: 4, type: "Minivan", price: 42000 },
  { id: 115, dealershipId: 53, make: "Honda", model: "Civic Type R", year: 2021, miles: 16000, exteriorColor: "Red", interiorColor: "Red", doors: 4, type: "Hatchback", price: 39500 },

  // 54. West Palm Beach, FL (id: 54)
  { id: 116, dealershipId: 54, make: "Mercedes-Benz", model: "E-Class Cabriolet", year: 2020, miles: 24000, exteriorColor: "Gray", interiorColor: "Red", doors: 2, type: "Convertible", price: 55000 },

  // 55. Miami Beach, FL (id: 55)
  { id: 117, dealershipId: 55, make: "Chevrolet", model: "Corvette Stingray", year: 2022, miles: 4500, exteriorColor: "Red", interiorColor: "Black", doors: 2, type: "Coupe", price: 76500 },
  { id: 118, dealershipId: 55, make: "Porsche", model: "911 Carrera", year: 2021, miles: 8200, exteriorColor: "Black", interiorColor: "Beige", doors: 2, type: "Coupe", price: 112000 },

  // 56. Ft Lauderdale Beach, FL (id: 56)
  { id: 119, dealershipId: 56, make: "BMW", model: "880i", year: 2022, miles: 11000, exteriorColor: "Blue", interiorColor: "White", doors: 2, type: "Convertible", price: 89000 },

  // 57. Siesta Key Beach, FL (id: 57)
  { id: 120, dealershipId: 57, make: "Toyota", model: "Highlander Limited", year: 2020, miles: 48000, exteriorColor: "Green", interiorColor: "Tan", doors: 4, type: "SUV", price: 35400 },

  // 58. Naples Beach, FL (id: 58)
  { id: 121, dealershipId: 58, make: "Lexus", model: "RX 350", year: 2021, miles: 22000, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "SUV", price: 46000 },

  // 60. Houston, TX (id: 60)
  { id: 122, dealershipId: 60, make: "Ram", model: "1500 Laramie", year: 2020, miles: 35000, exteriorColor: "Black", interiorColor: "Black", doors: 4, type: "Truck", price: 41500 },
  { id: 123, dealershipId: 60, make: "Toyota", model: "Tundra SR5", year: 2021, miles: 29000, exteriorColor: "White", interiorColor: "Gray", doors: 4, type: "Truck", price: 44000 },

  // 61. Los Angeles, CA (id: 61)
  { id: 124, dealershipId: 61, make: "Tesla", model: "Model X", year: 2022, miles: 19000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "SUV", price: 82500 },
  { id: 125, dealershipId: 61, make: "Mercedes-Benz", model: "AMG GT", year: 2021, miles: 7500, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Coupe", price: 95000 },

  // 62. San Diego, CA (id: 62)
  { id: 126, dealershipId: 62, make: "BMW", model: "Z4 Roadster", year: 2021, miles: 13000, exteriorColor: "Red", interiorColor: "White", doors: 2, type: "Convertible", price: 49500 },

  // 63. Silicon Valley, CA (id: 63)
  { id: 127, dealershipId: 63, make: "Tesla", model: "Model 3 Performance", year: 2023, miles: 5000, exteriorColor: "White", interiorColor: "Black", doors: 4, type: "Sedan", price: 45000 },
  { id: 128, dealershipId: 63, make: "Lucid", model: "Air Touring", year: 2022, miles: 8200, exteriorColor: "Silver", interiorColor: "Brown", doors: 4, type: "Sedan", price: 74900 },

  // 64. Seattle, WA (id: 64)
  { id: 129, dealershipId: 64, make: "Subaru", model: "Outback Onyx", year: 2022, miles: 16500, exteriorColor: "Green", interiorColor: "Gray", doors: 4, type: "SUV", price: 31900 },
  { id: 130, dealershipId: 64, make: "Honda", model: "Pilot Elite", year: 2020, miles: 43000, exteriorColor: "Steel Gray", interiorColor: "Black", doors: 4, type: "SUV", price: 33800 },

  // 65. New York, NY (id: 65)
  { id: 131, dealershipId: 65, make: "Audi", model: "e-tron GT", year: 2022, miles: 11000, exteriorColor: "Gray", interiorColor: "Black", doors: 4, type: "Sedan", price: 83000 },
  { id: 132, dealershipId: 65, make: "Volvo", model: "XC90 Recharge", year: 2021, miles: 33000, exteriorColor: "White", interiorColor: "Beige", doors: 4, type: "SUV", price: 54900 },

  // 66. Boston, MA (id: 66)
  { id: 133, dealershipId: 66, make: "Subaru", model: "Forester Limited", year: 2021, miles: 27000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "SUV", price: 28500 },

  // 67. New Orleans, LA (id: 67)
  { id: 134, dealershipId: 67, make: "Dodge", model: "Challenger Scat Pack", year: 2018, miles: 52000, exteriorColor: "Orange", interiorColor: "Black", doors: 2, type: "Coupe", price: 35900 },

  // 68. Dallas, TX (id: 68)
  { id: 135, dealershipId: 68, make: "Ford", model: "Explorer Timberline", year: 2022, miles: 19500, exteriorColor: "Carbon", interiorColor: "Green", doors: 4, type: "SUV", price: 41000 },
  { id: 136, dealershipId: 68, make: "Ford", model: "F-250 Super Duty", year: 2021, miles: 31000, exteriorColor: "Red", interiorColor: "Black", doors: 4, type: "Truck", price: 58500 },

  // 69. Austin, TX (id: 69)
  { id: 137, dealershipId: 69, make: "Tesla", model: "Cybertruck Foundation", year: 2024, miles: 1200, exteriorColor: "Cyber Silver", interiorColor: "Black", doors: 4, type: "Truck", price: 92000 },
  { id: 138, dealershipId: 69, make: "Honda", model: "Civic Hatchback", year: 2022, miles: 14500, exteriorColor: "Black", interiorColor: "Grey", doors: 4, type: "Hatchback", price: 24500 },

  // 70. Nashville, TN (id: 70)
  { id: 139, dealershipId: 70, make: "Chevrolet", model: "Tahoe RST", year: 2021, miles: 34000, exteriorColor: "Black", interiorColor: "Red", doors: 4, type: "SUV", price: 59900 },
  { id: 140, dealershipId: 70, make: "Ford", model: "F-150 Raptor", year: 2020, miles: 46000, exteriorColor: "Blue", interiorColor: "Black", doors: 4, type: "Truck", price: 61000 },

  // New Porsche Models
  { id: 141, dealershipId: 50, make: "Porsche", model: "Taycan 4S", year: 2023, miles: 4200, exteriorColor: "Silver", interiorColor: "Black", doors: 4, type: "Sedan", price: 104000 },
  { id: 142, dealershipId: 50, make: "Porsche", model: "Panamera GTS", year: 2022, miles: 12000, exteriorColor: "Black", interiorColor: "Red", doors: 4, type: "Sedan", price: 98000 },
  { id: 143, dealershipId: 55, make: "Porsche", model: "Macan S", year: 2021, miles: 18500, exteriorColor: "White", interiorColor: "Black", doors: 4, type: "SUV", price: 58900 },
  { id: 144, dealershipId: 55, make: "Porsche", model: "Cayenne Coupe", year: 2022, miles: 14000, exteriorColor: "Gray", interiorColor: "Tan", doors: 4, type: "SUV", price: 79500 },
  { id: 145, dealershipId: 50, make: "Porsche", model: "911 Carrera 4S", year: 2022, miles: 3100, exteriorColor: "Silver", interiorColor: "Black", doors: 2, type: "Coupe", price: 135000 },
  { id: 146, dealershipId: 52, make: "Porsche", model: "GT3 RS", year: 2023, miles: 980, exteriorColor: "Green", interiorColor: "Black", doors: 2, type: "Coupe", price: 279000 },
  { id: 147, dealershipId: 2, make: "Porsche", model: "718 Cayman S", year: 2021, miles: 11000, exteriorColor: "Yellow", interiorColor: "Black", doors: 2, type: "Coupe", price: 72000 },
  { id: 148, dealershipId: 2, make: "Porsche", model: "718 Boxster GTS", year: 2020, miles: 15500, exteriorColor: "Blue", interiorColor: "Grey", doors: 2, type: "Convertible", price: 68500 }
];
