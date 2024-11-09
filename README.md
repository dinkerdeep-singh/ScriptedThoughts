
# ScriptedThoughts

**ScriptedThoughts** is a blogging website where users can create, edit, and share their thoughts in the form of blog posts. Built with a modern tech stack, ScriptedThoughts is designed for simplicity, ease of use, and high performance.

## Features

-   **User Authentication**: Secure sign-in and sign-up functionality.
-   **Blog Creation**: Users can create new blog posts with a title and description.
-   **Edit and Update**: Easily update blog posts after creation.
-   **Responsive Design**: A seamless experience on both desktop and mobile devices.

## Tech Stack

-   **Frontend**: React with TypeScript, Tailwind CSS for styling
-   **Backend**: Node.js, Express, Prisma ORM for database interaction, Zod for data validation
-   **Database**: PostgreSQL
-   **Authentication**: JSON Web Tokens (JWT) for secure, token-based authentication

## Installation

1.  **Clone the repository**:
    `git clone https://github.com/your-username/ScriptedThoughts.git
    cd ScriptedThoughts` 
    
2.  **Install dependencies for both frontend and backend**:
    `cd client
    npm install
    cd ../server
    npm install` 
    
3.  **Set up environment variables**:
    
    Create a `.env` file in the `server` directory and include:
    
    `DATABASE_URL=your_postgres_database_url
    JWT_SECRET=your_jwt_secret` 
    
4.  **Run the database migrations**:
    
    `npx prisma migrate dev` 
    
5.  **Start the application**:
    
    -   Start the backend server:
        
        `cd server npm run dev` 
        
    -   Start the frontend:
        `cd client npm start` 
        
6.  **Access the application**:
    Visit `http://localhost:3000` to use the application.

## API Endpoints

-   **POST** `/api/v1/auth/signup` - Register a new user.
-   **POST** `/api/v1/auth/signin` - Log in a user and receive a token.
-   **POST** `/api/v1/blog/create` - Create a new blog post (requires token).
-   **PUT** `/api/v1/blog/update/:id` - Update an existing blog post (requires token).
-   **GET** `/api/v1/blog/:id` - Get a specific blog post by ID.

## Usage

1.  **Sign up** or **Sign in** to the platform.
2.  **Create a new blog post** by entering a title and description.
3.  Edit and update your posts as needed.
4.  View your blog posts on the home page.

## Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add YourFeature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

N/A.

## Contact

For any questions, please reach out to me at dinkerdeep@gmail.com.# ScriptedThoughts