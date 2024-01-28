https://articles.microservices.com/monolithic-vs-microservices-architecture-5c4848858f59

### there are two ways of implementing folders
(1) feature based
(2) component based

### feature based
<ins>Example</ins>
```
payment/
      payment status
      payment controller
      payment services

booking/
      booking status
      booking controller
      booking services
```

### component based
```
models/
      payment model.js
      booking.js

services/
      payment services.js
      booking services.js
```