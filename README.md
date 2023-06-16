# Movie Ticket Booking Portal Backend

This is the backend component of a movie ticket booking portal, which provides REST API endpoints for managing movie tickets. It is built using Node.js, Express, and PostgreSQL.

## Table of Contents

- [General Info](#general-info)
- [Functionality](#functionality)
- [Application Setup](#application-setup)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)

## General Info

The backend application provides the necessary functionality to manage movie tickets. It allows users to create, read, update, and delete tickets. The endpoints are protected by authentication using a Bearer token.

## Functionality

The ticket model includes the following properties:

- Creation date
- Customer name
- Movie title
- Movie time
- Ticket price
- IMDB ratings

The backend application provides the following functionality:

- Create a new ticket
- Retrieve all tickets
- Retrieve a single ticket by ID
- Update a ticket
- Delete a ticket
- Analytics:
  - Retrieve the profit summary by month
  - Retrieve the visit summary by month

## Application Setup

1. Clone the repository: git clone <https://github.com/ankit-kumar14/MovieTicketBooking.git>
2. Install the dependencies: `npm install` or `npm i`

3. Configure the database:
   - Install PostgreSQL (if not already installed) and set up a database.
   - Update the database connection details `.env` file`.
   - Set `DB_USER`, `DB_HOST`, `DB_PASSWORD`, `DB_PORT`and `DB_DATABASE_NAME`.

4. Set the token secret:
   - Update the `TOKEN_SECRET` value in `.env` file with name as `TOKEN_SECRET`.

5. Start the application: Using command in the root directory `node app.js`. The server will start running on `http://localhost:3000`if port number is not given.

## API Endpoints

- **POST /api/tickets**: Create a new ticket.
- **GET /api/tickets**: Retrieve all tickets.
- **GET /api/tickets/:id**: Retrieve a ticket by ID.
- **PUT /api/tickets/:id**: Update a ticket by ID.
- **DELETE /api/tickets/:id**: Delete a ticket by ID.
- **GET /api/analytics/profit**: Retrieve the profit summary by month.
- **GET /api/analytics/visits**: Retrieve the visit summary by month.

Make sure to include the bearer token in the Authorization header for authenticated requests.

## Testing

To run the tests, use the following command: `npx jest` inside tests folder.


The tests are written using Jest and Supertest.

## Contributing

Submissions are encouraged! Please start a discussion or send a pull request if you have any recommendations or enhancements.
