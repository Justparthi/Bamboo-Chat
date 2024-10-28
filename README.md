# Bamboo-Chat

Welcome to the **Bamboo-Chat** application, a real-time chat platform built with TypeScript, Next.js, and Supabase. This application allows multiple users to join chat rooms, exchange messages in real-time, and connect in a smooth and efficient chat environment.

## 🚀 Features

- **Real-Time Messaging**: Instant chat with users in the same room.
- **Multi-Room Support**: Users can join multiple chat rooms.
- **Authentication**: Secure user login and registration using Supabase.
- **User Profiles**: Profiles with basic information displayed in chat rooms.
- **Typing Indicators & Online Status**.

## 🛠 Tech Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Supabase for real-time database and authentication
- **Database**: PostgreSQL (managed by Supabase)
- **WebSockets**: Supabase real-time capabilities

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/Bamboo-Chat.git
   cd Bamboo-Chat
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env.local` file and add your Supabase keys and URL:
   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The application should now be running at `http://localhost:3000`.

## 🛠️ Project Structure

- `/pages` - Contains Next.js pages
- `/components` - Reusable components for chat and layout
- `/lib` - Supabase client setup and utility functions
- `/styles` - Styling for the application
- `/types` - TypeScript interfaces and types

## 🧩 Key Components

- **ChatRoom**: Manages the chat room interface and displays real-time messages.
- **MessageList**: Renders messages in the chat room.
- **UserAuth**: Handles user login and registration via Supabase.
- **UserProfile**: Displays the logged-in user's profile and other users' profiles in the room.

## Flow of Exection

- [x] Setup Next js
- [x] Setup Shadcn ui
- [ ] Loading...


## 📝 Usage

1. **Sign Up / Log In**: Create an account or log in with an existing account.
2. **Join a Chat Room**: Select or create a chat room to join.
3. **Start Chatting**: Send messages in real-time and interact with other users in the room.

## 🌐 Deployment

1. **Deploy on Vercel**: Next.js works seamlessly with Vercel. Push your repository to GitHub and import it into Vercel.
2. **Set Environment Variables**: Add your Supabase environment variables in Vercel’s dashboard.

## 📜 License

This project is licensed under the MIT License.

## 📞 Support

For any questions, please open an issue or contact us directly.
