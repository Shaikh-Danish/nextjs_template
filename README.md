# Next.js Template

🚀 A **Next.js** starter template with **Biome** for formatting and linting, **Jest** for testing, **Mongoose** for database management, **env-var** for centralized environment configuration, and **Husky** for pre-commit hooks. Uses **pnpm** for efficient package management.

## 📦 Features
- **Next.js 14** – The latest framework features.
- **Biome** – Fast and opinionated formatter and linter.
- **Jest** – Unit testing framework.
- **Mongoose** – ODM for MongoDB.
- **env-var** – Centralized and type-safe environment variable management.
- **Husky** – Pre-commit hooks for enforcing code quality.
- **pnpm** – Fast dependency management.

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **Node.js** (v18+ recommended)
- **pnpm** (package manager)

Install pnpm globally (if not already installed):
```sh
npm install -g pnpm
```

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/nextjs-template.git
cd nextjs-template
```

### 3️⃣ Install Dependencies
```sh
pnpm install
```

### 4️⃣ Set Up Environment Variables
Copy the `.env.example` file and rename it to `.env.local`:
```sh
cp .env.example .env.local
```
Then update the `.env.local` file with your values.

### 5️⃣ Run the Development Server
```sh
pnpm dev
```
The app will be available at **`http://localhost:3000`**.

---

## 🛠 Configuration & Setup

### **1️⃣ Biome – Linting & Formatting**
Biome is used for linting and formatting. Run:
```sh
pnpm format  # Format code
pnpm lint    # Lint code
```

To auto-fix lint issues:
```sh
pnpm lint --fix
```

### **2️⃣ Jest – Testing**
Run tests using:
```sh
pnpm test
```
For watching test changes:
```sh
pnpm test --watch
```

### **3️⃣ Mongoose – Database Setup**
Make sure your `.env.local` file contains:
```sh
MONGODB_URI=mongodb://localhost:27017/mydatabase
```
To connect to MongoDB, the `db.ts` file handles the connection:
```ts
import mongoose from 'mongoose';
import { config } from '@/config/env';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(config.MONGODB_URI);
};

export default connectDB;
```

### **4️⃣ Centralized Environment Management**
All environment variables are managed in `config/env.ts` using `env-var`:
```ts
import env from 'env-var';

export const config = {
  MONGODB_URI: env.get('MONGODB_URI').required().asString(),
  NODE_ENV: env.get('NODE_ENV').default('development').asString(),
};
```
Use it anywhere in the app:
```ts
import { config } from '@/config/env';
console.log('Database URL:', config.MONGODB_URI);
```

### **5️⃣ Husky – Pre-commit Hooks**
Husky is set up to enforce linting and formatting before commits.
To manually install Husky (if not set up):
```sh
pnpm dlx husky-init && pnpm install
```

To add a pre-commit hook for linting and tests:
```sh
pnpm husky add .husky/pre-commit "pnpm lint && pnpm test"
```

Now, before every commit, Husky will ensure that code is linted and tests pass.

---

## 📜 Scripts
| Command           | Description              |
|------------------|------------------------|
| `pnpm dev`       | Run the Next.js dev server |
| `pnpm build`     | Build for production    |
| `pnpm start`     | Start production server |
| `pnpm lint`      | Run Biome linter        |
| `pnpm format`    | Format code using Biome |
| `pnpm test`      | Run Jest tests          |

---

## 📄 License
This project is licensed under the MIT License.

